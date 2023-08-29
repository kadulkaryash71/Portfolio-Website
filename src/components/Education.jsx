import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import { HiLocationMarker, HiOutlineLocationMarker } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";


const Education = () => {

    const timelineEl = [
        {
            periodFrom: "September 2023",
            periodTo: "October 2024",
            institute: "Dublin City University",
            active: true,
            location: "Dublin, Ireland",
            degree: "Masters in Computing (MSc. in Computing - major in Data Analytics)",
            desc: "I am thrilled to announce that I will be joining this world renowned institute of Ireland. I am announcing this exclusively here on my portfolio in advance. For more such updates about me, subscribe to my newsletter at the bottom of this page!",
            enableButton: true,
            buttonText: "View Offer Letter",
            buttonLink: "https://drive.google.com/file/d/14wlkfB9ckeRVKYvEkF9rgndEOy1wmJBW/view?usp=drive_link"
        },
        {
            periodFrom: "August 2019",
            periodTo: "May 2023",
            institute: "Vidyalankar Institute of Technology",
            active: false,
            location: "Mumbai, Maharashtra, India",
            degree: "Bachelor of Engineering (B.E. in Information Technology, University of Mumbai)",
            desc: "The course here has empowered me by turning me into an abundant resource of raw talent. Right from the basics like Math & Probability to Probabilistic Theories of AI, from Computer Architecture & Organisation to Cloud Computing, as well as from Principles of Communication to Ethical Hacking & Forensics. It unfolded so well step-by-step that I would often lose myself into the nitty-gritties of any one subject really easily. VIT really helped me find myself as an IT engineer and an orator.",
            enableButton: true,
            buttonText: "Photo Gallery & Mememtos",
        },
        {
            periodFrom: "August 2017",
            periodTo: "March 2019",
            institute: "VPM's B. N. Bandodkar College of Science",
            active: false,
            location: "Thane, Maharashtra, India",
            degree: "High School Diploma / 12th HSC",
            desc: "One of the crucial turning points of my life. The coming of age period I spent here was delightful. Those were the days when I studied the hardest in my life amidst the pressure of competitive exams to crack into IITs to further study engineering. Nevermind my dream of studying in IITs, onto the next journey. Here I developed a foundation of Physics, Chemisty, Mathematics, and Computer Science.",
            enableButton: false,
            buttonText: "",
            buttonIcon: ""
        },
        {
            periodFrom: "June 2005",
            periodTo: "March 2017",
            institute: "Holy Angels' School",
            active: false,
            location: "Dombivli, Mahrashtra, India",
            degree: "Sophomore / 10th CBSE",
            desc: "I could say a lot but I won't.",
            enableButton: false,
            buttonText: "",
            buttonIcon: ""
        },
    ];

    const ActiveBadge = () => {
        return (
            <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-100 ml-3">Active</span>
        )
    }

    return (
        <div id="education">
            <h2 className="my-6 text-3xl font-bold">Academic Journey</h2>
            <ol class="relative mx-5 my-2 py-3 border-l border-gray-200 dark:border-gray-700">
                {timelineEl.map((item, index) =>
                    <li key={index} className="mb-10 ml-4 md:w-3/4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-2.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.periodFrom} — {item.periodTo}</time>
                        <span className="flex items-center my-2 transition duration-300 hover:text-white">
                            <span className="icon-wrapper text-gray-500"><FaUniversity /></span>
                            <h3 className="ml-2 text-xl flex items-center font-semibold text-gray-900 dark:text-white">{item.institute} {item.active && <ActiveBadge />}</h3>
                        </span>
                        <span className="flex items-center my-1 transition duration-300 hover:text-white">
                            <span className="icon-wrapper text-gray-500"><HiLocationMarker /></span>
                            <p className="ml-2 text-base font-normal text-gray-500 dark:text-gray-400 transition duration-300 hover:text-white">{item.location}</p>
                        </span>
                        <span className="flex items-center my-1 transition duration-300 hover:text-white">
                            <span className="icon-wrapper text-gray-500"><FaGraduationCap /></span>
                            <p className="ml-2 text-base font-normal text-gray-500 dark:text-gray-400 transition duration-300 hover:text-white">{item.degree}</p>
                        </span>
                        <span className="flex items-start mt-1 mb-4 transition duration-300 hover:text-white">
                            <span className="icon-wrapper mt-1.5 text-gray-500"><CgNotes /></span>
                            <p className="ml-2 text-base font-normal text-gray-500 text-justify dark:text-gray-400 transition duration-300 hover:text-white">{item.desc}</p>
                        </span>

                        {item.enableButton &&
                            <a href={item.buttonLink} target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg transition duration-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">{item.buttonText} <svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg></a>}
                    </li>
                )}
            </ol>
        </div>
    )
}

export default Education