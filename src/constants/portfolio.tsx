import emoji from "react-easy-emoji";
import { ProjectT } from "../types/ProjectT";
import { SkillsSectionT } from "../types/SkillsSection";

export const greetings = {
    name: "Adel Alradaie",
    title: "Hi all, I'm Adel Alradaie",
    description:
        "I'm Full Stack Developer with over 2 years of experience in software engineering and developing new features and apps for different products and clients by using programming tools like Reactjs, React-Native,  Node.js ..etc . Capable of analyzing customer feedback in order to find the best way to create new and enhance the existing product features and performing quality assurance.",
    resumeLink:
        "https://drive.google.com/file/d/17EeN65baze7KA2uSNuAe2ks9z0CcqrmE/view?usp=drive_link",

};

export const openSource = {
    githubUserName: "AdelAlradaie",
};

export const contact = {};

interface SocialLinksT {
    [key: string]: string
}
export const socialLinks: SocialLinksT = {

    linkedin: "https://www.linkedin.com/in/adel-alradaie",
    github: "https://github.com/AdelAlradaie",

};

export const skillsSection: SkillsSectionT = {
    title: "What I do",
    subTitle:
        "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    data: [
        {
            title: "Full Stack Development",
            lottieAnimationFile: require("../assets/lottie/skills/fullstack.json"), // Path of Lottie Animation JSON File
            skills: [
                emoji(
                    "⚡ Building responsive Single-Page-Apps (SPA)  in React.js"
                ),
                emoji(
                    "⚡ Building Mobile App in React-Native"
                ),
                emoji("⚡ Building responsive static websites using React.js"),
                emoji(
                    "⚡ Building RESTful APIs in Node-js"
                ),
            ],
            softwareSkills: [
                {
                    skillName: " tailwindcss",
                    fontAwesomeClassname: "logos:tailwindcss-icon",
                },

                {
                    skillName: "Material UI",
                    fontAwesomeClassname: "logos:material-ui",
                },
                {
                    skillName: "Typescript",
                    fontAwesomeClassname: "vscode-icons:file-type-typescript",
                },
                {
                    skillName: "Redux",
                    fontAwesomeClassname: "logos:redux",
                },

                {
                    skillName: "React-Native",
                    fontAwesomeClassname: "tabler:brand-react-native",
                },

                {
                    skillName: "Reactjs",
                    fontAwesomeClassname: "vscode-icons:file-type-reactjs",
                },

                {
                    skillName: "NPM",
                    fontAwesomeClassname: "logos:npm-icon",
                },
                {
                    skillName: "Yarn",
                    fontAwesomeClassname: "logos:yarn",
                },


                {
                    skillName: "Nodejs",
                    fontAwesomeClassname: "logos:nodejs",
                },

                {
                    skillName: "JavaScript",
                    fontAwesomeClassname: "logos:javascript",
                },
                {
                    skillName: "HTML-5",
                    fontAwesomeClassname: "vscode-icons:file-type-html",
                },

                {
                    skillName: "CSS-3",
                    fontAwesomeClassname: "vscode-icons:file-type-css",
                },
                {
                    skillName: "Bootstrap",
                    fontAwesomeClassname: "logos:bootstrap",
                },
                {
                    skillName: "c-sharp",
                    fontAwesomeClassname: "logos:c-sharp",
                },


            ],
        },
        {
            title: "Cloud Infra-Architecture",
            lottieAnimationFile: require("../assets/lottie/skills/cloudinfra.json"), // Path of Lottie Animation JSON File
            skills: [
                emoji("⚡ Experience of working on multiple cloud platforms"),
                emoji(
                    "⚡ Develop, implement, and maintain applications and systems that integrate MongoDB technology"
                ),
                emoji(
                    "⚡ Develop and maintain mobile and web applications using Firebase as a backend platform."
                ),
            ],
            softwareSkills: [
                // ? Check README To get icon details


                {
                    skillName: "Github",
                    fontAwesomeClassname: "akar-icons:github-fill",
                },
                {
                    skillName: "Firebase",
                    fontAwesomeClassname: "logos:firebase",
                },
                {
                    skillName: "MongoDB",
                    fontAwesomeClassname: "logos:mongodb",
                },



            ],
        }
    ],
};

export const SkillBars = [
    {
        Stack: "Frontend/Design", //Insert stack or technology you have experience in
        progressPercentage: "95", //Insert relative proficiency in percentage
    },
    {
        Stack: "Backend",
        progressPercentage: "95",
    },
    {
        Stack: "Mobile/App",
        progressPercentage: "90",
    },
    {
        Stack: "Desktop/App",
        progressPercentage: "85",
    },
    {
        Stack: "Programming",
        progressPercentage: "90",
    },
];

export const educationInfo = [
    {
        schoolName: "National University",
        subHeader: "Bachelor degree in Information Technology",
        duration: "November 2020 - February 2024",
        desc: "",

    },

];

export const experience = [
    {
        role: "Front-End Developer",
        company: "YORK BRITISH ACADEMY",
        companylogo: require("../assets/images/york.png"),
        date: "2024",
        desc: "It's a startup in UK .",
    },



];

export const projects: Array<ProjectT> = [
    {
        name: "instagram-clone",
        desc: "Fullstack Instagram Clone Built With React, Firebase && Chakra UI. ",
        github: "https://github.com/AdelAlradaie/Instagram-clone",
        link: "https://insta-clone-7b083.web.app",
        images: [
            {
                link: require("../assets/images/projects/instagram.png")
            }
        ],
        technologies: [
            {
                name: "React",
                fontAwesomeClassname: "vscode-icons:file-type-reactjs"
            },
            {
                name: "Firebase",
                fontAwesomeClassname: "vscode-icons:file-type-firebase",
            },
            {
                name: "npm",
                fontAwesomeClassname: "logos:npm-icon",
            },
        ]
    },
    {
        name: "Portfolio",
        desc: "Software Developer Portfolio Template built with react.js and typescript bootstrap that helps you showcase your work and skills as a software developer.",
        github: "https://github.com/AdelAlradaie/adelalradaie.github.io",
        link: "https://adelalradaie.github.io",
        images: [
            {
                link: require("../assets/images/projects/portfolio.png")
            }
        ],
        technologies: [
            {
                name: "React",
                fontAwesomeClassname: "vscode-icons:file-type-reactjs"
            },
            {
                name: "Bootstrap",
                fontAwesomeClassname: "logos:bootstrap",
            },
            {
                name: "HTML-5",
                fontAwesomeClassname: "vscode-icons:file-type-html",
            },

            {
                name: "CSS-3",
                fontAwesomeClassname: "vscode-icons:file-type-css",
            },
            {
                name: " styled-components",
                fontAwesomeClassname: "simple-icons:styled-components",
            },

        ]
    },
    {
        name: "Merne-Estate",
        desc: "Real Estate app using MERN and tailwind css ( React js - Node js - MongoDB, Firebase ).",
        github: "https://github.com/AdelAlradaie/mern-state",
        link: "https://mernestate-ir4m.onrender.com/",
        images: [

            {
                link: require("../assets/images/projects/mernstate.png")
            }
        ],
        technologies: [
            {
                name: "React",
                fontAwesomeClassname: "vscode-icons:file-type-reactjs"
            },
            {
                name: "MongoDB",
                fontAwesomeClassname: "logos:mongodb",
            },
            {
                name: "Nodejs",
                fontAwesomeClassname: "logos:nodejs",
            },
            {
                name: "Firebase",
                fontAwesomeClassname: "vscode-icons:file-type-firebase",
            },
            {
                name: "TailwindCss",
                fontAwesomeClassname: "skill-icons:tailwindcss-dark",
            },


        ]
    },



];

export const feedbacks = [
    {
        name: "John Smith",
        feedback:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
    },
    {
        name: "John Smith",
        feedback:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
    },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

