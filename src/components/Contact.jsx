import React from 'react';
import { FaDev, FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { SiHashnode, SiLetterboxd } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import Map from "./Map";


function Contact() {

    return (
        <div id="contact" className="my-4">
            <h2 className="mt-6 text-3xl font-bold">Contact</h2>
            <div className="w-full flex flex-col-reverse md:items-center md:flex-row">
                <div className="left md:w-1/2 w-full p-5 flex flex-col-reverse md:flex-col rounded-full">
                    <p className="m-4 text-center italic">You can find me roaming around here on a random sunny day!</p>
                    <Map />
                </div>
                <div className="md:w-1/2 right p-5">
                    <div className="heading">
                        <h3 className="text-4xl text-blue-400 font-bold capitalize">Feel free to drop a message here</h3>
                        <p className="subtitle my-1 text-lg text-white cursor-pointer transition-all duration-300 hover:text-blue-200 italic">I would like to hear from you! Go on, drop a message for me below :D</p>
                    </div>
                    <form action="" className="w-full text-slate-950 text-lg">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            className="w-full my-2 bg-opacity-0 rounded-xl transition-all duration-300 focus:ring-4"
                        />
                        <input
                            type="text"
                            name="subject"
                            id="Subject"
                            placeholder="Type a Subject"
                            className="w-full my-2 bg-opacity-0 rounded-xl  transition-all duration-300 focus:ring-4"
                        />
                        <textarea
                            name="message"
                            id="message"
                            rows="10"
                            placeholder="Write your message..."
                            className="w-full h-full my-2 p-2 rounded-xl text-base transition-all duration-300 focus:ring-4"
                        >
                        </textarea>
                    </form>
                    <div className="social-media-icons flex flex-wrap justify-center md:justify-start text-2xl">
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="https://www.linkedin.com/in/yash-kadulkar-b0a877196/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </div>
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="https://www.github.com/kadulkaryash71/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        </div>
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="https://dev.to/kadulkaryash71" target="_blank" rel="noopener noreferrer"><FaDev /></a>
                        </div>
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="https://hashnode.com/@kadulkaryash71" target="_blank" rel="noopener noreferrer"><SiHashnode /></a>
                        </div>
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="https://www.youtube.com/channel/UCpbcjE30ZYl2ZNBBSADmj_A" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        </div>
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="https://twitter.com/kadulkaryash71" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        </div>
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="https://letterboxd.com/niceguy21/" target="_blank" rel="noopener noreferrer"><SiLetterboxd /></a>
                        </div>
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="https://www.facebook.com/profile.php?id=100004466386662" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        </div>
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="mailto:yashkadulkar@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social-media-icons fixed right-0 bottom-1/2 rounded-l-2xl text-center bg-gray-800 ring-slate-200 opacity-30 translate-y-1/2 transition-all duration-300 hover:opacity-70 hover:ring-2">
                <div className="social-icon p-3 cursor-pointer transition-all duration-300 hover:scale-125">
                    <a target="_blank" rel="noopener noreferrer" href="mailto:yashkadulkar@gmail.com"><MdEmail /></a>
                </div>
                <div className="social-icon p-3 cursor-pointer transition-all duration-300 hover:scale-125">
                    <a target="_blank" rel="noopener noreferrer" href="https://wa.me/918652180053?text='Hey%20there!%20I%20followed%20your%20WhatsApp%20link%20through%20your%20website%20to%20connect%20with%20you%20faster.%20I%20have%20a%20question%20regarding....'"><FaWhatsapp /></a>
                </div>
                <div className="social-icon p-3 cursor-pointer transition-all duration-300 hover:scale-125">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yash-kadulkar-b0a877196/"><FaLinkedin /></a>
                </div>
                <div className="social-icon m-0 p-3 cursor-pointer transition-all duration-300 hover:scale-125">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/kadulkaryash71"><FaGithub /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact