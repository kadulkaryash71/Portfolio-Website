import React, { useState } from 'react';
import { FiChevronsDown } from "react-icons/fi";
import GDSC from "../assets/images/certificates/30DoGCP_YashKadulkar.png";
import Blockchain from "../assets/images/certificates/Blockchain_Crypto_SmartContract-Intuition.jpg";
import AWSP from "../assets/images/certificates/AWS_certificate.jpg";
import Sparks from "../assets/images/certificates/YashKadulkar_SparkBasics-BDA_GL_page-0001.jpg";
import DL from "../assets/images/certificates/DL-CourseCertificate.jpeg";
import RevCoding from "../assets/images/certificates/Yash Kadulkar-ITSA-RevCode.png"
import TCSML from "../assets/images/certificates/Yash Kadulkar-TCS-ML.png"
import PythonAutomation from "../assets/images/certificates/Coursera-Google_Automation_with_Python_page-0001.jpg";

function Participations() {

    const [isViewAll, setViewAll] = useState(false);
    
    const CardEl = ({ title, link, body, authority }) => {
        return (
            <div class={`${isViewAll ? "animate-entrance" : "animate-exit"} flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row cursor-pointer transition-all duration-500 hover:shadow-md hover:shadow-slate-500 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}>
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={link} alt={title + ` certificate`} />
                <div class="flex flex-col items-center md:items-start justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p class="mb-2 text-base italic font-normal text-gray-700 dark:text-gray-400">Issued by: {authority}</p>
                    <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">{body} blah blah blah</p>
                </div>
            </div>
        )
    }

    return (
        <div id="participations" className="my-4">
            <h2 className="my-6 text-3xl font-bold">Certifications & Participations</h2>
            <button onClick={() => setViewAll(!isViewAll)} className="w-full flex items-center justify-end flex-nowrap" >
                <span className="my-2 px-1 flex items-center rounded-md text-base transition duration-300 hover:text-blue-600 hover:border-t-2 hover:border-blue-300">{isViewAll ? "Collapse" : "View all " + certsCol.length} <FiChevronsDown /></span>
            </button>
            <div className="container grid md:grid-cols-2 gap-4 m-auto">
                {certsCol.slice(0, 4).map((item, index) => <CardEl key={index} title={item.title} link={item.link} body={item.body} authority={item.authority} />)}
                {isViewAll
                    && certsCol.slice(4, certsCol.length).map((item, index) => <CardEl key={index} title={item.title} link={item.link} body={item.body} authority={item.authority} />)
                }
            </div>
        </div>
    )
}

const certsCol = [
    {
        title: "30 Days of Google Cloud",
        authority: "Google Developers Students Club (GDSC-VIT)",
        link: GDSC,
        body: ""
    },
    {
        title: "Blockchain A-Z™",
        authority: "Udemy",
        link: Blockchain,
        body: ""
    },
    {
        title: "Google Crash Course on Python",
        authority: "Coursera",
        link: PythonAutomation,
        body: ""
    },
    {
        title: "AWS Capstone Project",
        authority: "GreatLearning",
        link: AWSP,
        body: ""
    },
    {
        title: "Sparks Basics",
        authority: "GreatLearning",
        link: Sparks,
        body: ""
    },
    {
        title: "Introduction to Deep Learning",
        authority: "GreatLearning",
        link: DL,
        body: ""
    },
    {
        title: "Reverse Coding Participation Certificate",
        authority: "Information Technology Students Association (ITSA-VIT)",
        link: RevCoding,
        body: ""
    },
    {
        title: "3-days Credit Course on Machine Learning",
        authority: "TCS x VIT",
        link: TCSML,
        body: ""
    },
]

export default Participations;