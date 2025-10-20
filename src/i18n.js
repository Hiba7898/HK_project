





import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
.use(LanguageDetector).use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          "Home" : "Home",
          "About":"About",
          "Projects": "Projects",
          "Resume":"Resume",
          "Welcome": "Hi There!" ,
          "im":"I'M",
          "nam": "Hiba kandaoui",
          "Type1":"Full Stack Developer | Integrator",
          "Type2":"Building user-friendly web solutions for the modern world.",
          "Type3":"Transform your vision into a stunning digital experience.",
          "Type4":"Unlock the potential of your business with a tailor-made website.",
          "Type5":"Your online success starts with a website built for results.",
          "LET ME" : "LET ME",
          "INTRODUCE":"INTRODUCE",
          "MYSELF":"MYSELF",
          "Hiba Kandaoui":"Hiba Kandaoui ,",
          "dv web":" a full stack web developer skilled in both front-end and back-end technologies.",
          "dv web2": "I specialize in creating innovative websites and web applications.",
          "dv web3": "Welcome to my world of coding 💻",
          "dv web4": "and creativity! 🎨",
          "dv web5": "Proficient in languages such as ",
          "dv web6": " JavaScript, Php, Python",
          "dv web7": "I excel in both",
          "dv web8": "front-end and back-end",
          "dv web9": "development . ",
          "dv web10": "Whether building dynamic server-side applications or working with frameworks like ",
          "dv web11": "Laravel and React. ",
          "dv web12": "I'm passionate about bringing ideas to life through code.",
          "FIND ME ON": "FIND ME ON",
          "Feel free to": "Feel free to",
          "connect" : "connect",
          "with me" : "with me ",
          "Developed by Hiba kandaoui":"Developed by Hiba kandaoui",
          "kandaoui":"by Hiba Kandaoui for a better web ",
          "Know Who" : "Greetings! 👋",
          "Professional":"Professional",
          "Skillset": "Skillset",
          "Tools":"Tools",
          "I use":"I use",
          "AboutCard1":" I'm ",
          "AboutCard2":" a Full Stack web development ",
          "AboutDesc1":"enthusiast driven by a deep curiosity to explore the limitless possibilities of technology.",
          "AboutDesc2": "With a strong foundation in both front-end and back-end technologies, I dedicate myself to transforming concepts into immersive, user-centric digital experiences.",
          "AboutDesc3": "Whether it's building intuitive interfaces or creating robust, scalable back-end architectures, my goal is always to blend creativity with functionality.",
          "AboutJourney1": "My journey into programming began with a passion for problem-solving and a desire to bring ideas to life in the digital world.",
          "AboutJourney2": "What started as curiosity has now grown into a commitment to crafting innovative, tangible solutions that have real-world impact.",
          "AboutJourney3": "From developing dynamic websites to architecting complex web applications, I thrive on the challenge of turning abstract ideas into powerful digital tools.",
          "AboutCode1": "Every line of code is an opportunity to innovate, and every project is a chance to learn, grow, and push the boundaries of what's possible.",
          "AboutCode2": "I'm excited to continue exploring new technologies, honing my skills, and contributing to projects that inspire, engage, and make a difference.",
          "Days I":"Days I",
          "Code": "Code",
          "My Recent": "My Recent",
          "Works": "Works",
          "Here are a few projects I've worked on recently.": "Here are a few projects I've worked on recently.",
          
          // Rock-Paper-Scissors Project
          "rps_title": "✊✋✌️ Rock-Paper-Scissors Game",
          "rps_desc1": "Step into a fun and fast-paced battle of Rock-Paper-Scissors! This simple game of chance and strategy pits you against the computer in a quick decision-making showdown.",
          "rps_howto": "💥 How to Play:",
          "rps_step1": "Choose rock (✊), paper (✋), or scissors (✌️).",
          "rps_step2": "The computer makes a random choice.",
          "rps_step3": "The winner is determined by the classic rules:",
          "rps_rule1": "Rock beats scissors",
          "rps_rule2": "Scissors beat paper",
          "rps_rule3": "Paper beats rock",
          "rps_draw": "If both choose the same, it's a draw.",
          "rps_why": "💡 Why play?",
          "rps_why_desc": "It's easy, fun, and perfect for all ages. Play to pass time, settle debates, or just challenge the computer for fun!",
          
          // Tic-Tac-Toe Project
          "ttt_title": "🎮 Tic-Tac-Toe Game",
          "ttt_desc1": "Welcome to the timeless classic – Tic-Tac-Toe! This is a 2-player strategy game played on a 3x3 grid. The goal is simple: be the first to align three of your symbols (❌ or ⭕) either horizontally, vertically, or diagonally.",
          "ttt_howto": "💥 How to Play:",
          "ttt_step1": "Two players take turns placing their symbol (X or O) in an empty square.",
          "ttt_step2": "The first to get three in a row wins.",
          "ttt_step3": "If all squares are filled with no winner, it's a draw.",
          "ttt_why": "💡 Why play?",
          "ttt_why_desc": "Tic-Tac-Toe is quick, fun, and great for sharpening your logical thinking. Whether you're competing with a friend or challenging yourself, it's a perfect brain break!",
          
          // Unit Converter Project
          "conv_title": "🔄 Interactive Unit Converter",
          "conv_desc1": "This interactive unit converter was designed to make it easy and intuitive to switch between different measurement units across multiple categories. Whether you're working on science, travel, finance, or everyday tasks, this tool helps you convert values quickly and accurately.",
          "conv_categories": "📂 Categories Included:",
          "conv_cat1": "Length (e.g., meters, kilometers, miles)",
          "conv_cat2": "Weight (e.g., grams, kilograms, pounds)",
          "conv_cat3": "Currency (e.g., USD, EUR, MAD) (real-time rates may vary)",
          "conv_cat4": "Temperature (Celsius, Fahrenheit, Kelvin)",
          "conv_cat5": "Time (seconds, minutes, hours, days)",
          "conv_howto": "🧭 How to Use:",
          "conv_step1": "Select a conversion category using the tabs at the top.",
          "conv_step2": "Enter a value and choose the input/output units.",
          "conv_step3": "Instantly view the result, along with a visual or contextual explanation.",
          "conv_why": "💡 Why use it?",
          "conv_why_desc": "This tool is ideal for students, professionals, and travelers. It offers a clear, interactive way to understand relationships between units and ensures that you never make a miscalculation again.",
          
          // HTML Basics Project
          "html_title": "Bases-html-pour-les-débutants",
          "html_desc1": "A modern educational platform for learning the basics of web development in Arabic.",
          "html_desc2": "An interactive educational website designed specifically for Arab beginners who want to learn HTML from scratch.",
          "html_desc3": "The site combines theoretical learning and practical application in an easy-to-use environment.",
          
          // Digital Clock Project
          "clock_title": "Digital Clock Mini-Project",
          "clock_desc1": "This project is a web-based digital clock built using HTML, CSS, and JavaScript.",
          "clock_desc2": "Its purpose is to demonstrate dynamic updates on a web page and client-side time handling.",
          
          // Moroccan Memory Game Project
          "game_title": "moroccan-memory-game",
          "game_desc1": "Cultural Exploration: The game showcases various elements of Moroccan culture.",
          "game_desc2": "Multiple Difficulty Levels: Players can choose from three difficulty levels—Easy, Medium, and Hard—",
          "game_desc3": "Multiplayer Mode: Engage in friendly competition with a second player in the multiplayer mode.",
          "game_desc4": "User-Friendly Interface: The game boasts a clean and intuitive design, ensuring a seamless experience for players of all ages.",
          "game_desc5": "Responsive Design: Optimized for both desktop and mobile devices, allowing players to enjoy the game on various platforms.",
          "game_desc6": "Whether you're looking to challenge your memory, learn about Moroccan culture, or simply have fun, the Moroccan Memory Game offers an engaging experience for everyone.",
          
          // Services Section
          "Our Main": "Our Main",
          "Services": "Services",
          
          // Service 1 - Showcase Website
          "service1_title": "Showcase Website",
          "service1_desc": "Creation of elegant and professional websites to showcase your business or brand with modern and responsive design.",
          "service1_feat1": "Responsive and mobile-first design",
          "service1_feat2": "Integrated SEO optimization",
          "service1_feat3": "Modern user interface",
          "service1_feat4": "Optimized performance",
          
          // Service 2 - E-Commerce
          "service2_title": "E-commerce Website",
          "service2_desc": "Development of complete online stores with product management, secure payments and admin dashboard.",
          "service2_feat1": "Advanced product catalog",
          "service2_feat2": "Payment gateway integration",
          "service2_feat3": "Order and stock management",
          "service2_feat4": "Admin panel",
          
          // Service 3 - Front-End Development
          "service3_title": "Front-End Development",
          "service3_desc": "Creating interactive and responsive user interfaces with the latest modern web technologies.",
          "service3_feat1": "HTML5, CSS3, JavaScript ES6+",
          "service3_feat2": "React.js, Vue.js, Angular",
          "service3_feat3": "Dynamic animations and effects",
          "service3_feat4": "Accessibility and optimized UX",
          
          // Service 4 - Back-End Development
          "service4_title": "Back-End Development",
          "service4_desc": "Development of robust server-side applications with databases and secure APIs.",
          "service4_feat1": "Node.js, Express.js, PHP, Laravel",
          "service4_feat2": "SQL/NoSQL databases",
          "service4_feat3": "REST APIs and GraphQL",
          "service4_feat4": "Authentication and security",
          
          // Service 5 - Full-Stack Development
          "service5_title": "Full-Stack Development",
          "service5_desc": "Complete end-to-end solutions, from front-end to back-end, with deployment on cloud platforms.",
          "service5_feat1": "Complete web applications",
          "service5_feat2": "Front-end/back-end integration",
          "service5_feat3": "Cloud deployment (AWS, Vercel, Netlify)",
          "service5_feat4": "Scalable architecture",
          
          // Service 6 - Optimization & Maintenance
          "service6_title": "Optimization & Maintenance",
          "service6_desc": "Performance improvement, bug fixes and updates to modern standards.",
          "service6_feat1": "Performance optimization",
          "service6_feat2": "SEO improvement",
          "service6_feat3": "Bug fixing",
          "service6_feat4": "Code refactoring"
        }
      },
      fr: {
        translation: {
          "Home" : "Accueil",
          "About":"À propos",
          "Projects" : "Projets",
          "Resume":"Reprendre",
          "Welcome": "Salut!",
          "im":"je suis",
          "nam": "Hiba kandaoui",
          "Type1":"Développeur Full Stack | Intégrateur",
          "Type2":"Créer des solutions web conviviales pour le monde moderne.",
          "Type3":"Transformez votre vision en une expérience numérique époustouflante.",
          "Type4":"Libérez le potentiel de votre entreprise avec un site web sur mesure.",
          "Type5":"Votre succès en ligne commence par un site web conçu pour les résultats.",
          "LET ME":"LAISSEZ-MOI",
          "INTRODUCE": "ME",
          "MYSELF":"PRÉSENTER",
          "Hiba Kandaoui":"Hiba Kandaoui ,",
          "dv web":" développeur web full stack spécialisé dans les technologies front-end et back-end.",
          "dv web2": "Je me spécialise dans la création de sites Web et d'applications Web innovants.",
          "dv web3": " Bienvenue dans mon monde de codage 💻",
          "dv web4": "et de créativité! 🎨",
          "dv web5": "Maîtrise des langages tels que ",
          "dv web6": "JavaScript, Php, Python ",
          "dv web7": "J'excelle à la fois dans ",
          "dv web8": "le développement",
          "dv web9": "front-end et back-end .",
          "dv web10": "Qu'il s'agisse de créer des applications dynamiques côté serveur ou de travailler avec des frameworks tels que ",
          "dv web11": "Laravel et React. ",
          "dv web12": "Je suis passionné par la création d'idées à travers le code.",
          "FIND ME ON": "TROUVEZ-MOI SUR",
          "Feel free to": "N'hésitez pas à",
          "connect":"vous connecter ",
          "with me": "avec moi ",
          "Developed by Hiba kandaoui":"Développé par Hiba kandaoui",
          "kandaoui": "par Hiba Kandaoui pour un meilleur web",
          "Know Who" : "Salutations! 👋",
          "Professional" : "Skillset", 
          "Skillset":"Professionnel",
          "Tools":"Outils",
          "I use" : " que j'utilise",
          "AboutCard2":"Je suis un développeur web Full Stack ",
          "AboutDesc1": "animé par une profonde curiosité pour explorer les possibilités infinies de la technologie.",
          "AboutDesc2": "Avec une solide base dans les technologies front-end et back-end, je me consacre à transformer des concepts en expériences numériques immersives et centrées sur l'utilisateur.",
          "AboutDesc3": "Qu'il s'agisse de créer des interfaces intuitives ou de concevoir des architectures back-end robustes et évolutives, mon objectif est toujours de mêler créativité et fonctionnalité.",
          "AboutJourney1": "Mon parcours en programmation a commencé par une passion pour la résolution de problèmes et le désir de donner vie à des idées dans le monde numérique.",
          "AboutJourney2": "Ce qui a commencé par de la curiosité est devenu un engagement à concevoir des solutions innovantes et tangibles ayant un impact réel.",
          "AboutJourney3": "Du développement de sites dynamiques à la conception d'applications web complexes, j'adore relever le défi de transformer des idées abstraites en outils numériques puissants.",
          "AboutCode1": "Chaque ligne de code est une opportunité d'innover, et chaque projet est une chance d'apprendre, de grandir et de repousser les limites du possible.",
          "AboutCode2": "Je suis impatient de continuer à explorer de nouvelles technologies, à affiner mes compétences et à contribuer à des projets qui inspirent, engagent et font la différence.",
          "Days I":"code",
          "Code": "du jour",
          "My Recent": "Mes travaux",
          "Works": "récents",
          "Here are a few projects I've worked on recently.": "Voici quelques projets sur lesquels j'ai travaillé récemment.",
          "Contact me": "Me contacter",
          "About me": "Mon parcours",
          
          // Rock-Paper-Scissors Project - French
          "rps_title": "✊✋✌️ Jeu Pierre-Papier-Ciseaux",
          "rps_desc1": "Entrez dans une bataille amusante et rapide de Pierre-Papier-Ciseaux ! Ce jeu simple de hasard et de stratégie vous oppose à l'ordinateur dans une confrontation de prise de décision rapide.",
          "rps_howto": "💥 Comment jouer :",
          "rps_step1": "Choisissez pierre (✊), papier (✋), ou ciseaux (✌️).",
          "rps_step2": "L'ordinateur fait un choix aléatoire.",
          "rps_step3": "Le gagnant est déterminé par les règles classiques :",
          "rps_rule1": "La pierre bat les ciseaux",
          "rps_rule2": "Les ciseaux battent le papier",
          "rps_rule3": "Le papier bat la pierre",
          "rps_draw": "Si les deux choisissent la même chose, c'est un match nul.",
          "rps_why": "💡 Pourquoi jouer ?",
          "rps_why_desc": "C'est facile, amusant et parfait pour tous les âges. Jouez pour passer le temps, régler des débats ou simplement défier l'ordinateur pour le plaisir !",
          
          // Tic-Tac-Toe Project - French
          "ttt_title": "🎮 Jeu de Morpion",
          "ttt_desc1": "Bienvenue au classique intemporel – le Morpion ! C'est un jeu de stratégie à 2 joueurs joué sur une grille 3x3. Le but est simple : être le premier à aligner trois de vos symboles (❌ ou ⭕) horizontalement, verticalement ou en diagonale.",
          "ttt_howto": "💥 Comment jouer :",
          "ttt_step1": "Deux joueurs placent à tour de rôle leur symbole (X ou O) dans une case vide.",
          "ttt_step2": "Le premier à obtenir trois symboles alignés gagne.",
          "ttt_step3": "Si toutes les cases sont remplies sans gagnant, c'est un match nul.",
          "ttt_why": "💡 Pourquoi jouer ?",
          "ttt_why_desc": "Le Morpion est rapide, amusant et excellent pour aiguiser votre pensée logique. Que vous soyez en compétition avec un ami ou que vous vous défiez vous-même, c'est une pause cérébrale parfaite !",
          
          // Unit Converter Project - French
          "conv_title": "🔄 Convertisseur d'Unités Interactif",
          "conv_desc1": "Ce convertisseur d'unités interactif a été conçu pour rendre facile et intuitif le passage entre différentes unités de mesure dans plusieurs catégories. Que vous travailliez en science, voyage, finance ou tâches quotidiennes, cet outil vous aide à convertir des valeurs rapidement et avec précision.",
          "conv_categories": "📂 Catégories Incluses :",
          "conv_cat1": "Longueur (ex. mètres, kilomètres, miles)",
          "conv_cat2": "Poids (ex. grammes, kilogrammes, livres)",
          "conv_cat3": "Devise (ex. USD, EUR, MAD) (les taux en temps réel peuvent varier)",
          "conv_cat4": "Température (Celsius, Fahrenheit, Kelvin)",
          "conv_cat5": "Temps (secondes, minutes, heures, jours)",
          "conv_howto": "🧭 Comment utiliser :",
          "conv_step1": "Sélectionnez une catégorie de conversion en utilisant les onglets en haut.",
          "conv_step2": "Entrez une valeur et choisissez les unités d'entrée/sortie.",
          "conv_step3": "Visualisez instantanément le résultat, avec une explication visuelle ou contextuelle.",
          "conv_why": "💡 Pourquoi l'utiliser ?",
          "conv_why_desc": "Cet outil est idéal pour les étudiants, les professionnels et les voyageurs. Il offre un moyen clair et interactif de comprendre les relations entre les unités et garantit que vous ne ferez jamais de mauvais calcul.",
          
          // HTML Basics Project - French
          "html_title": "Bases HTML pour les Débutants",
          "html_desc1": "Une plateforme éducative moderne pour apprendre les bases du développement web en arabe.",
          "html_desc2": "Un site web éducatif interactif conçu spécifiquement pour les débutants arabes qui veulent apprendre HTML depuis le début.",
          "html_desc3": "Le site combine l'apprentissage théorique et l'application pratique dans un environnement facile à utiliser.",
          
          // Digital Clock Project - French
          "clock_title": "Mini-Projet Horloge Numérique",
          "clock_desc1": "Ce projet est une horloge numérique web construite avec HTML, CSS et JavaScript.",
          "clock_desc2": "Son but est de démontrer les mises à jour dynamiques sur une page web et la gestion du temps côté client.",
          
          // Moroccan Memory Game Project - French
          "game_title": "Jeu de Mémoire Marocain",
          "game_desc1": "Exploration Culturelle : Le jeu présente divers éléments de la culture marocaine.",
          "game_desc2": "Niveaux de Difficulté Multiples : Les joueurs peuvent choisir parmi trois niveaux de difficulté - Facile, Moyen et Difficile.",
          "game_desc3": "Mode Multijoueur : Engagez-vous dans une compétition amicale avec un deuxième joueur en mode multijoueur.",
          "game_desc4": "Interface Conviviale : Le jeu dispose d'un design propre et intuitif, garantissant une expérience fluide pour les joueurs de tous âges.",
          "game_desc5": "Design Réactif : Optimisé pour les appareils de bureau et mobiles, permettant aux joueurs de profiter du jeu sur diverses plateformes.",
          "game_desc6": "Que vous cherchiez à défier votre mémoire, à découvrir la culture marocaine ou simplement à vous amuser, le Jeu de Mémoire Marocain offre une expérience engageante pour tous.",
          
          // Services Section - French
          "Our Main": "Nos",
          "Services": "Services Principaux",
          
          // Service 1 - Site Web Vitrine
          "service1_title": "Site Web Vitrine", 
          "service1_desc": "Création de sites web élégants et professionnels pour présenter votre entreprise ou votre marque avec un design moderne et responsive.",
          "service1_feat1": "Design responsive et mobile-first",
          "service1_feat2": "Optimisation SEO intégrée",
          "service1_feat3": "Interface utilisateur moderne",
          "service1_feat4": "Performance optimisée",
          
          // Service 2 - E-Commerce
          "service2_title": "Site E-commerce",
          "service2_desc": "Développement de boutiques en ligne complètes avec gestion des produits, paiements sécurisés et tableau de bord administrateur.",
          "service2_feat1": "Catalogue produits avancé",
          "service2_feat2": "Intégration passerelles de paiement",
          "service2_feat3": "Gestion des commandes et stock",
          "service2_feat4": "Panneau d'administration",
          
          // Service 3 - Développement Front-End
          "service3_title": "Développement Front-End",
          "service3_desc": "Création d'interfaces utilisateur interactives et responsives avec les dernières technologies web modernes.",
          "service3_feat1": "HTML5, CSS3, JavaScript ES6+",
          "service3_feat2": "React.js, Vue.js, Angular",
          "service3_feat3": "Animations et effets dynamiques",
          "service3_feat4": "Accessibilité et UX optimisée",
          
          // Service 4 - Développement Back-End
          "service4_title": "Développement Back-End",
          "service4_desc": "Développement d'applications côté serveur robustes avec bases de données et APIs sécurisées.",
          "service4_feat1": "Node.js, Express.js, PHP, Laravel",
          "service4_feat2": "Bases de données SQL/NoSQL",
          "service4_feat3": "APIs REST et GraphQL",
          "service4_feat4": "Authentification et sécurité",
          
          // Service 5 - Développement Full-Stack
          "service5_title": "Développement Full-Stack",
          "service5_desc": "Solutions complètes de A à Z, du front-end au back-end, avec déploiement sur plateformes cloud.",
          "service5_feat1": "Applications web complètes",
          "service5_feat2": "Intégration front-end/back-end",
          "service5_feat3": "Déploiement cloud (AWS, Vercel, Netlify)",
          "service5_feat4": "Architecture scalable",
          
          // Service 6 - Optimisation & Maintenance
          "service6_title": "Optimisation & Maintenance",
          "service6_desc": "Amélioration des performances, correction de bugs et mise à jour vers les standards modernes.",
          "service6_feat1": "Optimisation des performances",
          "service6_feat2": "Amélioration SEO",
          "service6_feat3": "Correction de bugs",
          "service6_feat4": "Refactorisation de code"
        }
      },
    },
  });