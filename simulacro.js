const commonReview = {
  fundamentos: {
    topicIndex: 0,
    infographic: "infografias/01_VV_Testing_Calidad.png"
  },
  calidad: {
    topicIndex: 1,
    infographic: "infografias/01_VV_Testing_Calidad.png"
  },
  riesgos: {
    topicIndex: 3,
    infographic: "infografias/02_Principios_Testing.png"
  },
  principios: {
    topicIndex: 4,
    infographic: "infografias/02_Principios_Testing.png"
  },
  desarrollo: {
    topicIndex: 5,
    infographic: "infografias/03_Desarrollo_Agile.png"
  },
  historias: {
    topicIndex: 8,
    infographic: "infografias/04_Historias_Usuario.png"
  },
  criterios: {
    topicIndex: 9,
    infographic: "infografias/04_Historias_Usuario.png"
  },
  buenasHistorias: {
    topicIndex: 10,
    infographic: "infografias/04_Historias_Usuario.png"
  },
  iso: {
    topicIndex: 11,
    infographic: "infografias/05_ISO_25010.png"
  },
  agile: {
    topicIndex: 12,
    infographic: "infografias/06_Testing_Agile.png"
  },
  proceso: {
    topicIndex: 13,
    infographic: "infografias/07_Proceso_Pruebas.png"
  },
  analisisDiseno: {
    topicIndex: 14,
    infographic: "infografias/09_Casos_Prueba.png"
  },
  plan: {
    topicIndex: 15,
    infographic: "infografias/08_Plan_Pruebas_SPACE_DIRT.png"
  },
  casos: {
    topicIndex: 16,
    infographic: "infografias/09_Casos_Prueba.png"
  }
};

const examQuestions = [
  {
    id: 1,
    type: "choice",
    topic: "Fundamentos",
    question: "¿Cuál es la diferencia correcta entre validación y verificación?",
    options: [
      "Validación revisa código; verificación revisa usuario.",
      "Validación responde si construimos el sistema correcto; verificación si lo construimos correctamente.",
      "Validación y verificación son exactamente lo mismo.",
      "Verificación solo aplica en producción."
    ],
    answer: 1,
    correctText: "Validación mira si el sistema resuelve la necesidad real; verificación mira si lo construido cumple la especificación.",
    remember: "En el parcial conviene decirlo corto: validar es valor para el usuario; verificar es cumplimiento contra lo pedido.",
    ...commonReview.calidad
  },
  {
    id: 2,
    type: "truefalse",
    topic: "Calidad",
    question: "El testing agrega calidad por sí solo al producto.",
    answer: false,
    correctText: "Falso.",
    remember: "Testing informa y encuentra evidencia. La calidad se construye con proceso, buenas decisiones y correcciones.",
    ...commonReview.fundamentos
  },
  {
    id: 3,
    type: "choice",
    topic: "Testing",
    question: "¿Cuál de estos es un objetivo del testing?",
    options: [
      "Demostrar que el software no tiene errores.",
      "Evitar hablar con negocio.",
      "Generar información para tomar decisiones.",
      "Reemplazar la validación con usuarios."
    ],
    answer: 2,
    correctText: "Generar información para tomar decisiones.",
    remember: "Testing no promete ausencia total de errores: aporta confianza, evidencia y visibilidad sobre riesgos.",
    ...commonReview.fundamentos
  },
  {
    id: 4,
    type: "development",
    topic: "Principios",
    question: "Mencione y explique brevemente 3 de los 7 principios del testing.",
    keywords: ["defectos", "exhaustivas", "temprano", "agrupamiento", "pesticida", "contexto", "ausencia"],
    minKeywords: 3,
    correctText: "Ejemplos validos: las pruebas muestran defectos; pruebas exhaustivas son imposibles; testing temprano; agrupamiento de defectos; paradoja del pesticida; depende del contexto; ausencia de errores no implica utilidad.",
    remember: "No alcanza con nombrarlos: agrega una frase de explicacion para mostrar que los entendes.",
    ...commonReview.riesgos
  },
  {
    id: 5,
    type: "truefalse",
    topic: "Riesgo",
    question: "La cantidad de testing puede definirse considerando riesgos, tiempo y presupuesto.",
    answer: true,
    correctText: "Verdadero.",
    remember: "Como no se puede probar todo, se prioriza lo mas critico por riesgo, valor, plazo y recursos.",
    ...commonReview.principios
  },
  {
    id: 6,
    type: "choice",
    topic: "Independencia",
    question: "Que significa independencia de las pruebas?",
    options: [
      "Que QA nunca habla con desarrollo.",
      "Que las pruebas pueden ser disenadas o revisadas por personas con distinto grado de independencia respecto de quien construyo.",
      "Que solo proveedores externos pueden probar.",
      "Que el tester no necesita requerimientos."
    ],
    answer: 1,
    correctText: "Las pruebas pueden ser disenadas o revisadas por alguien con distancia respecto de quien construyo.",
    remember: "La independencia reduce sesgos, pero no elimina la colaboracion con desarrollo y negocio.",
    ...commonReview.principios
  },
  {
    id: 7,
    type: "development",
    topic: "Desarrollo",
    question: "Ordene y describa las etapas principales del proceso de desarrollo de software vistas en clase.",
    keywords: ["planificacion", "analisis", "diseno", "desarrollo", "testing", "implementacion", "mantenimiento"],
    minKeywords: 5,
    correctText: "Planificacion, analisis, diseno, desarrollo, testing, implementacion y mantenimiento. En SDLC tambien pueden aparecer comunicacion, viabilidad, codificacion, integracion, pruebas y formacion.",
    remember: "Si te piden proceso, ordena etapas. Si te piden SDLC, podes ampliar con comunicacion, viabilidad e integracion.",
    ...commonReview.desarrollo
  },
  {
    id: 8,
    type: "choice",
    topic: "SDLC",
    question: "Cual opcion pertenece al ciclo de vida del desarrollo de software?",
    options: [
      "Comunicacion, planificacion, analisis, diseno, codificacion, integracion, pruebas, implementacion y mantenimiento.",
      "Solo testing y reporte.",
      "Solo codificacion e implementacion.",
      "Daily, review y retrospectiva unicamente."
    ],
    answer: 0,
    correctText: "Comunicacion, planificacion, analisis, diseno, codificacion, integracion, pruebas, implementacion y mantenimiento.",
    remember: "El SDLC cubre desde entender la necesidad hasta mantener el sistema, no solo programar.",
    ...commonReview.desarrollo
  },
  {
    id: 9,
    type: "choice",
    topic: "Historias",
    question: "Cual es la estructura correcta de una historia de usuario?",
    options: [
      "Dado, cuando, entonces.",
      "Como [perfil], quiero [necesidad], para [valor].",
      "Scope, People, Approach.",
      "Entrada, accion, salida."
    ],
    answer: 1,
    correctText: "Como [perfil], quiero [necesidad], para [valor].",
    remember: "Given/When/Then pertenece a criterios de aceptacion, no a la frase principal de la historia.",
    ...commonReview.historias
  },
  {
    id: 10,
    type: "truefalse",
    topic: "Historias",
    question: "Las historias de usuario se utilizan en Scrum y Kanban para dar contexto y ordenar trabajo.",
    answer: true,
    correctText: "Verdadero.",
    remember: "En Scrum ayudan a planificar sprint; en Kanban pueden fluir por el tablero o backlog.",
    ...commonReview.historias
  },
  {
    id: 11,
    type: "choice",
    topic: "Criterios",
    question: "Que son los criterios de aceptacion?",
    options: [
      "Condiciones que permiten saber cuando una historia esta terminada y aceptable.",
      "Una lista de bugs de produccion.",
      "Un reemplazo del plan de pruebas.",
      "Un documento exclusivo de desarrollo sin QA."
    ],
    answer: 0,
    correctText: "Son condiciones que definen cuando una historia esta terminada y aceptable.",
    remember: "Son la base para escenarios y casos porque reducen ambiguedad.",
    ...commonReview.criterios
  },
  {
    id: 12,
    type: "development",
    topic: "Given When Then",
    question: "Escriba un criterio de aceptacion Given/When/Then para un login exitoso.",
    keywords: ["given", "when", "then", "usuario", "credenciales", "home", "ingresa"],
    minKeywords: 4,
    correctText: "Ejemplo: Given un usuario registrado con credenciales validas, When ingresa email y contrasena correctos, Then accede a la Home.",
    remember: "Given es contexto, When es accion, Then es resultado esperado observable.",
    ...commonReview.criterios
  },
  {
    id: 13,
    type: "choice",
    topic: "Buenas historias",
    question: "Que representan las 3 C de una historia de usuario?",
    options: [
      "Codigo, compilacion, cobertura.",
      "Card, Conversation, Confirmation.",
      "Cliente, contrato, costo.",
      "Criteria, Context, Control."
    ],
    answer: 1,
    correctText: "Card, Conversation, Confirmation.",
    remember: "Card resume la necesidad, Conversation aclara, Confirmation valida con criterios.",
    ...commonReview.buenasHistorias
  },
  {
    id: 14,
    type: "development",
    topic: "INVEST",
    question: "Explique que busca INVEST en una buena historia de usuario.",
    keywords: ["independent", "independiente", "negotiable", "negociable", "valuable", "valiosa", "estimable", "small", "pequena", "testable", "testeable"],
    minKeywords: 4,
    correctText: "INVEST: independiente, negociable, valiosa, estimable, pequena y testeable.",
    remember: "El punto fuerte para examen: una historia buena debe poder entenderse, estimarse y probarse.",
    ...commonReview.buenasHistorias
  },
  {
    id: 15,
    type: "choice",
    topic: "Testing Agile",
    question: "Cual afirmacion corresponde al manifiesto del Testing Agile?",
    options: [
      "Testing al final por sobre testing durante.",
      "El tester es el unico responsable de calidad.",
      "Prevenir bugs por sobre solo encontrar bugs.",
      "Romper el sistema por sobre construir mejor software."
    ],
    answer: 2,
    correctText: "Prevenir bugs por sobre solo encontrar bugs.",
    remember: "Testing Agile empuja calidad compartida, colaboracion temprana y feedback continuo.",
    ...commonReview.agile
  },
  {
    id: 16,
    type: "development",
    topic: "Proceso de pruebas",
    question: "Mencione las etapas del proceso de pruebas y que produce al menos una de ellas.",
    keywords: ["planificacion", "seguimiento", "control", "analisis", "diseno", "implementacion", "ejecucion", "reporte"],
    minKeywords: 5,
    correctText: "Planificacion, seguimiento y control, analisis, diseno, implementacion, ejecucion y reporte. Ejemplo: planificacion produce el plan de pruebas.",
    remember: "Aca conviene responder ordenado y sumar un artefacto: plan, casos, datos, evidencia, reporte.",
    ...commonReview.proceso
  },
  {
    id: 17,
    type: "choice",
    topic: "Plan de pruebas",
    question: "Que significa SPACE DIRT en un plan de pruebas?",
    options: [
      "Scope, People, Approach, Criteria, Environment, Deliverables, Incidents, Risks, Tasks.",
      "Security, Performance, Code, Errors.",
      "Scrum, Planning, Estimation, Review.",
      "Solo criterios de aceptacion."
    ],
    answer: 0,
    correctText: "Scope, People, Approach, Criteria, Environment, Deliverables, Incidents, Risks, Tasks.",
    remember: "Usalo como regla mnemotecnica para recordar que debe cubrir el plan de pruebas.",
    ...commonReview.plan
  },
  {
    id: 18,
    type: "truefalse",
    topic: "Plan de pruebas",
    question: "El plan de pruebas debe indicar alcance, criterios, ambiente, riesgos y tareas.",
    answer: true,
    correctText: "Verdadero.",
    remember: "El plan evita probar al azar: define que se prueba, como, con quien, donde, criterios y riesgos.",
    ...commonReview.plan
  },
  {
    id: 19,
    type: "choice",
    topic: "ISO 25010",
    question: "Cual lista contiene caracteristicas de ISO 25010?",
    options: [
      "Usabilidad, seguridad, mantenibilidad, portabilidad, fiabilidad.",
      "Daily, sprint, backlog, review.",
      "Bug, incidente, defecto, severidad.",
      "Card, Conversation, Confirmation."
    ],
    answer: 0,
    correctText: "ISO 25010 incluye adecuacion funcional, eficiencia, compatibilidad, usabilidad, fiabilidad, seguridad, mantenibilidad y portabilidad.",
    remember: "Seguro puede entrar alguna pregunta: recorda que ISO 25010 mira calidad del producto mas alla de que 'funcione'.",
    ...commonReview.iso
  },
  {
    id: 20,
    type: "development",
    topic: "Aplicacion practica",
    question: "Dada una historia de pago de factura, escriba 2 escenarios de prueba y explique por que son importantes.",
    keywords: ["pago", "factura", "exitoso", "cliente", "comprobante", "error", "monto", "confirmacion", "ticket"],
    minKeywords: 3,
    correctText: "Ejemplos: pago exitoso con comprobante; cliente sin facturas; numero de cliente invalido; cancelacion antes de confirmar; error de pago.",
    remember: "Escenario es el titulo de lo que vas a probar; caso de prueba es el detalle con pasos, datos y resultado esperado.",
    ...commonReview.casos
  }
];

const examModalElement = document.querySelector("#examModal");
const examModal = examModalElement ? new bootstrap.Modal(examModalElement) : null;
const examForm = document.querySelector("#examForm");
const openExamButton = document.querySelector("#openExam");
const resetExamButton = document.querySelector("#resetExam");
const examScore = document.querySelector("#examScore");
const examCounter = document.querySelector("#examCounter");
const examPercent = document.querySelector("#examPercent");

let currentExamIndex = 0;
const examState = examQuestions.map(() => ({
  answered: false,
  correct: false,
  value: ""
}));

function getQuestionBadge(type) {
  if (type === "choice") return "Multiple choice";
  if (type === "truefalse") return "Verdadero / Falso";
  return "Desarrollo";
}

function normalizeExamText(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getCurrentAnswer(question) {
  if (question.type === "development") {
    return examForm.querySelector(`[name="q-${question.id}"]`)?.value.trim() ?? "";
  }

  return examForm.querySelector(`input[name="q-${question.id}"]:checked`)?.value ?? "";
}

function evaluateQuestion(question, value) {
  if (question.type === "choice") {
    return Number(value) === question.answer;
  }

  if (question.type === "truefalse") {
    return value === String(question.answer);
  }

  const normalized = normalizeExamText(value);
  const matches = question.keywords.filter((keyword) => normalized.includes(normalizeExamText(keyword)));
  return matches.length >= question.minKeywords;
}

function renderExamOptions(question, savedAnswer) {
  const options = question.type === "truefalse" ? ["Verdadero", "Falso"] : question.options;

  return options.map((option, index) => {
    const value = question.type === "truefalse" ? String(index === 0) : String(index);
    const checked = savedAnswer === value ? "checked" : "";

    return `
      <label class="exam-option">
        <input type="radio" name="q-${question.id}" value="${value}" ${checked}>
        <span>${option}</span>
      </label>
    `;
  }).join("");
}

function renderFeedback(question, state) {
  if (!state.answered) return "";

  return `
    <div class="exam-feedback ${state.correct ? "is-correct" : "is-review"}">
      <strong>${state.correct ? "Correcto" : "Revisar"}</strong>
      <p><em>Respuesta correcta:</em> ${question.correctText}</p>
      <p><em>Tener en cuenta:</em> ${question.remember}</p>
      <div class="exam-links" aria-label="Material de repaso">
        <button class="exam-link-button" type="button" data-study-topic="${question.topicIndex}">
          <i class="bi bi-journal-text" aria-hidden="true"></i>
          Leer módulo
        </button>
        <a class="exam-link-button" href="${question.infographic}" target="_blank" rel="noopener">
          <i class="bi bi-image" aria-hidden="true"></i>
          Ver infografia
        </a>
      </div>
    </div>
  `;
}

function updateExamStats() {
  const answeredCount = examState.filter((item) => item.answered).length;
  const correctCount = examState.filter((item) => item.correct).length;
  const percent = Math.round((correctCount / examQuestions.length) * 100);

  examCounter.textContent = `${currentExamIndex + 1} / ${examQuestions.length}`;
  examPercent.textContent = `${percent}%`;
  examScore.innerHTML = `
    <strong>${correctCount} correctas</strong>
    <span>${answeredCount} respondidas de ${examQuestions.length}</span>
  `;
}

function renderCurrentQuestion() {
  const question = examQuestions[currentExamIndex];
  const state = examState[currentExamIndex];
  const answerBody = question.type === "development"
    ? `<textarea name="q-${question.id}" rows="7" placeholder="Escribi tu respuesta tecnica...">${state.value}</textarea>`
    : renderExamOptions(question, state.value);

  examForm.innerHTML = `
    <article class="exam-question exam-question--single" data-question-id="${question.id}">
      <div class="exam-question__top">
        <span class="exam-badge">${getQuestionBadge(question.type)}</span>
        <span class="exam-topic">${question.topic}</span>
      </div>
      <h3>${question.id}. ${question.question}</h3>
      <div class="exam-answer">${answerBody}</div>
      ${renderFeedback(question, state)}
      <div class="exam-step-actions">
        <button class="btn btn-outline-accent" type="button" id="examPrev" ${currentExamIndex === 0 ? "disabled" : ""}>
          <i class="bi bi-arrow-left" aria-hidden="true"></i>
          <span>Anterior</span>
        </button>
        <button class="btn btn-accent" type="button" id="examCheck">
          <i class="bi bi-check2-circle" aria-hidden="true"></i>
          <span>${state.answered ? "Revisar respuesta" : "Responder"}</span>
        </button>
        <button class="btn btn-outline-accent" type="button" id="examNext" ${!state.answered || currentExamIndex === examQuestions.length - 1 ? "disabled" : ""}>
          <span>Siguiente</span>
          <i class="bi bi-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </article>
  `;

  updateExamStats();
  bindQuestionActions();
  examModalElement?.querySelector(".modal-body")?.scrollTo({ top: 0 });
}

function gradeCurrentQuestion() {
  const question = examQuestions[currentExamIndex];
  const value = getCurrentAnswer(question);

  if (!value) {
    examForm.querySelector(".exam-answer")?.classList.add("needs-answer");
    return;
  }

  examState[currentExamIndex] = {
    answered: true,
    correct: evaluateQuestion(question, value),
    value
  };

  renderCurrentQuestion();
}

function goToQuestion(index) {
  currentExamIndex = Math.min(Math.max(index, 0), examQuestions.length - 1);
  renderCurrentQuestion();
}

function openStudyTopic(topicIndex) {
  examModal?.hide();

  if (typeof activateTopic === "function") {
    activateTopic(topicIndex);
  }
}

function bindQuestionActions() {
  examForm.querySelector("#examPrev")?.addEventListener("click", () => goToQuestion(currentExamIndex - 1));
  examForm.querySelector("#examNext")?.addEventListener("click", () => goToQuestion(currentExamIndex + 1));
  examForm.querySelector("#examCheck")?.addEventListener("click", gradeCurrentQuestion);

  examForm.querySelector("[data-study-topic]")?.addEventListener("click", (event) => {
    openStudyTopic(Number(event.currentTarget.dataset.studyTopic));
  });

  examForm.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("input", () => {
      examForm.querySelector(".exam-answer")?.classList.remove("needs-answer");
    });
  });
}

function resetExam() {
  currentExamIndex = 0;
  examState.forEach((item) => {
    item.answered = false;
    item.correct = false;
    item.value = "";
  });
  renderCurrentQuestion();
}

openExamButton?.addEventListener("click", () => {
  renderCurrentQuestion();
  examModal?.show();
});

resetExamButton?.addEventListener("click", resetExam);

renderCurrentQuestion();
