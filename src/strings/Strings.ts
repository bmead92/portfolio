import SetInStone from '../assets/images/setInStoneTitleScreen.png'
import CoffeeAndCards from '../assets/images/coffeeAndCardsTitleScreen.png'
import TempleJog from '../assets/images/templeJogTitleScreen.png'
import PotionQuest from '../assets/images/potionQuestTitleScreen.png';
import nwacc from '../assets/images/NWACCLogo.jpg';
import dockyard from '../assets/images/DockyardLogo.jpg'

const Strings = {
    about:
    `
    From Army Aviation to full stack web development, a little about me:

    I served in the United States Army for seven years as an Apache Avionics, Electronics, and Armament repairer.
    While the Apache is an impressive weapons platform, it is essentially many computers talking to each other, which piqued my curiosity.
    
    This was my catalyst into Computer Science.
    
    From the beginning of my service, I knew that I would not make a career out of the military, so during my fifth year of active duty I made a plan. Because I was involuntarily stationed in South Korea for the year, I was afforded the opportunity to choose my next duty station. After researching respected universities for Computer Science, I noticed that the University of Washington was a great choice, and even better, had a Tacoma campus close to Joint Base Lewis-McChord.
    
    From September 2018 to June 2022, I worked towards my degree. After graduating, I had a few interviews that ultimately didn't pan out. I knew that I had the soft skills required for interviewing and being a successful developer, but I also knew that I needed to improve my programming skills.
    
    My friend and fellow veteran, Ryan Trepanier, recommended that I apply to TLG Learning's SDE program, a 18-week intensive course designed for veterans with no programming experience to learn enough to change careers and succeed in software development. As I had a CS degree, I was able to excel during the course, regularly in the top 10% of my 21-person cohort. Additionally, because UW-T taught Java as its OOP language, I was able to tutor fellow student-veterans during the course and further solidify what I learned in college.
    
    I graduated from TLG Learning's SDE course in March 2023.
    
    From April 2023 until August of the same year, I was working as an intern full-time within their Interactive team developing React based web components. Myself and 2 other people were primarily responsible for designing an internal tool used by producers to dramatically increase their productivity. Sinclair's CDO knew that producers could struggle from writer's block when they had to produce a great headline. We created a tool that utilizes ChatGPT-4 to suggest headlines to the user instantly.
    
    From August 2023 to August 2024, I worked as an Associate Software Development Engineer with Sinclair's News Apps team. As a team, we worked tirelessly to deploy 144 app versions every sprint,improve the user experience, and drive more ad revenue for the company.

    From September 2024 until present, I have been working a full stack Software Developer at Avue Technologies Corporation. Every day I improve their products by implementing front end UI/UX features requested by customers and stakeholders, as well as improve backend services in Java and streamline SQL calls.
    `,
    aboutShort: `
    Hello! I'm Bryce Meadors, a software developer based in Tacoma, Washington.
    
    Welcome to my portfolio, I built this using React and SASS.
    `,
    skillsHeader: `LANGUAGES, FRAMEWORKS, AND TOOLS`,
    navigationTabs: [
        {
            name:'ABOUT ME',
            url: '#aboutMe',
            index: 0,
        },
        {
            name: 'RESUME',
            url: '#resume',
            index: 1,
        },
        {
            name:'SKILLS',
            url: '#skills',
            index: 2,
        },
        {
            name: 'PROJECTS',
            url: '#projects',
            index: 3,
        },
    ],
    externalLinks: [
        {
            name: 'Github',
            url: 'https://github.com/bmead92',
            index: 0,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/bryce-meadors-a13923229/',
            index: 1,
        },
        {
            name: 'TLG',
            url: 'https://career.tlglearning.com/software-development-engineer-sde/',
            index: 2,
        },
    ],
    projects: [
        {
            name: 'NWACC',
            description: `
            Modernized a legacy codebase that used only basic HTML. Created a brand new, lightweight codebase using React and SASS.
            Used media queries for mobile viewing, and react-pdf for pdf support.
            `,
            descriptionShort: 'Written in JS React, styled with SASS.',
            image: nwacc,
            url: 'http://nwacconline.com/',
            index: 0,
        },
        {
            name: 'Dockyard Roller Derby',
            description: `
            Volunteered to update an abandoned site for a local roller derby league. Designed and implemented through GoDaddy.
            `,
            descriptionShort: 'Volunteered to update the site, hosted via GoDaddy.',
            image: dockyard,
            url: 'https://dockyardrollerderby.org/',
            index: 1,
        },
        {
            name: 'Set in Stone',
            description: `
            2-D top-down dungeon crawler that you can play in the browser, inspired by retro Zelda games.
            Built using the Phaser Framework and Vanilla Javascript from 16 December 2022 - 21 December 2022.
            `,
            descriptionShort: 'A 2-D top-down dungeon crawler, written in vanilla JS.',
            image: SetInStone,
            url: 'https://csdav0.github.io/JS_FINAL_PROJECT/',
            index: 2,
        },
        {
            name: 'Potion Quest',
            description: 'A console-based text adventure written in Java for phase 1 of our TLG capstone projects. Another team would inherit our codebase and build a GUI on top of it. I took lead on the controls, combat, and state of the main character.',
            descriptionShort: 'An original text-based console adventure written in Java.',
            image: PotionQuest,
            url: 'https://github.com/bmead92/potion-quest',
            index: 3,
        },
        {
            name: 'Temple Jog',
            description: `
            A GUI represented using Java Swing. Built on a previously console based adventure from another team. As I had the most Java experience, I assumed the role of team lead. 
            `,
            descriptionShort: 'A GUI-based adventure, written in Java using Java Swing.',
            image: TempleJog,
            url: 'https://github.com/bmead92/temple-jog-T1-Capstone',
            index: 4,
        },
        {
            name: 'Coffee and Cards',
            description: 'A version of blackjack hosted in the console, written in Java. Again, I assumed the the team lead position, wrote the entire first skeleton codebase, all of the unit tests, and completed the final code refactor.',
            descriptionShort: 'Blackjack hosted in the console, written in Java.',
            image: CoffeeAndCards,
            url: 'https://github.com/bmead92/Coffee-and-Cards',
            index: 5,
        },
    ],
    accentedE: {
        uppercase: '\u00C9',
        lowercase: '\u00E9',
    },
    projectDescriptionNotice: '*Descriptions shortened for mobile devices',
    resumeDownloadLabel: `It appears you are on a mobile device. Please visit on a non-mobile device to download my resume.`,
}

export default Strings;