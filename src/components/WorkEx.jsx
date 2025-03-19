import React from 'react';
import CloudKakshaa from "../assets/icons/CloudKakshaa-logo.jpeg";
import ITSA from "../assets/icons/ITSA-logo.jpeg";
import CSI from "../assets/icons/CSI-logo.jpeg";
import TSF from "../assets/icons/TheSparksFoundation.jpeg";
import Insight from "../assets/icons/insight_centre_for_data_analytics_logo.jpeg";


const WorkEx = () => {

    const workTimelineEl = [
        {
            periodFrom: "July 2024",
            periodTo: "March 2025",
            company: "Insight - SFI Research Centre for Data Analytics",
            companyLogo: Insight,
            active: true,
            location: "On-site",
            role: "Software Developer",
            desc: "At Insight, I'm developing an ed-tech platform that gamifies spelling quizzes for primary students. I designed the database and built a scalable backend with Django, using HTMX and React for dynamic interactions. The platform leverages GPT-4o for personalized quiz recommendations, enhancing adaptive learning for teachers and students.",
            enableButton: false,
            buttonText: "View Experience Letter",
            buttonIcon: "",
            buttonLink: ""
        },
        {
            periodFrom: "September 2023",
            periodTo: "October 2023",
            company: "The Sparks Foundation",
            companyLogo: TSF,
            active: false,
            location: "Remote",
            role: "Data Science Intern",
            desc: "The internship aims to build a network of graduates on LinkedIn through mentoring and peer review programme called Graduate Rotational Internship Training (GRIP). Stock Market Prediction using Python was a system developed using a Convolutional Neural Network. It successfully achieved 96% accuracy in prediction of any stock's closing price.",
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
            desc: "CloudKakshaa was a platform web-based platform developed under Teach For India for the underprivileged children from government schools of India who lacked access to education because of lockdown during the COVID-19 pandemic. Converting text-based content to web-viewable content, maintaining PhpMyAdmin, generating assessment forms, and brainstorming new features for the system were some of the prominent responsibilites of this role.",
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
            desc: "By upholding a high professional standard among its members, the Information Technology Students Association (ITSA) works to enhance the practice and use of information technology and cutting-edge technology. A typical ITSA employee's job is to handle all of the technical details of any event that is organized, whether it is online or offline. All of its members share in the duties, which fosters cooperation; striving for a seamless flow of an event.",
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
            role: "Assistant Webmaster",
            desc: "Jointly developed a website for CSI-VIT as a team of 4 members. The platform showed upcoming events organised by the committee. Ease of registration and information flow were the primary goals of this website. HTML5, TailwindCSS, Bootstrap, CSS3, JavaScript, and Node.js were largely used in its development.",
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
        <div id="experience" className="md:w-7/12">
            <h2 className="text-3xl font-bold">Experience</h2>
            <ol className="relative border-l mx-5 my-2 py-3 border-gray-200 dark:border-gray-700">
                {workTimelineEl.map((item, index) =>
                    <li key={index} className="mb-10 ml-9 md:w-5/6">
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
                        {item.enableButton && <a href={item.buttonLink} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-3.5 h-3.5 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
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