import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            PORTFOLIO_2023: 'Portfolio 2023',
            LINK_COPIED: 'Link copied to clipboard !',

            ABOUT_ME_INTRO: "Hi, I'm Koumba !",
            ABOUT_ME_CONTENT:
                "<p>I work as a web developer since 3 years.</p>\n\n<p>I'm passionate about the arts & draw, so I studied graphic design before switching to web development.</p>\n\n<p>Here I'm sharing some of my personal, school and professional projects.</p>\n\n<p>Enjoy !</p>",

            PROJECT_DESCRIPTION_DRAWING:
                'Some digital illustrations I created using an iPad and a drawing tablet.</p>\nProcess time 1h to 10h of work.',
            PROJECT_DESCRIPTION_BIOMIMICRY:
                'Personal project in which I created a poster for a nature exhibit named "Biomimétisme".',
            PROJECT_DESCRIPTION_HII:
                '<p>E-commerce group project intended to sell handmade and crafted clothes and products provided by some creators from around world. <br/>\nPart of the income will be donated to some associations and to pay the creators.</p>\nMy tasks: Created the graphical charter & webdesign, built the frontend development and the admin dashboard</p>',
            PROJECT_DESCRIPTION_OSPDOM:
                '<p>Domiciliation website built for the french company OSP. The webapp offers online subscriptions for domicialition contracts to any company, which thencan be generated as PDFs.</p>\n<p>The website also contains an admin dashboard to manage the clients, to scan & upload their mails, an user dashboard to check the mails and edit personal information and an online payment system.</p>',
            PROJECT_DESCRIPTION_COOKISH:
                "<p>For this school project I built a mobile app that interacts with smartphone specific feature and uses public API.</p> \n<p>Cookish Master offers many recipes retrieved by Spoonacular's API. The user can then schedule the recipes on his smartphone calendar and generate a grocery list with the required ingredients to cook.</p>",
            PROJECT_DESCRIPTION_MUSIC_LIBRARY:
                'The Music Library is a simple React web application using Spotify API that allows users to browse a limited collection of my favorite albums using a search bar.',
            PROJECT_DESCRIPTION_TYPO:
                'Typographic experimentation created by merging the Carolingian handwriting with the Ocr A font',
            PROJECT_DESCRIPTION_KRUSH:
                '<p>KRUSH. is a fictional e-commerce website developed with React, where users can shop plants, furniture, and more by category</p> <p>This project is still in progress.</p>',
            PROJECT_DESCRIPTION_MY_CINEMA:
                '<p>The aim of this project was to build a framework based on CakePHP structure. The architecture uses the same mechanisms as a MVC framework (Model/View/Controller).</p>\n<p>Once the "homemade" framework done, I created with this one a community website  on which the users can update a film bank and share their movies history</p>',

            STACK: 'Stack',
            CATEGORY: 'Category',
            WATCH_DEMO: 'Watch demo',

            WEB_DEVELOPMENT: 'Web development',
            MOBILE_DEVELOPMENT: 'Mobile development',
            GRAPHIC_DESIGN: 'Graphic design',
            ILLUSTRATION: 'Illustration/Drawing',

            SEE_PROJECT_ONLINE: 'See the project online',
            GITHUB_REPO: 'Github repository',
        },
    },
    fr: {
        translation: {
            PORTFOLIO_2023: 'Portfolio 2023',
            LINK_COPIED: 'Lien copié dans le presse-papier !',

            ABOUT_ME_INTRO: "Coucou, je m'appelle Koumba !",
            ABOUT_ME_CONTENT:
                "<p>Je suis développeuse web depuis 3 ans.</p><p>Passionnée par le design et le dessin, j'ai d'abord étudié le design graphique avant de me réorienter vers le développement web.</p>\n\n<p>Ici, sont présentés quelques uns de mes travaux personnels, scolaires et professionnels.</p>\n\n<p>Bonne visite !</p>",

            PROJECT_DESCRIPTION_DRAWING:
                "<p>Série d'illustrations digitales réalisée sur iPad et tablette graphique.</p>\n<p>Durée de réalisation allant de 1 à 10h de travail.</p>",
            PROJECT_DESCRIPTION_BIOMIMICRY:
                'Projet fictif consistant à proposer une affiche pour la fondation EDF et son exposition pourtant sur le Biomimétisme.',
            PROJECT_DESCRIPTION_HII:
                '<p>Site e-commerce fictif réalisé en groupe dont le but serait de mettre en vente des produits artisanaux réalisés par des créateurs du monde entier.<br/> \nUne partie des revenus serait par la suite renversée aux créateurs et à des associations caritatives. </p>\n<p> Parties réalisées : Charte graphique & webdesign, intégration de la maquette, backoffice</p>',
            PROJECT_DESCRIPTION_OSPDOM:
                "<p>Site de domiciliation développé pour la société OSP. Celui-ci permet de souscrire à un contrat de domiciliation en ligne avec génération du contrat au format PDF.</p>\n<p>Le site dispose également d'un backoffice avec une gestion des clients et leur abonnement, d'un espace client pour consultation des factures et courrier et d'un module de paiement en ligne.</p>",
            PROJECT_DESCRIPTION_COOKISH:
                "<p>Projet scolaire dont le but était de réaliser une application mobile interagissant avec une fonctionnalité du téléphone et utilisant une API.</p>\n\n<p>Mon application Cookish Master propose différentes recettes de cuisine récupérées à l'aide de l'API Spoonacular. Il est par la suite possible de programmer les recettes dans l'agenda de son téléphone et de générer une liste de course avec les ingrédients nécessaires.</p>",
            PROJECT_DESCRIPTION_MUSIC_LIBRARY:
                "Music library est une application développée en React utilisant l'API Spotify, qui permet aux utilisateurs de parcourir une collection limitée de mes albums préférés via une barre de recherche.",
            PROJECT_DESCRIPTION_TYPO:
                "Expérimentation typographique réalisée en fusionnant l'écriture Caroline à la police de caractère Ocr A",
            PROJECT_DESCRIPTION_KRUSH:
                '<p>KRUSH. est un site e-commerce fictif développé en React, où les utilisateurs peuvent faire leurs achats de plantes, de meubles, et plus encore par catégorie.</p> <p>Ce projet est toujours en cours.</p>',
            PROJECT_DESCRIPTION_MY_CINEMA:
                '<p>Ce projet consistait à construire un framework basé sur la structure de CakePHP. L\'architecture imite les mécanismes nécessaires au fonctionnement d’un framework MVC (Model/View/Controller). </p> \n<p>Une fois le "homemade" framework fini, j\'ai réalisé à partir de celui-ci un site communautaire où les utilisateurs peuvent mettre à jour une banque de films et partager leur historique de films.</p>',

            STACK: 'Tech',
            CATEGORY: 'Categorie',
            WATCH_DEMO: 'Voir la demo',

            WEB_DEVELOPMENT: 'Développement web',
            MOBILE_DEVELOPMENT: 'Développement mobile',
            GRAPHIC_DESIGN: 'Design graphique',
            ILLUSTRATION: 'Illustration/Dessin',

            SEE_PROJECT_ONLINE: 'Voir le projet en ligne',
            GITHUB_REPO: 'Github repository',
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem('koum-lang') as string, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
