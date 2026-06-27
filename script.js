const root = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");
const themeToggleText = document.querySelector("#themeToggleText");
const mobileTheme = document.querySelector("#mobileTheme");
const searchInput = document.querySelector("#searchInput");
const searchStatus = document.querySelector("#searchStatus");
const noResults = document.querySelector("#noResults");
const topics = Array.from(document.querySelectorAll("[data-topic]"));
const progressBar = document.querySelector("#readingProgress");
const backToTop = document.querySelector("#backToTop");
const mobileTop = document.querySelector("#mobileTop");
const mobileSearch = document.querySelector("#mobileSearch");
const prevTopic = document.querySelector("#prevTopic");
const nextTopic = document.querySelector("#nextTopic");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("mdp-theme", theme);
  const label = theme === "dark" ? "Modo claro" : "Modo oscuro";
  themeToggleText.textContent = label;
  mobileTheme.textContent = theme === "dark" ? "Claro" : "Oscuro";
}

function toggleTheme() {
  const current = root.getAttribute("data-theme") || "dark";
  applyTheme(current === "dark" ? "light" : "dark");
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function clearMarks(element) {
  element.querySelectorAll("mark").forEach((mark) => {
    mark.replaceWith(document.createTextNode(mark.textContent));
  });
}

function highlightText(element, query) {
  if (!query) return;
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest("mark")) return NodeFilter.FILTER_REJECT;
      return normalizeText(node.nodeValue).includes(query)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const original = node.nodeValue;
    const normalized = normalizeText(original);
    const index = normalized.indexOf(query);
    if (index < 0) return;

    const before = original.slice(0, index);
    const match = original.slice(index, index + query.length);
    const after = original.slice(index + query.length);
    const fragment = document.createDocumentFragment();
    fragment.append(document.createTextNode(before));
    const mark = document.createElement("mark");
    mark.textContent = match;
    fragment.append(mark, document.createTextNode(after));
    node.replaceWith(fragment);
  });
}

function filterTopics() {
  const query = normalizeText(searchInput.value.trim());
  let matches = 0;

  topics.forEach((topic) => {
    clearMarks(topic);
    const content = normalizeText(topic.textContent);
    const isMatch = !query || content.includes(query);
    topic.classList.toggle("is-hidden", !isMatch);
    topic.classList.toggle("is-match", Boolean(query && isMatch));
    if (isMatch) {
      matches += 1;
      highlightText(topic, query);
    }
  });

  noResults.classList.toggle("d-none", matches !== 0);
  searchStatus.textContent = query
    ? `${matches} tema${matches === 1 ? "" : "s"} encontrado${matches === 1 ? "" : "s"}.`
    : "Escribi una palabra para filtrar temas.";
}

function updateReadingProgress() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  progressBar.style.width = `${Math.min(progress, 100)}%`;
  backToTop.classList.toggle("is-visible", scrollTop > 420);
}

function visibleTopics() {
  return topics.filter((topic) => !topic.classList.contains("is-hidden"));
}

function currentTopicIndex(list) {
  const threshold = window.scrollY + 160;
  let index = 0;
  list.forEach((topic, topicIndex) => {
    if (topic.offsetTop <= threshold) index = topicIndex;
  });
  return index;
}

function goToTopic(direction) {
  const list = visibleTopics();
  if (!list.length) return;
  const current = currentTopicIndex(list);
  const next = Math.max(0, Math.min(list.length - 1, current + direction));
  list[next].scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollTopSmooth() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-topic-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const offcanvas = bootstrap.Offcanvas.getInstance(document.querySelector("#indexMenu"));
    if (offcanvas) offcanvas.hide();
  });
});

themeToggle.addEventListener("click", toggleTheme);
mobileTheme.addEventListener("click", toggleTheme);
searchInput.addEventListener("input", filterTopics);
window.addEventListener("scroll", updateReadingProgress, { passive: true });
backToTop.addEventListener("click", scrollTopSmooth);
mobileTop.addEventListener("click", scrollTopSmooth);
mobileSearch.addEventListener("click", () => {
  document.querySelector("#searchPanel").scrollIntoView({ behavior: "smooth", block: "center" });
  searchInput.focus();
});
prevTopic.addEventListener("click", () => goToTopic(-1));
nextTopic.addEventListener("click", () => goToTopic(1));

applyTheme(root.getAttribute("data-theme") || "dark");
filterTopics();
updateReadingProgress();
