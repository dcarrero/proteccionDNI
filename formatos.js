'use strict';

// Conjunto con objetos que definen los datos para cada formato de DNI/ID
// .Mascaras: los rectángulos a ocultar con negro
// .Watermarks: array de objetos que definen fuente, estilo y rectángulo a rellenar con el watermark elegido
// .NombreKey: clave i18n para el nombre traducido
// .Grupo: grupo para organizar el selector (spain, international, generic)

const FormatosDnis = {
	// ==========================================
	// GENÉRICOS
	// ==========================================
	'-': {
		NombreKey: 'format.noMask',
		Grupo: 'generic',
		Mascaras: [],
		Watermarks: [{
			fuente: '12px serif',
			estilo: 'rgb(0 0 0 / 30%)',
			bb: { x: 10, y: 30, w: 980, h: 605 }
		}]
	},
	'generic-id': {
		NombreKey: 'format.genericId',
		Grupo: 'generic',
		Mascaras: [],
		Watermarks: [{
			fuente: '900 48px sans-serif',
			estilo: 'rgb(0 0 0 / 100%)',
			bb: { x: 10, y: 190, w: 360, h: 490 }
		}, {
			fuente: '12px serif',
			estilo: 'rgb(0 0 0 / 30%)',
			bb: { x: 10, y: 30, w: 980, h: 605 }
		}]
	},
	'passport': {
		NombreKey: 'format.passport',
		Grupo: 'generic',
		Mascaras: [
			{ x: 0, y: 520, w: 1000, h: 110 } // MRZ zone
		],
		Watermarks: [{
			fuente: '900 36px sans-serif',
			estilo: 'rgb(0 0 0 / 100%)',
			bb: { x: 10, y: 50, w: 200, h: 450 }
		}, {
			fuente: '12px serif',
			estilo: 'rgb(0 0 0 / 30%)',
			bb: { x: 10, y: 30, w: 980, h: 480 }
		}]
	},

	// ==========================================
	// ESPAÑA - DNI
	// ==========================================
	'dni4-frontal': {
		NombreKey: 'format.dni4Front',
		Grupo: 'spain',
		Mascaras: [
			{ x: 760, y: 90, w: 120, h: 50 },
			{ x: 820, y: 420, w: 140, h: 40 },
			{ x: 380, y: 480, w: 400, h: 90 }, // Firma
			{ x: 780, y: 510, w: 200, h: 60 }, // CAN
		],
		MascarasDni: [
			{ x: 440, y: 100, w: 110, h: 55 }, // Nº DNI 4 dígitos
			{ x: 680, y: 100, w: 65, h: 55 },  // ampliado a final DNI
			{ x: 20, y: 115, w: 160, h: 35 },  // DNI miniatura
		],
		DatosValidez: [
			{ x: 790, y: 320, w: 180, h: 40 }, // Fecha Nacimiento
			{ x: 380, y: 445, w: 400, h: 35 }, // NumeroSoporte
			{ x: 380, y: 380, w: 400, h: 35 }, // emision, validez
		],
		Watermarks: [{
			fuente: '900 48px sans-serif',
			estilo: 'rgb(0 0 0 / 100%)',
			bb: { x: 10, y: 190, w: 360, h: 490 }
		}, {
			fuente: '12px serif',
			estilo: 'rgb(0 0 0 / 30%)',
			bb: { x: 10, y: 30, w: 980, h: 605 }
		}]
	},
	'dni4-trasera': {
		NombreKey: 'format.dni4Back',
		Grupo: 'spain',
		Mascaras: [
			{ x: 110, y: 90, w: 120, h: 40 },
			{ x: 0, y: 180, w: 60, h: 190 },   // vertical
			{ x: 260, y: 210, w: 500, h: 80 }, // Nacimiento
			{ x: 260, y: 320, w: 500, h: 40 }, // Padres
			{ x: 20, y: 395, w: 960, h: 130 }, // Inferior
		],
		Watermarks: [{
			fuente: '12px serif',
			estilo: 'rgb(0 0 0 / 30%)',
			bb: { x: 10, y: 30, w: 980, h: 605 }
		}]
	},
	'dni3-frontal': {
		NombreKey: 'format.dni3Front',
		Grupo: 'spain',
		Mascaras: [
			{ x: 750, y: 80, w: 140, h: 60 },
			{ x: 780, y: 370, w: 160, h: 45 },
			{ x: 390, y: 480, w: 390, h: 120 }, // Firma
			{ x: 790, y: 525, w: 210, h: 75 },  // CAN
		],
		MascarasDni: [
			{ x: 90, y: 550, w: 90, h: 50 },  // Inicio DNI
			{ x: 300, y: 550, w: 70, h: 50 }, // Final DNI
		],
		DatosValidez: [
			{ x: 390, y: 380, w: 230, h: 35 }, // Fecha Nacimiento
			{ x: 390, y: 445, w: 170, h: 35 }, // NumeroSoporte
			{ x: 580, y: 445, w: 200, h: 35 }, // Validez
		],
		Watermarks: [{
			fuente: '900 48px sans-serif',
			estilo: 'rgb(0 0 0 / 100%)',
			bb: { x: 10, y: 140, w: 350, h: 460 }
		}, {
			fuente: '12px serif',
			estilo: 'rgb(0 0 0 / 30%)',
			bb: { x: 10, y: 30, w: 980, h: 605 }
		}]
	},
	'dni3-trasera': {
		NombreKey: 'format.dni3Back',
		Grupo: 'spain',
		Mascaras: [
			{ x: 100, y: 100, w: 130, h: 40 },
			{ x: 0, y: 180, w: 60, h: 190 },   // vertical
			{ x: 240, y: 210, w: 500, h: 80 }, // Nacimiento
			{ x: 240, y: 340, w: 500, h: 40 }, // Padres
			{ x: 20, y: 410, w: 960, h: 130 }, // Inferior
		],
		Watermarks: [{
			fuente: '12px serif',
			estilo: 'rgb(0 0 0 / 30%)',
			bb: { x: 10, y: 30, w: 980, h: 605 }
		}]
	},
	'dni1-frontal': {
		NombreKey: 'format.dni2Front',
		Grupo: 'spain',
		Mascaras: [
			{ x: 290, y: 440, w: 410, h: 170 }, // Firma
			{ x: 130, y: 430, w: 140, h: 80 },
		],
		DatosValidez: [
			{ x: 290, y: 300, w: 230, h: 35 }, // Fecha nacimiento
			{ x: 290, y: 350, w: 230, h: 35 }, // NumeroSoporte
			{ x: 290, y: 400, w: 230, h: 35 }, // Validez
		],
		Watermarks: [{
			fuente: '900 48px sans-serif',
			estilo: 'rgb(0 0 0 / 100%)',
			bb: { x: 700, y: 340, w: 290, h: 310 }
		}, {
			fuente: '12px serif',
			estilo: 'rgb(0 0 0 / 30%)',
			bb: { x: 10, y: 30, w: 980, h: 605 }
		}]
	},
	'dni1-trasera': {
		NombreKey: 'format.dni2Back',
		Grupo: 'spain',
		Mascaras: [
			{ x: 50, y: 45, w: 400, h: 40 },   // Nacimiento
			{ x: 50, y: 150, w: 400, h: 40 },  // Padres
			{ x: 620, y: 330, w: 280, h: 40 }, // Equipo
			{ x: 20, y: 410, w: 960, h: 120 }, // Inferior
		],
		Watermarks: [{
			fuente: '12px serif',
			estilo: 'rgb(0 0 0 / 30%)',
			bb: { x: 10, y: 30, w: 980, h: 605 }
		}]
	},

	// ==========================================
	// INTERNACIONAL
	// ==========================================
	'italy-cie': {
		NombreKey: 'format.italyCie',
		Grupo: 'international',
		Mascaras: [
			{ x: 20, y: 500, w: 960, h: 110 },  // MRZ inferior
			{ x: 600, y: 380, w: 180, h: 100 }, // Firma
		],
		Watermarks: [{
			fuente: '900 42px sans-serif',
			estilo: 'rgb(0 0 0 / 100%)',
			bb: { x: 10, y: 140, w: 280, h: 340 }
		}, {
			fuente: '12px serif',
			estilo: 'rgb(0 0 0 / 30%)',
			bb: { x: 10, y: 30, w: 980, h: 460 }
		}]
	},
	'france-cni': {
		NombreKey: 'format.franceCni',
		Grupo: 'international',
		Mascaras: [
			{ x: 20, y: 500, w: 960, h: 110 },  // MRZ inferior
			{ x: 580, y: 350, w: 200, h: 120 }, // Signature
		],
		Watermarks: [{
			fuente: '900 42px sans-serif',
			estilo: 'rgb(0 0 0 / 100%)',
			bb: { x: 10, y: 140, w: 280, h: 340 }
		}, {
			fuente: '12px serif',
			estilo: 'rgb(0 0 0 / 30%)',
			bb: { x: 10, y: 30, w: 980, h: 460 }
		}]
	},
	'germany-perso': {
		NombreKey: 'format.germanyPerso',
		Grupo: 'international',
		Mascaras: [
			{ x: 20, y: 480, w: 960, h: 130 },  // MRZ inferior
			{ x: 620, y: 340, w: 180, h: 100 }, // Unterschrift
		],
		Watermarks: [{
			fuente: '900 42px sans-serif',
			estilo: 'rgb(0 0 0 / 100%)',
			bb: { x: 10, y: 140, w: 280, h: 320 }
		}, {
			fuente: '12px serif',
			estilo: 'rgb(0 0 0 / 30%)',
			bb: { x: 10, y: 30, w: 980, h: 440 }
		}]
	},
	'portugal-cc': {
		NombreKey: 'format.portugalCc',
		Grupo: 'international',
		Mascaras: [
			{ x: 20, y: 500, w: 960, h: 110 },  // MRZ inferior
			{ x: 600, y: 360, w: 200, h: 110 }, // Assinatura
		],
		Watermarks: [{
			fuente: '900 42px sans-serif',
			estilo: 'rgb(0 0 0 / 100%)',
			bb: { x: 10, y: 140, w: 280, h: 340 }
		}, {
			fuente: '12px serif',
			estilo: 'rgb(0 0 0 / 30%)',
			bb: { x: 10, y: 30, w: 980, h: 460 }
		}]
	},
	'eu-residence': {
		NombreKey: 'format.euResidence',
		Grupo: 'international',
		Mascaras: [
			{ x: 20, y: 480, w: 960, h: 130 }, // MRZ inferior
		],
		Watermarks: [{
			fuente: '900 42px sans-serif',
			estilo: 'rgb(0 0 0 / 100%)',
			bb: { x: 10, y: 140, w: 280, h: 320 }
		}, {
			fuente: '12px serif',
			estilo: 'rgb(0 0 0 / 30%)',
			bb: { x: 10, y: 30, w: 980, h: 440 }
		}]
	}
};

/**
 * Obtiene el nombre traducido de un formato
 * @param {string} key - Clave del formato
 * @returns {string} - Nombre traducido
 */
function getFormatName(key) {
	const formato = FormatosDnis[key];
	if (!formato) return key;

	// Usar i18n si está disponible
	if (typeof i18n !== 'undefined' && formato.NombreKey) {
		return i18n.t(formato.NombreKey);
	}

	// Fallback: usar NombreKey como nombre
	return formato.NombreKey || key;
}

/**
 * Genera las opciones del selector agrupadas
 * @returns {string} - HTML de las opciones
 */
function generarOpcionesFormatos() {
	const grupos = {
		spain: [],
		international: [],
		generic: []
	};

	// Agrupar formatos
	for (const [key, value] of Object.entries(FormatosDnis)) {
		const grupo = value.Grupo || 'generic';
		const nombre = getFormatName(key);
		grupos[grupo].push({ key, nombre });
	}

	let html = '';

	// Grupo España
	if (grupos.spain.length > 0) {
		const label = typeof i18n !== 'undefined' ? i18n.t('format.group.spain') : '🇪🇸 España';
		html += `<optgroup label="${label}">`;
		grupos.spain.forEach(f => {
			html += `<option value="${f.key}">${f.nombre}</option>`;
		});
		html += '</optgroup>';
	}

	// Grupo Internacional
	if (grupos.international.length > 0) {
		const label = typeof i18n !== 'undefined' ? i18n.t('format.group.international') : '🌍 Internacional';
		html += `<optgroup label="${label}">`;
		grupos.international.forEach(f => {
			html += `<option value="${f.key}">${f.nombre}</option>`;
		});
		html += '</optgroup>';
	}

	// Grupo Genérico
	if (grupos.generic.length > 0) {
		const label = typeof i18n !== 'undefined' ? i18n.t('format.group.generic') : '📄 Genérico';
		html += `<optgroup label="${label}">`;
		grupos.generic.forEach(f => {
			html += `<option value="${f.key}">${f.nombre}</option>`;
		});
		html += '</optgroup>';
	}

	return html;
}

/**
 * Actualiza el selector de formatos con los nombres traducidos
 */
function actualizarSelectorFormatos() {
	const selector = document.getElementById('Formato');
	if (!selector) return;

	const valorActual = selector.value;
	selector.innerHTML = generarOpcionesFormatos();

	// Restaurar selección si existe
	if (valorActual && selector.querySelector(`option[value="${valorActual}"]`)) {
		selector.value = valorActual;
	}
}

// Escuchar cambios de idioma para actualizar el selector
if (typeof window !== 'undefined') {
	window.addEventListener('languagechange', actualizarSelectorFormatos);
}
