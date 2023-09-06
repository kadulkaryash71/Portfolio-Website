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
                <img class="object-cover h-auto w-full rounded-t-lg md:h-auto md:w-48 md:rounded-lg" src={link} alt={title + ` certificate`} />
                <div class="flex flex-col items-center md:items-start justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p class="mb-2 text-base italic font-normal text-gray-700 dark:text-gray-400">Issued by: {authority}</p>
                    <p class="mb-2 font-normal text-base text-gray-700 dark:text-gray-400">{body}</p>
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
        body: "Participants were expected to complete two tracks outlining DevOps and Data Analytics each. Completed the DevOps track where one could learn creating and managing VM instances, machine images, orchestration with Kubernetes, VPCs, Firewalls, etc."
    },
    {
        title: "Blockchain A-Z™",
        authority: "Udemy",
        link: Blockchain,
        body: "Mechanism of a general blockchain; Case Studies of Ethereum, Bitcoin, and BitcoinCash; Blockchain Protocols; UTXOs; Protocols v/s Tokens v/s Coins; Introduction to other blockchains like Ripple; Creating and managing a blockchain using Python; Wallets; Forking, etc."
    },
    {
        title: "Google Crash Course on Python",
        authority: "Coursera",
        link: PythonAutomation,
        body: "Introductory course on Python for beginners starting from scratch. The course began with the installation and introduction to the Python Interpreter, followed by variables, then data types and data structures. The course comprises of small tasks after each module which applied the skills gained from video lectures. Finally, the course ended with a WordCloud formation project."
    },
    {
        title: "AWS Capstone Project",
        authority: "GreatLearning",
        link: AWSP,
        body: "A guided project on how to host a static webpage/website using AWS Route53, VPC, and AppSync."
    },
    {
        title: "Apache Spark Basics",
        authority: "GreatLearning",
        link: Sparks,
        body: "Introduction and applications of Apache Spark."
    },
    {
        title: "Introduction to Deep Learning",
        authority: "GreatLearning",
        link: DL,
        body: "Architecture and working of a Deep Learning model."
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