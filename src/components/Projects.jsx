import React from 'react';
import { FaGithub, FaFirefoxBrowser, FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const ProjectCard = ({ title, subtitle, from, to, techstack, desc, demo, github }) => {

    return (
        <div className="m-2 p-8 bg-slate-600 bg-opactiy-10 ring-2 ring-gray-400 flex flex-col justify-around items-center text-center text-white rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-yellow-300 hover:bg-opacity-30">
            <div className="title mb-1 text-2xl font-bold">{title}</div>
            <div className="subtitle my-1 text-sm text-slate-300 italic">{from} — {to}</div>
            <div className="tech-stack my-1 grid grid-cols-4 gap-2 place-items-center">
                <BiLogoMongodb />
                <SiExpress />
                <FaReact />
                <FaNodeJs />
            </div>
            <div className="subtitle mt-1 text-base text-slate-300 italic">About this project</div>
            <div className="desc my-1 text-base">{desc}</div>
            <div className="skills flex items-center justify-center">
                <span className="text-base"></span>
            </div>
            <div className="btn-container w-full">
            <a href={demo && demo} className="mx-2 my-2 p-2 w-full flex items-center justify-center text-slate-300 bg-blue-800 ring-2 ring-blue-600 rounded-md cursor-pointer text-lg transition-all duration-500 hover:bg-blue-900 hover:ring-slate-200 hover:text-white hover:scale-95"><span className="mx-1"><FaFirefoxBrowser /></span> View Demo</a>
            <a href={github && github} className="mx-2 my-2 p-2 w-full flex items-center justify-center text-slate-300 bg-gray-800 ring-2 ring-gray-600 rounded-md cursor-pointer text-lg transition-all duration-500 hover:bg-black hover:ring-blue-200 hover:text-white hover:scale-95"><span className="mx-1"><FaGithub /></span> GitHub Repo</a>

            </div>
        </div>
    )
}


function Projects() {

    const projects = [
        {
            title: "University Prediction for Post-Graduation",
            subtitle: "UrPG",
            periodFrom: "November 2022",
            periodTo: "March 2023",
            techstack: "",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora inventore mollitia ab aut unde consequatur pariatur, totam a blanditiis hic dicta alias laudantium expedita quo quas voluptates sapiente ipsum iste!",
            demo: "",
            github: ""
        },
        {
            title: "UniMate Connect",
            subtitle: "About the project",
            techstack: "",
            periodFrom: "March 2023",
            periodTo: "June 2023",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora inventore mollitia ab aut unde consequatur pariatur, totam a blanditiis hic dicta alias laudantium expedita quo quas voluptates sapiente ipsum iste!",
            demo: "",
            github: ""
        },
        {
            title: "Decentralised Document Storage",
            subtitle: "About the project",
            techstack: "",
            periodFrom: "February 2023",
            periodTo: "March 2023",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora inventore mollitia ab aut unde consequatur pariatur, totam a blanditiis hic dicta alias laudantium expedita quo quas voluptates sapiente ipsum iste!",
            demo: "",
            github: ""
        },
    ]

    return (
        <div id="projects" className="my-4">
            <h2 className="my-6 text-3xl font-bold">Projects</h2>
            <div className="card-collection grid grid-cols-1 md:px-8 lg:grid-cols-3 gap-5">
                {projects.map((project, index) => 
                    <ProjectCard key={index} title={project.title} subtitle={project.subtitle} from={project.periodFrom} to={project.periodTo} desc={project.desc} demo={project.demo} github={project.github} />
                )}
            </div>
        </div>
    )
}

export default Projects