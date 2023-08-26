import HeroImage from "../assets/images/hero-img.png"
import { BiSolidMapPin } from "react-icons/bi"
import { BsClipboard2DataFill, BsDatabaseFillGear } from "react-icons/bs"

import { FaUniversity } from "react-icons/fa"

const Hero = () => {
    return (
        <div className="hero-container my-10 md:flex flex-grow-1 justify-center items-center w-full md:justify-between">
            <div className="left p-10 md:w-7/12 ring-yellow-300 md:ring-dashed md:ring-4 rounded-lg">
                <h1 className="my-3 flex text-4xl capitalize font-bold">
                    I'm a Data Analyst <span className="hidden md:block"><BsDatabaseFillGear /></span>
                </h1>
                <p className="my-3 w-lg text-justify min-w-fit text-slate-400 hover:text-slate-100 cursor-pointer transition-colors duration-300">
                    Hey there! I'm glad you chose to visit my website. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis odio iste consequatur est, minima esse doloribus in pariatur, cupiditate incidunt. Blanditiis est, doloribus inventore sapiente repellendus iure excepturi reprehenderit?
                </p>
                <div className="my-3 location flex items-center text-white text-opacity-50 cursor-pointer">
                    <span className="location-icon mr-2">
                        <FaUniversity />
                    </span>
                    <p className="location-text">
                        Dublin City University, Dublin, Ireland
                    </p>
                </div>
                <button className="px-3 py-2 ring-2 hover:ring-slate-200 rounded-xl hover:bg-gradient-to-l hover:from-cyan-950 hover:to-slate-900 hover:ring-2 transition-all duration-300">Contact Me</button>
            </div>
            <div className="right p-10 md:w-5/12">
                <div className="img-bg-box bg-slate-700 rounded-t-full h-full">
                    <img className="img w-full" src={HeroImage} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Hero