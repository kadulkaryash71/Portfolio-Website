import React from 'react';
import CloudKakshaa from "../assets/icons/CloudKakshaa-logo.jpeg";
import ITSA from "../assets/icons/ITSA-logo.jpeg";
import CSI from "../assets/icons/CSI-logo.jpeg";
import TSF from "../assets/icons/TheSparksFoundation.jpeg";


const WorkEx = () => {

    const workTimelineEl = [
        {
            periodFrom: "September 2023",
            periodTo: "October 2023",
            company: "The Sparks Foundation",
            companyLogo: TSF,
            active: true,
            location: "Remote",
            role: "Data Science Intern",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus mollitia fugiat doloremque eos error.",
            enableButton: true,
            buttonText: "View Offer Letter",
            buttonIcon: "",
            buttonLink: "https://links-truecertificates.s3.ap-south-1.amazonaws.com/published/2023-16-26/2XQKVDBLM7.png"
        },
        {
            periodFrom: "December 2021",
            periodTo: "March 2022",
            company: "Project CloudKakshaa",
            companyLogo: CloudKakshaa,
            active: false,
            location: "Remote",
            role: "Frontend Web Developer Intern",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus mollitia fugiat doloremque eos error.",
            enableButton: true,
            buttonText: "View Experience Letter",
            buttonIcon: "",
            buttonLink: "https://drive.google.com/file/d/14_Dn6vHzNisU2l79ROV97eqQ9OI1zQy1/view?usp=sharing"
        },
        {
            periodFrom: "September 2021",
            periodTo: "May 2022",
            company: "Information Technology Student's Association (ITSA-VIT)",
            companyLogo: ITSA,
            active: false,
            location: "Mumbai, Maharashtra, India",
            role: "Technical Workforce",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus mollitia fugiat doloremque eos error.",
            enableButton: true,
            buttonText: "View Experience Letter",
            buttonIcon: "",
            buttonLink: "https://drive.google.com/file/d/1SUBo4RlB2Cbn4psrl9WNV8JBLwEWo1VV/view?usp=sharing"
        },
        {
            periodFrom: "September 2021",
            periodTo: "May 2022",
            company: "Computer Society of India (CSI-VIT)",
            companyLogo: CSI,
            active: false,
            location: "Mumbai, Maharashtra, India",
            role: "Technical Workforce",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus mollitia fugiat doloremque eos error.",
            enableButton: false,
            buttonText: "View Experience Letter",
            buttonIcon: "",
            buttonLink: ""
        },
    ]

    const ActiveBadge = () => {
        return (
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-100 ml-3">Active</span>
        )
    }

    return (
        <div id="experience" className="container my-4">
            <h2 className="my-6 text-3xl font-bold">Experience</h2>
            <ol className="relative border-l mx-5 my-2 py-3 border-gray-200 dark:border-gray-700">
                {workTimelineEl.map((item, index) =>
                    <li key={index} className="mb-10 ml-9">
                        {item.active && <span className={`animate-ping absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white dark:ring-gray-900 ${item.active ? 'dark:bg-green-500' : 'dark:bg-blue-900'}`} />}

                        <span className={`absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white dark:ring-gray-900 ${item.active ? 'dark:bg-green-500' : 'dark:bg-blue-900'}`}>
                            {item.companyLogo
                                ? <img className="w-9 h-9 rounded-full text-blue-800 dark:text-blue-300" src={item.companyLogo} alt="" />
                                : <svg className="w-7 h-7 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>}
                        </span>
                        <h3 className="flex items-center w-fit mb-1 text-xl font-semibold text-gray-900 dark:text-white transition-all ease-linear duration-300">{item.company} {item.active && <ActiveBadge />}</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 transition-all duration-300 hover:text-gray-300">{item.periodFrom} —  {item.periodTo}</time>
                        <p className="mb-1 text-lg font-normal text-gray-500 text-justify transition-all duration-300 hover:text-gray-100 dark:text-gray-400">{item.role}</p>
                        <p className="mb-4 text-base font-normal text-gray-500 text-justify transition-all duration-300 hover:text-gray-100 dark:text-gray-400">{item.desc}</p>
                        {item.enableButton && <a href={item.buttonLink} target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-3.5 h-3.5 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg>{item.buttonText}</a>}
                    </li>
                )}
            </ol>

        </div>
    )
}

export default WorkEx;