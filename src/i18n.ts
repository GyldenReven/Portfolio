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
        "404": "404 - Page non trouvée",
        "name": "Simon Cohet",
        "homepage": {
            "welcome": "Salut, je suis Simon, étudiant en 2e année de BUT Informatique parcours réalisation d'applications. Passionné par le développement dès mon premier contact avec la programmation.",
            "about_me_link": "En savoir plus sur moi",
            "projects_link": "Voir mes projets",
            "contact_link": "Me contacter",
            "experience_title": "Éxpériences",
            "experience": {
                "ndc2_title": "Marathon de programmation - Nuit du Code",
                "ndc2_date": "Juin 2024",
                "ndc2_desc": "Participation pour la deuxième année consécutive au marathon de programmation organisé par la Nuit du Code. Il s'agit d'un projet de développement en équipe d'un jeu en 6 heures. Permettant de renforcer les compétences acquises l'année précédente en travail",
                "ndc1_title": "Marathon de programmation - Nuit du Code",
                "ndc1_date": "Juin 2023",
                "ndc1_desc": "Participation au marathon de programmation organisé par la Nuit du Code. Il s'agit d'un projet de développement en équipe d'un jeu en 6 heures qui m'a permis de vite apprendre à collaborer en groupe dans un temps limité."
            },
            "education_title": "Études",
            "onGoing_label": "En cours",
            "education": {
                "university_title": "IUT De Lens - BUT Informatique",
                "university_date": "Septembre 2024 - Juin 2026",
                "university_desc": "Actuellement en deuxième année du BUT Informatique, avec parcours en réalisation d'applications",
                "secondaryschool_title": "Lycée Baudimont - Baccalauréat Général",
                "secondaryschool_date": "Septembre 2021 - Juillet 2024",
                "secondaryschool_desc": "Diplômé avec mention très bien, avec les spécialités Mathématiques et Numérique et Sciences Informatiques",
            },
            "skills_title": "Compétences",
            "skills": {
                "programming_languages": "Programmation",
                "frameworks": "Frameworks",
                "tools": "Outils",
                "languages_title": "Langues",
                "languages": {
                    "french": "Français - Langue natale",
                    "english": "Anglais - Niveau B2",
                    "spanish": "Espagnol - Niveau A2",
            },
          },
        },
        "header": {
            "title": "Mon Portfolio",
            "home": "Accueil",
            "projects": "Projets",
            "contact": "Contact",
            "about": "À propos",
        },
        "footer": {
            "text": "Tous droits réservés.",
            "contact": "Contactez-moi :",
            "pages": "Pages :",
        },
        "projects": {
            "title": "Projets",
            "visit_live": "Voir en ligne",
            "utilitea_description": "Un site web de comportant des outils tels qu'un traducteur morse, un encodeur en code César et un convertisseur de bases numériques",
            "ametask_description": "Une application mobile de gestion de tâches avec des fonctionnalités supplementaires telles que les taches à compteurs. Réalisée afin d'essayer un nouveau framework et langage.",
        },
        "contact": {
            "title": "Contactez-moi",
            "name_label": "Nom",
            "name_placeholder": "Votre nom",
            "email_label": "Email",
            "email_placeholder": "Votre adresse email",
            "subject_label": "Sujet",
            "subject_placeholder": "Sujet du message",
            "message_label": "Message",
            "message_placeholder": "Votre message",
            "submit_button": "Envoyer",
            "info_title": "Informations de contact",
            "success_message": "Message envoyé  !",
            "error_message": "Une erreur est survenue. Veuillez réessayer.",
        }
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