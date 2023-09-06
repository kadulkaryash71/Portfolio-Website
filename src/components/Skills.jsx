import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaFlask, FaDatabase, FaJava, FaHtml5, FaCss3 } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiTensorflow, SiCplusplus, SiTailwindcss } from "react-icons/si";
import { BsDatabaseFillGear } from "react-icons/bs";
import { GiPublicSpeaker } from "react-icons/gi";



const OneSkill = ({ icon, iconName, styles }) => {
    return (
        <div className={`p-5 flex flex-col items-center border-2 rounded-lg border-white cursor-pointer transition-all duration-300 hover:border-b-4 hover:scale-110 `+ styles}>
            <span className="icon text-6xl mb-4">{icon}</span>
            <span className="name w-full text-center">{iconName}</span>
        </div>
    )
}

function Skills() {

    const skillsCol = [
        {
            icon: <FaReact />,
            name: "React",
            styles: "hover:border-b-blue-800 hover:text-blue-400"
        },
        {
            icon: <FaNodeJs />,
            name: "NodeJs",
            styles: "hover:border-b-green-800 hover:text-green-400"
        },
        {
            icon: <SiExpress />,
            name: "Express",
            styles: "hover:border-b-slate-800 hover:text-slate-400"
        },
        {
            icon: <BiLogoMongodb />,
            name: "MongoDB",
            styles: "hover:border-b-green-800 hover:text-green-400"
        },
        {
            icon: <FaDatabase />,
            name: "SQL",
            styles: "hover:border-b-blue-800 hover:text-blue-400"
        },
        {
            icon: <FaFlask />,
            name: "Flask",
            styles: "hover:border-b-yellow-800 hover:text-yellow-400"
        },
        {
            icon: <FaPython />,
            name: "Python",
            styles: "hover:border-b-blue-800 hover:text-blue-400"
        },
        {
            icon: <SiCplusplus />,
            name: "C/C++",
            styles: "hover:border-b-slate-800 hover:text-slate-400"
        },
        {
            icon: <FaJava />,
            name: "Java",
            styles: "hover:border-b-orange-800 hover:text-orange-400"
        },
        {
            icon: <SiTensorflow />,
            name: "Machine Learning",
            styles: "hover:border-b-yellow-800 hover:text-yellow-400"
        },
        {
            icon: <BsDatabaseFillGear />,
            name: "Data Analysis",
            styles: "hover:border-b-blue-800 hover:text-blue-400"
        },
        {
            icon: <GiPublicSpeaker />,
            name: "Storytelling",
            styles: "hover:border-b-slate-800 hover:text-slate-400"
        },
        {
            icon: <FaHtml5 />,
            name: "HTML5",
            styles: "hover:border-b-red-800 hover:text-red-400"
        },
        {
            icon: <FaCss3 />,
            name: "CSS3",
            styles: "hover:border-b-blue-800 hover:text-blue-400"
        },
        {
            icon: <SiTailwindcss />,
            name: "TailwindCSS",
            styles: "hover:border-b-purple-800 hover:text-purple-400"
        },
        
    ]

    return (
        <div id="skills" className="my-10">
            <h2 className=" text-3xl font-bold">Skills</h2>
            <div className="card-collection px-5 my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {skillsCol.map((item, index) => <OneSkill key={index} icon={item.icon} iconName={item.name} styles={item.styles} />)}
            </div>
        </div>
    )
}

export default Skills