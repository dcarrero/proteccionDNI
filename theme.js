'use strict';

/**
 * Sistema de gestión de temas (claro/oscuro/auto)
 * Ciclo: auto → light → dark → auto
 */
const themeManager = (function() {
	const STORAGE_KEY = 'protegemidni-theme';
	const THEMES = ['auto', 'light', 'dark'];

	let currentTheme = 'auto';

	/**
	 * Obtiene el tema guardado o 'auto' por defecto
	 */
	function getSavedTheme() {
		const saved = localStorage.getItem(STORAGE_KEY);
		return THEMES.includes(saved) ? saved : 'auto';
	}

	/**
	 * Aplica el tema al documento
	 * @param {string} theme - 'auto', 'light' o 'dark'
	 */
	function applyTheme(theme) {
		const root = document.documentElement;

		// Eliminar atributo data-theme para modo auto (usa prefers-color-scheme)
		if (theme === 'auto') {
			root.removeAttribute('data-theme');
		} else {
			root.setAttribute('data-theme', theme);
		}

		// Actualizar icono del botón
		updateToggleButton(theme);

		// Guardar preferencia
		localStorage.setItem(STORAGE_KEY, theme);
		currentTheme = theme;

		// Disparar evento personalizado
		window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
	}

	/**
	 * Actualiza el icono y título del botón de toggle
	 * @param {string} theme
	 */
	function updateToggleButton(theme) {
		const btn = document.getElementById('ThemeToggle');
		if (!btn) return;

		// Actualizar clases para mostrar el icono correcto
		btn.classList.remove('theme-auto', 'theme-light', 'theme-dark');
		btn.classList.add('theme-' + theme);

		// Actualizar título (accesibilidad)
		const titles = {
			auto: 'theme.auto',
			light: 'theme.light',
			dark: 'theme.dark'
		};

		// Usar i18n si está disponible
		if (typeof i18n !== 'undefined') {
			btn.title = i18n.t(titles[theme]);
		} else {
			const fallbacks = {
				auto: 'Tema automático',
				light: 'Tema claro',
				dark: 'Tema oscuro'
			};
			btn.title = fallbacks[theme];
		}
	}

	/**
	 * Cicla al siguiente tema: auto → light → dark → auto
	 */
	function toggle() {
		const currentIndex = THEMES.indexOf(currentTheme);
		const nextIndex = (currentIndex + 1) % THEMES.length;
		applyTheme(THEMES[nextIndex]);
	}

	/**
	 * Obtiene el tema actual
	 * @returns {string}
	 */
	function getTheme() {
		return currentTheme;
	}

	/**
	 * Obtiene el tema efectivo (resolviendo 'auto' a light/dark)
	 * @returns {string} 'light' o 'dark'
	 */
	function getEffectiveTheme() {
		if (currentTheme !== 'auto') {
			return currentTheme;
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	/**
	 * Inicializa el sistema de temas
	 */
	function init() {
		currentTheme = getSavedTheme();
		applyTheme(currentTheme);

		// Configurar botón de toggle si existe
		const btn = document.getElementById('ThemeToggle');
		if (btn) {
			btn.addEventListener('click', toggle);
		}

		// Actualizar título cuando cambie el idioma
		window.addEventListener('languagechange', () => {
			updateToggleButton(currentTheme);
		});
	}

	// API pública
	return {
		init,
		toggle,
		getTheme,
		getEffectiveTheme,
		applyTheme
	};
})();

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => themeManager.init());
} else {
	themeManager.init();
}
