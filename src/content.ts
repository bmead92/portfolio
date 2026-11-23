import SetInStone from './assets/images/setInStoneTitleScreen.png';
import CoffeeAndCards from './assets/images/coffeeAndCardsTitleScreen.png';
import TempleJog from './assets/images/templeJogTitleScreen.png';
import PotionQuest from './assets/images/potionQuestTitleScreen.png';
import Nwacc from './assets/images/NWACCLogo.jpg';
import Dockyard from './assets/images/DockyardLogo.jpg';
import MtgCollector from './assets/images/mtgCollector-collection.png';
import LivingDex from './assets/images/livingDex-collection.png';
import ResumePdf from './assets/files/BryceMeadorsResume.pdf';

export const profile = {
    name: 'Bryce Meadors',
    title: 'Full-Stack Software Engineer',
    location: 'Tacoma, WA',
    email: 'bryce.meadors@gmail.com',
    github: 'https://github.com/bmead92',
    linkedin: 'https://www.linkedin.com/in/bryce-meadors-a13923229/',
    resume: ResumePdf as string,
    tagline:
        'I build production web and mobile apps with React, TypeScript, Node.js and Python, including AI and RAG systems that turn hours of document review into minutes.',
};

export const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
];

export const stats = [
    { value: '4+ yrs', label: 'Professional software engineering' },
    { value: '95%', label: 'Faster VA file analysis with AI' },
    { value: '6 mo', label: 'Ahead of schedule as sole engineer' },
    { value: '7 yrs', label: 'U.S. Army aviation service' },
];

export const about = [
    'I spent seven years in the U.S. Army as an AH-64D Apache avionics, armament and electronics technician and quality control inspector. The Apache is essentially a network of computers talking to each other, and working on it is what pulled me toward computer science.',
    'After my service I earned a BA in Computer Science & Systems, with a minor in Business Data Analytics, from the University of Washington Tacoma. I then completed TLG Learning’s full-stack software development program, where I also tutored fellow veterans in Java.',
    'Since 2023 I’ve shipped software at Sinclair Digital, Avue Technologies and MilVet Law Firm, where I was the sole engineer on a RAG-powered VA file analysis platform that went to production six months early. I like owning a product end to end: talking with the people who use it, choosing the architecture, and shipping.',
];

export type Job = {
    role: string;
    company: string;
    dates: string;
    highlights: string[];
};

export const experience: Job[] = [
    {
        role: 'Software Engineer, Full-Stack',
        company: 'MilVet Law Firm PLLC',
        dates: 'Jul 2025 – Apr 2026',
        highlights: [
            'Sole software engineer and de facto product manager, owning requirements, architecture, development and production deployment.',
            'Evaluated ChatGPT, Grok and Meta Llama before selecting Mistral AI; architected a RAG-integrated VA file analysis platform on React, TypeScript and Supabase that cut analysis time by 95% at 1% of the token cost of comparable SaaS tools.',
            'Delivered a production-ready platform 6 months ahead of a 12-month deadline while keeping infrastructure and token costs under $200/month.',
            'Turned hundreds of requirements sessions with attorneys and paralegals into shipped features: case tracking, markdown editing, bulk file/ZIP upload, AI job retry and replay, and an integrated chatbot.',
        ],
    },
    {
        role: 'Software Engineer, Full-Stack',
        company: 'Avue Technologies Corporation',
        dates: 'Sep 2024 – Apr 2025',
        highlights: [
            'Redesigned candidate filtering end to end (database schemas, optimized SQL, and a new React/TypeScript frontend), increasing hiring manager efficiency by 75%.',
            'Documented legacy systems previously understood by a single engineer, eliminating a critical knowledge silo.',
            'Established improved pull request documentation standards across the team.',
            'Extended customer data models for additional PII fields and replaced a laggy legacy carousel with a performance-optimized component.',
        ],
    },
    {
        role: 'Software Engineer, Mobile (React Native)',
        company: 'Sinclair Digital — News Apps',
        dates: 'Aug 2023 – Aug 2024',
        highlights: [
            'Built reusable, configurable React Native components for mobile news apps, increasing team productivity by 10%.',
            'Owned daily stand-ups and sprint retrospectives, driving a 25% increase in team delivery velocity.',
            'Documented the release pipeline for 140 apps (70 stations on iOS and Android) and trained 3 more engineers, expanding ownership to a 6-person rotation.',
            'Mentored 4 engineers (2 peers, 2 interns) through regular code reviews.',
        ],
    },
    {
        role: 'Software Engineer Intern, Frontend',
        company: 'Sinclair Digital — Interactive',
        dates: 'Apr 2023 – Aug 2023',
        highlights: [
            'Designed and shipped a ChatGPT-4 integration for AI-powered headline suggestions, used thousands of times daily and improving producer workflow efficiency by over 90%.',
            'Earned a full-time offer based on delivery quality and cross-team communication.',
        ],
    },
    {
        role: 'Apache Avionics, Armament & Electronics Technician · QC Inspector · Sergeant',
        company: 'United States Army',
        dates: 'Sep 2011 – Sep 2018',
        highlights: [
            'Maintained AH-64D Apache avionics, armament, electronic warfare and M-TADS/PNVS targeting systems.',
            'Quality Control Inspector across multiple maintenance disciplines with a 100% safety record across thousands of operations.',
            'Deployed to Afghanistan and served 12 months in South Korea. Held a U.S. Secret security clearance (2011–2021, inactive).',
        ],
    },
];

export const education = [
    {
        title: 'BA, Computer Science & Systems',
        detail: 'Minor in Business Data Analytics · University of Washington Tacoma',
        dates: '2022',
    },
    {
        title: 'Full-Stack Software Development Program',
        detail: 'Java, JavaScript, Python, HTML/CSS, Linux, AWS · TLG Learning',
        dates: '2022 – 2023',
    },
];

export type Project = {
    name: string;
    summary: string;
    image: string;
    imageFit?: 'cover' | 'contain' | 'phone';
    tags: string[];
    links: { label: string; url: string }[];
};

export const featuredProjects: Project[] = [
    {
        name: 'MTG Collector',
        summary:
            'Free Android app that scans Magic: The Gathering cards with the camera and builds an on-device collection with live prices. Identifies the exact printing, foil and condition; imports precons and Moxfield/Archidekt decks; tracks what you paid against what you pulled. No account, no ads, no data collected.',
        image: MtgCollector,
        imageFit: 'phone',
        tags: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'On-device OCR', 'Scryfall API'],
        links: [
            { label: 'Source', url: 'https://github.com/bmead92/mtg-collector' },
            { label: 'Download APK', url: 'https://github.com/bmead92/mtg-collector/releases/latest' },
        ],
    },
    {
        name: 'Living Dex',
        summary:
            'Android app that scans Pokémon cards into an on-device collection with TCGplayer and Cardmarket prices. Recognizes printings from Base Set to today, including holo, reverse holo, 1st Edition and Shadowless; tracks packs, boxes and sales, and charts collection value over time.',
        image: LivingDex,
        imageFit: 'phone',
        tags: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Vision Camera', 'TCGdex API'],
        links: [
            { label: 'Source', url: 'https://github.com/bmead92/living-dex' },
            { label: 'Download APK', url: 'https://github.com/bmead92/living-dex/releases/latest' },
        ],
    },
];

export const otherProjects: Project[] = [
    {
        name: 'NWACC',
        summary: 'Rebuilt a legacy HTML-only site as a lightweight, responsive React and SASS app with PDF support.',
        image: Nwacc,
        imageFit: 'contain',
        tags: ['React', 'SASS'],
        links: [{ label: 'Visit site', url: 'http://nwacconline.com/' }],
    },
    {
        name: 'Dockyard Roller Derby',
        summary: 'Volunteered to redesign and relaunch an abandoned site for a local roller derby league.',
        image: Dockyard,
        imageFit: 'contain',
        tags: ['Web design', 'GoDaddy'],
        links: [{ label: 'Visit site', url: 'https://dockyardrollerderby.org/' }],
    },
    {
        name: 'Set in Stone',
        summary: 'A 2D top-down browser dungeon crawler built in six days with Phaser and vanilla JavaScript.',
        image: SetInStone,
        tags: ['JavaScript', 'Phaser'],
        links: [{ label: 'Play', url: 'https://csdav0.github.io/JS_FINAL_PROJECT/' }],
    },
    {
        name: 'Temple Jog',
        summary: 'Team lead on a Java Swing GUI built on top of another team’s console adventure.',
        image: TempleJog,
        tags: ['Java', 'Swing'],
        links: [{ label: 'Source', url: 'https://github.com/bmead92/temple-jog-T1-Capstone' }],
    },
    {
        name: 'Potion Quest',
        summary: 'Console text adventure in Java; led player controls, combat and character state.',
        image: PotionQuest,
        tags: ['Java'],
        links: [{ label: 'Source', url: 'https://github.com/bmead92/potion-quest' }],
    },
    {
        name: 'Coffee and Cards',
        summary: 'Console blackjack in Java. Team lead; wrote the initial codebase, all unit tests and the final refactor.',
        image: CoffeeAndCards,
        tags: ['Java', 'JUnit'],
        links: [{ label: 'Source', url: 'https://github.com/bmead92/Coffee-and-Cards' }],
    },
];

export const skills = [
    {
        group: 'Languages & Frameworks',
        items: ['TypeScript', 'JavaScript', 'React', 'React Native', 'Python', 'Java', 'SQL', 'HTML5', 'CSS / SASS', 'MUI', 'Tailwind CSS'],
    },
    {
        group: 'Backend & Data',
        items: ['Node.js', 'PostgreSQL', 'REST APIs', 'Redux', 'MobX', 'Supabase', 'SQLite'],
    },
    {
        group: 'AI / ML',
        items: ['RAG pipeline design', 'Anthropic Claude', 'Claude Code', 'OpenAI', 'Mistral AI', 'Voyage AI embeddings'],
    },
    {
        group: 'Cloud & DevOps',
        items: ['AWS', 'Azure DevOps', 'Firebase', 'Vercel', 'Render', 'Fly.io', 'Cloudflare R2', 'AppCenter'],
    },
    {
        group: 'Testing & Tools',
        items: ['Jest', 'JUnit', 'Git', 'GitHub', 'GitLab', 'Jira', 'Confluence'],
    },
];
