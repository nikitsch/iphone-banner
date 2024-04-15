const languages = ['de', 'en', 'es', 'fr', 'ja', 'pt'] as const;
type LanguagesType = (typeof languages)[number];
const userParam = navigator.language.split('-')[0];
const langParam = new URLSearchParams(window.location.search).get('lang');

const loadLanguage = async (lang: LanguagesType) => {
  try {
    const module = await import(`./shared/languages/${lang}.json`);
    return module.default;
  } catch (error) {
    console.error('Failed to load language file:', error);
    return null;
  }
};

async function applyTranslations(language: LanguagesType) {
  const translation = await loadLanguage(language);
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (key && translation[key as keyof typeof translation]) {
      element.innerHTML = translation[key as keyof typeof translation];
    }
  });
}

function reloadLanguage () {
  if (langParam?.length === 2 && languages.includes(langParam as LanguagesType)) {
    applyTranslations(langParam as LanguagesType);
  } else if (languages.includes(userParam as LanguagesType)) {
    applyTranslations(userParam as LanguagesType);
  } else {
    applyTranslations('en');
  }
}

reloadLanguage();

//!target on interaction
document.getElementById("option-1")!.addEventListener("click", function() {
  const option1 = document.getElementById("option-1");
  const option2 = document.getElementById("option-2");
  
  if (option1 && option2) {
    option2.classList.remove("active");
    option1.classList.add("active");

    const href = option1.getAttribute("data-href");
    if (href) {
      localStorage.setItem("selectedHref", href);
    }
  }
});

document.getElementById("option-2")!.addEventListener("click", function() {
  const option1 = document.getElementById("option-1");
  const option2 = document.getElementById("option-2");

  if (option1 && option2) {
    option1.classList.remove("active");
    option2.classList.add("active");

    const href = option2.getAttribute("data-href");
    if (href) {
      localStorage.setItem("selectedHref", href);
    }
  }
});

document.getElementById("submit")!.addEventListener("click", function() {
  const href = localStorage.getItem("selectedHref");
  if (href) {
    window.open(href, '_blank');
  }
});