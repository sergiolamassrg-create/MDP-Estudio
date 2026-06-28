window.MDP_STUDY_MODULES = [
  {
    title: "Validación, Verificación y Testing",
    keywords: "Validación Verificación Testing James Bach Dijkstra sistema correcto software correctamente",
    what: "Validación, verificación y testing son controles distintos sobre el producto. Validar mira si el sistema resuelve la necesidad real del usuario. Verificar mira si lo construido respeta el modelo, la especificación, la historia o el criterio. Testing es verificación dinámica porque ejecuta el sistema para obtener evidencia.",
    why: "Porque un sistema puede estar perfectamente programado y aun así resolver un problema que nadie tenía. También puede resolver el problema correcto, pero estar mal implementado. Por eso existen dos preguntas distintas: ¿estamos construyendo el sistema correcto? y ¿lo estamos construyendo correctamente?",
    concepts: [
      "Validación: contrasta el modelo o producto con el usuario o cliente clave.",
      "Verificación: contrasta el producto con la especificación o modelo ya validado.",
      "Testing: implica ejecutar el sistema y comparar resultado real contra resultado esperado.",
      "James Bach: testing compara lo invisible, el código, con lo ambiguo, la especificación.",
      "Dijkstra: testing muestra presencia de errores, pero no demuestra ausencia total de errores."
    ],
    everyday: "Comprar una silla perfecta de fabricación pero incómoda sería una falla de validación: está bien hecha, pero no sirve para la necesidad.",
    software: "En recuperación de contraseña, validar es confirmar que el usuario realmente puede recuperar acceso. Verificar es comprobar que el correo, token y reglas funcionen según la historia.",
    professor: [
      "Diferenciar validación y verificación.",
      "Explicar por qué testing no garantiza ausencia de errores.",
      "Definir testing como verificación dinámica."
    ],
    mistake: "Decir que validación y verificación son sinónimos. No lo son: una mira valor para usuario y la otra cumplimiento contra lo definido.",
    summary: "validación mira necesidad; verificación mira cumplimiento; testing ejecuta para obtener información."
  },
  {
    title: "Calidad, QM, QA, QC y Testing",
    keywords: "Calidad QM QA QC Testing aseguramiento control gestión calidad",
    what: "Calidad es el grado en que un producto, servicio o sistema cumple requisitos. QM, QA, QC y Testing son conceptos relacionados, pero no significan lo mismo.",
    why: "Porque no alcanza con encontrar errores al final. La calidad se dirige, se previene, se controla y se diagnostica. Testing aporta información, pero no agrega calidad por sí solo.",
    concepts: [
      "QM: Quality Management. Gestiona, dirige y coordina políticas, objetivos y actividades de calidad.",
      "QA: Quality Assurance. Previene problemas mejorando procesos y prácticas.",
      "QC: Quality Control. Controla el producto para detectar si cumple requisitos.",
      "Testing: ejecuta el sistema para encontrar información sobre calidad, defectos y riesgos.",
      "Modelos de calidad/excelencia: son voluntarios, adaptables, autoevaluables y no certificables."
    ],
    everyday: "En una panadería, QM define estándares, QA mejora el proceso de amasado, QC revisa el pan terminado y testing sería probar una muestra para detectar problemas.",
    software: "En una app bancaria, QA revisa criterios antes de desarrollar; QC revisa el producto; testing ejecuta login, pagos y comprobantes para informar defectos.",
    professor: [
      "Diferenciar QA, QC, QM y Testing.",
      "Explicar por qué testing no construye calidad solo.",
      "Relacionar calidad con cumplimiento de requisitos."
    ],
    mistake: "Creer que QA es solamente probar pantallas. QA tiene foco preventivo y participa antes de que el producto esté terminado.",
    summary: "QM gestiona; QA previene; QC controla; Testing informa."
  },
  {
    title: "Testing vs Debugging",
    keywords: "Testing Debugging Bug defecto error falla desarrollador tester breakpoint",
    what: "Testing busca exponer defectos y generar información. Debugging es el proceso de identificar la causa de un defecto y corregirlo.",
    why: "Porque encontrar un bug no es lo mismo que corregirlo. El tester evidencia el problema; el desarrollador investiga la causa, depura y modifica el código.",
    concepts: [
      "Bug: defecto o comportamiento incorrecto donde el resultado real no coincide con el esperado.",
      "Testing: ejecuta el sistema, observa resultados y reporta información.",
      "Debugging: analiza la causa del defecto y la corrige.",
      "Breakpoints: puntos de corte usados por desarrollo para inspeccionar el programa.",
      "Un bug puede venir de requisitos, diseño, código, datos, ambiente o configuración."
    ],
    everyday: "Si una lámpara no prende, probar el interruptor detecta el problema. Abrir la instalación para encontrar el cable cortado y arreglarlo es debugging.",
    software: "QA reporta que el pago genera comprobante duplicado. Desarrollo depura el flujo, encuentra que el evento se dispara dos veces y corrige la causa.",
    professor: [
      "Explicar qué es un bug.",
      "Diferenciar testing y debugging.",
      "Indicar quién detecta y quién corrige normalmente."
    ],
    mistake: "Responder que testing es corregir errores. Testing detecta e informa; debugging corrige.",
    summary: "testing evidencia el defecto; debugging encuentra la causa y la corrige."
  },
  {
    title: "Riesgos en Testing",
    keywords: "Riesgos probabilidad impacto negocio proyecto producto externos testing basado riesgos",
    what: "Un riesgo es una situación posible que puede afectar el proyecto, el negocio, el producto o el contexto externo. Se analiza por probabilidad e impacto.",
    why: "Porque no se puede probar todo. Los riesgos ayudan a decidir qué probar primero, qué profundidad usar y dónde invertir tiempo y presupuesto.",
    concepts: [
      "Probabilidad: qué tan posible es que ocurra el riesgo.",
      "Impacto: qué daño produce si ocurre.",
      "Riesgo de negocio: afecta a la organización o estrategia.",
      "Riesgo de proyecto: afecta plazos, costos, equipo o alcance.",
      "Riesgo de producto: afecta calidad, desempeño o funcionamiento.",
      "Riesgo externo: viene de factores ajenos, como inflación, pandemia o regulaciones."
    ],
    everyday: "Si salís sin paraguas con pronóstico de tormenta, evaluás probabilidad de lluvia e impacto de mojarte.",
    software: "En Mercado Pago, un error de monto tiene alto impacto. Aunque sea poco probable, merece pruebas prioritarias.",
    professor: [
      "Nombrar tipos de riesgo.",
      "Explicar testing basado en riesgos.",
      "Relacionar riesgo con tiempo y presupuesto."
    ],
    mistake: "Pensar que riesgo es solamente un bug. El riesgo es algo que podría pasar y afectar objetivos.",
    summary: "riesgo combina probabilidad e impacto; testing lo usa para priorizar."
  },
  {
    title: "Principios del Testing",
    keywords: "Principios testing defectos exhaustivas temprano agrupamiento pesticida contexto ausencia errores independencia",
    what: "Los principios del testing son ideas base que explican cómo pensar las pruebas y qué límites tiene probar software.",
    why: "Porque testing no es ejecutar casos al azar. Los principios ayudan a decidir cuándo, cuánto, dónde y cómo probar.",
    concepts: [
      "Las pruebas muestran presencia de defectos, no ausencia total.",
      "Las pruebas exhaustivas son imposibles: testing es muestral.",
      "Probar temprano reduce costo y evita asumir requisitos ambiguos.",
      "Los defectos suelen agruparse en pocos módulos críticos.",
      "Paradoja del pesticida: repetir siempre las mismas pruebas pierde efectividad.",
      "Las pruebas dependen del contexto.",
      "Ausencia de errores encontrados no significa producto útil.",
      "La independencia reduce sesgos, aunque no elimina colaboración."
    ],
    everyday: "Revisar una casa antes de comprarla reduce riesgo, pero no garantiza que nunca aparezca un problema oculto.",
    software: "No se prueba igual una app bancaria que una agenda personal. En pagos pesan más seguridad, integridad y comprobantes.",
    professor: [
      "Nombrar y explicar 3 o más principios.",
      "Explicar por qué no existen pruebas exhaustivas.",
      "Relacionar principios con riesgo y contexto."
    ],
    mistake: "Decir que si pasaron todas las pruebas el software no tiene errores.",
    summary: "testing reduce incertidumbre, pero no elimina todos los riesgos."
  },
  {
    title: "Desarrollo de Software y SDLC",
    keywords: "Desarrollo software SDLC análisis diseño desarrollo testing implementación mantenimiento comunicación planificación viabilidad",
    what: "El desarrollo de software ordena el trabajo desde la necesidad inicial hasta el mantenimiento del producto. SDLC es el ciclo de vida completo del desarrollo.",
    why: "Porque construir software no es solo programar. Hay que entender, diseñar, construir, probar, implementar y mantener.",
    concepts: [
      "Análisis: entender y especificar qué debe hacer el sistema.",
      "Diseño: definir arquitectura, patrones y solución técnica.",
      "Desarrollo: traducir requerimientos a código.",
      "Testing: verificar y validar contra historias, criterios y expectativas.",
      "Implementación: instalar o desplegar en el ambiente de uso.",
      "Mantenimiento: incorporar cambios, mejoras y correcciones.",
      "SDLC: comunicación, planificación, viabilidad, análisis, diseño, codificación, integración, pruebas, implementación, formación y mantenimiento."
    ],
    everyday: "Construir una casa requiere relevar necesidades, diseñar planos, construir, revisar, entregar y mantener.",
    software: "Si una historia queda ambigua en análisis, QA debe preguntar antes de que desarrollo implemente algo incorrecto.",
    professor: [
      "Ordenar etapas del proceso de desarrollo.",
      "Diferenciar desarrollo, testing e implementación.",
      "Nombrar actividades del SDLC."
    ],
    mistake: "Reducir el ciclo de vida a codificación y pruebas.",
    summary: "el SDLC cubre todo el recorrido: entender, construir, probar, entregar y mantener."
  },
  {
    title: "Modelo V y Modelo W",
    keywords: "Modelo V Modelo W verificación validación niveles pruebas temprano",
    what: "El Modelo V relaciona etapas de desarrollo con niveles de prueba. El Modelo W refuerza la participación temprana de testing durante todo el ciclo.",
    why: "Porque ayuda a entender que probar no debería aparecer recién al final. Cada etapa puede revisarse y relacionarse con un tipo de prueba.",
    concepts: [
      "Modelo V: baja por etapas de definición y construcción, y sube por etapas de prueba y validación.",
      "Cada nivel de prueba se relaciona con una etapa previa de desarrollo.",
      "Modelo W: muestra dos recorridos paralelos, desarrollo y pruebas, trabajando desde etapas tempranas.",
      "La idea central es detectar problemas antes de que sean caros de corregir.",
      "Se conecta con el principio de testing temprano."
    ],
    everyday: "No esperás a terminar una casa para revisar si los planos estaban mal: revisás durante el proceso.",
    software: "Mientras se define una historia, QA puede revisar criterios y detectar ambigüedad antes de que se escriba código.",
    professor: [
      "Explicar por qué testing temprano reduce costo.",
      "Relacionar Modelo V/W con verificación y validación.",
      "Diferenciar probar al final vs participar durante el ciclo."
    ],
    mistake: "Creer que el Modelo V significa que QA solo prueba cuando desarrollo termina.",
    summary: "Modelo V conecta etapas y pruebas; Modelo W enfatiza testing temprano y paralelo."
  },
  {
    title: "Agile, Scrum y Kanban",
    keywords: "Agile Scrum Kanban filosofía framework método visual manifiesto 12 principios",
    what: "Agile es una filosofía de trabajo. Scrum es un framework ágil con roles, eventos y sprints. Kanban es un método visual para gestionar flujo.",
    why: "Porque no son lo mismo. Separarlos evita confundir valores ágiles con herramientas concretas de organización.",
    concepts: [
      "Agile: prioriza colaboración, cambio, entrega temprana y software funcionando.",
      "Scrum: organiza trabajo en sprints con Product Owner, Scrum Master y equipo.",
      "Kanban: visualiza trabajo en columnas y limita trabajo en progreso.",
      "Agile acepta cambios incluso tarde si acercan valor al cliente.",
      "El software funcionando es la medida principal de progreso.",
      "La simplicidad y la mejora continua son esenciales."
    ],
    everyday: "Agile es la mentalidad de adaptarse; Scrum es jugar con reglas de partido; Kanban es ver el tablero de tareas y el flujo.",
    software: "Una historia puede planificarse en un sprint Scrum o fluir por columnas Kanban: pendiente, en curso, prueba y terminado.",
    professor: [
      "Diferenciar Agile, Scrum y Kanban.",
      "Nombrar valores/principios ágiles.",
      "Explicar entrega temprana y adaptación al cambio."
    ],
    mistake: "Decir que Agile, Scrum y Kanban son exactamente lo mismo.",
    summary: "Agile es filosofía; Scrum es framework; Kanban es método visual."
  },
  {
    title: "Historias de Usuario",
    keywords: "Historias usuario perfil necesidad propósito PO Scrum Kanban QA preguntas",
    what: "Una historia de usuario expresa una necesidad desde el punto de vista del usuario final: Como [perfil], quiero [necesidad], para [valor].",
    why: "Porque permite que negocio, desarrollo y QA hablen de valor, no solo de pantallas o tareas técnicas.",
    concepts: [
      "Perfil: quién necesita la funcionalidad.",
      "Necesidad: qué quiere lograr.",
      "Propósito: para qué lo necesita y qué valor aporta.",
      "Normalmente las redacta el Product Owner, aunque cualquiera puede proponerlas.",
      "En Scrum ayudan a planificar sprints.",
      "En Kanban ingresan al backlog y avanzan por el flujo.",
      "Cuando QA recibe una historia primero pregunta: ¿la entiendo?, ¿tiene criterios?, ¿hay riesgos?, ¿qué escenarios salen?"
    ],
    everyday: "No es lo mismo decir 'quiero una puerta' que explicar quién la necesita, para qué espacio y qué problema resuelve.",
    software: "Como cliente, quiero pagar una factura desde la app, para evitar ir a una sucursal y obtener comprobante inmediato.",
    professor: [
      "Escribir una historia con Como/Quiero/Para.",
      "Explicar quién las redacta y dónde se usan.",
      "Describir qué hace QA al recibir una historia."
    ],
    mistake: "Pasar directo a probar sin entender necesidad, criterios y riesgos.",
    summary: "una historia clara conecta usuario, necesidad, valor y pruebas posibles."
  },
  {
    title: "Criterios de Aceptación",
    keywords: "Criterios aceptación Given When Then terminado aceptable comportamiento",
    what: "Los criterios de aceptación son condiciones que debe cumplir una historia para considerarse terminada y aceptable.",
    why: "Porque una historia sin criterios queda abierta a interpretaciones. Los criterios reducen ambigüedad y permiten diseñar escenarios.",
    concepts: [
      "Definen qué debe cumplir el producto.",
      "Suelen ser definidos por producto con colaboración de QA y desarrollo.",
      "Ayudan a saber cuándo una historia está terminada.",
      "Given/When/Then describe comportamiento.",
      "Given: contexto o condición inicial.",
      "When: acción o evento.",
      "Then: consecuencia o resultado esperado."
    ],
    everyday: "Si encargás una torta, el criterio puede ser: debe ser de chocolate, para 10 personas y estar lista a las 18.",
    software: "Given un usuario registrado, When ingresa email y contraseña válidos, Then accede a la pantalla principal.",
    professor: [
      "Explicar qué son criterios de aceptación.",
      "Escribir un Given/When/Then.",
      "Relacionar criterios con escenarios y casos."
    ],
    mistake: "Confundir Given/When/Then con la estructura de la historia de usuario.",
    summary: "los criterios dicen cuándo una historia cumple lo esperado."
  },
  {
    title: "Buenas Historias: 3C e INVEST",
    keywords: "Buenas historias 3C INVEST Card Conversation Confirmation Independent Negotiable Valuable Estimable Small Testable",
    what: "3C e INVEST son guías para evaluar si una historia de usuario está bien trabajada y puede convertirse en pruebas claras.",
    why: "Porque una historia mal escrita genera dudas, retrabajo, estimaciones pobres y pruebas débiles.",
    concepts: [
      "Card: la tarjeta resume la necesidad.",
      "Conversation: la historia dispara conversación.",
      "Confirmation: los criterios confirman la aceptación.",
      "Independent: independiente.",
      "Negotiable: negociable.",
      "Valuable: valiosa.",
      "Estimable: estimable.",
      "Small: pequeña.",
      "Testable: testeable."
    ],
    everyday: "Una consigna buena para un trabajo práctico debe ser entendible, acotada y evaluable.",
    software: "Una historia como 'quiero seguridad' no es testeable. Debe convertirse en una necesidad concreta con criterios verificables.",
    professor: [
      "Nombrar 3C.",
      "Explicar INVEST.",
      "Identificar si una historia es testeable."
    ],
    mistake: "Creer que una historia larga y detallada siempre es mejor. Si no es clara y testeable, falla.",
    summary: "3C explica cómo trabajar la historia; INVEST ayuda a medir su calidad."
  },
  {
    title: "ISO 25010",
    keywords: "ISO 25010 funcionales no funcionales adecuación compatibilidad portabilidad mantenibilidad usabilidad fiabilidad seguridad",
    what: "ISO 25010 es un modelo de calidad del producto de software. Organiza características funcionales y no funcionales para evaluar calidad.",
    why: "Porque que una función haga algo no alcanza. También importa si es segura, usable, mantenible, confiable, compatible y portable.",
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
      "Atributos funcionales: completitud, corrección y pertinencia funcional.",
      "Compatibilidad: convivir y comunicarse con otros sistemas.",
      "Portabilidad: mover el software a otro entorno.",
      "Mantenibilidad: poder modificarlo sin romperlo todo.",
      "Usabilidad: que el usuario pueda entenderlo, aprenderlo y usarlo.",
      "Fiabilidad: que siga funcionando correctamente ante condiciones normales o fallos.",
      "Seguridad: proteger datos, identidad, integridad y responsabilidad.",
      "Eficiencia: responder bien usando recursos razonables."
    ],
    everyday: "Un auto no solo debe arrancar. También debe ser seguro, fácil de manejar, confiable y mantenible.",
    software: "Un login puede funcionar, pero además debe ser seguro, usable, confiable, eficiente y accesible.",
    professor: [
      "Nombrar características ISO 25010.",
      "Diferenciar funcional y no funcional.",
      "Dar ejemplos concretos por característica."
    ],
    mistake: "Pensar que calidad es solo que la funcionalidad pase.",
    summary: "ISO 25010 amplía calidad: funcionar, rendir, convivir, usarse, resistir, protegerse, mantenerse y moverse."
  },
  {
    title: "Testing Agile",
    keywords: "Testing Agile tradicional mentalidad QA temprano calidad compartida bugs",
    what: "Testing Agile es la forma de hacer QA dentro de un contexto ágil, participando desde temprano y compartiendo calidad con todo el equipo.",
    why: "Porque en testing tradicional QA prueba cuando DEV terminó. En testing agile QA participa desde que nace la idea, pregunta, previene y acompaña.",
    concepts: [
      "Testing durante sobre testing al final.",
      "Prevenir bugs sobre solo encontrar bugs.",
      "Entender lo que se testea sobre verificar mecánicamente.",
      "Construir el mejor sistema sobre romper el sistema.",
      "El equipo es responsable de la calidad, no solo QA.",
      "QA participa en reuniones, refinamiento, criterios y revisión.",
      "Las métricas deben estar alineadas al comportamiento buscado."
    ],
    everyday: "Es más barato corregir una receta antes de cocinar para cien personas que tirar toda la comida al final.",
    software: "QA pregunta por criterios en refinamiento antes de que desarrollo programe una historia ambigua.",
    professor: [
      "Comparar testing tradicional y testing agile.",
      "Explicar calidad compartida.",
      "Nombrar ideas del manifiesto de testing agile."
    ],
    mistake: "Creer que QA Agile solo prueba más rápido. El cambio central es participar antes y prevenir.",
    summary: "QA Agile deja de esperar el final y entra desde el origen de la idea."
  },
  {
    title: "Proceso de Pruebas",
    keywords: "Proceso pruebas planificación seguimiento control análisis diseño implementación ejecución reporte criterios estimar priorizar",
    what: "El proceso de pruebas ordena el trabajo de QA desde la planificación hasta el reporte.",
    why: "Porque sin proceso se prueba al azar. Con proceso se define estrategia, prioridad, criterios, datos, evidencias y comunicación.",
    concepts: [
      "Planificación: objetivos, alcance, estrategia, recursos y cronograma.",
      "Seguimiento y control: métricas, avance y desvíos.",
      "Análisis: historias, riesgos, targets e ideas de prueba.",
      "Diseño: escenarios, casos, datos y resultados esperados.",
      "Implementación: suites, pasos, scripts, ambiente y datos.",
      "Ejecución: resultados, evidencias y defectos.",
      "Reporte: estado, defectos, avance y conclusiones."
    ],
    everyday: "Preparar un viaje requiere plan, seguimiento, reservas, ejecución y revisión de resultados.",
    software: "Antes de ejecutar un caso, QA debe tener historia entendida, datos listos, ambiente disponible y resultado esperado definido.",
    professor: [
      "Nombrar etapas del proceso.",
      "Indicar qué produce una etapa.",
      "Relacionar planificación con criterios y prioridades."
    ],
    mistake: "Pensar que proceso de pruebas es solo ejecución.",
    summary: "el proceso convierte requisitos en evidencia útil para decidir."
  },
  {
    title: "Análisis, Diseño y Dependencias",
    keywords: "Análisis diseño targets ideas escenarios casos drivers stubs dependencias automatización",
    what: "En análisis se identifica qué probar. En diseño se define cómo probarlo. Las dependencias son elementos que una prueba necesita para poder ejecutarse.",
    why: "Porque no siempre todos los componentes están disponibles. Drivers, stubs y dependencias permiten probar partes del sistema aunque falte algo.",
    concepts: [
      "Target de prueba: elemento o comportamiento a evaluar.",
      "Idea o escenario: declaración simple de lo que se quiere probar.",
      "Caso de prueba: detalle con pasos, datos y resultado esperado.",
      "Dependencia: componente, dato, servicio, ambiente o condición necesaria para ejecutar una prueba.",
      "Driver: simula entradas o invoca el componente bajo prueba.",
      "Stub: simula un componente externo o respuesta esperada.",
      "Automatización: puede convertir pasos repetibles en scripts."
    ],
    everyday: "Para probar un cargador necesitás electricidad. Esa electricidad es una dependencia.",
    software: "Si el servicio de pagos no está disponible, un stub puede simular respuesta aprobada o rechazada para probar el flujo.",
    professor: [
      "Diferenciar escenario y caso.",
      "Explicar drivers y stubs.",
      "Nombrar dependencias de una prueba."
    ],
    mistake: "Nombrar drivers y stubs sin explicar qué problema resuelven: probar cuando falta una parte del sistema.",
    summary: "análisis decide qué probar; diseño define cómo; dependencias condicionan si se puede ejecutar."
  },
  {
    title: "Plan de Pruebas",
    keywords: "Plan pruebas SPACE DIRT Scope People Approach Criteria Environment Deliverables Incidents Risks Tasks",
    what: "El plan de pruebas define cómo se va a organizar el trabajo de testing. SPACE DIRT es una regla mnemotécnica para recordar qué debe contener.",
    why: "Porque un equipo necesita saber alcance, roles, estrategia, ambiente, criterios, entregables, incidentes, riesgos y tareas antes de probar.",
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
      "Scope: qué se prueba y qué no se prueba.",
      "People: roles y responsabilidades.",
      "Approach: estrategia y tipos de pruebas.",
      "Criteria: reglas de inicio, aceptación, rechazo o finalización.",
      "Environment: ambientes, datos, herramientas y configuración.",
      "Deliverables: casos, evidencias, reportes o documentos.",
      "Incidents: flujo de gestión de defectos.",
      "Risks: probabilidad, impacto, mitigación y contingencia.",
      "Tasks: tareas, asignaciones y planificación."
    ],
    everyday: "Antes de organizar un evento, definís alcance, personas, lugar, entregables, riesgos y tareas.",
    software: "Alcance: probar ABM de usuarios. Fuera de alcance: usabilidad. Criterio: cero defectos bloqueantes antes de liberar.",
    professor: [
      "Explicar para qué sirve SPACE DIRT.",
      "Nombrar componentes del plan.",
      "Diferenciar alcance y fuera de alcance."
    ],
    mistake: "Memorizar SPACE DIRT como lista sin explicar que ordena el plan de pruebas.",
    summary: "SPACE DIRT ayuda a recordar todo lo importante de un plan de pruebas."
  },
  {
    title: "Casos de Prueba",
    keywords: "Casos prueba escenarios qué cómo positivos negativos campos resultado esperado",
    what: "Un escenario dice qué probar. Un caso de prueba dice cómo probarlo con datos, pasos, condiciones y resultado esperado.",
    why: "Porque a veces alcanza con una idea simple, pero otras veces se necesita detalle ejecutable para repetir, evidenciar o automatizar.",
    concepts: [
      "Escenario: título claro de lo que se quiere probar.",
      "Caso: conjunto de entradas, condiciones de ejecución y resultados esperados.",
      "Caso positivo: valida caminos correctos.",
      "Caso negativo: valida errores, límites o situaciones inválidas.",
      "Campos frecuentes: ID, título, descripción, tipo, precondiciones, datos, pasos, postcondiciones y adjuntos.",
      "También puede incluir prioridad, resultado esperado, requerimiento asociado, plan, suite, versión, keywords y dependencias."
    ],
    everyday: "Escenario: preparar café. Caso: poner agua, filtro, café, encender máquina y verificar resultado.",
    software: "Escenario: login exitoso. Caso: abrir login, ingresar usuario válido, ingresar contraseña correcta, presionar ingresar y verificar Home.",
    professor: [
      "Diferenciar escenario y caso.",
      "Escribir escenarios de login o pago.",
      "Nombrar campos de un caso de prueba."
    ],
    mistake: "Escribir pasos cuando piden escenarios, o escribir escenarios demasiado genéricos.",
    summary: "escenario = qué probar; caso = cómo probarlo."
  },
  {
    title: "Implementación, Ejecución y Reporte",
    keywords: "Implementación ejecución reporte responsable analista diseñador automatizador tester evidencias",
    what: "Después de analizar y diseñar, las pruebas se preparan, se ejecutan y se reportan.",
    why: "Porque una prueba sin datos, ambiente, evidencia o reporte no deja información útil para decidir.",
    concepts: [
      "Planificación: responsable de pruebas; artefacto principal, plan de pruebas.",
      "Análisis: analista de pruebas; artefacto principal, ideas o escenarios.",
      "Diseño: diseñador de pruebas; artefactos, casos y datos.",
      "Implementación: implementador o automatizador; pasos, suites o scripts.",
      "Ejecución: tester o automatizador; resultados y evidencias.",
      "Reporte: defectos, estado, avance y conclusiones."
    ],
    everyday: "No alcanza con planear estudiar: hay que preparar material, estudiar, medir avance y revisar qué falta.",
    software: "Un caso diseñado debe tener datos, ambiente disponible, ejecución registrada y resultado reportado.",
    professor: [
      "Asociar etapas con roles y artefactos.",
      "Diferenciar implementación de ejecución.",
      "Explicar por qué se reporta."
    ],
    mistake: "Confundir implementación de pruebas con implementación del software en producción.",
    summary: "probar bien incluye preparar, ejecutar, evidenciar y comunicar."
  },
  {
    title: "Escenarios para Examen",
    keywords: "Escenarios examen login pago factura SUBE verdadero falso multiple choice desarrollo",
    what: "El parcial suele mezclar verdadero/falso, multiple choice y desarrollo. En desarrollo importa justificar con conceptos técnicos y ejemplos claros.",
    why: "Porque el profesor no evalúa solo memoria: evalúa si podés aplicar conceptos a situaciones de software.",
    concepts: [
      "Un escenario debe ser un título claro de lo que se quiere probar.",
      "No confundas escenario con paso a paso.",
      "Inicio de sesión exitoso con credenciales válidas.",
      "Inicio de sesión rechazado con contraseña incorrecta.",
      "Login con campos obligatorios vacíos.",
      "Pago exitoso de factura con comprobante generado.",
      "Pago rechazado por datos inválidos o monto incorrecto.",
      "Recarga SUBE rechazada por monto fuera de rango."
    ],
    everyday: "Si te piden situaciones de riesgo en una salida, no escribís todo el itinerario: nombrás lluvia, demora o pérdida de documentos.",
    software: "Si piden tres escenarios de login: exitoso, credenciales inválidas y campos vacíos.",
    professor: [
      "Pedir escenarios de login, pago o recarga.",
      "Pedir definiciones cortas y justificadas.",
      "Combinar verdadero/falso con desarrollo."
    ],
    mistake: "Responder con frases genéricas como 'probar que funcione' sin escenario específico.",
    summary: "para el parcial, concepto claro + ejemplo concreto + justificación corta."
  },
  {
    title: "Resumen General",
    keywords: "Resumen parcial preguntas modelo repaso mapa mental promocionar",
    what: "Este módulo conecta todos los temas para repasar antes del parcial.",
    why: "Porque el examen mezcla definiciones, relaciones y aplicación práctica. Hay que saber explicar y usar los conceptos.",
    concepts: [
      "V&V: correcto para el usuario vs correcto según especificación.",
      "Calidad: QM gestiona, QA previene, QC controla, Testing informa.",
      "Debugging: corrige la causa; testing evidencia el defecto.",
      "Riesgos: probabilidad e impacto para priorizar.",
      "Principios: no se prueba todo; se prueba por riesgo y contexto.",
      "Agile: filosofía; Scrum: framework; Kanban: método visual.",
      "Historias: perfil, necesidad, valor y criterios.",
      "ISO 25010: calidad funcional y no funcional.",
      "Proceso: planificar, analizar, diseñar, implementar, ejecutar y reportar.",
      "Plan: SPACE DIRT.",
      "Escenario: qué probar. Caso: cómo probarlo."
    ],
    everyday: "Es como armar un mapa antes de viajar: cada tema tiene un lugar y una relación con el resto.",
    software: "Si te dan una historia, preguntate: ¿la entiendo?, ¿tiene criterios?, ¿hay riesgos?, ¿qué escenarios salen?",
    professor: [
      "Diferenciar conceptos parecidos.",
      "Aplicar teoría en ejemplos.",
      "Justificar respuestas de desarrollo."
    ],
    mistake: "Memorizar listas sin poder explicar para qué existe cada concepto.",
    summary: "si podés explicar qué es, por qué existe y aplicarlo a un ejemplo, estás mucho más cerca de promocionar."
  }
];
