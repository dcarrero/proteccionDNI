'use strict';

/**
 * Sistema de internacionalización (i18n) para la aplicación Protege mi DNI
 * Soporta 9 idiomas: ES, CA, GL, EU, EN, FR, IT, PT, DE
 */
const i18n = (function() {
	const STORAGE_KEY = 'protegemidni-lang';
	const DEFAULT_LANG = 'es';

	// Idiomas disponibles
	const LANGUAGES = {
		es: 'Español',
		ca: 'Català',
		gl: 'Galego',
		eu: 'Euskara',
		en: 'English',
		fr: 'Français',
		it: 'Italiano',
		pt: 'Português',
		de: 'Deutsch'
	};

	// Traducciones
	const translations = {
		es: {
			// Título y meta
			'page.title': 'Protege mi DNI',
			'page.description': 'Crea fácilmente una copia del DNI que oculta los datos privados y muestra el motivo por el que lo estás compartiendo',

			// Header
			'header.title': 'Protección del DNI',

			// Introducción
			'intro.p1': 'Esta página te permite ocultar fácilmente los <a href="#porque" class="AbrirInfo">datos privados de tu DNI</a>. En ocasiones te pueden pedir una copia del DNI, pero lo que no hay que hacer es mandarles una foto tal cual ya que si cae en malas manos puede causarte graves problemas.',
			'intro.p2': 'Aquí puedes bloquear los datos que no son necesarios y sobreescribir un texto para que no lo puedan utilizar con otros propósitos, de esta manera la imagen que compartas será única para evitar que la reutilicen.',
			'intro.p3': 'Para empezar, pulsa en el botón de elegir foto y continúa con los pasos siguientes.',
			'intro.p3.offline': 'Todo este proceso se realiza únicamente en tu navegador, no se envían los datos a ninguna parte.',

			// Noscript
			'noscript': 'Esta página necesita que actives el Javascript para poder ejecutarla. Todo el proceso se hace en tu navegador y es imprescindible el uso de javascript.',

			// Wizard steps
			'step.photo': 'Foto',
			'step.type': 'Tipo',
			'step.position': 'Posición',
			'step.text': 'Texto',
			'step.save': 'Guardar',

			// Paso 1
			'step1.title': 'Foto',
			'step1.button': 'Elige la foto',

			// Paso 2
			'step2.title': 'Tipo de foto',
			'step2.description': 'Elige si estás usando la foto delantera o trasera del DNI; puedes ajustar el tamaño y posición del DNI a continuación.',
			'step2.format.label': 'Tipo de foto',
			'step2.validity.label': 'Ocultar Fecha de Nacimiento, Validez y Nº Soporte',
			'step2.validity.help': '¿qué es esto?',
			'step2.mask.label': 'Ocultar parcialmente el DNI',
			'step2.mask.help': '¿qué es esto?',

			// Paso 3
			'step3.title': 'Posición',
			'step3.description': 'Ajusta la orientación y posición para que el DNI se vea correctamente.',
			'step3.zoom': 'Acercar',
			'step3.rotate': 'Rotar',
			'step3.horizontal': 'Desp. Horizontal',
			'step3.vertical': 'Desp. Vertical',

			// Paso 4
			'step4.title': 'Texto',
			'step4.description': 'Escribe un texto para añadir sobre la imagen.',
			'step4.recipient.label': 'Destinatario:',
			'step4.recipient.placeholder': 'Ej: Hotel California, Banco X...',
			'step4.watermark.label': 'Texto completo:',
			'step4.watermark.default': 'Copia para …',
			'step4.help': 'El destinatario se añade automáticamente al texto. Puedes editar el texto completo directamente.',

			// Paso 5
			'step5.title': 'Guardar',
			'step5.description': 'Elige ahora si quieres guardar la imagen o directamente compartirla con una app (si tu navegador lo soporta).',
			'step5.save': 'Guardar',
			'step5.share': 'Compartir',

			// Navegación
			'nav.previous': 'Anterior',
			'nav.next': 'Siguiente',
			'nav.close': 'Cerrar progreso',

			// Controles
			'controls.rotateLeft': 'Girar a Izquierda',
			'controls.rotateRight': 'Girar a Derecha',
			'controls.reset': 'Deshacer cambios de tamaño y posición',
			'controls.expand': 'Ampliar a pantalla completa',
			'controls.collapse': 'Volver a vista normal',

			// Drag & Drop
			'dragdrop.text': 'Suelta aquí tu imagen',

			// FAQ
			'faq.title': 'Preguntas y respuestas',
			'faq.q1': '¿Qué hace la página?',
			'faq.a1': '<p>Se trata de seguir los pasos que recomienda la policía para proteger tu DNI, sin necesidad de que tengas que acordarte de todos y saber qué datos son importantes.</p><ol><li>Elige una foto de tu DNI. La imagen se convierte a blanco y negro y se limita su tamaño para no dar una copia de alta calidad.</li><li>Elige el formato de DNI que tienes y si es la parte delantera o trasera. En base a eso se ocultan los datos que no son necesario que nadie vea.</li><li>Ajusta si es necesario la posición de la foto para que se vea bien en la previsualización.</li><li>Añade un texto que se sobreescribirá como marca de agua, indicando para qué compartes la foto.</li><li>Pulsa en el botón para descargar la foto.</li></ol>',
			'faq.q2': '¿Por qué usarla?',
			'faq.a2.part1': 'Compartir tu DNI tiene el riesgo de que acabe en malas manos y sufras una <a href="https://maldita.es/malditateexplica/20220619/dni-enviar-foto-suplantacion/" target="_blank">suplantación de identidad</a>. A nivel general, las empresas <b>no</b> deberían tener acceso a la mayoría de datos de tu DNI. Puedes leer este pdf con el <a href="https://www.aepd.es/documento/2023-0048.pdf" target="_blank">informe 48/2023 de la <abbr title="Agencia Española de Protección de Datos">AEPD</abbr></a>. Ya se han dado casos de <a href="https://www.pymelegal.es/noticias/aepd/la-proteccion-de-datos-y-el-dni" target="_blank">sanciones a empresas</a>, por lo que si le mandas ese enlace a la empresa que te pida el DNI tal vez se lo piense dos veces.<br>Y desde luego, a nivel particular no tiene sentido que le mandes una copia o foto de tu DNI a otra persona. Sospecha si alguien te pide un DNI para una compra-venta!',
			'faq.a2.part2': 'Si tienes claro que necesita enviarles el DNI, lo que hay que hacer es seguir las <a href="https://www.rtve.es/noticias/20240604/pixelar-datos-recomendaciones-expertos-compartir-dni-internet/16132816.shtml" target="_blank">directrices de la Policía Nacional</a>, de forma que esa copia esté en blanco y negro, oculte los datos que no son necesarios para identificarte y se sobreescriba un texto para que el uso sea único.<br>Eso es precisamente lo que hace esta página de forma automatizada.',
			'faq.a2.part3': 'Si te manejas bien con la informática, tú puedes realizar los mismos pasos que se hacen en esta página.<br>Si por contra no sueles usar programas de edición gráfica, esta página te facilita esas tareas.<br>Incluso si tú eres de las personas a las que esto le parece trivial, piensa en tus familiares, amistades, ...<br>¿Te parece más sencillo explicarles cómo hacer estas operaciones por su cuenta, o enviarles un enlace o un zip para que lo puedan hacer de forma automatizada?.',
			'faq.q3': '¿Puedo fiarme de que no vas a hacer nada con mi DNI?',
			'faq.a3': '<p>La página no almacena ningún dato, no se usan cookies, no se usa ningún servicio de terceros y tu DNI solo se procesa en tu móvil/ordenador.</p><p>El código fuente puedes verlo pulsando F12, no está encriptado ni minimizado de ninguna forma. Además <a href="https://github.com/AlfonsoML/proteccionDNI/" target="_blank">está disponible en GitHub</a>, puedes descargarte <a href="https://github.com/AlfonsoML/proteccionDNI/archive/refs/heads/main.zip" target="_blank">todo el código completo</a>.<br>Si quieres tener la máxima seguridad, guárdate la página en tu ordenador/móvil y así sabes que el código no se va a modificar jamás.</p>',
			'faq.q4': '¿Estoy seguro tras proteger así el DNI?',
			'faq.a4': '<p>No, a pesar de ocultar los datos más privados, siempre has de tener cuidado cuando des tu DNI a cualquier empresa o persona. <a href="https://www.incibe.es/ciudadania/blog/precauciones-tener-en-cuenta-si-vas-enviar-tu-dni-por-internet" target="_blank">Puedes leer aquí las recomendaciones de <abbr title="Instituto Nacional de Ciberseguridad">INCIBE</abbr></a><br>Es como decir "He echado la llave en la puerta al salir de casa", eso es mejor que dejar la puerta abierta de par en par, pero un ladrón puede usar una ganzua, etc... al echar la llave evitas los problemas más básicos pero no es una seguridad completa.</p>',
			'faq.q5': '¿Debo usar "Ocultar Fecha de Nacimiento, Validez y Nº Soporte"?',
			'faq.a5': '<p>Estos datos os los pueden solicitar para hacer un "check-in" en alojamientos y verificar que el DNI está en vigor según el Real Decreto 933/2021. En su momento <a href="https://papafrikifeed.duckdns.org/@PapaFriki/episodes/ppf-wwwprotegemidnies-con-alfonso-martinez" target="_blank">Papá Friki</a> me comentó que en ocasiones el dato de Nº Soporte puede ser útil para verificar que no es un DNI falsificado, y por eso también puede ser necesario dejarlo visible.</p>',
			'faq.q6': '¿Para qué sirve "Ocultar parcialmente el DNI"?',
			'faq.a6': '<p>Seguramente no necesitarás activar esta opción. En el número de DNI se ocultan las 3 primeras y 2 últimas cifras según la <a href="https://www.aepd.es/sites/default/files/2019-09/orientaciones-da7.pdf" target="_blank">orientación para la aplicación provisional de la disposición adicional septima de la LOPDGDD</a><br>Puedes leer la solicitud y caso de uso en <a href="https://github.com/AlfonsoML/proteccionDNI/issues/12" target="_blank">la solicitud</a>.</p>',
			'faq.q7': 'Me piden una copia que no tenga marcas de agua',
			'faq.a7': '<p>En ese caso basta con que dejes en blanco el texto y lo que se hará es convertir a blanco y negro, ocultar las partes privadas pero no se sobreescribirá ningún texto.</p>',
			'faq.q8': '¿Puedo probar sin usar mi DNI?',
			'faq.a8': 'En la <a href="test.html">página de pruebas</a> tienes las imágenes de ejemplo de los diversos formatos de DNI. Pincha en cualquiera de ellas y se iniciará el proceso.',
			'faq.q9': '¿Puedo enlazar a esta página?',
			'faq.a9': '<p>Sí, en el caso de que necesites pedir a tus usuarios que te manden una copia del DNI (asegurate primero de que realmente la necesitas), puedes enlazar con esta página para que así te envíen una copia ya protegida y no te lleguen datos privados.</p><p>Además, en ese caso puedes enlazar la página con un parámetro que les rellene ya el destinatario de la copia. Se aceptan los siguientes parámetros según el idioma: <code>para</code>, <code>for</code>, <code>pour</code>, <code>per</code>, <code>für</code> (o <code>fur</code>).<br>Ejemplo: "https://password.es/id/?para=Hotel%20California" o "https://password.es/id/en/?for=Hotel%20California".<br>Naturalmente el usuario siempre podrá modificar ese texto, simplemente les puede facilitar un poco más el proceso.</p>',
			'faq.q10': '¿Es gratis?',
			'faq.a10': '<p>Sí, usar la página no tiene ningún coste.</p>',
			'faq.q11': 'Ya uso otro sistema que genera una marca de agua que no se puede quitar con IA',
			'faq.a11.part1': 'Lamentablemente, eso no está protegiendo realmente tu DNI, de hecho puede que ahora tus datos estén menos seguros que antes ya que el <a href="https://es.wikipedia.org/wiki/Teatro_de_seguridad" target="_blank">teatro de seguridad</a> te hace pensar que ese sistema está protegiendo tus datos cuando no es así.',
			'faq.a11.part2': 'La realidad es que un delincuente no necesita quitar la marca de agua.<br>Si tú le entregas una copia en la cual están visibles todos tus datos, esa persona abrirá un programa como Photoshop con una plantilla limpia de un DNI, escribirá por encima todos tus datos de Nº DNI, nombre, apellidos, fecha de expedición, caducidad, etc., puede que quiera poner su propia foto y además estará muy agradecido de que le enseñes exáctamente cómo es tu firma para poder replicarla sin problemas cuando quiera firmar algo.',
			'faq.a11.part3': 'Por tanto, haz caso a lo que dice la policía y oculta los datos de tu DNI antes de compartirlo. Y asegurate siempre de que realmente es necesario enviarles el DNI y que la empresa/persona a la que se lo envías es quien dice ser.',
			'faq.q12': 'Tengo un problema/idea, ¿cómo me pongo en contacto?',
			'faq.a12': '<p>Puedes crear un "issue" en el <a href="https://github.com/AlfonsoML/proteccionDNI/issues" target="_blank">GitHub del proyecto</a>, o puedes <a rel="me" href="https://mastodon.social/@alfonsoml" target="_blank">hacerlo en Mastodon</a>.</p>',

			// Footer
			'footer.privacy': 'Esta página no recoge ningún dato. No se envían datos a ninguna parte. No se usan cookies ni servicios de terceros.',
			'footer.source': 'Código fuente',
			'footer.original': 'Proyecto original',
			'footer.improvements': 'Mejoras por',
			'footer.github': 'Esta web en GitHub',

			// Alertas y mensajes
			'alert.error': 'Error inesperado',
			'alert.chooseImage': 'Escoge primero la imagen de tu DNI',
			'alert.preparingError': 'Error preparando DNI',
			'alert.invalidImage': 'Por favor, escoge una imagen válida',
			'alert.noWorker': 'El navegador no soporta WebWorkers',
			'alert.localFile': 'Para poder ejecutar el programa desde tu ordenador necesitas eliminar la cabecera marcada como <meta id="MetaCSP"...>\nSe trata de una protección adicional para el servidor web, pero en local el navegador está aplicando otras restricciones que no son compatibles.\nSi no la eliminas, tendrás errores a continuación, o puede que no se muestre ningún error pero no veas tampoco la imagen de tu DNI (Firefox).',
			'alert.workerError': 'Error creando WebWorker',
			'alert.generateError': 'No se ha podido generar la imagen',
			'alert.convertError': 'Error convirtiendo la imagen',
			'alert.shareError': 'Error',

			// Compartir
			'share.title': 'Copia de mi DNI',
			'share.text': 'Adjunto la copia de mi DNI para su uso exclusivo',
			'share.filename': 'protegido.jpg',

			// Watermark default
			'watermark.copy': 'Copia',
			'watermark.for': 'para',

			// Enlace externo
			'external.link': 'Enlace externo',

			// Formatos de documento
			'format.noMask': 'Sin máscara',
			'format.dni4Front': 'DNI Frontal (v4.0 desde 2021)',
			'format.dni4Back': 'DNI Trasera (v4.0 desde 2021)',
			'format.dni3Front': 'DNI Frontal (v3.0 2015-2021)',
			'format.dni3Back': 'DNI Trasera (v3.0 2015-2021)',
			'format.dni2Front': 'DNI Frontal (v2.0 hasta 2015)',
			'format.dni2Back': 'DNI Trasera (v2.0 hasta 2015)',
			'format.passport': 'Pasaporte genérico',
			'format.genericId': 'Documento de identidad genérico',
			'format.italyCie': 'Italia - CIE (Carta d\'Identità)',
			'format.franceCni': 'Francia - CNI (Carte Nationale)',
			'format.germanyPerso': 'Alemania - Personalausweis',
			'format.portugalCc': 'Portugal - Cartão de Cidadão',
			'format.euResidence': 'Permiso de Residencia UE',

			// Grupos de formatos
			'format.group.spain': '🇪🇸 España',
			'format.group.international': '🌍 Internacional',
			'format.group.generic': '📄 Genérico',

			// Tema
			'theme.auto': 'Tema automático',
			'theme.light': 'Tema claro',
			'theme.dark': 'Tema oscuro'
		},

		ca: {
			'page.title': 'Protegeix el meu DNI',
			'page.description': 'Crea fàcilment una còpia del DNI que amaga les dades privades i mostra el motiu pel qual l\'estàs compartint',
			'header.title': 'Protecció del DNI',
			'intro.p1': 'Aquesta pàgina et permet amagar fàcilment les <a href="#porque" class="AbrirInfo">dades privades del teu DNI</a>. De vegades et poden demanar una còpia del DNI, però el que no s\'ha de fer és enviar-los una foto tal qual ja que si cau en males mans pot causar-te greus problemes.',
			'intro.p2': 'Aquí pots bloquejar les dades que no són necessàries i sobreescriure un text perquè no el puguin utilitzar amb altres propòsits, d\'aquesta manera la imatge que comparteixis serà única per evitar que la reutilitzin.',
			'intro.p3': 'Per començar, prem el botó de triar foto i continua amb els passos següents.',
			'intro.p3.offline': 'Tot aquest procés es realitza únicament al teu navegador, no s\'envien les dades enlloc.',
			'noscript': 'Aquesta pàgina necessita que activis el Javascript per poder executar-la. Tot el procés es fa al teu navegador i és imprescindible l\'ús de javascript.',
			'step.photo': 'Foto',
			'step.type': 'Tipus',
			'step.position': 'Posició',
			'step.text': 'Text',
			'step.save': 'Desar',
			'step1.title': 'Foto',
			'step1.button': 'Tria la foto',
			'step2.title': 'Tipus de foto',
			'step2.description': 'Tria si estàs utilitzant la foto davantera o del darrere del DNI; pots ajustar la mida i posició del DNI a continuació.',
			'step2.format.label': 'Tipus de foto',
			'step2.validity.label': 'Amagar Data de Naixement, Validesa i Nº Suport',
			'step2.validity.help': 'què és això?',
			'step2.mask.label': 'Amagar parcialment el DNI',
			'step2.mask.help': 'què és això?',
			'step3.title': 'Posició',
			'step3.description': 'Ajusta l\'orientació i posició perquè el DNI es vegi correctament.',
			'step3.zoom': 'Apropar',
			'step3.rotate': 'Girar',
			'step3.horizontal': 'Desp. Horitzontal',
			'step3.vertical': 'Desp. Vertical',
			'step4.title': 'Text',
			'step4.description': 'Escriu un text per afegir sobre la imatge.',
			'step4.recipient.label': 'Destinatari:',
			'step4.recipient.placeholder': 'Ex: Hotel California, Banc X...',
			'step4.watermark.label': 'Text complet:',
			'step4.watermark.default': 'Còpia per a …',
			'step4.help': 'El destinatari s\'afegeix automàticament al text. Pots editar el text complet directament.',
			'step5.title': 'Desar',
			'step5.description': 'Tria ara si vols desar la imatge o directament compartir-la amb una app (si el teu navegador ho suporta).',
			'step5.save': 'Desar',
			'step5.share': 'Compartir',
			'nav.previous': 'Anterior',
			'nav.next': 'Següent',
			'nav.close': 'Tancar progrés',
			'controls.rotateLeft': 'Girar a l\'Esquerra',
			'controls.rotateRight': 'Girar a la Dreta',
			'controls.reset': 'Desfer canvis de mida i posició',
			'controls.expand': 'Ampliar a pantalla completa',
			'controls.collapse': 'Tornar a vista normal',
			'dragdrop.text': 'Deixa anar aquí la teva imatge',
			'faq.title': 'Preguntes i respostes',
			'faq.q1': 'Què fa la pàgina?',
			'faq.q2': 'Per què utilitzar-la?',
			'faq.q3': 'Puc fiar-me que no faràs res amb el meu DNI?',
			'faq.q4': 'Estic segur després de protegir així el DNI?',
			'faq.q5': 'He d\'usar "Amagar Data de Naixement, Validesa i Nº Suport"?',
			'faq.q6': 'Per a què serveix "Amagar parcialment el DNI"?',
			'faq.q7': 'Em demanen una còpia sense marques d\'aigua',
			'faq.q8': 'Puc provar sense usar el meu DNI?',
			'faq.q9': 'Puc enllaçar a aquesta pàgina?',
			'faq.q10': 'És gratuït?',
			'faq.q11': 'Ja uso un altre sistema que genera una marca d\'aigua que no es pot treure amb IA',
			'faq.q12': 'Tinc un problema/idea, com em poso en contacte?',
			'footer.privacy': 'Aquesta pàgina no recull cap dada. No s\'envien dades enlloc. No s\'utilitzen cookies ni serveis de tercers.',
			'footer.source': 'Codi font',
			'footer.original': 'Projecte original',
			'footer.improvements': 'Millores per',
			'footer.github': 'Aquesta web a GitHub',
			'alert.error': 'Error inesperat',
			'alert.chooseImage': 'Tria primer la imatge del teu DNI',
			'alert.preparingError': 'Error preparant DNI',
			'alert.invalidImage': 'Si us plau, tria una imatge vàlida',
			'alert.noWorker': 'El navegador no suporta WebWorkers',
			'alert.localFile': 'Per poder executar el programa des del teu ordinador necessites eliminar la capçalera marcada com <meta id="MetaCSP"...>',
			'alert.workerError': 'Error creant WebWorker',
			'alert.generateError': 'No s\'ha pogut generar la imatge',
			'alert.convertError': 'Error convertint la imatge',
			'alert.shareError': 'Error',
			'share.title': 'Còpia del meu DNI',
			'share.text': 'Adjunto la còpia del meu DNI per al seu ús exclusiu',
			'share.filename': 'protegit.jpg',
			'watermark.copy': 'Còpia',
			'watermark.for': 'per a',
			'external.link': 'Enllaç extern',
			'format.noMask': 'Sense màscara',
			'format.dni4Front': 'DNI Frontal (v4.0 des de 2021)',
			'format.dni4Back': 'DNI Posterior (v4.0 des de 2021)',
			'format.dni3Front': 'DNI Frontal (v3.0 2015-2021)',
			'format.dni3Back': 'DNI Posterior (v3.0 2015-2021)',
			'format.dni2Front': 'DNI Frontal (v2.0 fins 2015)',
			'format.dni2Back': 'DNI Posterior (v2.0 fins 2015)',
			'format.passport': 'Passaport genèric',
			'format.genericId': 'Document d\'identitat genèric',
			'format.italyCie': 'Itàlia - CIE (Carta d\'Identità)',
			'format.franceCni': 'França - CNI (Carte Nationale)',
			'format.germanyPerso': 'Alemanya - Personalausweis',
			'format.portugalCc': 'Portugal - Cartão de Cidadão',
			'format.euResidence': 'Permís de Residència UE',
			'format.group.spain': '🇪🇸 Espanya',
			'format.group.international': '🌍 Internacional',
			'format.group.generic': '📄 Genèric',
			'theme.auto': 'Tema automàtic',
			'theme.light': 'Tema clar',
			'theme.dark': 'Tema fosc'
		},

		gl: {
			'page.title': 'Protexe o meu DNI',
			'page.description': 'Crea facilmente unha copia do DNI que oculta os datos privados e amosa o motivo polo que o estás compartindo',
			'header.title': 'Protección do DNI',
			'intro.p1': 'Esta páxina permíteche ocultar facilmente os <a href="#porque" class="AbrirInfo">datos privados do teu DNI</a>. En ocasións pódenche pedir unha copia do DNI, pero o que non hai que facer é mandarlles unha foto tal cal xa que se cae en malas mans pode causarche graves problemas.',
			'intro.p2': 'Aquí podes bloquear os datos que non son necesarios e sobreescribir un texto para que non o poidan utilizar con outros propósitos, desta maneira a imaxe que compartas será única para evitar que a reutilicen.',
			'intro.p3': 'Para comezar, preme no botón de elixir foto e continúa cos pasos seguintes.',
			'intro.p3.offline': 'Todo este proceso realízase unicamente no teu navegador, non se envían os datos a ningunha parte.',
			'noscript': 'Esta páxina necesita que actives o Javascript para poder executala. Todo o proceso faise no teu navegador e é imprescindible o uso de javascript.',
			'step.photo': 'Foto',
			'step.type': 'Tipo',
			'step.position': 'Posición',
			'step.text': 'Texto',
			'step.save': 'Gardar',
			'step1.title': 'Foto',
			'step1.button': 'Elixe a foto',
			'step2.title': 'Tipo de foto',
			'step2.description': 'Elixe se estás usando a foto dianteira ou traseira do DNI; podes axustar o tamaño e posición do DNI a continuación.',
			'step2.format.label': 'Tipo de foto',
			'step2.validity.label': 'Ocultar Data de Nacemento, Validez e Nº Soporte',
			'step2.validity.help': 'que é isto?',
			'step2.mask.label': 'Ocultar parcialmente o DNI',
			'step2.mask.help': 'que é isto?',
			'step3.title': 'Posición',
			'step3.description': 'Axusta a orientación e posición para que o DNI se vexa correctamente.',
			'step3.zoom': 'Achegar',
			'step3.rotate': 'Xirar',
			'step3.horizontal': 'Desp. Horizontal',
			'step3.vertical': 'Desp. Vertical',
			'step4.title': 'Texto',
			'step4.description': 'Escribe un texto para engadir sobre a imaxe.',
			'step4.recipient.label': 'Destinatario:',
			'step4.recipient.placeholder': 'Ex: Hotel California, Banco X...',
			'step4.watermark.label': 'Texto completo:',
			'step4.watermark.default': 'Copia para …',
			'step4.help': 'O destinatario engádese automaticamente ao texto. Podes editar o texto completo directamente.',
			'step5.title': 'Gardar',
			'step5.description': 'Elixe agora se queres gardar a imaxe ou directamente compartila cunha app (se o teu navegador o soporta).',
			'step5.save': 'Gardar',
			'step5.share': 'Compartir',
			'nav.previous': 'Anterior',
			'nav.next': 'Seguinte',
			'nav.close': 'Pechar progreso',
			'controls.rotateLeft': 'Xirar á Esquerda',
			'controls.rotateRight': 'Xirar á Dereita',
			'controls.reset': 'Desfacer cambios de tamaño e posición',
			'controls.expand': 'Ampliar a pantalla completa',
			'controls.collapse': 'Volver a vista normal',
			'dragdrop.text': 'Solta aquí a túa imaxe',
			'faq.title': 'Preguntas e respostas',
			'faq.q1': 'Que fai a páxina?',
			'faq.q2': 'Por que usala?',
			'faq.q3': 'Podo fiarme de que non vas facer nada co meu DNI?',
			'faq.q4': 'Estou seguro tras protexer así o DNI?',
			'faq.q5': 'Debo usar "Ocultar Data de Nacemento, Validez e Nº Soporte"?',
			'faq.q6': 'Para que serve "Ocultar parcialmente o DNI"?',
			'faq.q7': 'Pídenme unha copia que non teña marcas de auga',
			'faq.q8': 'Podo probar sen usar o meu DNI?',
			'faq.q9': 'Podo enlazar a esta páxina?',
			'faq.q10': 'É gratis?',
			'faq.q11': 'Xa uso outro sistema que xera unha marca de auga que non se pode quitar con IA',
			'faq.q12': 'Teño un problema/idea, como me poño en contacto?',
			'footer.privacy': 'Esta páxina non recolle ningún dato. Non se envían datos a ningunha parte. Non se usan cookies nin servizos de terceiros.',
			'footer.source': 'Código fonte',
			'footer.original': 'Proxecto orixinal',
			'footer.improvements': 'Melloras por',
			'footer.github': 'Esta web en GitHub',
			'alert.error': 'Erro inesperado',
			'alert.chooseImage': 'Elixe primeiro a imaxe do teu DNI',
			'alert.preparingError': 'Erro preparando DNI',
			'alert.invalidImage': 'Por favor, elixe unha imaxe válida',
			'alert.noWorker': 'O navegador non soporta WebWorkers',
			'alert.localFile': 'Para poder executar o programa desde o teu ordenador necesitas eliminar a cabeceira marcada como <meta id="MetaCSP"...>',
			'alert.workerError': 'Erro creando WebWorker',
			'alert.generateError': 'Non se puido xerar a imaxe',
			'alert.convertError': 'Erro convertendo a imaxe',
			'alert.shareError': 'Erro',
			'share.title': 'Copia do meu DNI',
			'share.text': 'Achego a copia do meu DNI para o seu uso exclusivo',
			'share.filename': 'protexido.jpg',
			'watermark.copy': 'Copia',
			'watermark.for': 'para',
			'external.link': 'Enlace externo',
			'format.noMask': 'Sen máscara',
			'format.dni4Front': 'DNI Frontal (v4.0 desde 2021)',
			'format.dni4Back': 'DNI Traseira (v4.0 desde 2021)',
			'format.dni3Front': 'DNI Frontal (v3.0 2015-2021)',
			'format.dni3Back': 'DNI Traseira (v3.0 2015-2021)',
			'format.dni2Front': 'DNI Frontal (v2.0 ata 2015)',
			'format.dni2Back': 'DNI Traseira (v2.0 ata 2015)',
			'format.passport': 'Pasaporte xenérico',
			'format.genericId': 'Documento de identidade xenérico',
			'format.italyCie': 'Italia - CIE (Carta d\'Identità)',
			'format.franceCni': 'Francia - CNI (Carte Nationale)',
			'format.germanyPerso': 'Alemaña - Personalausweis',
			'format.portugalCc': 'Portugal - Cartão de Cidadão',
			'format.euResidence': 'Permiso de Residencia UE',
			'format.group.spain': '🇪🇸 España',
			'format.group.international': '🌍 Internacional',
			'format.group.generic': '📄 Xenérico',
			'theme.auto': 'Tema automático',
			'theme.light': 'Tema claro',
			'theme.dark': 'Tema escuro'
		},

		eu: {
			'page.title': 'Babestu nire NANa',
			'page.description': 'Sortu erraz NANaren kopia bat datu pribatuak ezkutatzen dituena eta partekatzearen arrazoia erakusten duena',
			'header.title': 'NANaren Babesa',
			'intro.p1': 'Orri honek zure <a href="#porque" class="AbrirInfo">NANaren datu pribatuak</a> erraz ezkutatzeko aukera ematen dizu. Batzuetan NANaren kopia bat eska diezazukete, baina ez dago ondo argazkia horrela bidaltzea, esku txarretan erortzen bada arazo larriak sor diezazkizuke.',
			'intro.p2': 'Hemen beharrezkoak ez diren datuak blokeatu eta testu bat gainidatz dezakezu beste helburu batzuetarako erabil ez dezaten, horrela partekatzen duzun irudia bakarra izango da berrerabiltzea saihesteko.',
			'intro.p3': 'Hasteko, sakatu argazkia aukeratzeko botoia eta hurrengo pausoekin jarraitu.',
			'intro.p3.offline': 'Prozesu hau guztia zure nabigatzailean bakarrik egiten da, datuak ez dira inora bidaltzen.',
			'noscript': 'Orri honek Javascript aktibatzea behar du exekutatzeko. Prozesu osoa zure nabigatzailean egiten da eta ezinbestekoa da javascript erabiltzea.',
			'step.photo': 'Argazkia',
			'step.type': 'Mota',
			'step.position': 'Kokapena',
			'step.text': 'Testua',
			'step.save': 'Gorde',
			'step1.title': 'Argazkia',
			'step1.button': 'Aukeratu argazkia',
			'step2.title': 'Argazki mota',
			'step2.description': 'Aukeratu NANaren aurreko edo atzeko argazkia erabiltzen ari zaren; NANaren tamaina eta kokapena doitu ditzakezu jarraian.',
			'step2.format.label': 'Argazki mota',
			'step2.validity.label': 'Ezkutatu Jaiotze Data, Baliozkotasuna eta Euskarri Zk.',
			'step2.validity.help': 'zer da hau?',
			'step2.mask.label': 'Partzialki ezkutatu NANa',
			'step2.mask.help': 'zer da hau?',
			'step3.title': 'Kokapena',
			'step3.description': 'Doitu orientazioa eta kokapena NANa zuzen ikus dadin.',
			'step3.zoom': 'Gerturatu',
			'step3.rotate': 'Biratu',
			'step3.horizontal': 'Desp. Horizontala',
			'step3.vertical': 'Desp. Bertikala',
			'step4.title': 'Testua',
			'step4.description': 'Idatzi testu bat irudiaren gainean gehitzeko.',
			'step4.recipient.label': 'Hartzailea:',
			'step4.recipient.placeholder': 'Adib: Hotel California, X Bankua...',
			'step4.watermark.label': 'Testu osoa:',
			'step4.watermark.default': 'Kopia …-rako',
			'step4.help': 'Hartzailea automatikoki gehitzen da testuan. Testu osoa zuzenean editatu dezakezu.',
			'step5.title': 'Gorde',
			'step5.description': 'Aukeratu orain irudia gorde nahi duzun edo zuzenean app batekin partekatu (zure nabigatzaileak onartzen badu).',
			'step5.save': 'Gorde',
			'step5.share': 'Partekatu',
			'nav.previous': 'Aurrekoa',
			'nav.next': 'Hurrengoa',
			'nav.close': 'Itxi aurrerapena',
			'controls.rotateLeft': 'Biratu Ezkerrera',
			'controls.rotateRight': 'Biratu Eskuinera',
			'controls.reset': 'Desegin tamaina eta kokapen aldaketak',
			'controls.expand': 'Zabaldu pantaila osora',
			'controls.collapse': 'Itzuli ikuspegi normalera',
			'dragdrop.text': 'Utzi hemen zure irudia',
			'faq.title': 'Galderak eta erantzunak',
			'faq.q1': 'Zer egiten du orriak?',
			'faq.q2': 'Zergatik erabili?',
			'faq.q3': 'Fidatu naiteke nire NANarekin ezer egingo ez duzula?',
			'faq.q4': 'Seguru nago NANa horrela babestu ondoren?',
			'faq.q5': '"Ezkutatu Jaiotze Data, Baliozkotasuna eta Euskarri Zk." erabili behar dut?',
			'faq.q6': 'Zertarako da "Partzialki ezkutatu NANa"?',
			'faq.q7': 'Ur-markarik gabeko kopia bat eskatzen didate',
			'faq.q8': 'Nire NANa erabili gabe proba dezaket?',
			'faq.q9': 'Orri honetara estekatu dezaket?',
			'faq.q10': 'Doakoa da?',
			'faq.q11': 'Jadanik IArekin kendu ezin den ur-marka sortzen duen beste sistema bat erabiltzen dut',
			'faq.q12': 'Arazo/ideia bat daukat, nola jartzen naiz harremanetan?',
			'footer.privacy': 'Orri honek ez du daturik biltzen. Ez da daturik inora bidaltzen. Ez dira cookie-ak ez hirugarrenen zerbitzuak erabiltzen.',
			'footer.source': 'Iturburu kodea',
			'footer.original': 'Jatorrizko proiektua',
			'footer.improvements': 'Hobekuntzak egilea',
			'footer.github': 'Web hau GitHuben',
			'alert.error': 'Ustekabeko errorea',
			'alert.chooseImage': 'Lehenik aukeratu zure NANaren irudia',
			'alert.preparingError': 'Errorea NANa prestatzen',
			'alert.invalidImage': 'Mesedez, aukeratu irudi baliozkoa',
			'alert.noWorker': 'Nabigatzaileak ez ditu WebWorker-ak onartzen',
			'alert.localFile': 'Programa zure ordenagailutik exekutatzeko <meta id="MetaCSP"...> bezala markatutako goiburua kendu behar duzu',
			'alert.workerError': 'Errorea WebWorker sortzen',
			'alert.generateError': 'Ezin izan da irudia sortu',
			'alert.convertError': 'Errorea irudia bihurtzen',
			'alert.shareError': 'Errorea',
			'share.title': 'Nire NANaren kopia',
			'share.text': 'Nire NANaren kopia erantsita, erabilera esklusiboko',
			'share.filename': 'babestua.jpg',
			'watermark.copy': 'Kopia',
			'watermark.for': '-rako',
			'external.link': 'Kanpo esteka',
			'format.noMask': 'Maskararik gabe',
			'format.dni4Front': 'NAN Aurrealdea (v4.0 2021-tik)',
			'format.dni4Back': 'NAN Atzealdea (v4.0 2021-tik)',
			'format.dni3Front': 'NAN Aurrealdea (v3.0 2015-2021)',
			'format.dni3Back': 'NAN Atzealdea (v3.0 2015-2021)',
			'format.dni2Front': 'NAN Aurrealdea (v2.0 2015 arte)',
			'format.dni2Back': 'NAN Atzealdea (v2.0 2015 arte)',
			'format.passport': 'Pasaporte generikoa',
			'format.genericId': 'Nortasun agiri generikoa',
			'format.italyCie': 'Italia - CIE (Carta d\'Identità)',
			'format.franceCni': 'Frantzia - CNI (Carte Nationale)',
			'format.germanyPerso': 'Alemania - Personalausweis',
			'format.portugalCc': 'Portugal - Cartão de Cidadão',
			'format.euResidence': 'EB Egoitza Baimena',
			'format.group.spain': '🇪🇸 Espainia',
			'format.group.international': '🌍 Nazioartekoa',
			'format.group.generic': '📄 Generikoa',
			'theme.auto': 'Gai automatikoa',
			'theme.light': 'Gai argia',
			'theme.dark': 'Gai iluna'
		},

		en: {
			'page.title': 'Protect my ID',
			'page.description': 'Easily create a copy of your ID that hides private data and shows the reason why you are sharing it',
			'header.title': 'ID Protection',
			'intro.p1': 'This page allows you to easily hide the <a href="#porque" class="AbrirInfo">private data of your ID</a>. Sometimes you may be asked for a copy of your ID, but you should not send a photo as is because if it falls into the wrong hands it can cause serious problems.',
			'intro.p2': 'Here you can block unnecessary data and overwrite text so they cannot use it for other purposes, this way the image you share will be unique to prevent reuse.',
			'intro.p3': 'To start, click the choose photo button and continue with the following steps.',
			'intro.p3.offline': 'This entire process is done only in your browser, no data is sent anywhere.',
			'noscript': 'This page requires Javascript to be enabled. The entire process is done in your browser and javascript is essential.',
			'step.photo': 'Photo',
			'step.type': 'Type',
			'step.position': 'Position',
			'step.text': 'Text',
			'step.save': 'Save',
			'step1.title': 'Photo',
			'step1.button': 'Choose photo',
			'step2.title': 'Photo type',
			'step2.description': 'Choose if you are using the front or back photo of the ID; you can adjust the size and position of the ID below.',
			'step2.format.label': 'Photo type',
			'step2.validity.label': 'Hide Date of Birth, Validity and Support Number',
			'step2.validity.help': 'what is this?',
			'step2.mask.label': 'Partially hide the ID',
			'step2.mask.help': 'what is this?',
			'step3.title': 'Position',
			'step3.description': 'Adjust the orientation and position so the ID displays correctly.',
			'step3.zoom': 'Zoom',
			'step3.rotate': 'Rotate',
			'step3.horizontal': 'Horizontal Offset',
			'step3.vertical': 'Vertical Offset',
			'step4.title': 'Text',
			'step4.description': 'Write a text to add over the image.',
			'step4.recipient.label': 'Recipient:',
			'step4.recipient.placeholder': 'E.g.: Hotel California, Bank X...',
			'step4.watermark.label': 'Full text:',
			'step4.watermark.default': 'Copy for …',
			'step4.help': 'The recipient is automatically added to the text. You can edit the full text directly.',
			'step5.title': 'Save',
			'step5.description': 'Now choose whether to save the image or share it directly with an app (if your browser supports it).',
			'step5.save': 'Save',
			'step5.share': 'Share',
			'nav.previous': 'Previous',
			'nav.next': 'Next',
			'nav.close': 'Close progress',
			'controls.rotateLeft': 'Rotate Left',
			'controls.rotateRight': 'Rotate Right',
			'controls.reset': 'Undo size and position changes',
			'controls.expand': 'Expand to full screen',
			'controls.collapse': 'Return to normal view',
			'dragdrop.text': 'Drop your image here',
			'faq.title': 'Questions and answers',
			'faq.q1': 'What does the page do?',
			'faq.q2': 'Why use it?',
			'faq.q3': 'Can I trust you will not do anything with my ID?',
			'faq.q4': 'Am I safe after protecting my ID this way?',
			'faq.q5': 'Should I use "Hide Date of Birth, Validity and Support Number"?',
			'faq.q6': 'What is "Partially hide the ID" for?',
			'faq.q7': 'They ask me for a copy without watermarks',
			'faq.q8': 'Can I try without using my ID?',
			'faq.q9': 'Can I link to this page?',
			'faq.q10': 'Is it free?',
			'faq.q11': 'I already use another system that generates a watermark that cannot be removed with AI',
			'faq.q12': 'I have a problem/idea, how do I get in touch?',
			'footer.privacy': 'This page does not collect any data. No data is sent anywhere. No cookies or third-party services are used.',
			'footer.source': 'Source code',
			'footer.original': 'Original project',
			'footer.improvements': 'Improvements by',
			'footer.github': 'This site on GitHub',
			'alert.error': 'Unexpected error',
			'alert.chooseImage': 'First choose your ID image',
			'alert.preparingError': 'Error preparing ID',
			'alert.invalidImage': 'Please choose a valid image',
			'alert.noWorker': 'The browser does not support WebWorkers',
			'alert.localFile': 'To run the program from your computer you need to remove the header marked as <meta id="MetaCSP"...>',
			'alert.workerError': 'Error creating WebWorker',
			'alert.generateError': 'Could not generate image',
			'alert.convertError': 'Error converting image',
			'alert.shareError': 'Error',
			'share.title': 'Copy of my ID',
			'share.text': 'Attached is the copy of my ID for exclusive use',
			'share.filename': 'protected.jpg',
			'watermark.copy': 'Copy',
			'watermark.for': 'for',
			'external.link': 'External link',
			'format.noMask': 'No mask',
			'format.dni4Front': 'DNI Front (v4.0 since 2021)',
			'format.dni4Back': 'DNI Back (v4.0 since 2021)',
			'format.dni3Front': 'DNI Front (v3.0 2015-2021)',
			'format.dni3Back': 'DNI Back (v3.0 2015-2021)',
			'format.dni2Front': 'DNI Front (v2.0 until 2015)',
			'format.dni2Back': 'DNI Back (v2.0 until 2015)',
			'format.passport': 'Generic passport',
			'format.genericId': 'Generic ID document',
			'format.italyCie': 'Italy - CIE (Carta d\'Identità)',
			'format.franceCni': 'France - CNI (Carte Nationale)',
			'format.germanyPerso': 'Germany - Personalausweis',
			'format.portugalCc': 'Portugal - Cartão de Cidadão',
			'format.euResidence': 'EU Residence Permit',
			'format.group.spain': '🇪🇸 Spain',
			'format.group.international': '🌍 International',
			'format.group.generic': '📄 Generic',
			'theme.auto': 'Auto theme',
			'theme.light': 'Light theme',
			'theme.dark': 'Dark theme'
		},

		fr: {
			'page.title': 'Protège ma pièce d\'identité',
			'page.description': 'Créez facilement une copie de votre pièce d\'identité qui cache les données privées et montre la raison pour laquelle vous la partagez',
			'header.title': 'Protection de la pièce d\'identité',
			'intro.p1': 'Cette page vous permet de masquer facilement les <a href="#porque" class="AbrirInfo">données privées de votre pièce d\'identité</a>. Parfois, on peut vous demander une copie de votre pièce d\'identité, mais il ne faut pas envoyer une photo telle quelle car si elle tombe entre de mauvaises mains, cela peut vous causer de graves problèmes.',
			'intro.p2': 'Ici, vous pouvez bloquer les données inutiles et écrire un texte par-dessus pour qu\'ils ne puissent pas l\'utiliser à d\'autres fins, ainsi l\'image que vous partagez sera unique pour éviter sa réutilisation.',
			'intro.p3': 'Pour commencer, cliquez sur le bouton choisir une photo et continuez avec les étapes suivantes.',
			'intro.p3.offline': 'Tout ce processus est effectué uniquement dans votre navigateur, aucune donnée n\'est envoyée nulle part.',
			'noscript': 'Cette page nécessite l\'activation de Javascript. Tout le processus se fait dans votre navigateur et javascript est indispensable.',
			'step.photo': 'Photo',
			'step.type': 'Type',
			'step.position': 'Position',
			'step.text': 'Texte',
			'step.save': 'Sauvegarder',
			'step1.title': 'Photo',
			'step1.button': 'Choisir la photo',
			'step2.title': 'Type de photo',
			'step2.description': 'Choisissez si vous utilisez la photo recto ou verso de la pièce d\'identité; vous pouvez ajuster la taille et la position ci-dessous.',
			'step2.format.label': 'Type de photo',
			'step2.validity.label': 'Masquer Date de Naissance, Validité et Nº Support',
			'step2.validity.help': 'qu\'est-ce que c\'est?',
			'step2.mask.label': 'Masquer partiellement la pièce d\'identité',
			'step2.mask.help': 'qu\'est-ce que c\'est?',
			'step3.title': 'Position',
			'step3.description': 'Ajustez l\'orientation et la position pour que la pièce d\'identité s\'affiche correctement.',
			'step3.zoom': 'Zoom',
			'step3.rotate': 'Rotation',
			'step3.horizontal': 'Dépl. Horizontal',
			'step3.vertical': 'Dépl. Vertical',
			'step4.title': 'Texte',
			'step4.description': 'Écrivez un texte à ajouter sur l\'image.',
			'step4.recipient.label': 'Destinataire:',
			'step4.recipient.placeholder': 'Ex: Hôtel California, Banque X...',
			'step4.watermark.label': 'Texte complet:',
			'step4.watermark.default': 'Copie pour …',
			'step4.help': 'Le destinataire est ajouté automatiquement au texte. Vous pouvez modifier le texte complet directement.',
			'step5.title': 'Sauvegarder',
			'step5.description': 'Choisissez maintenant si vous voulez sauvegarder l\'image ou la partager directement avec une app (si votre navigateur le prend en charge).',
			'step5.save': 'Sauvegarder',
			'step5.share': 'Partager',
			'nav.previous': 'Précédent',
			'nav.next': 'Suivant',
			'nav.close': 'Fermer la progression',
			'controls.rotateLeft': 'Tourner à Gauche',
			'controls.rotateRight': 'Tourner à Droite',
			'controls.reset': 'Annuler les changements de taille et position',
			'controls.expand': 'Agrandir en plein écran',
			'controls.collapse': 'Revenir à la vue normale',
			'dragdrop.text': 'Déposez votre image ici',
			'faq.title': 'Questions et réponses',
			'faq.q1': 'Que fait la page?',
			'faq.q2': 'Pourquoi l\'utiliser?',
			'faq.q3': 'Puis-je faire confiance que vous ne ferez rien avec ma pièce d\'identité?',
			'faq.q4': 'Suis-je en sécurité après avoir protégé ma pièce d\'identité de cette façon?',
			'faq.q5': 'Dois-je utiliser "Masquer Date de Naissance, Validité et Nº Support"?',
			'faq.q6': 'À quoi sert "Masquer partiellement la pièce d\'identité"?',
			'faq.q7': 'On me demande une copie sans filigrane',
			'faq.q8': 'Puis-je essayer sans utiliser ma pièce d\'identité?',
			'faq.q9': 'Puis-je créer un lien vers cette page?',
			'faq.q10': 'Est-ce gratuit?',
			'faq.q11': 'J\'utilise déjà un autre système qui génère un filigrane qui ne peut pas être enlevé avec l\'IA',
			'faq.q12': 'J\'ai un problème/une idée, comment puis-je vous contacter?',
			'footer.privacy': 'Cette page ne collecte aucune donnée. Aucune donnée n\'est envoyée nulle part. Aucun cookie ni service tiers n\'est utilisé.',
			'footer.source': 'Code source',
			'footer.original': 'Projet original',
			'footer.improvements': 'Améliorations par',
			'footer.github': 'Ce site sur GitHub',
			'alert.error': 'Erreur inattendue',
			'alert.chooseImage': 'Choisissez d\'abord l\'image de votre pièce d\'identité',
			'alert.preparingError': 'Erreur lors de la préparation de la pièce d\'identité',
			'alert.invalidImage': 'Veuillez choisir une image valide',
			'alert.noWorker': 'Le navigateur ne prend pas en charge les WebWorkers',
			'alert.localFile': 'Pour exécuter le programme depuis votre ordinateur, vous devez supprimer l\'en-tête marqué comme <meta id="MetaCSP"...>',
			'alert.workerError': 'Erreur lors de la création du WebWorker',
			'alert.generateError': 'Impossible de générer l\'image',
			'alert.convertError': 'Erreur lors de la conversion de l\'image',
			'alert.shareError': 'Erreur',
			'share.title': 'Copie de ma pièce d\'identité',
			'share.text': 'Ci-joint la copie de ma pièce d\'identité pour usage exclusif',
			'share.filename': 'protege.jpg',
			'watermark.copy': 'Copie',
			'watermark.for': 'pour',
			'external.link': 'Lien externe',
			'format.noMask': 'Sans masque',
			'format.dni4Front': 'DNI Recto (v4.0 depuis 2021)',
			'format.dni4Back': 'DNI Verso (v4.0 depuis 2021)',
			'format.dni3Front': 'DNI Recto (v3.0 2015-2021)',
			'format.dni3Back': 'DNI Verso (v3.0 2015-2021)',
			'format.dni2Front': 'DNI Recto (v2.0 jusqu\'à 2015)',
			'format.dni2Back': 'DNI Verso (v2.0 jusqu\'à 2015)',
			'format.passport': 'Passeport générique',
			'format.genericId': 'Document d\'identité générique',
			'format.italyCie': 'Italie - CIE (Carta d\'Identità)',
			'format.franceCni': 'France - CNI (Carte Nationale)',
			'format.germanyPerso': 'Allemagne - Personalausweis',
			'format.portugalCc': 'Portugal - Cartão de Cidadão',
			'format.euResidence': 'Permis de Séjour UE',
			'format.group.spain': '🇪🇸 Espagne',
			'format.group.international': '🌍 International',
			'format.group.generic': '📄 Générique',
			'theme.auto': 'Thème auto',
			'theme.light': 'Thème clair',
			'theme.dark': 'Thème sombre'
		},

		it: {
			'page.title': 'Proteggi la mia carta d\'identità',
			'page.description': 'Crea facilmente una copia della tua carta d\'identità che nasconde i dati privati e mostra il motivo per cui la stai condividendo',
			'header.title': 'Protezione della Carta d\'Identità',
			'intro.p1': 'Questa pagina ti permette di nascondere facilmente i <a href="#porque" class="AbrirInfo">dati privati della tua carta d\'identità</a>. A volte possono chiederti una copia della carta d\'identità, ma non dovresti inviare una foto così com\'è perché se finisce nelle mani sbagliate può causarti gravi problemi.',
			'intro.p2': 'Qui puoi bloccare i dati non necessari e sovrascrivere un testo in modo che non possano usarlo per altri scopi, così l\'immagine che condividi sarà unica per evitarne il riutilizzo.',
			'intro.p3': 'Per iniziare, clicca sul pulsante scegli foto e continua con i passaggi successivi.',
			'intro.p3.offline': 'Tutto questo processo viene eseguito solo nel tuo browser, nessun dato viene inviato da nessuna parte.',
			'noscript': 'Questa pagina richiede l\'attivazione di Javascript. L\'intero processo viene eseguito nel tuo browser e javascript è indispensabile.',
			'step.photo': 'Foto',
			'step.type': 'Tipo',
			'step.position': 'Posizione',
			'step.text': 'Testo',
			'step.save': 'Salva',
			'step1.title': 'Foto',
			'step1.button': 'Scegli la foto',
			'step2.title': 'Tipo di foto',
			'step2.description': 'Scegli se stai usando la foto anteriore o posteriore della carta d\'identità; puoi regolare dimensione e posizione qui sotto.',
			'step2.format.label': 'Tipo di foto',
			'step2.validity.label': 'Nascondi Data di Nascita, Validità e N° Supporto',
			'step2.validity.help': 'cos\'è questo?',
			'step2.mask.label': 'Nascondi parzialmente la carta d\'identità',
			'step2.mask.help': 'cos\'è questo?',
			'step3.title': 'Posizione',
			'step3.description': 'Regola l\'orientamento e la posizione in modo che la carta d\'identità sia visualizzata correttamente.',
			'step3.zoom': 'Zoom',
			'step3.rotate': 'Ruota',
			'step3.horizontal': 'Spost. Orizzontale',
			'step3.vertical': 'Spost. Verticale',
			'step4.title': 'Testo',
			'step4.description': 'Scrivi un testo da aggiungere sopra l\'immagine.',
			'step4.recipient.label': 'Destinatario:',
			'step4.recipient.placeholder': 'Es: Hotel California, Banca X...',
			'step4.watermark.label': 'Testo completo:',
			'step4.watermark.default': 'Copia per …',
			'step4.help': 'Il destinatario viene aggiunto automaticamente al testo. Puoi modificare il testo completo direttamente.',
			'step5.title': 'Salva',
			'step5.description': 'Ora scegli se salvare l\'immagine o condividerla direttamente con un\'app (se il tuo browser lo supporta).',
			'step5.save': 'Salva',
			'step5.share': 'Condividi',
			'nav.previous': 'Precedente',
			'nav.next': 'Successivo',
			'nav.close': 'Chiudi progresso',
			'controls.rotateLeft': 'Ruota a Sinistra',
			'controls.rotateRight': 'Ruota a Destra',
			'controls.reset': 'Annulla modifiche di dimensione e posizione',
			'controls.expand': 'Espandi a schermo intero',
			'controls.collapse': 'Torna alla vista normale',
			'dragdrop.text': 'Rilascia qui la tua immagine',
			'faq.title': 'Domande e risposte',
			'faq.q1': 'Cosa fa la pagina?',
			'faq.q2': 'Perché usarla?',
			'faq.q3': 'Posso fidarmi che non farai nulla con la mia carta d\'identità?',
			'faq.q4': 'Sono al sicuro dopo aver protetto così la mia carta d\'identità?',
			'faq.q5': 'Devo usare "Nascondi Data di Nascita, Validità e N° Supporto"?',
			'faq.q6': 'A cosa serve "Nascondi parzialmente la carta d\'identità"?',
			'faq.q7': 'Mi chiedono una copia senza filigrana',
			'faq.q8': 'Posso provare senza usare la mia carta d\'identità?',
			'faq.q9': 'Posso collegare a questa pagina?',
			'faq.q10': 'È gratuito?',
			'faq.q11': 'Uso già un altro sistema che genera una filigrana che non può essere rimossa con l\'IA',
			'faq.q12': 'Ho un problema/un\'idea, come posso contattarvi?',
			'footer.privacy': 'Questa pagina non raccoglie alcun dato. Nessun dato viene inviato da nessuna parte. Non vengono utilizzati cookie o servizi di terze parti.',
			'footer.source': 'Codice sorgente',
			'footer.original': 'Progetto originale',
			'footer.improvements': 'Miglioramenti di',
			'footer.github': 'Questo sito su GitHub',
			'alert.error': 'Errore imprevisto',
			'alert.chooseImage': 'Prima scegli l\'immagine della tua carta d\'identità',
			'alert.preparingError': 'Errore nella preparazione della carta d\'identità',
			'alert.invalidImage': 'Per favore, scegli un\'immagine valida',
			'alert.noWorker': 'Il browser non supporta i WebWorkers',
			'alert.localFile': 'Per eseguire il programma dal tuo computer devi rimuovere l\'intestazione contrassegnata come <meta id="MetaCSP"...>',
			'alert.workerError': 'Errore nella creazione del WebWorker',
			'alert.generateError': 'Impossibile generare l\'immagine',
			'alert.convertError': 'Errore nella conversione dell\'immagine',
			'alert.shareError': 'Errore',
			'share.title': 'Copia della mia carta d\'identità',
			'share.text': 'Allego la copia della mia carta d\'identità per uso esclusivo',
			'share.filename': 'protetto.jpg',
			'watermark.copy': 'Copia',
			'watermark.for': 'per',
			'external.link': 'Link esterno',
			'format.noMask': 'Senza maschera',
			'format.dni4Front': 'DNI Anteriore (v4.0 dal 2021)',
			'format.dni4Back': 'DNI Posteriore (v4.0 dal 2021)',
			'format.dni3Front': 'DNI Anteriore (v3.0 2015-2021)',
			'format.dni3Back': 'DNI Posteriore (v3.0 2015-2021)',
			'format.dni2Front': 'DNI Anteriore (v2.0 fino al 2015)',
			'format.dni2Back': 'DNI Posteriore (v2.0 fino al 2015)',
			'format.passport': 'Passaporto generico',
			'format.genericId': 'Documento d\'identità generico',
			'format.italyCie': 'Italia - CIE (Carta d\'Identità)',
			'format.franceCni': 'Francia - CNI (Carte Nationale)',
			'format.germanyPerso': 'Germania - Personalausweis',
			'format.portugalCc': 'Portogallo - Cartão de Cidadão',
			'format.euResidence': 'Permesso di Soggiorno UE',
			'format.group.spain': '🇪🇸 Spagna',
			'format.group.international': '🌍 Internazionale',
			'format.group.generic': '📄 Generico',
			'theme.auto': 'Tema automatico',
			'theme.light': 'Tema chiaro',
			'theme.dark': 'Tema scuro'
		},

		pt: {
			'page.title': 'Protege o meu documento',
			'page.description': 'Cria facilmente uma cópia do documento de identidade que oculta os dados privados e mostra o motivo pelo qual o estás a partilhar',
			'header.title': 'Proteção do Documento de Identidade',
			'intro.p1': 'Esta página permite-te ocultar facilmente os <a href="#porque" class="AbrirInfo">dados privados do teu documento de identidade</a>. Por vezes podem pedir-te uma cópia do documento, mas não deves enviar uma foto tal como está porque se cair em mãos erradas pode causar-te problemas graves.',
			'intro.p2': 'Aqui podes bloquear os dados desnecessários e sobrescrever um texto para que não o possam usar para outros fins, desta forma a imagem que partilhares será única para evitar reutilização.',
			'intro.p3': 'Para começar, clica no botão escolher foto e continua com os passos seguintes.',
			'intro.p3.offline': 'Todo este processo é feito apenas no teu navegador, nenhum dado é enviado para lugar nenhum.',
			'noscript': 'Esta página precisa que atives o Javascript para funcionar. Todo o processo é feito no teu navegador e o javascript é indispensável.',
			'step.photo': 'Foto',
			'step.type': 'Tipo',
			'step.position': 'Posição',
			'step.text': 'Texto',
			'step.save': 'Guardar',
			'step1.title': 'Foto',
			'step1.button': 'Escolhe a foto',
			'step2.title': 'Tipo de foto',
			'step2.description': 'Escolhe se estás a usar a foto da frente ou de trás do documento; podes ajustar o tamanho e posição abaixo.',
			'step2.format.label': 'Tipo de foto',
			'step2.validity.label': 'Ocultar Data de Nascimento, Validade e Nº Suporte',
			'step2.validity.help': 'o que é isto?',
			'step2.mask.label': 'Ocultar parcialmente o documento',
			'step2.mask.help': 'o que é isto?',
			'step3.title': 'Posição',
			'step3.description': 'Ajusta a orientação e posição para que o documento seja exibido corretamente.',
			'step3.zoom': 'Aproximar',
			'step3.rotate': 'Rodar',
			'step3.horizontal': 'Desl. Horizontal',
			'step3.vertical': 'Desl. Vertical',
			'step4.title': 'Texto',
			'step4.description': 'Escreve um texto para adicionar sobre a imagem.',
			'step4.recipient.label': 'Destinatário:',
			'step4.recipient.placeholder': 'Ex: Hotel California, Banco X...',
			'step4.watermark.label': 'Texto completo:',
			'step4.watermark.default': 'Cópia para …',
			'step4.help': 'O destinatário é adicionado automaticamente ao texto. Podes editar o texto completo diretamente.',
			'step5.title': 'Guardar',
			'step5.description': 'Agora escolhe se queres guardar a imagem ou partilhá-la diretamente com uma app (se o teu navegador suportar).',
			'step5.save': 'Guardar',
			'step5.share': 'Partilhar',
			'nav.previous': 'Anterior',
			'nav.next': 'Seguinte',
			'nav.close': 'Fechar progresso',
			'controls.rotateLeft': 'Rodar para a Esquerda',
			'controls.rotateRight': 'Rodar para a Direita',
			'controls.reset': 'Desfazer alterações de tamanho e posição',
			'controls.expand': 'Expandir para ecrã inteiro',
			'controls.collapse': 'Voltar à vista normal',
			'dragdrop.text': 'Larga aqui a tua imagem',
			'faq.title': 'Perguntas e respostas',
			'faq.q1': 'O que faz a página?',
			'faq.q2': 'Porquê usá-la?',
			'faq.q3': 'Posso confiar que não vais fazer nada com o meu documento?',
			'faq.q4': 'Estou seguro depois de proteger assim o meu documento?',
			'faq.q5': 'Devo usar "Ocultar Data de Nascimento, Validade e Nº Suporte"?',
			'faq.q6': 'Para que serve "Ocultar parcialmente o documento"?',
			'faq.q7': 'Pedem-me uma cópia sem marca de água',
			'faq.q8': 'Posso experimentar sem usar o meu documento?',
			'faq.q9': 'Posso criar um link para esta página?',
			'faq.q10': 'É gratuito?',
			'faq.q11': 'Já uso outro sistema que gera uma marca de água que não pode ser removida com IA',
			'faq.q12': 'Tenho um problema/ideia, como entro em contacto?',
			'footer.privacy': 'Esta página não recolhe nenhum dado. Nenhum dado é enviado para lugar nenhum. Não são usados cookies nem serviços de terceiros.',
			'footer.source': 'Código fonte',
			'footer.original': 'Projeto original',
			'footer.improvements': 'Melhorias por',
			'footer.github': 'Este site no GitHub',
			'alert.error': 'Erro inesperado',
			'alert.chooseImage': 'Primeiro escolhe a imagem do teu documento',
			'alert.preparingError': 'Erro ao preparar documento',
			'alert.invalidImage': 'Por favor, escolhe uma imagem válida',
			'alert.noWorker': 'O navegador não suporta WebWorkers',
			'alert.localFile': 'Para executar o programa a partir do teu computador precisas remover o cabeçalho marcado como <meta id="MetaCSP"...>',
			'alert.workerError': 'Erro ao criar WebWorker',
			'alert.generateError': 'Não foi possível gerar a imagem',
			'alert.convertError': 'Erro ao converter a imagem',
			'alert.shareError': 'Erro',
			'share.title': 'Cópia do meu documento',
			'share.text': 'Anexo a cópia do meu documento para uso exclusivo',
			'share.filename': 'protegido.jpg',
			'watermark.copy': 'Cópia',
			'watermark.for': 'para',
			'external.link': 'Link externo',
			'format.noMask': 'Sem máscara',
			'format.dni4Front': 'DNI Frente (v4.0 desde 2021)',
			'format.dni4Back': 'DNI Verso (v4.0 desde 2021)',
			'format.dni3Front': 'DNI Frente (v3.0 2015-2021)',
			'format.dni3Back': 'DNI Verso (v3.0 2015-2021)',
			'format.dni2Front': 'DNI Frente (v2.0 até 2015)',
			'format.dni2Back': 'DNI Verso (v2.0 até 2015)',
			'format.passport': 'Passaporte genérico',
			'format.genericId': 'Documento de identidade genérico',
			'format.italyCie': 'Itália - CIE (Carta d\'Identità)',
			'format.franceCni': 'França - CNI (Carte Nationale)',
			'format.germanyPerso': 'Alemanha - Personalausweis',
			'format.portugalCc': 'Portugal - Cartão de Cidadão',
			'format.euResidence': 'Autorização de Residência UE',
			'format.group.spain': '🇪🇸 Espanha',
			'format.group.international': '🌍 Internacional',
			'format.group.generic': '📄 Genérico',
			'theme.auto': 'Tema automático',
			'theme.light': 'Tema claro',
			'theme.dark': 'Tema escuro'
		},

		de: {
			'page.title': 'Schütze meinen Ausweis',
			'page.description': 'Erstellen Sie einfach eine Kopie Ihres Ausweises, die private Daten verbirgt und den Grund zeigt, warum Sie ihn teilen',
			'header.title': 'Ausweisschutz',
			'intro.p1': 'Diese Seite ermöglicht es Ihnen, die <a href="#porque" class="AbrirInfo">privaten Daten Ihres Ausweises</a> einfach zu verbergen. Manchmal werden Sie nach einer Kopie Ihres Ausweises gefragt, aber Sie sollten kein Foto so senden, wie es ist, da es bei falschen Händen ernsthafte Probleme verursachen kann.',
			'intro.p2': 'Hier können Sie unnötige Daten blockieren und einen Text überschreiben, damit sie ihn nicht für andere Zwecke verwenden können, so wird das Bild, das Sie teilen, einzigartig sein, um eine Wiederverwendung zu verhindern.',
			'intro.p3': 'Um zu beginnen, klicken Sie auf die Schaltfläche Foto auswählen und fahren Sie mit den folgenden Schritten fort.',
			'intro.p3.offline': 'Dieser gesamte Prozess wird nur in Ihrem Browser durchgeführt, es werden keine Daten irgendwohin gesendet.',
			'noscript': 'Diese Seite erfordert die Aktivierung von Javascript. Der gesamte Prozess wird in Ihrem Browser durchgeführt und Javascript ist unverzichtbar.',
			'step.photo': 'Foto',
			'step.type': 'Typ',
			'step.position': 'Position',
			'step.text': 'Text',
			'step.save': 'Speichern',
			'step1.title': 'Foto',
			'step1.button': 'Foto auswählen',
			'step2.title': 'Fototyp',
			'step2.description': 'Wählen Sie, ob Sie die Vorder- oder Rückseite des Ausweises verwenden; Sie können Größe und Position unten anpassen.',
			'step2.format.label': 'Fototyp',
			'step2.validity.label': 'Geburtsdatum, Gültigkeit und Supportnummer verbergen',
			'step2.validity.help': 'was ist das?',
			'step2.mask.label': 'Ausweis teilweise verbergen',
			'step2.mask.help': 'was ist das?',
			'step3.title': 'Position',
			'step3.description': 'Passen Sie Ausrichtung und Position an, damit der Ausweis korrekt angezeigt wird.',
			'step3.zoom': 'Zoom',
			'step3.rotate': 'Drehen',
			'step3.horizontal': 'Horiz. Verschiebung',
			'step3.vertical': 'Vert. Verschiebung',
			'step4.title': 'Text',
			'step4.description': 'Schreiben Sie einen Text, der über das Bild gelegt wird.',
			'step4.recipient.label': 'Empfänger:',
			'step4.recipient.placeholder': 'Z.B.: Hotel California, Bank X...',
			'step4.watermark.label': 'Vollständiger Text:',
			'step4.watermark.default': 'Kopie für …',
			'step4.help': 'Der Empfänger wird automatisch zum Text hinzugefügt. Sie können den vollständigen Text direkt bearbeiten.',
			'step5.title': 'Speichern',
			'step5.description': 'Wählen Sie nun, ob Sie das Bild speichern oder direkt mit einer App teilen möchten (wenn Ihr Browser dies unterstützt).',
			'step5.save': 'Speichern',
			'step5.share': 'Teilen',
			'nav.previous': 'Zurück',
			'nav.next': 'Weiter',
			'nav.close': 'Fortschritt schließen',
			'controls.rotateLeft': 'Nach Links drehen',
			'controls.rotateRight': 'Nach Rechts drehen',
			'controls.reset': 'Größen- und Positionsänderungen rückgängig machen',
			'controls.expand': 'Auf Vollbild erweitern',
			'controls.collapse': 'Zur normalen Ansicht zurückkehren',
			'dragdrop.text': 'Bild hier ablegen',
			'faq.title': 'Fragen und Antworten',
			'faq.q1': 'Was macht die Seite?',
			'faq.q2': 'Warum sie benutzen?',
			'faq.q3': 'Kann ich darauf vertrauen, dass Sie nichts mit meinem Ausweis machen?',
			'faq.q4': 'Bin ich sicher, nachdem ich meinen Ausweis so geschützt habe?',
			'faq.q5': 'Sollte ich "Geburtsdatum, Gültigkeit und Supportnummer verbergen" verwenden?',
			'faq.q6': 'Wofür ist "Ausweis teilweise verbergen"?',
			'faq.q7': 'Man bittet mich um eine Kopie ohne Wasserzeichen',
			'faq.q8': 'Kann ich es ohne meinen Ausweis ausprobieren?',
			'faq.q9': 'Kann ich auf diese Seite verlinken?',
			'faq.q10': 'Ist es kostenlos?',
			'faq.q11': 'Ich benutze bereits ein anderes System, das ein Wasserzeichen erzeugt, das nicht mit KI entfernt werden kann',
			'faq.q12': 'Ich habe ein Problem/eine Idee, wie kann ich Kontakt aufnehmen?',
			'footer.privacy': 'Diese Seite sammelt keine Daten. Es werden keine Daten irgendwohin gesendet. Es werden keine Cookies oder Dienste von Drittanbietern verwendet.',
			'footer.source': 'Quellcode',
			'footer.original': 'Originalprojekt',
			'footer.improvements': 'Verbesserungen von',
			'footer.github': 'Diese Seite auf GitHub',
			'alert.error': 'Unerwarteter Fehler',
			'alert.chooseImage': 'Wählen Sie zuerst das Bild Ihres Ausweises',
			'alert.preparingError': 'Fehler beim Vorbereiten des Ausweises',
			'alert.invalidImage': 'Bitte wählen Sie ein gültiges Bild',
			'alert.noWorker': 'Der Browser unterstützt keine WebWorkers',
			'alert.localFile': 'Um das Programm von Ihrem Computer aus auszuführen, müssen Sie den als <meta id="MetaCSP"...> markierten Header entfernen',
			'alert.workerError': 'Fehler beim Erstellen des WebWorkers',
			'alert.generateError': 'Bild konnte nicht erstellt werden',
			'alert.convertError': 'Fehler beim Konvertieren des Bildes',
			'alert.shareError': 'Fehler',
			'share.title': 'Kopie meines Ausweises',
			'share.text': 'Anbei die Kopie meines Ausweises zur ausschließlichen Verwendung',
			'share.filename': 'geschuetzt.jpg',
			'watermark.copy': 'Kopie',
			'watermark.for': 'für',
			'external.link': 'Externer Link',
			'format.noMask': 'Ohne Maske',
			'format.dni4Front': 'DNI Vorderseite (v4.0 seit 2021)',
			'format.dni4Back': 'DNI Rückseite (v4.0 seit 2021)',
			'format.dni3Front': 'DNI Vorderseite (v3.0 2015-2021)',
			'format.dni3Back': 'DNI Rückseite (v3.0 2015-2021)',
			'format.dni2Front': 'DNI Vorderseite (v2.0 bis 2015)',
			'format.dni2Back': 'DNI Rückseite (v2.0 bis 2015)',
			'format.passport': 'Allgemeiner Reisepass',
			'format.genericId': 'Allgemeines Ausweisdokument',
			'format.italyCie': 'Italien - CIE (Carta d\'Identità)',
			'format.franceCni': 'Frankreich - CNI (Carte Nationale)',
			'format.germanyPerso': 'Deutschland - Personalausweis',
			'format.portugalCc': 'Portugal - Cartão de Cidadão',
			'format.euResidence': 'EU-Aufenthaltserlaubnis',
			'format.group.spain': '🇪🇸 Spanien',
			'format.group.international': '🌍 International',
			'format.group.generic': '📄 Allgemein',
			'theme.auto': 'Auto-Thema',
			'theme.light': 'Helles Thema',
			'theme.dark': 'Dunkles Thema'
		}
	};

	let currentLang = DEFAULT_LANG;

	/**
	 * Detecta el idioma preferido del usuario
	 */
	function detectLanguage() {
		// 1. Buscar en localStorage (preferencia guardada)
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored && translations[stored]) {
			return stored;
		}

		// 2. Buscar en el navegador
		const browserLangs = navigator.languages || [navigator.language || navigator.userLanguage];
		for (const lang of browserLangs) {
			const code = lang.split('-')[0].toLowerCase();
			if (translations[code]) {
				return code;
			}
		}

		// 3. Por defecto español
		return DEFAULT_LANG;
	}

	/**
	 * Obtiene una traducción por clave
	 * @param {string} key - Clave de traducción
	 * @param {object} params - Parámetros para interpolación (opcional)
	 * @returns {string}
	 */
	function t(key, params = {}) {
		let text = translations[currentLang]?.[key] || translations[DEFAULT_LANG]?.[key] || key;

		// Interpolación simple de parámetros
		for (const [param, value] of Object.entries(params)) {
			text = text.replace(new RegExp(`{${param}}`, 'g'), value);
		}

		return text;
	}

	/**
	 * Cambia el idioma actual
	 * @param {string} lang - Código de idioma
	 */
	function setLanguage(lang) {
		if (!translations[lang]) {
			console.warn(`Language ${lang} not available`);
			return;
		}

		currentLang = lang;
		localStorage.setItem(STORAGE_KEY, lang);
		document.documentElement.lang = lang;

		applyTranslations();

		// Disparar evento personalizado
		window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
	}

	/**
	 * Aplica las traducciones a todos los elementos con data-i18n
	 */
	function applyTranslations() {
		// Traducir elementos con data-i18n
		document.querySelectorAll('[data-i18n]').forEach(el => {
			const key = el.getAttribute('data-i18n');
			const translation = t(key);

			// No sobrescribir si la traducción es la clave (error de traducción)
			if (translation === key) return;

			// Si contiene HTML, usar innerHTML, si no textContent
			if (translation.includes('<')) {
				el.innerHTML = translation;
			} else {
				el.textContent = translation;
			}
		});

		// Traducir atributos (title, placeholder, etc)
		document.querySelectorAll('[data-i18n-title]').forEach(el => {
			el.title = t(el.getAttribute('data-i18n-title'));
		});

		document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
			el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
		});

		document.querySelectorAll('[data-i18n-value]').forEach(el => {
			el.value = t(el.getAttribute('data-i18n-value'));
		});

		// Actualizar título de la página
		document.title = t('page.title');

		// Actualizar meta description
		const metaDesc = document.querySelector('meta[name="description"]');
		if (metaDesc) {
			metaDesc.content = t('page.description');
		}

		// Actualizar CSS content para dragover
		updateDragDropText();
	}

	/**
	 * Actualiza el texto de drag & drop mediante CSS custom property
	 */
	function updateDragDropText() {
		document.documentElement.style.setProperty('--dragdrop-text', `"${t('dragdrop.text')}"`);
	}

	/**
	 * Obtiene el idioma actual
	 * @returns {string}
	 */
	function getLanguage() {
		return currentLang;
	}

	/**
	 * Obtiene la lista de idiomas disponibles
	 * @returns {object}
	 */
	function getLanguages() {
		return { ...LANGUAGES };
	}

	/**
	 * Inicializa el sistema i18n
	 */
	function init() {
		currentLang = detectLanguage();
		document.documentElement.lang = currentLang;
		applyTranslations();
	}

	// API pública
	return {
		init,
		t,
		setLanguage,
		getLanguage,
		getLanguages,
		applyTranslations
	};
})();

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
	i18n.init();
}
