const root = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");
const themeToggleText = document.querySelector("#themeToggleText");
const mobileTheme = document.querySelector("#mobileTheme");
const mobileThemeText = document.querySelector("#mobileThemeText");
const searchInput = document.querySelector("#searchInput");
const searchStatus = document.querySelector("#searchStatus");
const searchPanel = document.querySelector("#searchPanel");
const searchPrev = document.querySelector("#searchPrev");
const searchNext = document.querySelector("#searchNext");
const closeSearch = document.querySelector("#closeSearch");
const noResults = document.querySelector("#noResults");
const contentColumn = document.querySelector(".content-column");

function renderStudyModulesFromData() {
  const modules = window.MDP_STUDY_MODULES || [];
  if (!modules.length || !contentColumn) return;

  contentColumn.querySelectorAll("[data-topic]").forEach((topic) => topic.remove());
  const navigation = contentColumn.querySelector(".topic-navigation");
  const renderList = (items) => items?.length ? `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";
  const renderOptionalBlock = (title, body) => body ? `<h3>${title}</h3><p>${body}</p>` : "";
  const modulesMarkup = modules.map((module, index) => `
    <section class="study-card" id="tema-${index + 1}" data-topic data-title="${module.keywords}">
      <div class="study-card__header">
        <span class="topic-number">Tema ${index + 1}</span>
        <h2>${module.title}</h2>
      </div>
      ${renderOptionalBlock("¿Qué es?", module.what || module.intro)}
      ${renderOptionalBlock("¿Por qué existe?", module.why)}
      <h3>Conceptos clave</h3>
      ${module.grid ? `<div class="keyword-grid">${module.grid.map((item) => `<span>${item}</span>`).join("")}</div>` : ""}
      ${renderList(module.concepts)}
      ${renderOptionalBlock("Ejemplo cotidiano", module.everyday)}
      ${renderOptionalBlock("Ejemplo de software", module.software || module.example)}
      ${module.professor?.length ? `<h3>Lo que suele tomar el profesor</h3>${renderList(module.professor)}` : ""}
      ${renderOptionalBlock("Error típico", module.mistake)}
      <div class="summary-box"><strong>Resumen final:</strong> ${module.summary}</div>
    </section>
  `).join("");

  navigation.insertAdjacentHTML("beforebegin", modulesMarkup);
}

renderStudyModulesFromData();
const topics = Array.from(document.querySelectorAll("[data-topic]"));
const progressBar = document.querySelector("#readingProgress");
const mobileTop = document.querySelector("#mobileTop");
const mobileSearch = document.querySelector("#mobileSearch");
const desktopSearch = document.querySelector("#desktopSearch");
const prevTopic = document.querySelector("#prevTopic");
const nextTopic = document.querySelector("#nextTopic");
const indexContainers = Array.from(document.querySelectorAll("[data-index-list]"));
const moduleStatusTitle = document.querySelector("#moduleStatusTitle");
const moduleStatusCount = document.querySelector("#moduleStatusCount");
const resourcesPanel = document.querySelector("#resourcesPanel");
const resourceViewer = document.querySelector("#resourceViewer");
const resourceViewerLabel = document.querySelector("#resourceViewerLabel");
const resourceViewerBody = document.querySelector("#resourceViewerBody");
const resourceOpenNew = document.querySelector("#resourceOpenNew");
const resourceModal = new bootstrap.Modal(resourceViewer);

let activeIndex = 0;
let matchedIndexes = topics.map((_, index) => index);
let searchMatches = [];
let currentSearchMatch = -1;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("mdp-theme", theme);
  const label = theme === "dark" ? "Modo claro" : "Modo oscuro";
  if (themeToggleText) themeToggleText.textContent = label;
  mobileThemeText.textContent = theme === "dark" ? "Claro" : "Oscuro";
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
  const activeTitle = topics[activeIndex].querySelector("h2").textContent;
  moduleStatusTitle.textContent = activeTitle;
  moduleStatusCount.textContent = `${activeIndex + 1} / ${topics.length}`;
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
  nextTopic.textContent = activeIndex === topics.length - 1 ? "Último tema" : "Tema siguiente";
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
    searchStatus.textContent = "";
  } else {
    searchStatus.textContent = `${matchedIndexes.length} módulo${matchedIndexes.length === 1 ? "" : "s"} encontrado${matchedIndexes.length === 1 ? "" : "s"}.`;
  }

  if (matchedIndexes.length && query) {
    activateTopic(matchedIndexes[0]);
  } else {
    renderIndexes();
  }
}

function openSearch() {
  searchPanel.hidden = false;
  window.setTimeout(() => searchInput.focus(), 0);
}

function closeSearchPanel() {
  searchPanel.hidden = true;
  searchInput.value = "";
  filterTopics();
}

function clearSearchHighlights() {
  topics.forEach((topic) => {
    topic.querySelectorAll("mark[data-search-match]").forEach((mark) => {
      mark.replaceWith(document.createTextNode(mark.textContent));
    });
    topic.normalize();
  });
}

function getSearchRanges(text, query) {
  const normalizedQuery = normalizeText(query);
  const normalized = [];
  const originalIndexes = [];

  Array.from(text).forEach((character, index) => {
    Array.from(normalizeText(character)).forEach((part) => {
      normalized.push(part);
      originalIndexes.push(index);
    });
  });

  const haystack = normalized.join("");
  const ranges = [];
  let position = haystack.indexOf(normalizedQuery);

  while (position !== -1) {
    const start = originalIndexes[position];
    const end = originalIndexes[position + normalizedQuery.length - 1] + 1;
    ranges.push([start, end]);
    position = haystack.indexOf(normalizedQuery, position + normalizedQuery.length);
  }

  return ranges;
}

function highlightTextNode(node, query) {
  const text = node.nodeValue;
  const ranges = getSearchRanges(text, query);
  if (!ranges.length) return;

  const fragment = document.createDocumentFragment();
  let cursor = 0;

  ranges.forEach(([start, end]) => {
    if (start > cursor) {
      fragment.appendChild(document.createTextNode(text.slice(cursor, start)));
    }

    const mark = document.createElement("mark");
    mark.dataset.searchMatch = "";
    mark.textContent = text.slice(start, end);
    fragment.appendChild(mark);
    cursor = end;
  });

  if (cursor < text.length) {
    fragment.appendChild(document.createTextNode(text.slice(cursor)));
  }

  node.replaceWith(fragment);
}

function highlightSearch(query) {
  topics.forEach((topic) => {
    const walker = document.createTreeWalker(topic, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (!normalizeText(node.nodeValue).includes(normalizeText(query))) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const textNodes = [];

    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    textNodes.forEach((node) => highlightTextNode(node, query));
  });

  searchMatches = Array.from(document.querySelectorAll("mark[data-search-match]"));
  matchedIndexes = [...new Set(searchMatches.map((match) => topics.indexOf(match.closest("[data-topic]"))))];
}

function updateSearchStatus() {
  const query = searchInput.value.trim();

  if (!query) {
    searchStatus.textContent = "";
  } else if (!searchMatches.length) {
    searchStatus.textContent = "Sin resultados.";
  } else {
    searchStatus.textContent = `${currentSearchMatch + 1} / ${searchMatches.length} coincidencia${searchMatches.length === 1 ? "" : "s"}.`;
  }

  searchPrev.disabled = searchMatches.length < 2;
  searchNext.disabled = searchMatches.length < 2;
}

function focusSearchMatch(index) {
  if (!searchMatches.length) {
    currentSearchMatch = -1;
    updateSearchStatus();
    return;
  }

  currentSearchMatch = (index + searchMatches.length) % searchMatches.length;
  searchMatches.forEach((match, matchIndex) => {
    match.classList.toggle("is-current-match", matchIndex === currentSearchMatch);
  });

  const topic = searchMatches[currentSearchMatch].closest("[data-topic]");
  const topicIndex = topics.indexOf(topic);
  if (topicIndex !== -1 && topicIndex !== activeIndex) {
    activateTopic(topicIndex, false);
  }

  searchMatches[currentSearchMatch].scrollIntoView({ behavior: "smooth", block: "center" });
  updateSearchStatus();
}

function moveSearchMatch(direction) {
  focusSearchMatch(currentSearchMatch + direction);
}

function filterTopics() {
  const query = searchInput.value.trim();

  clearSearchHighlights();
  searchMatches = [];
  currentSearchMatch = -1;

  if (!query) {
    matchedIndexes = topics.map((_, index) => index);
    noResults.classList.add("d-none");
    renderIndexes();
    updateSearchStatus();
    return;
  }

  highlightSearch(query);
  noResults.classList.toggle("d-none", searchMatches.length !== 0);
  renderIndexes();

  if (searchMatches.length) {
    focusSearchMatch(0);
  } else {
    updateSearchStatus();
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

function encodePath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

function renderResources() {
  const groups = window.MDP_RESOURCES?.groups || [];
  if (!groups.length) {
    resourcesPanel.innerHTML = '<p class="index-help mb-0">No hay documentos cargados todavía.</p>';
    return;
  }

  resourcesPanel.innerHTML = groups.map((group) => {
    const items = group.items.length ? group.items.map((item) => `
      <button class="resource-item" type="button" data-resource-path="${encodePath(item.path)}" data-resource-title="${item.title}" data-resource-type="${item.type}">
        ${item.title}
      </button>
    `).join("") : '<p class="resource-empty mb-0">Todavía no hay archivos en esta carpeta.</p>';

    return `
      <section class="resource-group">
        <button class="resource-toggle" type="button" aria-expanded="false" data-resource-toggle>
          <span class="resource-toggle__label"><i class="bi ${group.icon}" aria-hidden="true"></i>${group.title}</span>
          <span class="resource-toggle__meta"><span class="resource-toggle__count">${group.items.length}</span><i class="bi bi-chevron-down" aria-hidden="true"></i></span>
        </button>
        <div class="resource-list" hidden>${items}</div>
      </section>
    `;
  }).join("");

  resourcesPanel.querySelectorAll("[data-resource-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const group = toggle.closest(".resource-group");
      const list = group.querySelector(".resource-list");
      const shouldOpen = !group.classList.contains("is-open");

      resourcesPanel.querySelectorAll(".resource-group").forEach((otherGroup) => {
        otherGroup.classList.remove("is-open");
        otherGroup.querySelector(".resource-list").hidden = true;
        otherGroup.querySelector("[data-resource-toggle]").setAttribute("aria-expanded", "false");
      });

      if (shouldOpen) {
        group.classList.add("is-open");
        list.hidden = false;
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });

  resourcesPanel.querySelectorAll(".resource-item").forEach((item) => {
    item.addEventListener("click", () => {
      openResource(item.dataset.resourceTitle, item.dataset.resourcePath, item.dataset.resourceType);
    });
  });
}

function openResource(title, path, type) {
  resourceViewerLabel.textContent = title;
  resourceOpenNew.href = path;

  if (type === "pdf") {
    resourceViewerBody.innerHTML = `<iframe class="resource-frame" src="${path}" title="${title}"></iframe>`;
    resourceModal.show();
    return;
  }

  if (type === "image") {
    resourceViewerBody.innerHTML = `<div class="resource-image-wrap"><img src="${path}" alt="${title}"></div>`;
    resourceModal.show();
    return;
  }

  if (type === "video") {
    resourceViewerBody.innerHTML = `<video class="resource-video" src="${path}" controls></video>`;
    resourceModal.show();
    return;
  }

  resourceViewerBody.innerHTML = `
    <div class="resource-fallback">
      <p>Este tipo de archivo se abre mejor fuera del navegador.</p>
      <a class="btn btn-accent" href="${path}" target="_blank" rel="noopener">Abrir documento</a>
    </div>
  `;
  resourceModal.show();
}

themeToggle?.addEventListener("click", toggleTheme);
mobileTheme.addEventListener("click", toggleTheme);
searchInput.addEventListener("input", filterTopics);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    moveSearchMatch(event.shiftKey ? -1 : 1);
  }
});
searchPrev.addEventListener("click", () => moveSearchMatch(-1));
searchNext.addEventListener("click", () => moveSearchMatch(1));
window.addEventListener("scroll", updateReadingProgress, { passive: true });
mobileTop.addEventListener("click", scrollTopSmooth);
mobileSearch.addEventListener("click", () => {
  openSearch();
});
desktopSearch?.addEventListener("click", openSearch);
closeSearch.addEventListener("click", closeSearchPanel);
document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openSearch();
  }
  if (event.key === "Escape" && !searchPanel.hidden) {
    closeSearchPanel();
  }
});
prevTopic.addEventListener("click", () => goToTopic(-1));
nextTopic.addEventListener("click", () => goToTopic(1));

applyTheme(root.getAttribute("data-theme") || "dark");
activateTopic(0, false);
filterTopics();
renderResources();
