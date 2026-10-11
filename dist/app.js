
(() => {
  "use strict";

  const videos = {
    pt: {
      uc: { android: "https://youtube.com/shorts/_Uv9KyOQmKU?feature=share", ios: "https://youtube.com/shorts/-_VKUB087Ks", pc: "https://youtu.be/-2BtprrHkEw" },
      tera: { android: "https://youtube.com/shorts/X9GP6aVKIXo?feature=share", ios: "https://youtube.com/shorts/1WFF2vp1nz0", pc: "https://youtu.be/xvbRJZoGgcU" }
    },
    en: {
      uc: { android: "https://youtube.com/shorts/koxgsvoqIJE", ios: "https://youtube.com/shorts/Bnh9LUCFgAk", pc: "https://youtu.be/an-15mN2EPM" },
      tera: { android: "https://youtube.com/shorts/dF1eyDBfZ-Y", ios: "https://youtube.com/shorts/mwpUVOSXCtY?feature=share", pc: "https://youtu.be/MYsYg9xqegg" }
    },
    fr: {
      uc: { android: "https://youtube.com/shorts/m6qIdC7szEY", ios: "https://youtube.com/shorts/Y4SDsQjPgdg?feature=share", pc: "https://youtu.be/fp57QM14f3I" },
      tera: { android: "https://youtube.com/shorts/4fKy48-2z7A", ios: "https://youtube.com/shorts/jjudyWBf3DU", pc: "https://youtu.be/O8fAR5OL5zA" }
    },
    es: {
      uc: { android: "https://youtube.com/shorts/VOWpzk5O6U8", ios: "https://youtube.com/shorts/EWOdpZMhqyg", pc: "https://youtu.be/dEewoPkRpDU" },
      tera: { android: "https://youtube.com/shorts/FOgsxXxKg8I", ios: "https://youtube.com/shorts/-jjM5k7efTg", pc: "https://youtu.be/dPSgBMalS1E" }
    },
    de: {
      uc: { android: "https://youtube.com/shorts/fg737iKQe-E", ios: "https://youtube.com/shorts/yuCUWCx0CW8", pc: "https://youtu.be/JBlxtfsr-aE" },
      tera: { android: "https://youtube.com/shorts/QfLa4HZmnk4", ios: "https://youtube.com/shorts/M-Cuq31imvY", pc: "https://youtu.be/YUrRgeC8s80" }
    }
  };

  const copy = {
    pt: {
      htmlLang: "pt-BR", title: "Encontre seu tutorial",
      kicker: "Tutoriais em vídeo",
      translateButton: "Traduzir", siteLanguageTitle: "Idioma do site", siteLanguageHint: "Escolha o idioma do site.", footerSocial: "Redes sociais", footerWebsites: "Sites relacionados",
      section: "Escolha um aplicativo", brand: "Tutoriais de download", uc: "Navegador e downloads", tera: "Arquivos na nuvem",
      platform: { android: "Android", ios: "iOS", pc: "PC" }, platformGroup: "Selecione um dispositivo",
      dialogTitle: "Escolha o idioma do vídeo", dialogHint: "Selecione o idioma do tutorial que deseja assistir.",
      close: "Fechar", skip: "Pular para os tutoriais", open: "Abrir tutorial em", themeDark: "Ativar modo escuro", themeLight: "Ativar modo claro", themeDarkLabel: "Modo escuro", themeLightLabel: "Modo claro"
    },
    en: {
      htmlLang: "en", title: "Find your tutorial",
      kicker: "Quick video guides",
      translateButton: "Translate", siteLanguageTitle: "Site language", siteLanguageHint: "Choose a language for this site.", footerSocial: "Social media links", footerWebsites: "Related websites",
      section: "Choose an app", brand: "Download tutorials", uc: "Browser and downloads", tera: "Cloud files",
      platform: { android: "Android", ios: "iOS", pc: "PC" }, platformGroup: "Choose a device",
      dialogTitle: "Choose the video language", dialogHint: "Select the language of the tutorial you want to watch.",
      close: "Close", skip: "Skip to tutorials", open: "Open tutorial in", themeDark: "Enable dark mode", themeLight: "Enable light mode", themeDarkLabel: "Dark mode", themeLightLabel: "Light mode"
    },
    fr: {
      htmlLang: "fr", title: "Trouvez votre tutoriel",
      kicker: "Guides vidéo rapides",
      translateButton: "Traduire", siteLanguageTitle: "Langue du site", siteLanguageHint: "Choisissez la langue du site.", footerSocial: "Réseaux sociaux", footerWebsites: "Sites associés",
      section: "Choisissez une application", brand: "Tutoriels de téléchargement", uc: "Navigateur et téléchargements", tera: "Fichiers dans le cloud",
      platform: { android: "Android", ios: "iOS", pc: "PC" }, platformGroup: "Choisissez un appareil",
      dialogTitle: "Choisissez la langue de la vidéo", dialogHint: "Sélectionnez la langue du tutoriel à regarder.",
      close: "Fermer", skip: "Aller aux tutoriels", open: "Ouvrir le tutoriel en", themeDark: "Activer le mode sombre", themeLight: "Activer le mode clair", themeDarkLabel: "Mode sombre", themeLightLabel: "Mode clair"
    },
    es: {
      htmlLang: "es", title: "Encuentra tu tutorial",
      kicker: "Guías rápidas en video",
      translateButton: "Traducir", siteLanguageTitle: "Idioma del sitio", siteLanguageHint: "Elige el idioma del sitio.", footerSocial: "Redes sociales", footerWebsites: "Sitios relacionados",
      section: "Elige una aplicación", brand: "Tutoriales de descarga", uc: "Navegador y descargas", tera: "Archivos en la nube",
      platform: { android: "Android", ios: "iOS", pc: "PC" }, platformGroup: "Elige un dispositivo",
      dialogTitle: "Elige el idioma del video", dialogHint: "Selecciona el idioma del tutorial que quieres ver.",
      close: "Cerrar", skip: "Ir a los tutoriales", open: "Abrir tutorial en", themeDark: "Activar modo oscuro", themeLight: "Activar modo claro", themeDarkLabel: "Modo oscuro", themeLightLabel: "Modo claro"
    },
    de: {
      htmlLang: "de", title: "Finde dein Tutorial",
      kicker: "Kurze Videoanleitungen",
      translateButton: "Übersetzen", siteLanguageTitle: "Sprache der Website", siteLanguageHint: "Wähle die Sprache der Website.", footerSocial: "Soziale Medien", footerWebsites: "Weitere Websites",
      section: "App auswählen", brand: "Download-Tutorials", uc: "Browser und Downloads", tera: "Dateien in der Cloud",
      platform: { android: "Android", ios: "iOS", pc: "PC" }, platformGroup: "Gerät auswählen",
      dialogTitle: "Videosprache auswählen", dialogHint: "Wähle die Sprache des Tutorials, das du ansehen möchtest.",
      close: "Schließen", skip: "Zu den Tutorials", open: "Tutorial öffnen auf", themeDark: "Dunkelmodus aktivieren", themeLight: "Hellmodus aktivieren", themeDarkLabel: "Dunkelmodus", themeLightLabel: "Hellmodus"
    }
  };

  const languageNames = { pt: "Português", en: "English", fr: "Français", es: "Español", de: "Deutsch" };
  const languageCodes = { pt: "PT", en: "EN", fr: "FR", es: "ES", de: "DE" };
  const languageTags = { pt: "pt-BR", en: "en", fr: "fr", es: "es", de: "de" };
  const languageFlags = { pt: "pt-br.svg", en: "en-gb.svg", fr: "fr-fr.svg", es: "es-es.svg", de: "de-de.svg" };
  const supported = Object.keys(copy);
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  const manualSelection = params.get("lang-selection") === "manual" && supported.includes(requested) ? requested : null;
  let savedLanguage = null;
  try {
    const saved = localStorage.getItem("tutorial-language");
    if (supported.includes(saved)) savedLanguage = saved;
  } catch {}
  const localeList = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "pt"];
  const detected = localeList.map(value => String(value).toLowerCase().split("-")[0]).find(value => supported.includes(value));
  const pageLanguage = manualSelection
    || (supported.includes(requested) && requested !== "pt" ? requested : null)
    || savedLanguage
    || detected
    || "pt";

  const dialog = document.getElementById("language-dialog");
  const options = document.getElementById("language-options");
  const siteLanguageDialog = document.getElementById("site-language-dialog");
  const siteLanguageOptions = document.getElementById("site-language-options");
  const translateButton = document.getElementById("translate-toggle");
  const themeButton = document.getElementById("theme-toggle");

  function setText(id, value) {
    document.getElementById(id).textContent = value;
  }

  function applyTheme(theme, persist) {
    const dark = theme === "dark";
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    const text = copy[pageLanguage];
    const action = dark ? text.themeLight : text.themeDark;
    themeButton.setAttribute("aria-label", action);
    themeButton.setAttribute("title", action);
    themeButton.setAttribute("aria-pressed", String(dark));
    setText("theme-toggle-label", dark ? text.themeLightLabel : text.themeDarkLabel);
    document.querySelector("meta[name=theme-color]").setAttribute("content", dark ? "#121318" : "#f7f7f8");
    if (persist) { try { localStorage.setItem("tutorial-theme", dark ? "dark" : "light"); } catch {} }
  }

  function renderPage(lang) {
    const text = copy[lang];
    document.documentElement.lang = text.htmlLang;
    document.title = text.title + " | UC Browser e TeraBox";
    setText("brand-label", text.brand);
    setText("page-title", text.title);
    setText("hero-kicker", text.kicker);
    setText("translate-toggle-label", text.translateButton);
    setText("translate-toggle-code", languageCodes[lang]);
    document.getElementById("translate-current-flag").src = "assets/flags/" + languageFlags[lang];
    translateButton.setAttribute("aria-label", text.translateButton);
    translateButton.setAttribute("title", text.siteLanguageTitle);
    document.getElementById("site-language-title").textContent = text.siteLanguageTitle;
    document.getElementById("site-language-hint").textContent = text.siteLanguageHint;
    document.getElementById("footer-social-links").setAttribute("aria-label", text.footerSocial);
    document.getElementById("footer-web-links").setAttribute("aria-label", text.footerWebsites);
    setText("apps-title", text.section);
    setText("uc-description", text.uc);
    setText("tera-description", text.tera);
    setText("skip-link", text.skip);

    document.querySelectorAll(".platform-button").forEach(button => {
      const platform = button.dataset.platform;
      const appName = button.dataset.app === "uc" ? "UC Browser" : "TeraBox";
      button.querySelector(".platform-label").textContent = text.platform[platform];
      button.setAttribute("aria-label", text.platform[platform] + ": " + appName);
    });
    document.querySelectorAll(".platform-grid").forEach(group => group.setAttribute("aria-label", text.platformGroup));
  }

  function openLanguagePicker(app, platform) {
    const text = copy[pageLanguage];
    const appName = app === "uc" ? "UC Browser" : "TeraBox";
    const platformName = text.platform[platform];

    document.getElementById("dialog-title").textContent = text.dialogTitle;
    document.getElementById("dialog-context").textContent = appName + " · " + platformName;
    document.getElementById("dialog-hint").textContent = text.dialogHint;
    document.getElementById("dialog-close").setAttribute("aria-label", text.close);
    options.replaceChildren();

    supported.forEach(language => {
      const link = document.createElement("a");
      link.className = "language-option";
      link.href = videos[language][app][platform];
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.lang = languageTags[language];
      link.setAttribute("aria-label", text.open + " " + languageNames[language] + " — " + appName + " " + platformName);

      const flag = document.createElement("img");
      flag.className = "language-flag";
      flag.src = "assets/flags/" + languageFlags[language];
      flag.alt = "";
      flag.width = 24;
      flag.height = 18;
      flag.decoding = "async";
      const label = document.createElement("span");
      label.textContent = languageNames[language];
      const optionLabel = document.createElement("span");
      optionLabel.className = "language-option-label";
      optionLabel.append(flag, label);
      const arrow = document.createElement("span");
      arrow.setAttribute("aria-hidden", "true");
      arrow.innerHTML = '<svg viewBox="0 0 16 16"><path d="M6 3.5h6.5V10M12.2 3.8 6.5 9.5M10 9.5v3H3.5V6h3"></path></svg>';

      link.append(optionLabel, arrow);
      link.addEventListener("click", () => dialog.close());
      options.append(link);
    });
    dialog.showModal();
  }

  function openSiteLanguagePicker() {
    const text = copy[pageLanguage];
    siteLanguageOptions.replaceChildren();

    supported.forEach(language => {
      const link = document.createElement("a");
      const target = new URL(window.location.href);
      target.searchParams.set("lang", language);
      target.searchParams.set("lang-selection", "manual");
      link.className = "language-option";
      link.href = target.toString();
      link.lang = languageTags[language];
      link.setAttribute("aria-label", languageNames[language]);
      link.addEventListener("click", () => {
        try { localStorage.setItem("tutorial-language", language); } catch {}
      });
      if (language === pageLanguage) link.setAttribute("aria-current", "page");

      const flag = document.createElement("img");
      flag.className = "language-flag";
      flag.src = "assets/flags/" + languageFlags[language];
      flag.alt = "";
      flag.width = 24;
      flag.height = 18;
      flag.decoding = "async";

      const label = document.createElement("span");
      label.textContent = languageNames[language];
      const optionLabel = document.createElement("span");
      optionLabel.className = "language-option-label";
      optionLabel.append(flag, label);

      const indicator = document.createElement("span");
      indicator.setAttribute("aria-hidden", "true");
      indicator.innerHTML = language === pageLanguage
        ? '<svg viewBox="0 0 16 16"><path d="m3 8 3 3 7-7"></path></svg>'
        : '<svg viewBox="0 0 16 16"><path d="M3 8h9M8 4l4 4-4 4"></path></svg>';

      link.append(optionLabel, indicator);
      siteLanguageOptions.append(link);
    });

    translateButton.setAttribute("aria-expanded", "true");
    siteLanguageDialog.showModal();
  }

  document.querySelectorAll(".platform-button").forEach(button => {
    button.addEventListener("click", () => openLanguagePicker(button.dataset.app, button.dataset.platform));
  });
  document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
  translateButton.addEventListener("click", openSiteLanguagePicker);
  document.getElementById("site-language-close").addEventListener("click", () => siteLanguageDialog.close());
  siteLanguageDialog.addEventListener("close", () => translateButton.setAttribute("aria-expanded", "false"));
  siteLanguageDialog.addEventListener("click", event => {
    if (event.target === siteLanguageDialog) siteLanguageDialog.close();
  });

  renderPage(pageLanguage);
  applyTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light", false);
  themeButton.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme;
    applyTheme(current === "dark" ? "light" : "dark", true);
  });
})();
