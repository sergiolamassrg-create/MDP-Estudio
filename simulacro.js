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
    feedback: "Validar mira si la solución satisface la necesidad real. Verificar mira si lo construido cumple especificaciones, historia o criterio."
  },
  {
    id: 2,
    type: "truefalse",
    topic: "Calidad",
    question: "El testing agrega calidad por sí solo al producto.",
    answer: false,
    feedback: "Falso. Testing informa, diagnostica y evidencia defectos. La calidad se construye con procesos, decisiones y correcciones."
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
    feedback: "Testing busca información, confianza, evidencia de defectos y confirmación de funcionalidades."
  },
  {
    id: 4,
    type: "development",
    topic: "Principios",
    question: "Mencione y explique brevemente 3 de los 7 principios del testing.",
    keywords: ["defectos", "exhaustivas", "temprano", "agrupamiento", "pesticida", "contexto", "ausencia"],
    minKeywords: 3,
    expected: "Ejemplos: las pruebas muestran defectos; pruebas exhaustivas son imposibles; testing temprano; agrupamiento de defectos; paradoja del pesticida; depende del contexto; ausencia de errores no implica utilidad."
  },
  {
    id: 5,
    type: "truefalse",
    topic: "Riesgo",
    question: "La cantidad de testing puede definirse considerando riesgos, tiempo y presupuesto.",
    answer: true,
    feedback: "Verdadero. Como no se puede probar todo, se prioriza por riesgo, valor, plazos y recursos disponibles."
  },
  {
    id: 6,
    type: "choice",
    topic: "Independencia",
    question: "¿Qué significa independencia de las pruebas?",
    options: [
      "Que QA nunca habla con desarrollo.",
      "Que las pruebas pueden ser diseñadas o revisadas por personas con distinto grado de independencia respecto de quien construyó.",
      "Que solo proveedores externos pueden probar.",
      "Que el tester no necesita requerimientos."
    ],
    answer: 1,
    feedback: "La independencia reduce sesgos. Puede ir desde pruebas del mismo desarrollador hasta pruebas por otro equipo u organización."
  },
  {
    id: 7,
    type: "development",
    topic: "Desarrollo",
    question: "Ordene y describa las etapas principales del proceso de desarrollo de software vistas en clase.",
    keywords: ["planificación", "analisis", "análisis", "diseño", "desarrollo", "testing", "implementación", "mantenimiento"],
    minKeywords: 5,
    expected: "Planificación, análisis, diseño, desarrollo, testing, implementación y mantenimiento. También pueden mencionarse comunicación, viabilidad, codificación, integración, formación y mantenimiento dentro del SDLC."
  },
  {
    id: 8,
    type: "choice",
    topic: "SDLC",
    question: "¿Cuál opción pertenece al ciclo de vida del desarrollo de software?",
    options: [
      "Comunicación, planificación, análisis, diseño, codificación, integración, pruebas, implementación y mantenimiento.",
      "Solo testing y reporte.",
      "Solo codificación e implementación.",
      "Daily, review y retrospectiva únicamente."
    ],
    answer: 0,
    feedback: "El SDLC contempla desde comunicación y planificación hasta mantenimiento, no solo programación."
  },
  {
    id: 9,
    type: "choice",
    topic: "Historias",
    question: "¿Cuál es la estructura correcta de una historia de usuario?",
    options: [
      "Dado, cuando, entonces.",
      "Como [perfil], quiero [necesidad], para [valor].",
      "Scope, People, Approach.",
      "Entrada, acción, salida."
    ],
    answer: 1,
    feedback: "La historia expresa perfil, necesidad y propósito. Given/When/Then corresponde a criterios de aceptación."
  },
  {
    id: 10,
    type: "truefalse",
    topic: "Historias",
    question: "Las historias de usuario se utilizan en Scrum y Kanban para dar contexto y ordenar trabajo.",
    answer: true,
    feedback: "Verdadero. En Scrum ayudan a planificar sprint; en Kanban pueden fluir por el tablero/backlog."
  },
  {
    id: 11,
    type: "choice",
    topic: "Criterios",
    question: "¿Qué son los criterios de aceptación?",
    options: [
      "Condiciones que permiten saber cuándo una historia está terminada y aceptable.",
      "Una lista de bugs de producción.",
      "Un reemplazo del plan de pruebas.",
      "Un documento exclusivo de desarrollo sin QA."
    ],
    answer: 0,
    feedback: "Los criterios de aceptación reducen ambigüedad y sirven como base para escenarios/casos."
  },
  {
    id: 12,
    type: "development",
    topic: "Given When Then",
    question: "Escriba un criterio de aceptación Given/When/Then para un login exitoso.",
    keywords: ["given", "when", "then", "usuario", "credenciales", "home", "ingresa"],
    minKeywords: 4,
    expected: "Ejemplo: Given un usuario registrado con credenciales válidas, When ingresa email y contraseña correctos, Then accede a la Home."
  },
  {
    id: 13,
    type: "choice",
    topic: "Buenas historias",
    question: "¿Qué representan las 3 C de una historia de usuario?",
    options: [
      "Código, compilación, cobertura.",
      "Card, Conversation, Confirmation.",
      "Cliente, contrato, costo.",
      "Criteria, Context, Control."
    ],
    answer: 1,
    feedback: "Card resume, Conversation aclara con el equipo y Confirmation valida mediante criterios."
  },
  {
    id: 14,
    type: "development",
    topic: "INVEST",
    question: "Explique qué busca INVEST en una buena historia de usuario.",
    keywords: ["independent", "independiente", "negotiable", "negociable", "valuable", "valiosa", "estimable", "small", "pequeña", "testable", "testeable"],
    minKeywords: 4,
    expected: "INVEST: independiente, negociable, valiosa, estimable, pequeña y testeable."
  },
  {
    id: 15,
    type: "choice",
    topic: "Testing Agile",
    question: "¿Cuál afirmación corresponde al manifiesto del Testing Agile?",
    options: [
      "Testing al final por sobre testing durante.",
      "El tester es el único responsable de calidad.",
      "Prevenir bugs por sobre solo encontrar bugs.",
      "Romper el sistema por sobre construir mejor software."
    ],
    answer: 2,
    feedback: "Testing Agile prioriza prevenir bugs, entender el sistema, probar durante y compartir calidad."
  },
  {
    id: 16,
    type: "development",
    topic: "Proceso de pruebas",
    question: "Mencione las etapas del proceso de pruebas y qué produce al menos una de ellas.",
    keywords: ["planificación", "seguimiento", "control", "análisis", "diseño", "implementación", "ejecución", "reporte"],
    minKeywords: 5,
    expected: "Planificación, seguimiento y control, análisis, diseño, implementación, ejecución y reporte. Ejemplo: planificación produce el plan de pruebas."
  },
  {
    id: 17,
    type: "choice",
    topic: "Plan de pruebas",
    question: "¿Qué significa SPACE DIRT en un plan de pruebas?",
    options: [
      "Scope, People, Approach, Criteria, Environment, Deliverables, Incidents, Risks, Tasks.",
      "Security, Performance, Code, Errors.",
      "Scrum, Planning, Estimation, Review.",
      "Solo criterios de aceptación."
    ],
    answer: 0,
    feedback: "SPACE DIRT resume los componentes clave del plan: alcance, personas, enfoque, criterios, ambiente, entregables, incidentes, riesgos y tareas."
  },
  {
    id: 18,
    type: "truefalse",
    topic: "Plan de pruebas",
    question: "El plan de pruebas debe indicar alcance, criterios, ambiente, riesgos y tareas.",
    answer: true,
    feedback: "Verdadero. Esos elementos ayudan a ordenar el trabajo y evitar probar al azar."
  },
  {
    id: 19,
    type: "choice",
    topic: "ISO 25010",
    question: "¿Cuál lista contiene características de ISO 25010?",
    options: [
      "Usabilidad, seguridad, mantenibilidad, portabilidad, fiabilidad.",
      "Daily, sprint, backlog, review.",
      "Bug, incidente, defecto, severidad.",
      "Card, Conversation, Confirmation."
    ],
    answer: 0,
    feedback: "ISO 25010 incluye adecuación funcional, eficiencia, compatibilidad, usabilidad, fiabilidad, seguridad, mantenibilidad y portabilidad."
  },
  {
    id: 20,
    type: "development",
    topic: "Aplicación práctica",
    question: "Dada una historia de pago de factura, escriba 2 escenarios de prueba y explique por qué son importantes.",
    keywords: ["pago", "factura", "exitoso", "cliente", "comprobante", "error", "monto", "confirmación", "ticket"],
    minKeywords: 3,
    expected: "Ejemplos: pago exitoso con comprobante; cliente sin facturas; número de cliente inválido; cancelación antes de confirmar; error de pago. Deben ser títulos claros de lo que se probará."
  }
];

const examModalElement = document.querySelector("#examModal");
const examModal = new bootstrap.Modal(examModalElement);
const examForm = document.querySelector("#examForm");
const openExamButton = document.querySelector("#openExam");
const gradeExamButton = document.querySelector("#gradeExam");
const resetExamButton = document.querySelector("#resetExam");
const examScore = document.querySelector("#examScore");

function renderExam() {
  examForm.innerHTML = examQuestions.map((question) => {
    const badge = question.type === "choice" ? "Multiple choice" : question.type === "truefalse" ? "Verdadero / Falso" : "Desarrollo";
    const body = question.type === "development"
      ? `<textarea name="q-${question.id}" rows="5" placeholder="Desarrolle su respuesta tecnica..."></textarea>`
      : renderExamOptions(question);

    return `
      <article class="exam-question" data-question-id="${question.id}">
        <div class="exam-question__top">
          <span class="exam-badge">${badge}</span>
          <span class="exam-topic">${question.topic}</span>
        </div>
        <h3>${question.id}. ${question.question}</h3>
        <div class="exam-answer">${body}</div>
        <div class="exam-feedback" id="exam-feedback-${question.id}" hidden></div>
      </article>
    `;
  }).join("");
}

function renderExamOptions(question) {
  const options = question.type === "truefalse" ? ["Verdadero", "Falso"] : question.options;
  return options.map((option, index) => {
    const value = question.type === "truefalse" ? String(index === 0) : String(index);
    return `
      <label class="exam-option">
        <input type="radio" name="q-${question.id}" value="${value}">
        <span>${option}</span>
      </label>
    `;
  }).join("");
}

function normalizeExamText(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function gradeExam() {
  let score = 0;
  let objectiveCount = 0;
  let answered = 0;

  examQuestions.forEach((question) => {
    const feedback = document.querySelector(`#exam-feedback-${question.id}`);
    let correct = false;
    let response = "";

    if (question.type === "choice" || question.type === "truefalse") {
      objectiveCount++;
      const selected = examForm.querySelector(`input[name="q-${question.id}"]:checked`);
      response = selected?.value ?? "";
      correct = question.type === "choice"
        ? Number(response) === question.answer
        : response === String(question.answer);
      if (selected) answered++;
    } else {
      const text = examForm.querySelector(`[name="q-${question.id}"]`).value.trim();
      const normalized = normalizeExamText(text);
      const matches = question.keywords.filter((keyword) => normalized.includes(normalizeExamText(keyword)));
      correct = matches.length >= question.minKeywords;
      response = text;
      if (text) answered++;
    }

    if (correct) score++;
    feedback.hidden = false;
    feedback.className = `exam-feedback ${correct ? "is-correct" : "is-review"}`;
    feedback.innerHTML = `
      <strong>${correct ? "Correcto" : "Revisar"}</strong>
      <p>${question.feedback || question.expected}</p>
      ${question.expected ? `<p><em>Respuesta esperada:</em> ${question.expected}</p>` : ""}
    `;
  });

  examScore.hidden = false;
  examScore.innerHTML = `
    <strong>${score} / ${examQuestions.length}</strong>
    <span>${answered} respuestas completadas. Las de desarrollo se corrigen por palabras clave y deben repasarse con criterio.</span>
  `;
  examModalElement.querySelector(".modal-body").scrollTo({ top: 0, behavior: "smooth" });
}

function resetExam() {
  examForm.reset();
  examScore.hidden = true;
  examForm.querySelectorAll(".exam-feedback").forEach((feedback) => {
    feedback.hidden = true;
    feedback.innerHTML = "";
  });
  examModalElement.querySelector(".modal-body").scrollTo({ top: 0, behavior: "smooth" });
}

openExamButton?.addEventListener("click", () => {
  examModal.show();
});

gradeExamButton?.addEventListener("click", gradeExam);
resetExamButton?.addEventListener("click", resetExam);

renderExam();
