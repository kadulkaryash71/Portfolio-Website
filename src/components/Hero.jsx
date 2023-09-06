import ReactTyped from "react-typed";
import HeroImage from "../assets/images/hero-img.png";
import { FaUniversity } from "react-icons/fa";

const Hero = () => {

    const roles = ["a Full-stack Web Developer", "a data analyst", "a freelancer",  "a negotiator", "a leader"];

    return (
        <div className="hero-container my-10 md:flex flex-grow-1 justify-center items-center w-full md:justify-between">
            <div className="left p-10 md:w-7/12 ring-yellow-300 md:ring-dashed md:ring-4 rounded-lg">
                <h1 className="my-3 text-4xl font-bold">
                    I am <span className="font-display text-blue-300 rounded-lg cursor-pointer transition-all duration-300 ring-blue-200 hover:px-2 hover:text-white hover:ring-2">Yash Kadulkar</span>
                </h1>
                <h3 className="my-3 flex text-2xl capitalize font-bold italic">
                    <span className="text-yellow-500"><ReactTyped strings={roles} typeSpeed={50} loop /></span>
                </h3>
                <p className="my-3 w-lg text-justify min-w-fit text-slate-400 hover:text-slate-100 cursor-pointer transition-colors duration-300">
                    Hi there, mate! I'm glad you chose to visit my website. To introduce myself, I hail from India and currently living in Dublin, Ireland to pursue Master's in Data Analytics. A long list of skill set is not convincing enough when you are looking for a service man for your job, it's the personal touch that compels you the most. Go ahead. Have a look at my background and decide if I suit your needs. 
                </p>
                <div className="my-3 location flex items-center text-white text-opacity-50 cursor-pointer">
                    <span className="location-icon mr-2">
                        <FaUniversity />
                    </span>
                    <p className="location-text transition-all duration-300 hover:text-white">
                        Dublin City University, Dublin, Ireland
                    </p>
                </div>
                <a href="#contact" className="my-3 px-3 py-2 ring-2 hover:ring-slate-200 rounded-xl hover:bg-gradient-to-l hover:from-cyan-950 hover:to-slate-900 hover:ring-2 transition-all duration-300">Contact Me</a>
            </div>
            <div className="right p-10 md:w-5/12">
                <div className="img-bg-box bg-slate-700 rounded-t-full h-full">
                    <img className="img w-full" src={HeroImage} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Hero;