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

  const relatedByTitle = {
    "Validación, Verificación y Testing": ["Modelo V", "Testing Agile"],
    "Calidad de Software": ["QA, QC, QM", "ISO 25010"],
    "QA, QC, QM y Testing": ["Calidad", "Testing Agile"],
    "Testing vs Debugging": ["Errores y Defectos", "Implementación"],
    "Riesgos en Testing": ["Plan de Pruebas", "Proceso de Pruebas"],
    "Principios del Testing": ["Riesgos", "Proceso de Pruebas"],
    "Desarrollo de Software y SDLC": ["Modelo V", "Proceso de Pruebas"],
    "Modelo V y Modelo W": ["Validación", "Testing Agile"],
    "Agile, Scrum y Kanban": ["Historias", "Testing Agile"],
    "Historias de Usuario": ["Criterios", "Análisis"],
    "Criterios de Aceptación": ["Casos de Prueba", "Historias"],
    "Buenas Historias: 3C e INVEST": ["Historias", "Criterios"],
    "ISO 25010": ["Calidad", "Plan de Pruebas"],
    "Testing Agile": ["Agile", "Historias"],
    "Proceso de Pruebas": ["Plan de Pruebas", "Casos de Prueba"],
    "Análisis, Diseño y Dependencias": ["Casos de Prueba", "Proceso"],
    "Plan de Pruebas": ["Riesgos", "Proceso"],
    "Casos de Prueba": ["Criterios", "Escenarios"],
    "Implementación, Ejecución y Reporte": ["Debugging", "Regression"],
    "Escenarios para Examen": ["Casos de Prueba", "Resumen"],
    "Resumen General": ["Mapa del Flujo QA", "Diccionario QA"]
  };
  const quizByTitle = {
    "Validación, Verificación y Testing": { question: "Validación responde principalmente a...", options: ["La necesidad del usuario", "El código fuente", "El servidor"], answer: 0 },
    "Calidad de Software": { question: "Calidad se relaciona principalmente con...", options: ["Cumplir requisitos y expectativas", "Solo tener pantallas", "Solo publicar rápido"], answer: 0 },
    "QA, QC, QM y Testing": { question: "QA se enfoca sobre todo en...", options: ["Prevenir problemas", "Corregir código", "Publicar versiones"], answer: 0 },
    "Testing vs Debugging": { question: "Debugging consiste en...", options: ["Encontrar y corregir la causa", "Diseñar el logo", "Definir el backlog"], answer: 0 },
    "Riesgos en Testing": { question: "Un riesgo se analiza por...", options: ["Color y tamaño", "Probabilidad e impacto", "Sprint y release"], answer: 1 },
    "Principios del Testing": { question: "Las pruebas exhaustivas son...", options: ["Imposibles", "Obligatorias siempre", "Solo visuales"], answer: 0 },
    "Desarrollo de Software y SDLC": { question: "SDLC cubre...", options: ["Solo programación", "Todo el ciclo de vida", "Solo testing"], answer: 1 },
    "Modelo V y Modelo W": { question: "El Modelo W refuerza...", options: ["Testing temprano", "Testing solo al final", "No documentar"], answer: 0 },
    "Agile, Scrum y Kanban": { question: "Agile es...", options: ["Una filosofía", "Un bug", "Un caso de prueba"], answer: 0 },
    "Historias de Usuario": { question: "Una historia debe expresar...", options: ["Perfil, necesidad y valor", "Solo pasos", "Solo ambiente"], answer: 0 },
    "Criterios de Aceptación": { question: "Given/When/Then describe...", options: ["Comportamiento esperado", "Equipo de desarrollo", "Diseño visual"], answer: 0 },
    "Buenas Historias: 3C e INVEST": { question: "La T de INVEST significa...", options: ["Testeable", "Temporal", "Técnica"], answer: 0 },
    "ISO 25010": { question: "ISO 25010 ayuda a evaluar...", options: ["Calidad del producto", "Solo sprint", "Solo bugs"], answer: 0 },
    "Testing Agile": { question: "Testing Agile busca...", options: ["Participar temprano", "Esperar el final", "Evitar criterios"], answer: 0 },
    "Proceso de Pruebas": { question: "El proceso termina comunicando...", options: ["Reporte y resultados", "Solo ideas", "Solo diseño"], answer: 0 },
    "Análisis, Diseño y Dependencias": { question: "Un escenario dice...", options: ["Qué probar", "Cómo compilar", "Dónde cobrar"], answer: 0 },
    "Plan de Pruebas": { question: "SPACE DIRT sirve para recordar...", options: ["Contenido del plan", "Principios Agile", "Tipos de bug"], answer: 0 },
    "Casos de Prueba": { question: "Un caso de prueba dice...", options: ["Cómo probar", "Qué filosofía usar", "Qué release vender"], answer: 0 },
    "Implementación, Ejecución y Reporte": { question: "La ejecución produce...", options: ["Resultados y evidencias", "Solo historias", "Solo backlog"], answer: 0 },
    "Escenarios para Examen": { question: "Si piden escenarios, conviene escribir...", options: ["Situaciones claras", "Pasos completos siempre", "Código"], answer: 0 },
    "Resumen General": { question: "Para rendir bien hay que...", options: ["Explicar y aplicar", "Memorizar sin entender", "Evitar ejemplos"], answer: 0 },
    "Diccionario QA": { question: "Regression testing verifica que...", options: ["Lo anterior no se rompió", "El diseño sea bonito", "No existan usuarios"], answer: 0 },
    "Mapa del Flujo QA": { question: "Después de criterios suelen venir...", options: ["Análisis y escenarios", "Release directo", "Debugging sin probar"], answer: 0 },
    "Errores y Defectos": { question: "Failure es...", options: ["Falla observable", "Plan de sprint", "Ambiente"], answer: 0 }
  };
  const infographicByTitle = {
    "Validación, Verificación y Testing": "infografias/01_VV_Testing_Calidad.png",
    "Calidad de Software": "infografias/01_VV_Testing_Calidad.png",
    "QA, QC, QM y Testing": "infografias/01_VV_Testing_Calidad.png",
    "Principios del Testing": "infografias/02_Principios_Testing.png",
    "Riesgos en Testing": "infografias/02_Principios_Testing.png",
    "Desarrollo de Software y SDLC": "infografias/03_Desarrollo_Agile.png",
    "Modelo V y Modelo W": "infografias/03_Desarrollo_Agile.png",
    "Agile, Scrum y Kanban": "infografias/03_Desarrollo_Agile.png",
    "Historias de Usuario": "infografias/04_Historias_Usuario.png",
    "Criterios de Aceptación": "infografias/04_Historias_Usuario.png",
    "Buenas Historias: 3C e INVEST": "infografias/04_Historias_Usuario.png",
    "ISO 25010": "infografias/05_ISO_25010.png",
    "Testing Agile": "infografias/06_Testing_Agile.png",
    "Proceso de Pruebas": "infografias/07_Proceso_Pruebas.png",
    "Análisis, Diseño y Dependencias": "infografias/09_Casos_Prueba.png",
    "Plan de Pruebas": "infografias/08_Plan_Pruebas_SPACE_DIRT.png",
    "Casos de Prueba": "infografias/09_Casos_Prueba.png",
    "Implementación, Ejecución y Reporte": "infografias/07_Proceso_Pruebas.png",
    "Testing vs Debugging": "infografias/10_Resumen_General.png",
    "Errores y Defectos": "infografias/10_Resumen_General.png",
    "Escenarios para Examen": "infografias/10_Resumen_General.png",
    "Mapa del Flujo QA": "infografias/10_Resumen_General.png",
    "Diccionario QA": "infografias/10_Resumen_General.png",
    "Resumen General": "infografias/10_Resumen_General.png"
  };
  const desiredOrder = [
    "Validación, Verificación y Testing",
    "Calidad de Software",
    "QA, QC, QM y Testing",
    "Principios del Testing",
    "Riesgos en Testing",
    "Desarrollo de Software y SDLC",
    "Modelo V y Modelo W",
    "Agile, Scrum y Kanban",
    "Historias de Usuario",
    "Criterios de Aceptación",
    "Buenas Historias: 3C e INVEST",
    "ISO 25010",
    "Testing Agile",
    "Proceso de Pruebas",
    "Análisis, Diseño y Dependencias",
    "Plan de Pruebas",
    "Casos de Prueba",
    "Implementación, Ejecución y Reporte",
    "Testing vs Debugging",
    "Errores y Defectos",
    "Escenarios para Examen",
    "Mapa del Flujo QA",
    "Diccionario QA",
    "Resumen General"
  ];
  const groupByTitle = {
    "Validación, Verificación y Testing": "Fundamentos",
    "Calidad de Software": "Fundamentos",
    "QA, QC, QM y Testing": "Fundamentos",
    "Principios del Testing": "Fundamentos",
    "Riesgos en Testing": "Fundamentos",
    "Desarrollo de Software y SDLC": "Ciclo de desarrollo",
    "Modelo V y Modelo W": "Ciclo de desarrollo",
    "Agile, Scrum y Kanban": "Agile",
    "Historias de Usuario": "Agile",
    "Criterios de Aceptación": "Agile",
    "Buenas Historias: 3C e INVEST": "Agile",
    "ISO 25010": "Calidad",
    "Testing Agile": "Calidad",
    "Proceso de Pruebas": "Proceso QA",
    "Análisis, Diseño y Dependencias": "Proceso QA",
    "Plan de Pruebas": "Proceso QA",
    "Casos de Prueba": "Proceso QA",
    "Implementación, Ejecución y Reporte": "Proceso QA",
    "Testing vs Debugging": "Defectos",
    "Errores y Defectos": "Defectos",
    "Escenarios para Examen": "Preparación",
    "Mapa del Flujo QA": "Preparación",
    "Diccionario QA": "Preparación",
    "Resumen General": "Preparación"
  };

  modules.sort((first, second) => {
    const firstIndex = desiredOrder.indexOf(first.title);
    const secondIndex = desiredOrder.indexOf(second.title);
    return (firstIndex === -1 ? 999 : firstIndex) - (secondIndex === -1 ? 999 : secondIndex);
  });

  modules.forEach((module) => {
    module.related ||= relatedByTitle[module.title] || [];
    module.quiz ||= quizByTitle[module.title];
    module.time ||= module.concepts?.length > 7 ? "5 min" : "4 min";
    module.level ||= module.concepts?.length > 7 ? "★★★☆☆" : "★★☆☆☆";
    module.compact ||= module.concepts?.length > 7 || module.grid?.length > 6;
    module.group ||= groupByTitle[module.title] || "General";
    module.id ||= normalizeText(module.title).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    module.infographic ||= infographicByTitle[module.title];
  });

  contentColumn.querySelectorAll("[data-topic]").forEach((topic) => topic.remove());
  contentColumn.querySelector(".learning-dashboard")?.remove();
  const navigation = contentColumn.querySelector(".topic-navigation");
  const renderList = (items) => items?.length ? `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";
  const renderHeading = (icon, title) => `<h3><i class="bi ${icon}" aria-hidden="true"></i>${title}</h3>`;
  const renderOptionalBlock = (icon, title, body) => body ? `${renderHeading(icon, title)}<p>${body}</p>` : "";
  const renderConcepts = (module) => {
    if (!module.concepts?.length) return "";
    if (!module.compact) return renderList(module.concepts);

    return `
      <div class="concept-accordion">
        ${module.concepts.map((item, conceptIndex) => `
          <details>
            <summary>Concepto ${conceptIndex + 1}</summary>
            <p>${item}</p>
          </details>
        `).join("")}
      </div>
    `;
  };
  const renderRelations = (module) => module.related?.length ? `
    <div class="module-relations">
      <strong>Antes de seguir, se relaciona con:</strong>
      <div>${module.related.map((item) => `<button type="button" data-related-topic="${item}">${item}</button>`).join("")}</div>
    </div>
  ` : "";
  const renderInfographicReview = (module) => module.infographic ? `
    <div class="module-infographic">
      <strong>Repaso visual</strong>
      <p>Al cerrar este tema, mirá la infografía relacionada para fijar la idea principal.</p>
      <button type="button" data-open-infographic="${module.infographic}">
        <i class="bi bi-image" aria-hidden="true"></i>
        Ver infografía de repaso
      </button>
    </div>
  ` : "";
  const renderQuiz = (module, index) => module.quiz ? `
    <div class="module-quiz" data-quiz data-answer="${module.quiz.answer}">
      <strong>Mini autoevaluación</strong>
      <p>${module.quiz.question}</p>
      <div class="module-quiz__options">
        ${module.quiz.options.map((option, optionIndex) => `
          <label>
            <input type="radio" name="quiz-${index}" value="${optionIndex}">
            <span>${option}</span>
          </label>
        `).join("")}
      </div>
      <p class="module-quiz__feedback" aria-live="polite"></p>
    </div>
  ` : "";
  const renderMeta = (module, index) => `
    <div class="module-meta">
      <button type="button" data-complete-topic="${module.id}">
        <i class="bi bi-check2-circle" aria-hidden="true"></i>
        <span>Tema completado</span>
      </button>
      <span><i class="bi bi-clock" aria-hidden="true"></i>${module.time || "4 min"}</span>
      <span><i class="bi bi-bar-chart" aria-hidden="true"></i>${module.level || "★★☆☆☆"}</span>
    </div>
  `;
  const modulesMarkup = modules.map((module, index) => `
    <section class="study-card" id="tema-${index + 1}" data-topic data-module-id="${module.id}" data-group="${module.group}" data-title="${module.keywords}">
      <div class="study-card__header">
        <span class="topic-number">Tema ${index + 1}</span>
        <h2>${module.title}</h2>
      </div>
      ${renderMeta(module, index)}
      ${renderOptionalBlock("bi-book", "Qué es", module.what || module.intro)}
      ${renderOptionalBlock("bi-bullseye", "Para qué sirve", module.why)}
      ${renderHeading("bi-key", "Conceptos clave")}
      ${module.grid ? `<div class="keyword-grid">${module.grid.map((item) => `<span>${item}</span>`).join("")}</div>` : ""}
      ${renderConcepts(module)}
      ${renderOptionalBlock("bi-lightbulb", "Ejemplo cotidiano", module.everyday)}
      ${renderOptionalBlock("bi-window", "Ejemplo de software", module.software || module.example)}
      ${module.professor?.length ? `${renderHeading("bi-person-video3", "Lo que suele tomar el profesor")}${renderList(module.professor)}` : ""}
      ${renderOptionalBlock("bi-exclamation-triangle", "Error típico", module.mistake)}
      ${renderRelations(module)}
      ${renderInfographicReview(module)}
      ${renderQuiz(module, index)}
      <div class="summary-box"><strong><i class="bi bi-brain" aria-hidden="true"></i> Resumen final:</strong> ${module.summary}</div>
    </section>
  `).join("");
  const dashboardMarkup = `
    <section class="learning-dashboard" aria-label="Panel de progreso">
      <div>
        <span>Progreso</span>
        <strong id="learningProgressValue">0%</strong>
      </div>
      <div>
        <span>Temas completados</span>
        <strong id="learningCompletedValue">0 / ${modules.length}</strong>
      </div>
      <div>
        <span>Autoevaluaciones</span>
        <strong id="learningQuizValue">0 / ${modules.length}</strong>
      </div>
      <p id="learningNextStep">Comenzá por el primer módulo y marcá cada tema al terminar.</p>
    </section>
  `;

  navigation.insertAdjacentHTML("beforebegin", `${dashboardMarkup}${modulesMarkup}`);
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
const resourcePrev = document.querySelector("#resourcePrev");
const resourceNext = document.querySelector("#resourceNext");
const resourceModal = new bootstrap.Modal(resourceViewer);

let activeIndex = 0;
let matchedIndexes = topics.map((_, index) => index);
let searchMatches = [];
let currentSearchMatch = -1;
let activeResourceGroup = [];
let activeResourceIndex = -1;

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
    const groups = [...new Set(topics.map((topic) => topic.dataset.group || "General"))];

    groups.forEach((group) => {
      const groupBox = document.createElement("section");
      groupBox.className = "topic-index__group";
      groupBox.innerHTML = `<p>${group}</p>`;

      topics.forEach((topic, index) => {
        if ((topic.dataset.group || "General") !== group) return;
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
        groupBox.appendChild(link);
      });

      if (groupBox.querySelector("a:not(.is-filtered-out)")) {
        container.appendChild(groupBox);
      }
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
  nextTopic.textContent = activeIndex === topics.length - 1 ? "Ãšltimo tema" : "Tema siguiente";
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
    searchStatus.textContent = `${matchedIndexes.length} mÃ³dulo${matchedIndexes.length === 1 ? "" : "s"} encontrado${matchedIndexes.length === 1 ? "" : "s"}.`;
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
    resourcesPanel.innerHTML = '<p class="index-help mb-0">No hay documentos cargados todavÃ­a.</p>';
    return;
  }

  resourcesPanel.innerHTML = groups.map((group) => {
    const items = group.items.length ? group.items.map((item, itemIndex) => `
      <button class="resource-item" type="button" data-resource-group="${group.id}" data-resource-index="${itemIndex}" data-resource-path="${encodePath(item.path)}" data-resource-title="${item.title}" data-resource-type="${item.type}">
        ${item.title}
      </button>
    `).join("") : '<p class="resource-empty mb-0">TodavÃ­a no hay archivos en esta carpeta.</p>';

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
      const group = groups.find((resourceGroup) => resourceGroup.id === item.dataset.resourceGroup);
      openResource(item.dataset.resourceTitle, item.dataset.resourcePath, item.dataset.resourceType, {
        groupItems: group?.items || [],
        index: Number(item.dataset.resourceIndex)
      });
    });
  });
}

function updateResourceNavigation() {
  const canNavigate = activeResourceGroup.length > 1 && activeResourceIndex !== -1;
  resourcePrev.hidden = !canNavigate;
  resourceNext.hidden = !canNavigate;
  resourcePrev.disabled = !canNavigate;
  resourceNext.disabled = !canNavigate;
}

function openResource(title, path, type, context = {}) {
  if (context.groupItems) {
    activeResourceGroup = context.groupItems;
    activeResourceIndex = context.index ?? activeResourceGroup.findIndex((item) => encodePath(item.path) === path || item.path === path);
  } else {
    const group = window.MDP_RESOURCES?.groups?.find((resourceGroup) => resourceGroup.items.some((item) => item.path === path || encodePath(item.path) === path));
    activeResourceGroup = group?.items || [];
    activeResourceIndex = activeResourceGroup.findIndex((item) => item.path === path || encodePath(item.path) === path);
  }

  resourceViewerLabel.textContent = title;
  resourceOpenNew.href = path;
  updateResourceNavigation();

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

function moveResource(direction) {
  if (!activeResourceGroup.length) return;
  activeResourceIndex = (activeResourceIndex + direction + activeResourceGroup.length) % activeResourceGroup.length;
  const item = activeResourceGroup[activeResourceIndex];
  openResource(item.title, encodePath(item.path), item.type, {
    groupItems: activeResourceGroup,
    index: activeResourceIndex
  });
}

function getCompletedTopicIds() {
  const saved = JSON.parse(localStorage.getItem("mdp-completed-topics") || "[]");
  const ids = saved
    .map((item) => typeof item === "number" ? topics[item]?.dataset.moduleId : String(item))
    .filter(Boolean);
  localStorage.setItem("mdp-completed-topics", JSON.stringify([...new Set(ids)]));
  return [...new Set(ids)];
}

function updateLearningDashboard() {
  const completed = getCompletedTopicIds();
  const quizResults = JSON.parse(localStorage.getItem("mdp-quiz-results") || "{}");
  const completedCount = completed.length;
  const quizCorrectCount = Object.values(quizResults).filter(Boolean).length;
  const progress = Math.round(((completedCount + quizCorrectCount) / (topics.length * 2)) * 100);
  const progressValue = document.querySelector("#learningProgressValue");
  const completedValue = document.querySelector("#learningCompletedValue");
  const quizValue = document.querySelector("#learningQuizValue");
  const nextStep = document.querySelector("#learningNextStep");

  if (!progressValue) return;

  progressValue.textContent = `${progress}%`;
  completedValue.textContent = `${completedCount} / ${topics.length}`;
  quizValue.textContent = `${quizCorrectCount} / ${topics.length}`;

  const nextTopic = topics.find((topic) => !completed.includes(topic.dataset.moduleId));
  if (nextTopic) {
    nextStep.textContent = `Próximo foco recomendado: ${nextTopic.querySelector("h2").textContent}.`;
  } else if (quizCorrectCount < topics.length) {
    nextStep.textContent = "Ya leíste todo. Ahora reforzá las autoevaluaciones que falten.";
  } else {
    nextStep.textContent = "Ruta completa. Pasá al simulacro de examen para detectar temas débiles.";
  }
}

function bindStudyInteractions() {
  const completed = getCompletedTopicIds();

  document.querySelectorAll("[data-complete-topic]").forEach((button) => {
    const id = button.dataset.completeTopic;
    button.classList.toggle("is-complete", completed.includes(id));
    button.addEventListener("click", () => {
      const saved = JSON.parse(localStorage.getItem("mdp-completed-topics") || "[]");
      const next = saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id];
      localStorage.setItem("mdp-completed-topics", JSON.stringify(next));
      button.classList.toggle("is-complete", next.includes(id));
      updateLearningDashboard();
    });
  });

  document.querySelectorAll("[data-related-topic]").forEach((button) => {
    button.addEventListener("click", () => {
      const label = normalizeText(button.dataset.relatedTopic);
      const index = topics.findIndex((topic) => normalizeText(topic.querySelector("h2").textContent).includes(label));
      if (index !== -1) activateTopic(index);
    });
  });

  document.querySelectorAll("[data-quiz]").forEach((quiz) => {
    const feedback = quiz.querySelector(".module-quiz__feedback");
    quiz.querySelectorAll("input").forEach((input) => {
      input.addEventListener("change", () => {
        const isCorrect = input.value === quiz.dataset.answer;
        const topicId = quiz.closest("[data-topic]")?.dataset.moduleId;
        const results = JSON.parse(localStorage.getItem("mdp-quiz-results") || "{}");
        results[topicId] = isCorrect;
        localStorage.setItem("mdp-quiz-results", JSON.stringify(results));
        quiz.classList.toggle("is-correct", isCorrect);
        quiz.classList.toggle("is-review", !isCorrect);
        feedback.textContent = isCorrect ? "Correcto. Buen punto para fijar." : "Revisar este concepto antes de avanzar.";
        updateLearningDashboard();
      });
    });
  });

  document.querySelectorAll("[data-open-infographic]").forEach((button) => {
    button.addEventListener("click", () => {
      const path = button.dataset.openInfographic;
      const group = window.MDP_RESOURCES?.groups?.find((resourceGroup) => resourceGroup.id === "infografias");
      const index = group?.items.findIndex((item) => item.path === path) ?? -1;
      const item = group?.items[index];
      if (!item) return;

      openResource(item.title, encodePath(item.path), item.type, {
        groupItems: group.items,
        index
      });
    });
  });

  updateLearningDashboard();
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
resourcePrev.addEventListener("click", () => moveResource(-1));
resourceNext.addEventListener("click", () => moveResource(1));
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
bindStudyInteractions();

