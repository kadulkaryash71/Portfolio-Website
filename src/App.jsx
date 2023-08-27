import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<main className="text-lg p-5 h-full justify-evenly items-center bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
				<Hero />
				<Education />
				<ul className="list-inside">
					<p className="font-bold">Components to be included:</p>
					<li className="font-semibold">Work Experience</li>
					<li id="projects" className="font-semibold">Projects</li>
					<li id="skills" className="font-semibold">Skills</li>
					<li id="recommendations" className="font-semibold">Testimonials and/or Recommendations (possibly fetched from LinkedIn)</li>
					<li className="font-semibold">Certifications and Participations</li>
					<li id="contact" className="font-semibold">
						Contact
						<ul className="indent-4">
							<li>Map using Leaflet to mark my presence/address</li>
							<li>Email Service</li>
							<li>Floating/Fixed buttons to my social media</li>
						</ul>
					</li>
					<li className="font-semibold">Outro and Salutations</li>
					<li className="font-semibold">Footer for &copy; copyright and licensing</li>
				</ul>
			</main>
		</div>
	);
}

export default App;
