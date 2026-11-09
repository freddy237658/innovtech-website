import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const translations = {
  en: {
    translation: {
      Accueil: 'Home',
      Entreprise: 'Company',
      Services: 'Services',
      Expertises: 'Expertise',
      'Innovation & R&D': 'Innovation & R&D',
      Réalisations: 'Projects',
      Communauté: 'Community',
      Ressources: 'Resources',
      'Parlons de votre projet': "Let's talk about your project",
      'Ouvrir le menu': 'Open menu',
      'Fermer le menu': 'Close menu',
      'À propos': 'About us',
      'Mission & vision': 'Mission & vision',
      'Nos réalisations': 'Our projects',
      'Nos services': 'Our services',
      'Développement logiciel': 'Software development',
      'Solutions SaaS': 'SaaS solutions',
      'Développement web': 'Web development',
      Digitalisation: 'Digital transformation',
      'UI/UX Design': 'UI/UX design',
      'Blog & ressources': 'Blog & resources',
      Explorer: 'Explore',
      Contact: 'Contact',
      'Nous contacter': 'Contact us',
      'Tous droits réservés.': 'All rights reserved.',
      Confidentialité: 'Privacy',
      'Conditions générales': 'Terms and conditions',
      'Mentions légales': 'Legal notice',
      'Nous transformons vos idées en solutions numériques innovantes pour construire votre avenir digital.':
        'We turn your ideas into innovative digital solutions to build your digital future.',
      Cameroun: 'Cameroon',
      'Contactez-nous': 'Get in touch',
      'Discutons de votre projet': "Let's discuss your project",
      'Votre vision, nos technologies, votre réussite.':
        'Your vision, our technology, your success.',
      "L'innovation au service de votre avenir": 'Innovation for your future',
      'Transformons vos idées en': 'Let’s turn your ideas into',
      'solutions numériques': 'digital solutions',
      'innovantes.': 'innovative solutions.',
      'INNOVTECH accompagne les entreprises, entrepreneurs et organisations dans leur transformation digitale grâce à des technologies modernes, performantes et adaptées à leurs ambitions.':
        'INNOVTECH helps businesses, entrepreneurs, and organizations transform digitally with modern, high-performance technologies tailored to their ambitions.',
      'Solutions fiables': 'Reliable solutions',
      'Technologies modernes': 'Modern technologies',
      'Technologies avancées': 'Advanced technologies',
      'Transformation digitale': 'Digital transformation',
      'Vos idées, nos solutions': 'Your ideas, our solutions',
      Innovation: 'Innovation',
      'Building tomorrow’s digital world.': 'Building tomorrow’s digital world.',
      'QUI SOMMES-NOUS ?': 'WHO WE ARE',
      'Nous donnons vie à vos': 'We bring your',
      'ambitions numériques.': 'digital ambitions to life.',
      'Votre partenaire technologique': 'Your technology partner',
      'INNOVTECH est une entreprise technologique spécialisée dans la conception de solutions numériques innovantes. Nous accompagnons les entreprises, entrepreneurs et organisations dans la création de logiciels, plateformes SaaS, applications et services digitaux.':
        'INNOVTECH is a technology company specializing in innovative digital solutions. We help businesses, entrepreneurs, and organizations build software, SaaS platforms, applications, and digital services.',
      'Des solutions adaptées à vos besoins': 'Solutions tailored to your needs',
      'Une approche centrée sur l’innovation': 'An innovation-focused approach',
      'Des technologies modernes et évolutives': 'Modern, scalable technologies',
      'Un accompagnement tout au long du projet': 'Support throughout your project',
      'Découvrir INNOVTECH': 'Discover INNOVTECH',
      'NOS SERVICES': 'OUR SERVICES',
      'Des solutions pour': 'Solutions to help you',
      'Des solutions numériques pour': 'Digital solutions to help you',
      'aller plus loin.': 'go further.',
      "De l'idée à la réalisation, nous mettons la technologie au service de vos projets.":
        'From idea to delivery, we put technology to work for your projects.',
      'Applications mobiles & desktop': 'Mobile & desktop applications',
      'Des logiciels personnalisés conçus pour répondre aux besoins spécifiques de votre activité.':
        'Custom software designed to meet your business needs.',
      'Des plateformes intelligentes, accessibles et évolutives pour vos projets numériques.':
        'Smart, accessible, and scalable platforms for your digital projects.',
      'Des sites web modernes, performants et adaptés à tous les appareils.':
        'Modern, high-performance websites that work on every device.',
      'Des applications pensées pour simplifier les usages et améliorer la productivité.':
        'Applications designed to simplify workflows and boost productivity.',
      'Automatisation et modernisation des processus de votre organisation.':
        'Automation and modernization of your organization’s processes.',
      'Des interfaces intuitives, esthétiques et centrées sur les utilisateurs.':
        'Intuitive, polished interfaces designed around users.',
      'Assistance, maintenance et accompagnement technologique.':
        'Technical support, maintenance, and technology guidance.',
      'Des orientations stratégiques pour choisir les bonnes technologies.':
        'Strategic guidance to help you choose the right technologies.',
      Découvrir: 'Discover',
      'NOS EXPERTISES': 'OUR EXPERTISE',
      'La technologie comme': 'Technology as a',
      "moteur d'innovation.": 'driver of innovation.',
      'Nous mobilisons différentes technologies et compétences pour concevoir des solutions performantes et évolutives.':
        'We bring together technologies and expertise to build high-performance, scalable solutions.',
      TECHNOLOGIES: 'TECHNOLOGIES',
      'Construire le futur numérique.': 'Building the digital future.',
      'Interfaces modernes et expériences utilisateur.': 'Modern interfaces and user experiences.',
      'Architectures robustes et APIs performantes.': 'Robust architectures and high-performance APIs.',
      'Gestion et structuration des données.': 'Data management and organization.',
      'Applications mobiles et multiplateformes.': 'Mobile and cross-platform applications.',
      'Infrastructure, déploiement et automatisation.': 'Infrastructure, deployment, and automation.',
      'Bonnes pratiques de sécurité informatique.': 'Cybersecurity best practices.',
      'Explorer nos expertises': 'Explore our expertise',
      'INNOVATION & RECHERCHE': 'INNOVATION & RESEARCH',
      "Explorer aujourd'hui les": 'Exploring today the',
      'technologies de demain.': 'technologies of tomorrow.',
      "Nous explorons les possibilités offertes par l'intelligence artificielle, le Machine Learning et les technologies émergentes pour imaginer de nouvelles solutions numériques.":
        'We explore the possibilities of artificial intelligence, machine learning, and emerging technologies to create new digital solutions.',
      'IA générative': 'Generative AI',
      'IoT & systèmes intelligents': 'IoT & smart systems',
      'Explorer notre univers technologique': 'Explore our technology',
      'Imaginer. Expérimenter. Innover.': 'Imagine. Experiment. Innovate.',
      'NOS PRODUITS': 'OUR PRODUCTS',
      'Des idées transformées en': 'Ideas transformed into',
      'produits numériques.': 'digital products.',
      'Découvrez les solutions et projets technologiques développés au sein de notre écosystème.':
        'Discover the solutions and technology projects developed across our ecosystem.',
      'Voir tous les projets': 'View all projects',
      'PLATEFORME PROFESSIONNELLE': 'PROFESSIONAL PLATFORM',
      'Une plateforme destinée à connecter les développeurs, ingénieurs, entreprises et passionnés de technologie.':
        'A platform connecting developers, engineers, businesses, and technology enthusiasts.',
      'Projet en développement': 'In development',
      'INTELLIGENCE ARTIFICIELLE': 'ARTIFICIAL INTELLIGENCE',
      'Un projet de recherche visant à développer des modèles de langage et des technologies IA.':
        'A research project focused on developing language models and AI technologies.',
      'Recherche & développement': 'Research & development',
      'EDTECH / SAAS': 'EDTECH / SAAS',
      'Une plateforme de gestion scolaire pensée pour moderniser les établissements éducatifs.':
        'A school management platform designed to modernize educational institutions.',
      'Découvrir le projet': 'Discover the project',
      'NOS RÉALISATIONS': 'OUR PROJECTS',
      'La technologie au service': 'Technology in service of',
      'des idées concrètes.': 'real-world ideas.',
      'Des projets qui illustrent notre volonté de transformer les besoins en solutions numériques utiles.':
        'Projects that demonstrate our commitment to turning needs into useful digital solutions.',
      'PROJETS TECHNOLOGIQUES': 'TECHNOLOGY PROJECTS',
      'Construire des solutions qui ont du sens.': 'Building solutions that matter.',
      "Chaque projet représente une opportunité de résoudre un problème, d'améliorer une expérience ou de créer de nouvelles possibilités grâce à la technologie.":
        'Every project is an opportunity to solve a problem, improve an experience, or create new possibilities through technology.',
      'Explorer nos réalisations': 'Explore our projects',
      'COMMUNAUTÉ INNOVTECH': 'INNOVTECH COMMUNITY',
      'Les grandes innovations commencent souvent par': 'Great innovations often start with',
      'une idée.': 'an idea.',
      'Nous souhaitons encourager les étudiants, développeurs et entrepreneurs à apprendre, expérimenter et transformer leurs idées en véritables projets technologiques.':
        'We encourage students, developers, and entrepreneurs to learn, experiment, and turn their ideas into real technology projects.',
      'Rencontrer des passionnés': 'Meet like-minded people',
      'Partager et développer des idées': 'Share and develop ideas',
      'Construire des projets innovants': 'Build innovative projects',
      'Rejoindre la communauté': 'Join the community',
      "Ensemble, construisons l'avenir.": 'Building the future together.',
      'BLOG & RESSOURCES': 'BLOG & RESOURCES',
      'Apprendre, découvrir et': 'Learn, discover, and',
      'progresser.': 'grow.',
      'Toutes les ressources': 'All resources',
      TECHNOLOGIE: 'TECHNOLOGY',
      'Comment la transformation digitale change les entreprises':
        'How digital transformation is changing businesses',
      'Comprendre les possibilités de l’intelligence artificielle':
        'Understanding the possibilities of artificial intelligence',
      DÉVELOPPEMENT: 'DEVELOPMENT',
      'Pourquoi créer une plateforme SaaS pour son activité ?':
        'Why build a SaaS platform for your business?',
      Article: 'Article',
      Lire: 'Read',
      'NOTRE APPROCHE': 'OUR APPROACH',
      'De votre idée à une': 'From your idea to a',
      'solution concrète.': 'real-world solution.',
      'Une démarche structurée pour transformer vos ambitions en réalisations numériques.':
        'A structured approach to turning your ambitions into digital products.',
      Écouter: 'Listen',
      'Comprendre vos besoins, vos objectifs et les défis de votre activité.':
        'Understand your needs, goals, and business challenges.',
      Concevoir: 'Design',
      'Définir une stratégie et imaginer une solution adaptée.':
        'Define a strategy and shape the right solution.',
      Développer: 'Develop',
      'Construire, tester et améliorer votre solution.':
        'Build, test, and improve your solution.',
      Déployer: 'Deploy',
      'Mettre votre solution en production et vous accompagner.':
        'Launch your solution and support you along the way.',
      'VOTRE PROCHAIN PROJET COMMENCE ICI': 'YOUR NEXT PROJECT STARTS HERE',
      'Et si nous construisions quelque chose d’exceptionnel ensemble ?':
        'What if we built something exceptional together?',
      "Partagez votre idée avec nous. Nous serons ravis de discuter de vos ambitions et d'imaginer les solutions adaptées à vos besoins.":
        'Share your idea with us. We would love to discuss your ambitions and explore solutions tailored to your needs.',
      'Démarrer un projet': 'Start a project',
      'Cette page sera bientôt disponible.': 'This page will be available soon.',
      'Page introuvable': 'Page not found',
      'L’adresse demandée ne correspond à aucune page du site.':
        'The requested address does not match any page on this site.',
      'Retour à l’accueil': 'Back to home',
      'SERVICE': 'SERVICE',
      'EXPERTISE': 'EXPERTISE',
      'Service': 'Service',
      'Toutes nos expertises': 'All areas of expertise',
      'Tous nos services': 'All services',
      'Découvrir nos services': 'Discover our services',
      'Explorer cette expertise': 'Explore this area of expertise',
      'Découvrir ce service': 'Discover this service',
      'Discuter de votre projet': 'Discuss your project',
      'Service introuvable': 'Service not found',
      "Le service recherché n'existe pas ou n'est plus disponible.":
        'The requested service does not exist or is no longer available.',
      'Voir nos services': 'View our services',
      'Expertise introuvable': 'Expertise not found',
      "Le domaine recherché n'existe pas ou n'est pas disponible.":
        'The requested area does not exist or is unavailable.',
      'Voir toutes les expertises': 'View all areas of expertise',
      'Présentation du service': 'About this service',
      'Pourquoi choisir {{service}} ?': 'Why choose {{service}}?',
      'Solutions adaptées': 'Tailored solutions',
      'Une réponse construite autour de vos besoins.':
        'A solution built around your needs.',
      'Expertise technique': 'Technical expertise',
      'Des technologies sélectionnées avec attention.':
        'Technologies carefully selected for your project.',
      Collaboration: 'Collaboration',
      'Une communication tout au long du projet.':
        'Clear communication throughout the project.',
      Évolutivité: 'Scalability',
      'Des solutions pensées pour accompagner votre croissance.':
        'Solutions designed to support your growth.',
      'Nos prestations': 'What we deliver',
      'Ce que nous pouvons réaliser.': 'What we can build.',
      'Découvrez les différentes prestations que nous pouvons proposer dans le cadre de ce service.':
        'Explore the services we can provide as part of this offering.',
      'Les avantages': 'Benefits',
      'La valeur que nous souhaitons vous apporter.':
        'The value we aim to deliver.',
      'Chaque prestation est orientée vers des résultats concrets et une meilleure expérience.':
        'Every engagement is focused on tangible results and a better experience.',
      'Environnement technologique': 'Technology stack',
      'Des technologies adaptées à chaque projet.':
        'The right technologies for every project.',
      "Nous sélectionnons les outils en fonction des objectifs, des contraintes et de l'environnement du projet.":
        'We select tools based on the project’s goals, constraints, and environment.',
      "À qui s'adresse ce service ?": 'Who is this service for?',
      'Nous accompagnons différents profils.':
        'We work with a range of organizations.',
      "Nos prestations peuvent être adaptées aux besoins de plusieurs types d'organisations.":
        'Our services can be tailored to the needs of different types of organizations.',
      'Découvrir également': 'You may also like',
      'Explorez nos autres services.': 'Explore our other services.',
      "Découvrez d'autres expertises pour compléter votre projet.":
        'Discover other areas of expertise to complement your project.',
      'Présentation': 'Overview',
      "Notre démarche consiste à étudier le contexte du projet et à identifier les choix techniques qui permettent d'obtenir une solution cohérente, maintenable et adaptée à ses utilisateurs.":
        'We study each project’s context and identify the technical choices needed to build a coherent, maintainable solution that fits its users.',
      Objectif: 'Objective',
      'Répondre aux besoins techniques et fonctionnels du projet.':
        'Meet the project’s technical and functional needs.',
      Architecture: 'Architecture',
      'Organiser les composants de manière cohérente.':
        'Organize components in a coherent way.',
      'Organiser les composants, les services et les données de manière cohérente.':
        'Organize components, services, and data in a coherent way.',
      'Explorer les approches adaptées aux nouveaux besoins.':
        'Explore approaches suited to new needs.',
      'Privilégier des solutions fiables et maintenables.':
        'Prioritize reliable, maintainable solutions.',
      'Nos capacités': 'Our capabilities',
      "Les domaines d'intervention.": 'Areas of expertise.',
      'Voici les principales activités associées à cette expertise.':
        'Here are the main activities associated with this area of expertise.',
      'Les outils susceptibles d’être utilisés selon la nature du projet.':
        'Tools that may be used depending on the project.',
      'Valeur ajoutée': 'Added value',
      'Ce que cette expertise peut apporter à votre projet.':
        'What this expertise can bring to your project.',
      "Domaines d'application": 'Applications',
      'Où cette expertise intervient-elle ?':
        'Where can this expertise be applied?',
      'À découvrir également': 'Explore more',
      "Nos autres domaines d'expertise.": 'Our other areas of expertise.',
      'Domaine introuvable': 'Area not found',
      "Cette page d'innovation n'existe pas ou n'est plus disponible.":
        'This innovation page does not exist or is no longer available.',
      'Retour aux innovations': 'Back to innovation',
      'Toutes les innovations': 'All innovations',
      'Comprendre notre démarche.': 'Understanding our approach.',
      'Une démarche progressive': 'A step-by-step approach',
      "Les travaux présentés évoluent selon les expérimentations, les ressources disponibles et la validation des cas d'usage.":
        'Our work evolves based on experiments, available resources, and validated use cases.',
      "Cas d'utilisation": 'Use cases',
      'Les applications envisagées.': 'Potential applications.',
      'Voici quelques exemples de domaines dans lesquels cette technologie peut apporter de la valeur.':
        'Here are a few areas where this technology can deliver value.',
      'Nos objectifs': 'Our objectives',
      'Technologies étudiées': 'Technologies explored',
      "Technologies et outils susceptibles d'être utilisés dans ce domaine.":
        'Technologies and tools that may be used in this area.',
      "Voir les autres domaines d'innovation": 'Explore other innovation areas',
      'Une idée innovante ?': 'Have an innovative idea?',
      'Construisons ensemble les solutions de demain.':
        'Let’s build tomorrow’s solutions together.',
      'Vous avez une idée, un défi technologique ou un projet de recherche ? Échangeons sur les possibilités de collaboration.':
        'Have an idea, a technology challenge, or a research project? Let’s discuss how we could work together.',
      'Discuter de votre idée': 'Discuss your idea',
      'Construisons ensemble': 'Let’s build together',
      'Votre prochaine grande idée mérite de devenir réalité.':
        'Your next big idea deserves to become reality.',
      'Discutons de vos ambitions et découvrons comment la technologie peut vous aider à les concrétiser.':
        'Let’s discuss your ambitions and explore how technology can help bring them to life.',
      'Démarrer une collaboration': 'Start a collaboration',
      'Notre raison d’être': 'Our purpose',
      'Projet': 'Project',
      'portfolio': 'portfolio',
      'Portfolio INNOVTECH': 'INNOVTECH portfolio',
      'Des idées qui deviennent': 'Ideas turned into',
      'des solutions.': 'solutions.',
      'Découvrez nos produits, plateformes et projets technologiques conçus pour répondre aux défis numériques des entreprises et des organisations.':
        'Discover our products, platforms, and technology projects built to meet the digital challenges of businesses and organizations.',
      'Proposer un projet': 'Propose a project',
      'Équipe travaillant sur un projet technologique':
        'Team working on a technology project',
      'Notre écosystème de produits': 'Our product ecosystem',
      'Logiciels, SaaS et innovations.': 'Software, SaaS, and innovation.',
      'Notre portfolio': 'Our portfolio',
      'Des solutions pensées pour des besoins réels.':
        'Solutions designed for real needs.',
      'INNOVTECH développe et explore des solutions numériques dans plusieurs domaines : logiciels professionnels, plateformes SaaS, intelligence artificielle et applications métiers.':
        'INNOVTECH develops and explores digital solutions across several areas, including business software, SaaS platforms, artificial intelligence, and business applications.',
      'Projets présentés dans notre catalogue':
        'Projects featured in our catalog',
      'Une approche orientée solutions numériques':
        'A digital-solutions-focused approach',
      'À découvrir': 'Featured',
      'Quelques projets à la une.': 'Featured projects.',
      "Découvrez une sélection de produits et de projets qui illustrent les orientations technologiques d'INNOVTECH.":
        'Explore a selection of products and projects that showcase INNOVTECH’s technology focus.',
      'Catalogue': 'Catalog',
      'Explorez nos réalisations.': 'Explore our projects.',
      'Recherchez un projet ou sélectionnez une catégorie pour découvrir les solutions qui vous intéressent.':
        'Search for a project or select a category to find solutions that interest you.',
      'Tous': 'All',
      'Rechercher un projet...': 'Search projects...',
      'Rechercher un projet': 'Search projects',
      'Aucun projet trouvé': 'No projects found',
      'Essayez une autre recherche ou sélectionnez une autre catégorie.':
        'Try another search or choose a different category.',
      'Réinitialiser les filtres': 'Reset filters',
      projectCount_one: '{{count}} project found',
      projectCount_other: '{{count}} projects found',
      'Votre prochain projet': 'Your next project',
      'Et si votre idée devenait notre prochaine réalisation ?':
        'What if your idea became our next project?',
      'Nous accompagnons les entreprises et les entrepreneurs dans la conception et le développement de leurs solutions numériques.':
        'We support businesses and entrepreneurs in designing and developing their digital solutions.',
      'Projet introuvable': 'Project not found',
      "Cette réalisation n'existe pas ou n'est plus disponible.":
        'This project does not exist or is no longer available.',
      'Retour aux réalisations': 'Back to projects',
      'Toutes les réalisations': 'All projects',
      'Réalisation INNOVTECH': 'INNOVTECH project',
      'Visiter le produit': 'Visit the product',
      'Demander des informations': 'Request information',
      'Présentation du projet': 'About this project',
      'Une solution pensée autour de vos besoins.':
        'A solution designed around your needs.',
      'Une approche orientée produit': 'A product-focused approach',
      "La conception de ce projet repose sur l'identification des besoins, la définition des fonctionnalités et le choix d'une architecture adaptée.":
        'This project is designed by identifying needs, defining features, and choosing a suitable architecture.',
      Fonctionnalités: 'Features',
      'Ce que propose le projet.': 'What the project offers.',
      'Les principales fonctionnalités prévues ou intégrées dans ce projet.':
        'Key features planned or included in this project.',
      "À qui s'adresse ce projet ?": 'Who is this project for?',
      'Les bénéfices recherchés': 'Expected benefits',
      'Environnement technique': 'Technology stack',
      'Les technologies du projet.': 'Project technologies.',
      "Les outils et technologies associés à l'architecture de cette réalisation.":
        'Tools and technologies used in this project’s architecture.',
      'En développement': 'In development',
      'En préparation': 'In planning',
      'En exploration': 'In exploration',
      Prototypage: 'Prototyping',
      'Intelligence artificielle': 'Artificial intelligence',
      Éducation: 'Education',
      'Application web': 'Web application',
      'Application mobile': 'Mobile application',
      'Connecter les talents technologiques au monde.':
        'Connecting technology talent to the world.',
      'Une plateforme professionnelle destinée aux développeurs, ingénieurs, startups et entreprises de l’écosystème technologique.':
        'A professional platform for developers, engineers, startups, and companies in the technology ecosystem.',
      'InnovConnect est un projet de plateforme numérique qui ambitionne de faciliter les rencontres professionnelles dans l’univers de la technologie. Elle permettra aux développeurs, ingénieurs, entrepreneurs, startups et organisations de présenter leurs compétences, de découvrir des opportunités et de collaborer sur des projets.':
        'InnovConnect is a digital platform project designed to foster professional connections in technology. It will enable developers, engineers, entrepreneurs, startups, and organizations to showcase skills, discover opportunities, and collaborate on projects.',
      'Profils professionnels et portfolios': 'Professional profiles and portfolios',
      "Profils d'entreprises et de startups": 'Company and startup profiles',
      'Recherche de développeurs et ingénieurs': 'Find developers and engineers',
      'Découverte d’opportunités professionnelles': 'Discover career opportunities',
      'Mise en relation et collaboration': 'Networking and collaboration',
      'Outils intelligents d’assistance à la rédaction':
        'Smart writing assistance tools',
      'Valoriser les compétences technologiques.':
        'Showcase technology skills.',
      'Faciliter les collaborations professionnelles.':
        'Make professional collaboration easier.',
      'Rapprocher les talents des entreprises.':
        'Connect talent with businesses.',
      'Développeurs et ingénieurs': 'Developers and engineers',
      'Entreprises technologiques': 'Technology companies',
      Recruteurs: 'Recruiters',
      'Explorer une nouvelle génération d’intelligence artificielle.':
        'Exploring a new generation of artificial intelligence.',
      'Un projet de recherche et développement consacré aux modèles de langage et aux assistants intelligents.':
        'A research and development project focused on language models and intelligent assistants.',
      'InnovLLM est un projet de recherche et développement porté par INNOVTECH autour des grands modèles de langage. Son ambition est d’explorer les architectures des modèles linguistiques, les techniques d’entraînement, les méthodes d’adaptation et les applications de l’IA générative. Le projet vise progressivement la création d’un écosystème d’outils intelligents.':
        'InnovLLM is an INNOVTECH research and development project focused on large language models. It explores model architectures, training techniques, adaptation methods, and generative AI applications, with the longer-term goal of creating an ecosystem of intelligent tools.',
      'Exploration des modèles de langage': 'Exploring language models',
      'Expérimentation de modèles open source': 'Experimenting with open-source models',
      'Étude des techniques de fine-tuning': 'Studying fine-tuning techniques',
      'Recherche augmentée par génération (RAG)':
        'Retrieval-augmented generation (RAG)',
      "Expérimentation d'assistants conversationnels":
        'Experimenting with conversational assistants',
      'Développer une expertise dans les modèles de langage.':
        'Build expertise in language models.',
      'Explorer les possibilités de l’IA générative.':
        'Explore the possibilities of generative AI.',
      'Créer progressivement des outils intelligents.':
        'Gradually build intelligent tools.',
      Chercheurs: 'Researchers',
      'Passionnés d’intelligence artificielle': 'AI enthusiasts',
      'Moderniser la gestion des établissements scolaires.':
        'Modernizing school administration.',
      'Une plateforme de gestion scolaire destinée aux établissements d’enseignement, avec une architecture SaaS multi-écoles.':
        'A school management platform for educational institutions, built on a multi-school SaaS architecture.',
      'Fred School est une solution de gestion scolaire conçue pour accompagner les établissements dans la digitalisation de leurs activités. La plateforme ambitionne de centraliser les inscriptions, les élèves, les enseignants, les évaluations, les bulletins, les emplois du temps, les paiements et la communication avec les parents. Son architecture cible le fonctionnement multi-établissements.':
        'Fred School is a school management solution designed to help institutions digitize their operations. It aims to centralize enrollment, student and teacher records, assessments, report cards, schedules, payments, and parent communications in a multi-institution platform.',
      'Gestion des établissements et années scolaires':
        'School and academic-year management',
      'Gestion des élèves et des enseignants': 'Student and teacher management',
      'Évaluations, notes et bulletins': 'Assessments, grades, and report cards',
      'Gestion des frais et paiements': 'Fees and payment management',
      'Emplois du temps et suivi des absences': 'Schedules and attendance tracking',
      'Espaces dédiés aux parents et enseignants': 'Portals for parents and teachers',
      'Centraliser les informations scolaires.': 'Centralize school information.',
      'Simplifier les tâches administratives.': 'Simplify administrative tasks.',
      'Améliorer le suivi pédagogique.': 'Improve academic tracking.',
      'Faciliter la communication entre les acteurs scolaires.':
        'Improve communication across the school community.',
      'Écoles primaires': 'Primary schools',
      Collèges: 'Middle schools',
      Lycées: 'High schools',
      'Groupes scolaires': 'School groups',
      'Établissements privés': 'Private schools',
      'Une expérience numérique pour la restauration.':
        'A digital experience for the restaurant industry.',
      'Un projet de plateforme de commande et de gestion destiné aux restaurants et à leurs clients.':
        'An ordering and management platform project for restaurants and their customers.',
      'Djelica est un projet numérique orienté vers le secteur de la restauration. Il vise à faciliter la présentation des menus, la découverte des établissements et les parcours de commande. Son architecture est pensée autour d’une application web, d’une API et d’une solution desktop.':
        'Djelica is a digital project for the restaurant industry. It aims to make menus easier to present, restaurants easier to discover, and ordering simpler, with an architecture spanning a web app, an API, and a desktop solution.',
      'Présentation des restaurants': 'Restaurant profiles',
      'Consultation des menus': 'Menu browsing',
      'Parcours de commande': 'Ordering workflows',
      'Gestion des établissements': 'Restaurant management',
      'Architecture API': 'API architecture',
      'Interface web et desktop': 'Web and desktop interface',
      'Améliorer la visibilité numérique des restaurants.':
        'Improve restaurants’ digital visibility.',
      'Faciliter la gestion des commandes.': 'Simplify order management.',
      'Moderniser l’expérience client.': 'Modernize the customer experience.',
      Restaurants: 'Restaurants',
      'Établissements de restauration': 'Food service businesses',
      Clients: 'Customers',
      'Gestionnaires de restaurants': 'Restaurant managers',
      'La vitrine numérique de notre vision technologique.':
        'The digital showcase for our technology vision.',
      'Le site institutionnel d’INNOVTECH, conçu pour présenter ses services, ses expertises, ses innovations et ses réalisations.':
        'INNOVTECH’s corporate website, designed to showcase its services, expertise, innovations, and projects.',
      'Le site officiel d’INNOVTECH est une plateforme institutionnelle bilingue qui présente l’entreprise, ses domaines d’intervention, ses produits, ses projets et ses opportunités de collaboration. Il constitue le point central de communication de la marque.':
        'INNOVTECH’s official website is a bilingual corporate platform introducing the company, its services, products, projects, and collaboration opportunities. It is the central communications hub for the brand.',
      'Présentation institutionnelle': 'Corporate overview',
      'Catalogue de services': 'Service catalog',
      'Présentation des produits': 'Product showcase',
      'Contenus bilingues': 'Bilingual content',
      'Formulaires de contact': 'Contact forms',
      'Renforcer la présence numérique de l’entreprise.':
        'Strengthen the company’s digital presence.',
      'Présenter les expertises et réalisations.':
        'Showcase expertise and projects.',
      'Faciliter les demandes de collaboration.':
        'Make collaboration inquiries easier.',
      Partenaires: 'Partners',
      Investisseurs: 'Investors',
      'Communauté technologique': 'Technology community',
      'Étendre les expériences numériques au mobile.':
        'Bringing digital experiences to mobile.',
      'Un domaine de conception d’applications mobiles répondant à des besoins métiers et à des usages quotidiens.':
        'A field focused on designing mobile apps for business needs and everyday use.',
      'Cette catégorie regroupe les pistes et projets de développement d’applications mobiles explorés par INNOVTECH. Elle couvre la conception d’interfaces mobiles, l’intégration d’API et l’étude des solutions multiplateformes.':
        'This category brings together mobile app concepts and projects explored by INNOVTECH. It covers mobile interface design, API integration, and cross-platform solutions.',
      'Interfaces adaptées aux smartphones': 'Interfaces designed for smartphones',
      'Intégration de services web': 'Web service integration',
      'Expériences multiplateformes': 'Cross-platform experiences',
      'Fonctionnalités mobiles': 'Mobile features',
      'Rendre les services numériques plus accessibles.':
        'Make digital services more accessible.',
      'Accompagner les usages mobiles.': 'Support mobile use cases.',
      'Étendre les plateformes web aux smartphones.':
        'Bring web platforms to smartphones.',
      'Utilisateurs mobiles': 'Mobile users',
      'Logiciels sur mesure': 'Custom software',
      'Plateformes SaaS': 'SaaS platforms',
      'Sites et applications web': 'Websites and web applications',
      'Digitalisation et automatisation': 'Digital transformation and automation',
      'Design UI/UX': 'UI/UX design',
      'Applications mobiles et desktop': 'Mobile and desktop applications',
      'Services informatiques': 'IT services',
      'Conseil technologique': 'Technology consulting',
      'Des logiciels personnalisés conçus pour répondre précisément aux besoins et aux processus de votre organisation.':
        'Custom software designed to meet your organization’s specific needs and workflows.',
      "Nous concevons et développons des applications logicielles adaptées à vos activités. De l'analyse des besoins à la livraison, nous construisons des solutions fiables, évolutives et pensées pour simplifier votre travail.":
        'We design and build software applications tailored to your business. From needs analysis to delivery, we create reliable, scalable solutions that simplify your work.',
      'Des plateformes accessibles en ligne pour moderniser vos services et développer de nouveaux produits numériques.':
        'Online platforms to modernize your services and launch new digital products.',
      'Nous imaginons et développons des plateformes Software as a Service permettant aux organisations de proposer des services numériques accessibles depuis Internet. Nos solutions sont pensées pour évoluer avec les utilisateurs et les besoins du marché.':
        'We design and build Software as a Service platforms that let organizations offer digital services online. Our solutions are built to grow with users and market needs.',
      'Des sites Internet et applications web modernes pour renforcer votre présence numérique.':
        'Modern websites and web applications to strengthen your digital presence.',
      'Nous créons des sites web professionnels, des plateformes interactives et des applications web performantes. Chaque projet est conçu pour offrir une expérience utilisateur fluide, un affichage responsive et une architecture technique adaptée.':
        'We create professional websites, interactive platforms, and high-performance web applications. Each project is designed for a smooth user experience, responsive layouts, and a suitable technical architecture.',
      'Des applications conçues pour accompagner vos utilisateurs sur smartphones, tablettes et ordinateurs.':
        'Applications that support your users on smartphones, tablets, and computers.',
      "Nous développons des applications adaptées à différents environnements : Android, iOS et ordinateurs. Nous privilégions les interfaces intuitives, la fluidité et la cohérence de l'expérience utilisateur.":
        'We build applications for Android, iOS, and desktop environments, focusing on intuitive interfaces, responsive performance, and a consistent user experience.',
      'Transformez vos processus manuels en systèmes numériques plus efficaces et mieux organisés.':
        'Turn manual processes into more efficient, better-organized digital workflows.',
      'Nous accompagnons les organisations dans la transformation de leurs processus métiers. Notre objectif est de remplacer certaines opérations manuelles par des outils numériques qui améliorent la productivité et facilitent la gestion quotidienne.':
        'We help organizations transform their business processes, replacing manual tasks with digital tools that improve productivity and simplify day-to-day operations.',
      'Un accompagnement technique pour assurer le bon fonctionnement de votre environnement informatique.':
        'Technical support to keep your IT environment running smoothly.',
      "Nous proposons des prestations d'assistance, de conseil et d'accompagnement informatique. Nous aidons les organisations à mieux gérer leurs outils technologiques et à identifier les solutions adaptées à leurs besoins.":
        'We provide IT support, consulting, and guidance to help organizations manage their technology and identify solutions suited to their needs.',
      'Des interfaces élégantes, intuitives et pensées pour offrir une expérience utilisateur de qualité.':
        'Elegant, intuitive interfaces designed to deliver a quality user experience.',
      'Nous concevons des interfaces numériques qui associent esthétique, simplicité et ergonomie. Notre démarche consiste à comprendre les utilisateurs, organiser les parcours et créer des expériences cohérentes.':
        'We design digital interfaces that combine visual appeal, simplicity, and usability. We seek to understand users, organize their journeys, and create consistent experiences.',
      'Faites les bons choix technologiques pour construire des projets numériques cohérents et durables.':
        'Make the right technology choices to build coherent, sustainable digital projects.',
      'Nous aidons les entreprises et les porteurs de projets à analyser leurs besoins, définir une stratégie technologique et choisir les outils adaptés à leurs objectifs.':
        'We help businesses and project owners assess their needs, define a technology strategy, and choose tools suited to their goals.',
      'Logiciels de gestion d’entreprise': 'Business management software',
      "Logiciels de gestion d'entreprise": 'Business management software',
      'Applications métiers personnalisées': 'Custom business applications',
      'Systèmes de gestion de données': 'Data management systems',
      'Automatisation des tâches': 'Task automation',
      "Développement d'API": 'API development',
      'Maintenance et évolution logicielle': 'Software maintenance and enhancement',
      'Des outils adaptés à vos processus.': 'Tools tailored to your workflows.',
      'Une meilleure organisation des activités.': 'Better-organized operations.',
      'Une réduction des tâches répétitives.': 'Fewer repetitive tasks.',
      'Des solutions évolutives.': 'Scalable solutions.',
      Institutions: 'Institutions',
      'Architecture SaaS multi-utilisateur': 'Multi-tenant SaaS architecture',
      'Gestion des abonnements': 'Subscription management',
      'Gestion des rôles et permissions': 'Role and permission management',
      'Tableaux de bord personnalisés': 'Custom dashboards',
      'Gestion des organisations': 'Organization management',
      'API et intégrations': 'APIs and integrations',
      'Accessibilité depuis Internet.': 'Access from anywhere online.',
      'Centralisation des données.': 'Centralized data.',
      'Possibilité de faire évoluer le produit.': 'Room to grow the product.',
      'Modèle économique basé sur les abonnements.':
        'Subscription-based business model.',
      'Éditeurs de logiciels': 'Software vendors',
      'Entreprises innovantes': 'Innovative businesses',
      'Sites vitrines professionnels': 'Professional brochure websites',
      'Sites e-commerce': 'E-commerce websites',
      'Applications web': 'Web applications',
      'Portails et plateformes web': 'Web portals and platforms',
      "Intégration d'API": 'API integration',
      'Optimisation SEO technique': 'Technical SEO optimization',
      'Une présence professionnelle sur Internet.':
        'A professional online presence.',
      'Une meilleure visibilité.': 'Greater visibility.',
      'Une expérience utilisateur moderne.': 'A modern user experience.',
      'Une accessibilité sur tous les appareils.': 'Access on every device.',
      'Applications Android': 'Android applications',
      'Applications iOS': 'iOS applications',
      'Applications desktop Windows': 'Windows desktop applications',
      'Applications multiplateformes': 'Cross-platform applications',
      'Connexion aux API': 'API connections',
      'Synchronisation des données': 'Data synchronization',
      'Une expérience adaptée aux appareils.': 'A device-friendly experience.',
      'Une meilleure proximité avec les utilisateurs.':
        'Closer connections with users.',
      'Des outils accessibles en mobilité.': 'Tools available on the go.',
      "Des possibilités d'intégration avec vos systèmes.":
        'Integration options for your systems.',
      'Analyse des processus métiers': 'Business process analysis',
      'Dématérialisation des documents': 'Document digitization',
      'Automatisation des opérations': 'Operations automation',
      'Gestion numérique des dossiers': 'Digital records management',
      'Tableaux de bord décisionnels': 'Decision-making dashboards',
      'Intégration de systèmes existants': 'Integration with existing systems',
      'Gain de temps.': 'Time savings.',
      'Réduction des erreurs manuelles.': 'Fewer manual errors.',
      'Meilleure traçabilité.': 'Better traceability.',
      'Amélioration de la productivité.': 'Improved productivity.',
      'Assistance informatique': 'IT support',
      'Maintenance logicielle': 'Software maintenance',
      'Installation et configuration': 'Installation and configuration',
      'Accompagnement technique': 'Technical guidance',
      'Diagnostic informatique': 'IT diagnostics',
      'Un meilleur suivi informatique.': 'Better IT oversight.',
      'Une réduction des interruptions.': 'Fewer disruptions.',
      'Un environnement mieux organisé.': 'A better-organized environment.',
      'Un accompagnement technique.': 'Technical support.',
      Réseaux: 'Networks',
      'Bases de données': 'Databases',
      'Recherche UX': 'UX research',
      "Architecture de l'information": 'Information architecture',
      Maquettes: 'Mockups',
      'Maquettes UI': 'UI mockups',
      'Prototypes interactifs': 'Interactive prototypes',
      'Design responsive': 'Responsive design',
      'Une navigation plus intuitive.': 'More intuitive navigation.',
      'Une meilleure cohérence visuelle.': 'Greater visual consistency.',
      'Une expérience utilisateur améliorée.': 'An improved user experience.',
      'Des interfaces adaptées aux mobiles.': 'Mobile-friendly interfaces.',
      'Étude de faisabilité': 'Feasibility study',
      'Conseil en architecture logicielle': 'Software architecture consulting',
      'Choix des technologies': 'Technology selection',
      'Audit technique': 'Technical audit',
      'Accompagnement de projets': 'Project guidance',
      'Stratégie de transformation digitale': 'Digital transformation strategy',
      'Des décisions technologiques éclairées.':
        'Informed technology decisions.',
      'Une meilleure maîtrise des risques.': 'Better risk management.',
      'Une architecture adaptée aux objectifs.': 'Architecture suited to your goals.',
      'Une vision claire du projet.': 'A clear project vision.',
      'Chez INNOVTECH, nous cherchons à proposer une solution adaptée à votre contexte. Nous étudions vos besoins, vos contraintes et vos objectifs avant de définir l’approche technique.':
        'At INNOVTECH, we aim to provide a solution suited to your context. We study your needs, constraints, and goals before defining the technical approach.',
      'Des interfaces modernes et intuitives': 'Modern, intuitive interfaces',
      'Des architectures robustes et évolutives': 'Robust, scalable architectures',
      'Des applications sur tous vos appareils': 'Applications for all your devices',
      'Structurer et valoriser vos données': 'Structure and unlock the value of your data',
      'Des environnements adaptés à vos applications': 'Environments tailored to your applications',
      'Améliorer le cycle de développement': 'Improve the development lifecycle',
      'Connecter vos applications et services': 'Connect your applications and services',
      'Intégrer la sécurité dans vos projets': 'Integrate security into your projects',
      'Nous concevons des interfaces web modernes, responsives et performantes, pensées pour offrir une expérience utilisateur de qualité.':
        'We design modern, responsive, high-performance web interfaces for a quality user experience.',
      "Nous concevons la logique métier, les systèmes d'authentification, les API et les architectures qui alimentent vos applications.":
        'We design the business logic, authentication systems, APIs, and architectures that power your applications.',
      'Nous concevons la logique métier, les systèmes d’authentification, les API et les architectures qui alimentent vos applications.':
        'We design the business logic, authentication systems, APIs, and architectures that power your applications.',
      'Nous explorons le développement d’applications mobiles et desktop pour rendre vos services accessibles sur différents environnements.':
        'We explore mobile and desktop application development to make your services available across devices.',
      "Nous explorons le développement d'applications mobiles et desktop pour rendre vos services accessibles sur différents environnements.":
        'We explore mobile and desktop application development to make your services available across devices.',
      "Nous concevons des structures de données cohérentes pour assurer le stockage, l'organisation et l'exploitation des informations.":
        'We design coherent data structures for storing, organizing, and using information.',
      'Nous concevons des structures de données cohérentes pour assurer le stockage, l’organisation et l’exploitation des informations.':
        'We design coherent data structures for storing, organizing, and using information.',
      'Nous travaillons sur les environnements d’hébergement, les infrastructures et les ressources nécessaires au fonctionnement des applications.':
        'We work on hosting environments, infrastructure, and the resources applications need to run.',
      "Nous travaillons sur les environnements d'hébergement, les infrastructures et les ressources nécessaires au fonctionnement des applications.":
        'We work on hosting environments, infrastructure, and the resources applications need to run.',
      'Nous mettons en place des pratiques et des outils qui facilitent le développement, les tests et le déploiement des applications.':
        'We establish practices and tools that make application development, testing, and deployment easier.',
      'Nous concevons des interfaces de programmation et des mécanismes d’intégration pour faire communiquer différents systèmes.':
        'We design APIs and integration mechanisms that help different systems communicate.',
      "Nous concevons des interfaces de programmation et des mécanismes d'intégration pour faire communiquer différents systèmes.":
        'We design APIs and integration mechanisms that help different systems communicate.',
      'Nous intégrons des pratiques de sécurité applicative pour mieux protéger les applications, les accès et les données.':
        'We integrate application security practices to better protect applications, access, and data.',
      'Des systèmes plus intelligents': 'Smarter systems',
      'Apprendre à partir des données': 'Learning from data',
      'Créer de nouvelles expériences numériques': 'Creating new digital experiences',
      'Donner une capacité de perception aux machines': 'Giving machines the ability to perceive',
      'Connecter le monde physique au numérique': 'Connecting the physical and digital worlds',
      'Expérimenter avant de construire': 'Experiment before building',
      'Préparer les technologies de demain': 'Preparing tomorrow’s technologies',
      'Transformer les idées en expériences concrètes': 'Turning ideas into real-world experiments',
      "Explorer le potentiel de l'intelligence artificielle pour concevoir des solutions capables d'analyser, d'apprendre et d'assister les utilisateurs.":
        'Explore the potential of artificial intelligence to build solutions that analyze, learn, and assist users.',
      'Explorer les modèles de langage et les technologies génératives pour créer des assistants et des outils de productivité.':
        'Explore language models and generative technologies to create assistants and productivity tools.',
      'Explorer les technologies permettant aux systèmes informatiques d’analyser et d’interpréter des images et des vidéos.':
        'Explore technologies that enable computer systems to analyze and interpret images and video.',
      'Étudier les systèmes connectés qui collectent, transmettent et exploitent des données issues d’appareils physiques.':
        'Study connected systems that collect, transmit, and use data from physical devices.',
      'Un espace de veille, de prototypage et d’expérimentation pour évaluer les technologies émergentes.':
        'A space for research, prototyping, and experimentation to evaluate emerging technologies.',
      'Investir dans l’exploration technique et la création de nouvelles approches pour répondre aux défis numériques.':
        'Invest in technical exploration and new approaches to address digital challenges.',
      'Créer des démonstrateurs et des preuves de concept pour valider des idées avant leur industrialisation.':
        'Create demos and proofs of concept to validate ideas before production.',
      'Imaginer aujourd’hui les solutions numériques de': 'Imagining the digital solutions of',
      'demain.': 'tomorrow.',
      'Notre mission et notre vision définissent la direction que nous souhaitons donner à chaque projet, chaque innovation et chaque collaboration.':
        'Our mission and vision shape the direction we bring to every project, innovation, and collaboration.',
      'Collaboration autour d’un projet numérique': 'Collaborating on a digital project',
      'Nous voulons simplifier les opérations, améliorer la productivité, faciliter l’accès aux outils numériques et accompagner nos partenaires dans leur transformation digitale.':
        'We aim to simplify operations, improve productivity, make digital tools more accessible, and support our partners through digital transformation.',
      'Notre ambition est de contribuer à un écosystème où les entreprises, les institutions et les communautés disposent des technologies nécessaires pour innover et se développer.':
        'We aspire to contribute to an ecosystem where businesses, institutions, and communities have the technology they need to innovate and grow.',
      'Réseau technologique mondial': 'Global technology network',
      'Notre ambition': 'Our ambition',
      'Construire un avenir numérique plus prometteur.':
        'Building a brighter digital future.',
      'Notre vision se traduit par des orientations concrètes qui guident notre développement.':
        'Our vision is reflected in concrete priorities that guide our growth.',
      Innover: 'Innovate',
      'Explorer de nouvelles approches et technologies.':
        'Explore new approaches and technologies.',
      Rayonner: 'Expand',
      'Développer des solutions pour des marchés internationaux.':
        'Develop solutions for international markets.',
      Créer: 'Create',
      'Transformer les idées en produits numériques utiles.':
        'Turn ideas into useful digital products.',
      Accompagner: 'Support',
      'Aider les organisations à évoluer durablement.':
        'Help organizations grow sustainably.',
      'Ce qui nous définit': 'What defines us',
      'Nos valeurs, le fondement de': 'Our values are the foundation of',
      'chacune de nos actions.': 'everything we do.',
      'Les principes qui orientent nos décisions, notre manière de collaborer et la qualité des solutions que nous construisons.':
        'The principles that guide our decisions, collaboration, and the quality of the solutions we build.',
      'Nos principes': 'Our principles',
      'Des valeurs qui donnent du sens à notre travail.':
        'Values that give meaning to our work.',
      'Nos valeurs ne sont pas de simples déclarations. Elles représentent les principes que nous souhaitons appliquer au quotidien.':
        'Our values are more than statements; they are principles we strive to put into practice every day.',
      'Nous encourageons la créativité, l’exploration et l’adoption de nouvelles technologies pour concevoir des solutions pertinentes.':
        'We encourage creativity, exploration, and the adoption of new technologies to build meaningful solutions.',
      "Nous encourageons la créativité, l'exploration et l'adoption de nouvelles technologies pour concevoir des solutions pertinentes.":
        'We encourage creativity, exploration, and the adoption of new technologies to build meaningful solutions.',
      Qualité: 'Quality',
      'Nous accordons une attention particulière à la fiabilité, à la sécurité, à la performance et à la maintenabilité de nos réalisations.':
        'We pay close attention to the reliability, security, performance, and maintainability of our work.',
      Intégrité: 'Integrity',
      'Nous privilégions la transparence, le respect des engagements et des relations professionnelles fondées sur la confiance.':
        'We value transparency, honoring our commitments, and building professional relationships based on trust.',
      'Nous croyons que les meilleurs résultats naissent de l’écoute, du partage des idées et du travail collectif.':
        'We believe the best results come from listening, sharing ideas, and working together.',
      "Nous croyons que les meilleurs résultats naissent de l'écoute, du partage des idées et du travail collectif.":
        'We believe the best results come from listening, sharing ideas, and working together.',
      'Orientation résultats': 'Results-driven',
      'Nous concentrons nos efforts sur les besoins réels et les objectifs concrets de nos partenaires.':
        'We focus our efforts on our partners’ real needs and concrete goals.',
      'Amélioration continue': 'Continuous improvement',
      'Nous apprenons, évaluons et améliorons constamment nos méthodes et nos solutions.':
        'We continually learn, evaluate, and improve our methods and solutions.',
      Agilité: 'Agility',
      'Nous savons nous adapter aux changements, aux contraintes et aux évolutions des projets.':
        'We adapt to change, constraints, and evolving project needs.',
      Responsabilité: 'Responsibility',
      'Nous cherchons à développer des solutions utiles, durables et respectueuses de leurs utilisateurs.':
        'We strive to build useful, sustainable solutions that respect their users.',
      'Des principes solides. Des solutions durables.':
        'Strong principles. Lasting solutions.',
      'Nous voulons construire des relations de confiance et développer des technologies qui créent une valeur réelle.':
        'We aim to build trusted relationships and develop technology that creates real value.',
      'Notre méthodologie': 'Our methodology',
      'Une approche structurée pour des': 'A structured approach for',
      'résultats concrets.': 'tangible results.',
      'Chaque projet est différent. Notre méthode nous permet de travailler avec clarté, de réduire les incertitudes et de construire des solutions adaptées à vos objectifs.':
        'Every project is different. Our method helps us work clearly, reduce uncertainty, and build solutions tailored to your goals.',
      'Équipe en réunion de planification': 'Team planning meeting',
      'Notre processus': 'Our process',
      'De l’idée à la réalisation.': 'From idea to delivery.',
      "De l'idée à la réalisation.": 'From idea to delivery.',
      'Nous organisons chaque projet autour de six grandes étapes. Leur contenu peut être adapté selon la nature et l’ampleur du projet.':
        'We organize each project around six key stages, tailored to its nature and scope.',
      "Nous organisons chaque projet autour de six grandes étapes. Leur contenu peut être adapté selon la nature et l'ampleur du projet.":
        'We organize each project around six key stages, tailored to its nature and scope.',
      Comprendre: 'Understand',
      'Nous échangeons avec vous pour comprendre vos besoins, vos difficultés, vos objectifs et vos contraintes.':
        'We talk with you to understand your needs, challenges, goals, and constraints.',
      'Analyse des besoins et définition des objectifs.':
        'Needs analysis and goal setting.',
      'Nous définissons la solution, son architecture, son expérience utilisateur et ses principales fonctionnalités.':
        'We define the solution, its architecture, user experience, and key features.',
      'Maquettes, spécifications et architecture.':
        'Wireframes, specifications, and architecture.',
      'Nous transformons la conception en une solution fonctionnelle avec des technologies adaptées au projet.':
        'We turn the design into a working solution using technologies suited to the project.',
      'Développement progressif de la solution.':
        'Iterative solution development.',
      Tester: 'Test',
      'Nous vérifions le fonctionnement, la sécurité, la performance et l’expérience utilisateur.':
        'We verify functionality, security, performance, and user experience.',
      "Nous vérifions le fonctionnement, la sécurité, la performance et l'expérience utilisateur.":
        'We verify functionality, security, performance, and user experience.',
      'Corrections et validation technique.':
        'Fixes and technical validation.',
      'Nous préparons la mise en production et accompagnons le lancement de votre solution.':
        'We prepare the production release and support the launch of your solution.',
      'Mise en ligne et livraison.': 'Launch and delivery.',
      'Nous pouvons poursuivre l’accompagnement avec la maintenance, les améliorations et l’évolution du produit.':
        'We can continue supporting you with maintenance, improvements, and product development.',
      "Nous pouvons poursuivre l'accompagnement avec la maintenance, les améliorations et l'évolution du produit.":
        'We can continue supporting you with maintenance, improvements, and product development.',
      'Suivi et amélioration continue.': 'Ongoing support and improvement.',
      'Nos engagements': 'Our commitments',
      'Un accompagnement fondé sur la confiance.':
        'Support built on trust.',
      'Au-delà du développement technique, nous voulons construire une relation professionnelle transparente et durable.':
        'Beyond technical development, we aim to build transparent, lasting professional relationships.',
      'Une communication claire tout au long du projet.':
        'Clear communication throughout the project.',
      'Des solutions pensées selon vos besoins réels.':
        'Solutions designed around your real needs.',
      'Une attention particulière à la qualité technique.':
        'A strong focus on technical quality.',
      'Une approche adaptée à votre budget et à vos contraintes.':
        'An approach tailored to your budget and constraints.',
      'Un accompagnement dans la durée selon vos besoins.':
        'Ongoing support tailored to your needs.',
      'Notre expertise': 'Our expertise',
      'La technologie adaptée à vos besoins.':
        'Technology tailored to your needs.',
      'Nous réunissons plusieurs compétences complémentaires pour accompagner vos projets, de la conception à la mise en œuvre.':
        'We bring together complementary skills to support your projects from design through implementation.',
      'Chaque organisation possède ses propres défis. Nous cherchons à comprendre vos objectifs avant de proposer une solution technique adaptée à votre contexte.':
        'Every organization has its own challenges. We seek to understand your goals before proposing a technical solution suited to your context.',
      'Découvrir notre approche': 'Discover our approach',
      'Une approche orientée résultats': 'A results-driven approach',
      'Des solutions pensées pour répondre à des problématiques concrètes.':
        'Solutions designed to address real-world challenges.',
      'Notre engagement': 'Our commitment',
      'Votre projet mérite une solution pensée pour lui.':
        'Your project deserves a solution designed for it.',
      'Nous ne cherchons pas à imposer une technologie ou une solution standard. Nous étudions vos besoins pour construire une réponse adaptée à vos contraintes et à vos ambitions.':
        'We do not impose a technology or one-size-fits-all solution. We study your needs and build an approach that fits your constraints and ambitions.',
      'Présenter mon projet': 'Tell us about my project',
      'Équipe en séance de réflexion': 'Team brainstorming session',
      'Notre savoir-faire': 'Our know-how',
      'Des compétences techniques complémentaires.':
        'Complementary technical skills.',
      "La conception d'une solution numérique nécessite plusieurs compétences. Nous structurons notre approche autour de domaines technologiques qui travaillent ensemble.":
        'Building a digital solution takes a range of skills. We structure our work around technology areas that work together.',
      'La conception d’une solution numérique nécessite plusieurs compétences. Nous structurons notre approche autour de domaines technologiques qui travaillent ensemble.':
        'Building a digital solution takes a range of skills. We structure our work around technology areas that work together.',
      'Notre démarche consiste à choisir les technologies adaptées à chaque projet, à organiser les différents composants et à rechercher un équilibre entre performance, sécurité, qualité et évolutivité.':
        'We choose technologies suited to each project, organize its components, and balance performance, security, quality, and scalability.',
      'Collaboration technique entre développeurs':
        'Technical collaboration between developers',
      'Une approche technologique globale': 'A holistic technology approach',
      'Des interfaces aux infrastructures, chaque composant contribue au fonctionnement de la solution.':
        'From interfaces to infrastructure, every component contributes to how the solution works.',
      'Nos domaines techniques': 'Our technical areas',
      'Explorez nos expertises.': 'Explore our expertise.',
      'Découvrez les différents domaines technologiques sur lesquels nous développons nos compétences et construisons nos solutions.':
        'Discover the technology areas in which we build our expertise and create solutions.',
      'Notre approche technique': 'Our technical approach',
      'Construire des solutions cohérentes.':
        'Building coherent solutions.',
      'Une solution performante repose sur plusieurs éléments qui doivent fonctionner ensemble.':
        'A high-performing solution depends on multiple elements working together.',
      Intégration: 'Integration',
      'Assurer la communication entre les interfaces, les API et les systèmes.':
        'Ensure communication between interfaces, APIs, and systems.',
      Évolution: 'Growth',
      'Préparer les solutions à accueillir de nouvelles fonctionnalités.':
        'Prepare solutions to support new features.',
      'Écosystème technologique': 'Technology ecosystem',
      'Des outils adaptés aux défis numériques.':
        'Tools for today’s digital challenges.',
      'Nous sélectionnons les environnements techniques selon les objectifs, les contraintes et les besoins de chaque projet.':
        'We select technical environments based on each project’s goals, constraints, and needs.',
      'Nos domaines d’intervention': 'Our areas of work',
      "Nos domaines d'intervention": 'Our areas of work',
      'Découvrez nos services.': 'Discover our services.',
      'Explorez nos différentes prestations et identifiez les solutions qui correspondent à vos objectifs.':
        'Explore our service offerings and find solutions that match your goals.',
      "L'innovation au service de votre avenir numérique.":
        'Innovation for your digital future.',
      'Notre domaine de recherche': 'Our research area',
      'Étape': 'Step',
      'Innovation & Research': 'Innovation & Research',
      'Explorer aujourd’hui.': 'Explore today.',
      "Explorer aujourd'hui.": 'Explore today.',
      'Construire demain.': 'Build tomorrow.',
      'Nous explorons les technologies émergentes et expérimentons de nouvelles approches pour imaginer les prochaines générations de solutions numériques.':
        'We explore emerging technologies and experiment with new approaches to shape the next generation of digital solutions.',
      'Explorer nos domaines': 'Explore our areas',
      'Collaborer avec nous': 'Work with us',
      Recherche: 'Research',
      Expérimentation: 'Experimentation',
      "Robot illustrant l'exploration des technologies":
        'Robot representing technology exploration',
      "L'innovation en mouvement": 'Innovation in motion',
      'Des idées aux prototypes.': 'From ideas to prototypes.',
      'Notre vision': 'Our vision',
      'L’innovation comme moteur de transformation.':
        'Innovation as a driver of transformation.',
      "L'innovation comme moteur de transformation.":
        'Innovation as a driver of transformation.',
      'La technologie évolue constamment. Notre ambition est de comprendre ces évolutions, d’en explorer le potentiel et de les transformer progressivement en solutions utiles.':
        'Technology is constantly evolving. We aim to understand these changes, explore their potential, and gradually turn them into useful solutions.',
      "La technologie évolue constamment. Notre ambition est de comprendre ces évolutions, d'en explorer le potentiel et de les transformer progressivement en solutions utiles.":
        'Technology is constantly evolving. We aim to understand these changes, explore their potential, and gradually turn them into useful solutions.',
      'Recherche et expérimentation technologique':
        'Technology research and experimentation',
      'Penser. Expérimenter. Construire.': 'Think. Experiment. Build.',
      'Une démarche progressive tournée vers l’avenir.':
        'A progressive approach focused on the future.',
      "Une démarche progressive tournée vers l'avenir.":
        'A progressive approach focused on the future.',
      'Nos domaines d’exploration': 'Our areas of exploration',
      'Les technologies que nous explorons.':
        'The technologies we explore.',
      'Découvrez les domaines technologiques sur lesquels portent nos activités d’exploration, d’expérimentation et de développement.':
        'Discover the technology areas behind our exploration, experimentation, and development work.',
      "Découvrez les domaines technologiques sur lesquels portent nos activités d'exploration, d'expérimentation et de développement.":
        'Discover the technology areas behind our exploration, experimentation, and development work.',
      'IA générative & LLM': 'Generative AI & LLMs',
      'Laboratoire technologique': 'Technology lab',
      'Recherche & Développement': 'Research & development',
      'Découvrir cette technologie': 'Discover this technology',
      'Étudier et expérimenter des modèles capables d’identifier des tendances et de produire des prédictions à partir de données.':
        'Study and experiment with models that identify patterns and make predictions from data.',
      "Étudier et expérimenter des modèles capables d'identifier des tendances et de produire des prédictions à partir de données.":
        'Study and experiment with models that identify patterns and make predictions from data.',
      "Explorer les technologies permettant aux systèmes informatiques d'analyser et d'interpréter des images et des vidéos.":
        'Explore technologies that enable computer systems to analyze and interpret images and video.',
      "Étudier les systèmes connectés qui collectent, transmettent et exploitent des données issues d'appareils physiques.":
        'Study connected systems that collect, transmit, and use data from physical devices.',
      "Un espace de veille, de prototypage et d'expérimentation pour évaluer les technologies émergentes.":
        'A space for research, prototyping, and experimentation to evaluate emerging technologies.',
      "Investir dans l'exploration technique et la création de nouvelles approches pour répondre aux défis numériques.":
        'Invest in technical exploration and new approaches to address digital challenges.',
      "Notre approche": 'Our approach',
      "De l'idée à la solution.": 'From idea to solution.',
      "Nous privilégions une démarche structurée pour transformer les opportunités technologiques en projets concrets.":
        'We use a structured approach to turn technology opportunities into real-world projects.',
      'Identifier les opportunités': 'Identify opportunities',
      'Analyser les besoins et identifier les problèmes pouvant bénéficier de nouvelles technologies.':
        'Analyze needs and identify problems that could benefit from new technologies.',
      'Explorer et expérimenter': 'Explore and experiment',
      'Étudier les technologies, tester les approches et réaliser des preuves de concept.':
        'Study technologies, test approaches, and build proofs of concept.',
      'Construire des solutions': 'Build solutions',
      'Faire évoluer les expérimentations pertinentes vers des produits et fonctionnalités concrets.':
        'Turn promising experiments into real products and features.',
      'Projet IA': 'AI project',
      'InnovLLM : explorer le potentiel des modèles de langage.':
        'InnovLLM: exploring the potential of language models.',
      "InnovLLM est un projet de recherche et de développement autour des grands modèles de langage. L'objectif est d'explorer les architectures, les méthodes d'entraînement et les possibilités de création d'assistants intelligents.":
        'InnovLLM is a research and development project focused on large language models. It explores architectures, training methods, and ways to create intelligent assistants.',
      'Découvrir nos projets': 'Discover our projects',
      'L’innovation au service de votre avenir numérique.':
        'Innovation for your digital future.',
      'Du développement logiciel à la transformation digitale, nous mettons la technologie au service de vos ambitions.':
        'From software development to digital transformation, we put technology to work for your ambitions.',
      'Demander un devis': 'Request a quote',
      'Équipe collaborant sur des solutions numériques':
        'Team collaborating on digital solutions',
      'Nos expertises technologiques': 'Our technology expertise',
      "L'expertise technique au service de": 'Technical expertise in service of',
      "l'innovation.": 'innovation.',
      "Du frontend à l'infrastructure, nous explorons les technologies qui permettent de concevoir, développer et faire évoluer des solutions numériques.":
        'From frontend to infrastructure, we explore the technologies that help design, build, and scale digital solutions.',
      'Technologies adaptées à vos besoins': 'Technology tailored to your needs',
      "À propos d'INNOVTECH": 'About INNOVTECH',
      'La technologie au service de': 'Technology in service of',
      'vos ambitions.': 'your ambitions.',
      'INNOVTECH est une entreprise technologique dédiée à la conception de solutions numériques innovantes. Nous accompagnons les entreprises, les entrepreneurs et les organisations dans leurs projets de transformation digitale.':
        'INNOVTECH is a technology company dedicated to designing innovative digital solutions. We support businesses, entrepreneurs, and organizations in their digital transformation projects.',
      'Équipe travaillant ensemble sur un projet technologique':
        'Team working together on a technology project',
      'Qui sommes-nous ?': 'Who are we?',
      'Nous transformons les idées en solutions numériques.':
        'We turn ideas into digital solutions.',
      'Le numérique offre de nouvelles opportunités aux entreprises et aux organisations. Notre rôle est de rendre ces opportunités accessibles grâce à des technologies adaptées, modernes et performantes.':
        'Digital technology creates new opportunities for businesses and organizations. Our role is to make them accessible through suitable, modern, high-performance technologies.',
      'De la réflexion initiale à la mise en œuvre technique, nous cherchons à construire des solutions qui répondent à de véritables problématiques. Notre approche repose sur l’écoute, la créativité, la rigueur et l’amélioration continue.':
        'From initial planning to technical implementation, we build solutions that address real challenges. Our approach is based on listening, creativity, rigor, and continuous improvement.',
      'Notre objectif': 'Our goal',
      'Apporter des réponses concrètes aux défis numériques.':
        'Deliver practical answers to digital challenges.',
      'Nos partenaires': 'Our partners',
      'Entreprises, entrepreneurs et organisations.':
        'Businesses, entrepreneurs, and organizations.',
      'Espace de travail moderne': 'Modern workspace',
      'Un partenaire pour vos projets numériques.':
        'A partner for your digital projects.',
      "De la réflexion initiale à la mise en œuvre technique, nous cherchons à construire des solutions qui répondent à de véritables problématiques. Notre approche repose sur l'écoute, la créativité, la rigueur et l'amélioration continue.":
        'From initial planning to technical implementation, we build solutions that address real challenges. Our approach is based on listening, creativity, rigor, and continuous improvement.',
      'Solutions web': 'Web solutions',
      'Nous concevons des logiciels et des plateformes adaptés aux besoins spécifiques des organisations.':
        'We design software and platforms tailored to organizations’ specific needs.',
      'Nous créons des sites web et des applications modernes, accessibles et performants.':
        'We create modern, accessible, high-performance websites and applications.',
      'Produits SaaS': 'SaaS products',
      'Nous développons des solutions numériques évolutives pensées pour répondre à des besoins concrets.':
        'We develop scalable digital solutions designed to address real needs.',
      'Nous accompagnons les organisations dans la modernisation et l’automatisation de leurs activités.':
        'We help organizations modernize and automate their operations.',
      'Innovation technologique': 'Technology innovation',
      'Nous explorons les technologies émergentes pour imaginer de nouvelles possibilités.':
        'We explore emerging technologies to imagine new possibilities.',
      'Accompagnement informatique': 'IT support',
      'Nous proposons des services de conseil, d’assistance et d’accompagnement technologique.':
        'We provide technology consulting, support, and guidance.',
      'La meilleure solution n’est pas nécessairement la plus complexe. C’est celle qui répond efficacement au problème rencontré.':
        'The best solution is not necessarily the most complex; it is the one that effectively solves the problem.',
      'Nous intervenons sur plusieurs domaines complémentaires pour accompagner les organisations à chaque étape de leur évolution technologique.':
        'We work across complementary areas to support organizations at every stage of their technology journey.',
      'Notre différence': 'What sets us apart',
      'La valeur avant la technologie.': 'Value before technology.',
      "La meilleure solution n'est pas nécessairement la plus complexe. C'est celle qui répond efficacement au problème rencontré.":
        'The best solution is not necessarily the most complex; it is the one that effectively solves the problem.',
      'Comprendre avant de développer': 'Understand before building',
      'Chaque projet commence par l’analyse des besoins et des objectifs.':
        'Every project starts with an analysis of needs and goals.',
      'Créer des solutions utiles': 'Build useful solutions',
      'Nous privilégions les fonctionnalités qui apportent une réelle valeur.':
        'We prioritize features that deliver real value.',
      'Penser à long terme': 'Think long term',
      'Nous accordons une importance particulière à la qualité, à la sécurité et à l’évolutivité.':
        'We place particular importance on quality, security, and scalability.',
      'Notre mission': 'Our mission',
      'Rendre la technologie utile et accessible.':
        'Making technology useful and accessible.',
      'Notre mission est de concevoir et de développer des solutions numériques fiables, innovantes et adaptées aux besoins réels des entreprises, des entrepreneurs et des organisations.':
        'Our mission is to design and build reliable, innovative digital solutions suited to the real needs of businesses, entrepreneurs, and organizations.',
      'Devenir un acteur technologique de référence.':
        'Becoming a leading technology company.',
      'Nous aspirons à construire une entreprise technologique capable de concevoir des produits numériques à fort impact, depuis l’Afrique vers le monde.':
        'We aspire to build a technology company that creates high-impact digital products, from Africa for the world.',
      "Le développement frontend constitue le point de rencontre entre la technologie et l'utilisateur. Nous concevons des interfaces structurées, accessibles et agréables à utiliser, tout en accordant une attention particulière aux performances et à l'adaptation sur tous les appareils.":
        'Frontend development brings technology and users together. We design structured, accessible, and enjoyable interfaces, with particular attention to performance and compatibility across devices.',
      "Le backend représente le moteur de vos applications. Il gère les données, les règles métiers, les accès utilisateurs et les communications entre les différents composants d'un système. Nous privilégions des architectures organisées, sécurisées et conçues pour évoluer.":
        'The backend powers your applications. It manages data, business rules, user access, and communication between system components. We favor organized, secure architectures designed to scale.',
      "Les applications mobiles et desktop permettent de rapprocher les outils numériques de leurs utilisateurs. Nous travaillons sur des architectures capables de connecter les interfaces aux services backend, avec une attention particulière à l'expérience et à la compatibilité.":
        'Mobile and desktop applications bring digital tools closer to their users. We work on architectures that connect interfaces to backend services, with particular attention to user experience and compatibility.',
      'Les données sont au cœur des systèmes numériques. Nous accordons une attention particulière à la modélisation, à la cohérence, à la sécurité et aux performances des bases de données afin de construire des applications fiables.':
        'Data is at the heart of digital systems. We focus on database modeling, consistency, security, and performance to build reliable applications.',
      "Une application doit pouvoir fonctionner dans un environnement fiable et adapté à ses besoins. Nous étudions les possibilités d'hébergement, de configuration et d'organisation des infrastructures afin de préparer des déploiements cohérents.":
        'An application needs a reliable environment suited to its requirements. We assess hosting, configuration, and infrastructure options to prepare consistent deployments.',
      "Les pratiques DevOps favorisent la collaboration entre le développement et les opérations. Elles permettent d'organiser les environnements, de fiabiliser les livraisons et d'automatiser certaines étapes du cycle de vie logiciel.":
        'DevOps practices foster collaboration between development and operations. They help organize environments, make releases more reliable, and automate parts of the software lifecycle.',
      'Les systèmes modernes doivent pouvoir échanger des informations. Les API et les intégrations permettent de connecter des applications, de synchroniser les données et de simplifier les échanges entre différents services.':
        'Modern systems need to exchange information. APIs and integrations connect applications, synchronize data, and simplify communication between services.',
      "La sécurité doit être prise en compte dès la conception d'une application. Nous accordons une attention particulière à la gestion des accès, à la validation des données, à la protection des informations et aux bonnes pratiques de développement sécurisé.":
        'Security should be considered from the start of application design. We focus on access management, data validation, information protection, and secure development practices.',
      "INNOVTECH explore les possibilités offertes par l'intelligence artificielle pour améliorer les produits numériques, automatiser certaines opérations et faciliter la prise de décision. Notre démarche consiste à identifier des cas d'usage concrets et à expérimenter des solutions adaptées aux besoins des entreprises.":
        'INNOVTECH explores how artificial intelligence can improve digital products, automate operations, and support decision-making. We identify practical use cases and experiment with solutions suited to business needs.',
      "Le Machine Learning permet de construire des systèmes qui apprennent à partir de données. INNOVTECH s'intéresse notamment à la préparation des données, à l'entraînement des modèles, à leur évaluation et à leurs possibilités d'intégration dans des applications métiers.":
        'Machine learning makes it possible to build systems that learn from data. INNOVTECH explores data preparation, model training and evaluation, and ways to integrate models into business applications.',
      "INNOVTECH explore les modèles de langage de grande taille (LLM), les architectures de génération de contenu et les systèmes de recherche augmentée par génération. L'objectif est de concevoir des outils capables d'assister les utilisateurs dans leurs tâches quotidiennes.":
        'INNOVTECH explores large language models (LLMs), content-generation architectures, and retrieval-augmented generation systems to build tools that assist users with everyday tasks.',
      "La vision par ordinateur permet d'extraire des informations à partir de contenus visuels. INNOVTECH étudie les possibilités de cette technologie dans des domaines tels que la reconnaissance d'objets, l'analyse d'images et l'automatisation de contrôles visuels.":
        'Computer vision extracts information from visual content. INNOVTECH explores its use in areas such as object recognition, image analysis, and automated visual inspection.',
      "L'Internet des objets ouvre la voie à de nouvelles possibilités dans la collecte et l'exploitation des données. INNOVTECH explore les architectures connectées, les capteurs et les systèmes de communication qui peuvent être intégrés dans des solutions numériques.":
        'The Internet of Things creates new opportunities for collecting and using data. INNOVTECH explores connected architectures, sensors, and communication systems that can be integrated into digital solutions.',
      "Le laboratoire technologique constitue un espace d'exploration des outils, frameworks et architectures émergentes. Il permet de réaliser des prototypes, de tester des approches techniques et d'évaluer leur pertinence avant une éventuelle intégration dans les produits INNOVTECH.":
        'The technology lab is a space for exploring emerging tools, frameworks, and architectures. It enables prototyping, testing technical approaches, and evaluating them before potential integration into INNOVTECH products.',
      "La recherche et le développement accompagnent la stratégie technologique d'INNOVTECH. Cette démarche consiste à analyser les besoins, étudier les nouvelles technologies, expérimenter des approches et développer progressivement des solutions innovantes.":
        'Research and development support INNOVTECH’s technology strategy. This work involves analyzing needs, studying new technologies, experimenting with approaches, and progressively developing innovative solutions.',
      "Les prototypes permettent de tester rapidement une idée, de mesurer sa faisabilité et d'identifier les améliorations nécessaires. INNOVTECH utilise cette approche pour explorer de nouvelles fonctionnalités et évaluer des concepts de produits.":
        'Prototypes make it possible to test an idea quickly, assess its feasibility, and identify improvements. INNOVTECH uses this approach to explore new features and evaluate product concepts.',
      "Nos domaines d'exploration": 'Our areas of exploration',
      'Prototypes & expérimentations': 'Prototypes & experimentation',
    },
  },
}

const savedLanguage = window.localStorage.getItem('innovtech-language')
const initialLanguage = savedLanguage === 'en' ? 'en' : 'fr'

void i18n.use(initReactI18next).init({
  resources: translations,
  lng: initialLanguage,
  fallbackLng: 'fr',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  const supportedLanguage = language === 'en' ? 'en' : 'fr'
  document.documentElement.lang = supportedLanguage
  window.localStorage.setItem('innovtech-language', supportedLanguage)
})

document.documentElement.lang = initialLanguage

export default i18n
