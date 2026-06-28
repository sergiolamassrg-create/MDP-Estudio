window.MDP_STUDY_MODULES = [
  {
    title: "Validación, Verificación y Testing",
    keywords: "Validación Verificación Testing Calidad QA QC QM Riesgos Modelos Debugging",
    intro: "Validar confirma si el producto satisface las necesidades reales del usuario o cliente clave. Verificar confirma si lo construido respeta la especificación, el modelo, la historia de usuario o los criterios definidos. Testing es verificación dinámica porque implica ejecutar el sistema para obtener evidencia.",
    concepts: [
      "Validación: ¿estamos construyendo el sistema correcto para el usuario?",
      "Verificación: ¿estamos construyendo correctamente el sistema según el modelo o la especificación?",
      "Testing: compara lo que hace el sistema contra lo esperado mediante ejecución.",
      "James Bach: testing compara algo invisible, el código, con algo ambiguo, la especificación.",
      "Dijkstra: las pruebas muestran presencia de errores, pero no demuestran ausencia total de errores.",
      "Calidad: grado en que un producto, servicio o sistema cumple requisitos.",
      "QA previene desde el proceso; QC controla el producto; QM dirige y coordina la calidad.",
      "Debugging: el desarrollador identifica la causa del defecto y lo corrige; testing expone el problema.",
      "Riesgos: negocio, proyecto, producto y externos.",
      "Modelos de calidad/excelencia: voluntarios, adaptables, autoevaluables y no certificables."
    ],
    example: "En recuperación de contraseña, validar es confirmar con el usuario que el flujo resuelve su necesidad. Verificar es comprobar que el correo, el token y las reglas funcionen como indica la historia.",
    summary: "validar mira valor; verificar mira cumplimiento; testing entrega información para decidir."
  },
  {
    title: "Principios del Testing",
    keywords: "Principios testing pruebas objetivos defectos pesticida contexto riesgos presupuesto independencia",
    intro: "Probamos porque el software lo hacen personas, los errores pueden ser costosos y no se puede probar todo. Testing permite conocer defectos, confirmar funcionalidad, generar información y ganar confianza.",
    concepts: [
      "Las pruebas ponen en evidencia defectos, no ausencia total de defectos.",
      "Las pruebas exhaustivas son imposibles: testing es muestral por definición.",
      "Probar temprano reduce costos y evita asumir requisitos ambiguos.",
      "Los defectos suelen agruparse en pocos módulos críticos.",
      "La paradoja del pesticida indica que repetir siempre las mismas pruebas pierde efectividad.",
      "Las pruebas dependen del contexto: no se prueba igual una app bancaria que una agenda.",
      "La ausencia de errores encontrados no significa que el producto sea útil o correcto.",
      "La cantidad de testing se decide por riesgo, tiempo, presupuesto, valor y estabilidad esperada.",
      "La independencia de las pruebas reduce sesgos, aunque QA debe colaborar con desarrollo y negocio."
    ],
    example: "En pagos se priorizan seguridad, integridad, comprobantes y errores de monto porque el impacto es mayor que en una pantalla informativa.",
    summary: "como no podemos probar todo, probamos lo más importante con criterio."
  },
  {
    title: "Desarrollo de Software",
    keywords: "Desarrollo software ciclo vida SDLC metodologías cascada espiral prototipos iterativo incremental",
    intro: "El ciclo de desarrollo ordena el trabajo desde la necesidad hasta el mantenimiento. Testing no vive solo al final: participa aclarando historias, criterios, riesgos y evidencias.",
    concepts: [
      "Análisis: entender y especificar qué debe hacer el sistema.",
      "Diseño: definir arquitectura, patrones y solución técnica.",
      "Desarrollo: traducir requerimientos a código en la tecnología elegida.",
      "Testing: verificar y validar contra historias, criterios y expectativas.",
      "Implementación: instalar o desplegar en el ambiente de uso.",
      "Mantenimiento: incorporar cambios, mejoras, correcciones y nuevas necesidades.",
      "SDLC: comunicación, planificación, viabilidad, análisis, diseño, codificación, integración, pruebas, implementación, formación y mantenimiento.",
      "Modelos: cascada, espiral, prototipos, iterativos e incrementales.",
      "Roles: PO/analista, UX/UI, desarrollo, QA, DevOps y usuarios."
    ],
    example: "Si una historia queda ambigua en análisis, QA debe preguntar antes de que desarrollo implemente algo incorrecto.",
    summary: "cuanto antes participa testing, menos retrabajo aparece al final."
  },
  {
    title: "Agile, Scrum y Kanban",
    keywords: "Agile Scrum Kanban valores principios manifiesto 12 principios",
    intro: "Agile surge como alternativa a modelos estructurados cuando se necesita entrega temprana, feedback frecuente, adaptación al cambio y colaboración real con el cliente.",
    concepts: [
      "Personas e interacciones sobre procesos y herramientas.",
      "Software funcionando sobre documentación extensiva.",
      "Colaboración con el cliente sobre negociación contractual.",
      "Respuesta ante el cambio sobre seguir un plan rígido.",
      "La prioridad es satisfacer al cliente mediante entrega temprana y continua de valor.",
      "Los requisitos pueden cambiar incluso tarde si acercan el producto a lo que el cliente necesita.",
      "El software funcionando es la medida principal de progreso.",
      "La simplicidad es esencial: se busca una solución suficientemente buena, no perfecta.",
      "Los equipos autoorganizados generan mejores decisiones y deben reflexionar para mejorar.",
      "Scrum trabaja con sprints, backlog, Product Owner, Scrum Master y equipo.",
      "Kanban usa tablero, flujo continuo, flexibilidad y límites de trabajo en progreso."
    ],
    example: "En Scrum una historia puede planificarse para el sprint. En Kanban esa historia avanza por columnas como pendiente, en curso, prueba y terminado.",
    summary: "Agile no elimina planificación; la vuelve flexible y orientada a valor."
  },
  {
    title: "Historias de Usuario",
    keywords: "Historias usuario perfil necesidad propósito Scrum Kanban PO backlog",
    intro: "Una historia de usuario expresa una necesidad desde el punto de vista del usuario final. Describe quién necesita algo, qué necesita y para qué aporta valor.",
    concepts: [
      "Formato: Como [perfil], quiero [necesidad], para [propósito o valor].",
      "Perfil: rol del usuario impactado por la funcionalidad.",
      "Necesidad: objetivo que el usuario quiere lograr usando el software.",
      "Propósito: valor que esa funcionalidad aporta al usuario y al objetivo general.",
      "Normalmente las redacta el Product Owner, aunque técnicamente cualquiera puede proponerlas.",
      "En Scrum ayudan a planificar el sprint y a compartir entendimiento.",
      "En Kanban entran al backlog y avanzan por el tablero según el flujo de trabajo."
    ],
    example: "Como cliente, quiero pagar una factura desde la app, para evitar ir a una sucursal y obtener comprobante inmediato.",
    summary: "una historia clara permite entender usuario, necesidad y valor antes de probar."
  },
  {
    title: "Criterios de Aceptación",
    keywords: "Criterios aceptación Given When Then requisitos terminado aceptable comportamiento",
    intro: "Los criterios de aceptación describen las condiciones que debe cumplir una historia para considerarse terminada y aceptable. Reducen ambigüedad y sirven de base para escenarios y casos de prueba.",
    concepts: [
      "Suelen ser definidos por analistas de producto con colaboración de QA y desarrollo.",
      "Expresan requisitos concretos que el producto debe cumplir.",
      "Ayudan a saber cuándo una historia está terminada.",
      "Al escribirse en conjunto, eliminan interpretaciones distintas.",
      "Given / When / Then describe comportamiento: dado un contexto, cuando ocurre un evento, entonces sucede una consecuencia.",
      "Los criterios pueden incluir límites, permisos, reglas de negocio, mensajes y resultados esperados."
    ],
    example: "Given un usuario registrado, When ingresa email y contraseña válidos, Then accede a la pantalla principal.",
    summary: "historia sin criterios queda incompleta para QA porque no define cómo se acepta."
  },
  {
    title: "Buenas Historias: 3C e INVEST",
    keywords: "Buenas historias usuario 3C INVEST Card Conversation Confirmation",
    intro: "Una buena historia no es solo una frase bonita: debe poder discutirse, estimarse, priorizarse y probarse.",
    concepts: [
      "Card: la tarjeta resume la necesidad de forma breve.",
      "Conversation: la historia dispara conversación para aclarar detalles.",
      "Confirmation: los criterios confirman cuándo está aceptada.",
      "Independent: debe poder trabajarse con la menor dependencia posible.",
      "Negotiable: puede ajustarse conversando con el equipo y negocio.",
      "Valuable: debe aportar valor real.",
      "Estimable: el equipo debe poder estimar esfuerzo.",
      "Small: debe ser suficientemente pequeña para gestionarse.",
      "Testable: debe poder verificarse con criterios claros."
    ],
    example: "Una historia como “quiero seguridad” es demasiado amplia. Una historia testeable define perfil, necesidad, valor y criterios observables.",
    summary: "3C explica cómo se trabaja la historia; INVEST ayuda a evaluar su calidad."
  },
  {
    title: "ISO 25010",
    keywords: "ISO 25010 calidad producto funcionalidad eficiencia compatibilidad usabilidad fiabilidad seguridad mantenibilidad portabilidad",
    intro: "ISO 25010 organiza atributos de calidad del producto. Ayuda a pensar calidad más allá de si una funcionalidad simplemente funciona.",
    grid: [
      "Adecuación funcional",
      "Eficiencia de desempeño",
      "Compatibilidad",
      "Usabilidad",
      "Fiabilidad",
      "Seguridad",
      "Mantenibilidad",
      "Portabilidad"
    ],
    concepts: [
      "Adecuación funcional: completitud, corrección y pertinencia funcional.",
      "Eficiencia de desempeño: comportamiento temporal, uso de recursos y capacidad.",
      "Compatibilidad: interoperabilidad y coexistencia con otros sistemas.",
      "Usabilidad: inteligibilidad, aprendizaje, operabilidad, protección contra errores, estética y accesibilidad.",
      "Fiabilidad: madurez, disponibilidad, tolerancia a fallos y recuperación.",
      "Seguridad: confidencialidad, integridad, no repudio, responsabilidad y autenticidad.",
      "Mantenibilidad: modularidad, reusabilidad, analizabilidad, modificabilidad y capacidad de ser probado.",
      "Portabilidad: adaptabilidad, facilidad de instalación y capacidad de reemplazo."
    ],
    example: "Un login puede funcionar, pero además debe ser seguro, usable, confiable, eficiente, mantenible y accesible.",
    summary: "calidad incluye funcionamiento, rendimiento, seguridad, uso, mantenimiento y entorno."
  },
  {
    title: "Testing Agile",
    keywords: "Testing Agile QA DEV PO calidad compartida prevenir bugs logística métricas",
    intro: "El tester agile conecta negocio y desarrollo. Participa temprano para entender requisitos, prevenir defectos y construir mejor software.",
    concepts: [
      "Testing durante sobre testing al final.",
      "Prevenir bugs sobre solo encontrar bugs.",
      "Entender lo que se testea sobre verificar mecánicamente funcionalidad.",
      "Construir el mejor sistema sobre romper el sistema.",
      "Calidad compartida por todo el equipo.",
      "QA es uno más del equipo y participa en las mismas reuniones.",
      "QA y desarrollo deben comunicarse de forma cercana; desarrollo también participa en pruebas manuales y automáticas.",
      "Las métricas deben provocar el comportamiento buscado y estar alineadas al objetivo."
    ],
    example: "QA participa en refinamiento y pregunta por criterios antes de que desarrollo empiece a programar.",
    summary: "QA agile pregunta antes, prueba durante y comparte calidad con el equipo."
  },
  {
    title: "Proceso de Pruebas",
    keywords: "Proceso pruebas planificación seguimiento control estrategia criterios priorizar estimar calendarizar",
    intro: "El proceso de pruebas ordena el trabajo de QA para evitar probar al azar. Cada etapa produce información o artefactos para avanzar.",
    concepts: [
      "Planificación: objetivos, alcance, estrategia, criterios, recursos y cronograma.",
      "Seguimiento y control: métricas, avance, desvíos e indicadores.",
      "Análisis: historias, riesgos, targets e ideas de prueba.",
      "Diseño: escenarios, casos, datos y resultados esperados.",
      "Implementación: suites, pasos, scripts, datos y ambiente.",
      "Ejecución: resultados, evidencias y defectos.",
      "Reporte: defectos, avance y calidad percibida.",
      "En planificación se identifican inputs/outputs, estrategia, criterios, prioridades, estimaciones y calendario.",
      "Los criterios permiten decidir cuándo la calidad es aceptable o cuándo finalizar pruebas."
    ],
    example: "Antes de ejecutar un caso, QA debe tener historia entendida, datos listos, ambiente disponible y resultado esperado definido.",
    summary: "el proceso transforma requisitos en evidencia útil para decidir."
  },
  {
    title: "Análisis y Diseño de Pruebas",
    keywords: "Análisis diseño pruebas targets ideas escenarios casos drivers stubs automatización",
    intro: "En análisis se identifican targets, ideas y detalles de prueba. En diseño esas ideas pueden transformarse en casos con datos, pasos y resultados esperados.",
    concepts: [
      "Target de prueba: elemento o comportamiento que se quiere evaluar.",
      "Idea o escenario de prueba: declaración simple de lo que queremos probar.",
      "No siempre hace falta escribir casos detallados; depende del contexto y del riesgo.",
      "Si se requiere más detalle, el escenario se transforma en caso de prueba.",
      "El equipo puede colaborar en la estrategia, criterios de automatización y configuración de ambientes.",
      "Drivers: controladores que simulan datos de entrada.",
      "Stubs: componentes simulados que reciben o devuelven datos ficticios."
    ],
    example: "Escenario: pago exitoso de factura con comprobante. Caso: incluye precondiciones, datos, pasos y resultado esperado.",
    summary: "análisis decide qué probar; diseño define cómo probarlo."
  },
  {
    title: "Plan de Pruebas",
    keywords: "Plan pruebas SPACE DIRT scope people approach criteria environment deliverables incidents risk task",
    intro: "El plan de pruebas define objetivos, alcance y lineamientos. La regla SPACE DIRT ayuda a recordar sus componentes.",
    grid: [
      "Scope",
      "People",
      "Approach",
      "Criteria",
      "Environment",
      "Deliverables",
      "Incidents",
      "Risks",
      "Tasks"
    ],
    concepts: [
      "Scope: qué se va a probar y, muy importante, qué no se va a probar.",
      "People: roles, responsabilidades y personas involucradas.",
      "Approach: estrategia y tipos de pruebas a aplicar.",
      "Criteria: reglas para aceptar, rechazar, iniciar o finalizar pruebas.",
      "Environment: ambientes, datos, herramientas y configuración.",
      "Deliverables: entregables como casos, evidencias, reportes o documentos.",
      "Incidents: flujo de gestión de defectos o incidentes.",
      "Risks: probabilidad, impacto, mitigación y contingencia.",
      "Tasks: tareas, asignaciones y planificación del trabajo."
    ],
    example: "Alcance: probar ABM de usuarios. Fuera de alcance: usabilidad. Criterio: cero defectos bloqueantes antes de liberar.",
    summary: "un plan responde qué, quién, cómo, dónde, cuándo, con qué criterios y con qué riesgos."
  },
  {
    title: "Casos de Prueba",
    keywords: "Casos prueba positivos negativos campos entradas condiciones resultados esperados",
    intro: "Un caso de prueba es un conjunto de entradas, condiciones de ejecución y resultados esperados con un objetivo particular. Es una pregunta que se le hace al sistema para obtener información.",
    concepts: [
      "Escenario: título claro de lo que se quiere probar.",
      "Caso de prueba: detalle ejecutable con precondiciones, datos, pasos y resultado esperado.",
      "Casos positivos: muestran que la funcionalidad esperada se cumple.",
      "Casos negativos: prueban errores, límites o situaciones inválidas.",
      "Campos frecuentes: ID, título, descripción, tipo, precondiciones, datos de entrada, pasos, postcondiciones y adjuntos.",
      "También puede incluir: diseñado por, asignado a, prioridad, resultado esperado, fecha, comentarios, requerimientos asociados, plan asociado, suite, versión, keywords y dependencias."
    ],
    example: "Escenario: login exitoso. Caso: abrir login, ingresar usuario válido, ingresar contraseña correcta, presionar ingresar y verificar Home.",
    summary: "escenario dice qué probar; caso de prueba dice cómo probarlo."
  },
  {
    title: "Implementación, Ejecución y Reporte",
    keywords: "Implementación ejecución reporte roles responsable analista diseñador automatizador tester evidencias",
    intro: "Después del análisis y diseño, las pruebas deben prepararse, ejecutarse y reportarse. Cada etapa tiene responsables y artefactos esperados.",
    concepts: [
      "Planificación: responsable de pruebas; artefacto principal, plan de pruebas.",
      "Análisis: analista de pruebas; artefacto principal, ideas o escenarios de prueba.",
      "Diseño: diseñador de pruebas; artefactos, casos y datos de prueba.",
      "Implementación: implementador o automatizador; artefactos, pasos, suites o scripts.",
      "Ejecución: tester o automatizador; resultados de ejecución y evidencias.",
      "Reporte: tester; defectos, estado, avance y conclusiones sobre calidad."
    ],
    example: "Un caso diseñado no alcanza: debe tener datos preparados, ambiente disponible, ejecución registrada y resultado reportado.",
    summary: "probar bien incluye preparar, ejecutar, evidenciar y comunicar."
  },
  {
    title: "Escenarios para Examen",
    keywords: "Escenarios examen login pago factura sube desarrollo verdadero falso multiple choice",
    intro: "El profesor suele mezclar verdadero/falso, multiple choice y desarrollo. En desarrollo importa justificar con conceptos técnicos y ejemplos concretos.",
    concepts: [
      "El escenario debe ser un título claro de lo que se quiere probar.",
      "No confundas escenario con paso a paso completo.",
      "Inicio de sesión exitoso con credenciales válidas.",
      "Inicio de sesión rechazado con contraseña incorrecta.",
      "Login con campos obligatorios vacíos.",
      "Pago exitoso de factura con comprobante generado.",
      "Pago rechazado por datos inválidos o monto incorrecto.",
      "Recarga SUBE rechazada por monto fuera de rango."
    ],
    example: "Si piden 3 escenarios de login, no escribas pasos. Escribí situaciones: exitoso, credenciales inválidas y campos vacíos.",
    summary: "en examen, escenario claro y específico vale más que una frase genérica."
  },
  {
    title: "Resumen General",
    keywords: "Resumen general parcial mapa mental repaso preguntas modelo respuestas examen final",
    intro: "Este módulo sirve para repasar antes del parcial y conectar todos los temas.",
    concepts: [
      "V&V: correcto para el usuario vs correcto según especificación.",
      "Testing: ejecución, evidencia e información.",
      "Calidad: QA previene, QC controla, QM gestiona.",
      "Principios: no se prueba todo; se prioriza por riesgo y contexto.",
      "Agile: colaboración, cambio y entrega de valor.",
      "Historias: perfil, necesidad, valor y criterios.",
      "ISO 25010: ocho características y sus subcaracterísticas.",
      "Proceso: planificar, analizar, diseñar, implementar, ejecutar y reportar.",
      "Plan y casos: ordenar, ejecutar, evidenciar y comunicar.",
      "Preguntas clave: diferenciar validación/verificación, explicar testing, nombrar principios, explicar criterios, ISO 25010, SPACE DIRT y escenario vs caso."
    ],
    example: "Si te dan una historia, preguntate: ¿entiendo la necesidad?, ¿tiene criterios?, ¿qué riesgos hay?, ¿qué escenarios salen?",
    summary: "si podés explicar los conceptos y aplicarlos a escenarios, estás mucho más cerca de promocionar."
  }
];
