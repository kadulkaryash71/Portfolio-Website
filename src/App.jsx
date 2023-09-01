import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import WorkEx from "./components/WorkEx";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Participations from "./components/Participations";
import Contact from "./components/Contact";

import Footer from "./components/Footer";

import { FaArrowUp } from "react-icons/fa";


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<main className="text-lg p-5 h-full justify-evenly items-center bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
				<Hero />
				<Education />
				<WorkEx />
				<Projects />
				<Skills />
				<Participations />
				<Contact />
				<ul className="list-inside">
					<p className="font-bold">Components to be included:</p>
					<li id="recommendations" className="font-semibold">Testimonials and/or Recommendations (possibly fetched from LinkedIn)</li>
					<li className="font-semibold">Outro and Salutations</li>
					<li className="font-semibold">Sticky Navbar with reduced opacity</li>
				</ul>
			</main>
			<a href="#" id="backtotop" className="p-4 m-4 w-fit z-50 fixed bottom-0 right-0 text-xl rounded-full bg-slate-600 text-slate-900 opacity-80 ring-white transition duration-300 hover:opacity-100 hover:ring-2">
				<FaArrowUp color="white" />
			</a>
			<Footer />
		</div>
	);
}

export default App;
