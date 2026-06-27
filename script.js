const root = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");
const themeToggleText = document.querySelector("#themeToggleText");
const mobileTheme = document.querySelector("#mobileTheme");
const searchInput = document.querySelector("#searchInput");
const searchStatus = document.querySelector("#searchStatus");
const noResults = document.querySelector("#noResults");
const topics = Array.from(document.querySelectorAll("[data-topic]"));
const progressBar = document.querySelector("#readingProgress");
const mobileTop = document.querySelector("#mobileTop");
const mobileSearch = document.querySelector("#mobileSearch");
const prevTopic = document.querySelector("#prevTopic");
const nextTopic = document.querySelector("#nextTopic");
const indexContainers = Array.from(document.querySelectorAll("[data-index-list]"));

let activeIndex = 0;
let matchedIndexes = topics.map((_, index) => index);

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("mdp-theme", theme);
  const label = theme === "dark" ? "Modo claro" : "Modo oscuro";
  if (themeToggleText) themeToggleText.textContent = label;
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

function topicLabel(topic, index) {
  return topic.querySelector("h2").textContent;
}

function renderIndexes() {
  indexContainers.forEach((container) => {
    container.innerHTML = "";
    topics.forEach((topic, index) => {
      const link = document.createElement("a");
      link.href = `#${topic.id}`;
      link.innerHTML = `<span class="topic-index__number">${index + 1}</span><span class="topic-index__text">${topicLabel(topic, index)}</span>`;
      link.dataset.topicLink = "";
      link.dataset.index = index;
      link.classList.toggle("is-active", index === activeIndex);
      link.classList.toggle("is-filtered-out", !matchedIndexes.includes(index));
      link.addEventListener("click", (event) => {
        event.preventDefault();
        activateTopic(index);
        const offcanvas = bootstrap.Offcanvas.getInstance(document.querySelector("#indexMenu"));
        if (offcanvas) offcanvas.hide();
      });
      container.appendChild(link);
    });
  });
}

function activateTopic(index, shouldScroll = true) {
  activeIndex = Math.max(0, Math.min(topics.length - 1, index));
  topics.forEach((topic, topicIndex) => {
    topic.classList.toggle("is-active", topicIndex === activeIndex);
  });
  renderIndexes();
  updateNavigationState();
  updateReadingProgress();
  if (shouldScroll) {
    document.querySelector(".content-column").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function updateNavigationState() {
  prevTopic.disabled = activeIndex === 0;
  nextTopic.disabled = activeIndex === topics.length - 1;
  prevTopic.textContent = activeIndex === 0 ? "Primer tema" : "Tema anterior";
  nextTopic.textContent = activeIndex === topics.length - 1 ? "Ultimo tema" : "Tema siguiente";
}

function filterTopics() {
  const query = normalizeText(searchInput.value.trim());

  matchedIndexes = topics
    .map((topic, index) => {
      const haystack = normalizeText(`${topic.dataset.title} ${topic.textContent}`);
      return !query || haystack.includes(query) ? index : -1;
    })
    .filter((index) => index !== -1);

  noResults.classList.toggle("d-none", matchedIndexes.length !== 0);

  if (!query) {
    searchStatus.textContent = "Escribi una palabra para encontrar un modulo.";
  } else {
    searchStatus.textContent = `${matchedIndexes.length} modulo${matchedIndexes.length === 1 ? "" : "s"} encontrado${matchedIndexes.length === 1 ? "" : "s"}.`;
  }

  if (matchedIndexes.length && query) {
    activateTopic(matchedIndexes[0]);
  } else {
    renderIndexes();
  }
}

function updateReadingProgress() {
  const activeTopic = topics[activeIndex];
  if (!activeTopic) return;
  const rect = activeTopic.getBoundingClientRect();
  const total = Math.max(activeTopic.offsetHeight - window.innerHeight * 0.55, 1);
  const read = Math.min(Math.max(-rect.top + 100, 0), total);
  progressBar.style.width = `${(read / total) * 100}%`;
}

function goToTopic(direction) {
  activateTopic(activeIndex + direction);
}

function scrollTopSmooth() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

themeToggle?.addEventListener("click", toggleTheme);
mobileTheme.addEventListener("click", toggleTheme);
searchInput.addEventListener("input", filterTopics);
window.addEventListener("scroll", updateReadingProgress, { passive: true });
mobileTop.addEventListener("click", scrollTopSmooth);
mobileSearch.addEventListener("click", () => {
  document.querySelector("#searchPanel").scrollIntoView({ behavior: "smooth", block: "center" });
  searchInput.focus();
});
prevTopic.addEventListener("click", () => goToTopic(-1));
nextTopic.addEventListener("click", () => goToTopic(1));

applyTheme(root.getAttribute("data-theme") || "dark");
activateTopic(0, false);
filterTopics();
