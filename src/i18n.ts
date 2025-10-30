import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
    }
  },
  fr: {
    translation: {
        "name": "Simon Cohet",
        "homepage": {
            "welcome": "Bienvenue sur mon portfolio !",
            "intro": "Je suis un développeur passionné spécialisé dans la création d'applications web modernes et réactives.",
            "experience_title": "Éxpérience",
            
            "education_title": "Études",
            "skills_title": "Compétences",
            "skills": {
                "programming_languages": "Programmation",
                "frameworks": "Frameworks",
                "tools": "Outils",
                "languages_title": "Langues",
                "languages": {
                    "french": "Français (langue maternelle)",
                    "english": "Anglais (courant)",
            },
          },
        },
        "header": {
            "title": "Mon Portfolio",
            "home": "Accueil",
            "projects": "Projets",
            "contact": "Contact",
        },
        "footer": {
            "text": "Tous droits réservés.",
            "contact": "Contactez-moi :",
        },
        "projects": {
            "title": "Projets",
        },
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;