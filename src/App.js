function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="text-4xl font-bold">Hello and welcome to React + TailwindCSS portfolio website</h1>
			</header>
			<main className="text-lg m-5 flex h-full align-middle">
				<ul className="list-inside">
					<p className="font-bold">Components to be included:</p>
					<li className="font-semibold">Responsive Navbar</li>
					<li className="font-semibold">
							Hero section
						<ul className="list-inside indent-4">
							<li>My domain name/s</li>
							<li>A short description</li>
							<li>My downloadable resume</li>
							<li>My Image</li>
						</ul>
					</li>
					<li className="font-semibold">Work Experience</li>
					<li className="font-semibold">
							Contact
						<ul className="indent-4">
							<li>Map using Leaflet to mark my presence/address</li>
							<li>Email Service</li>
							<li>Floating/Fixed buttons to my social media</li>
						</ul>
					</li>
					<li className="font-semibold">Education timeline</li>
					<li className="font-semibold">Projects</li>
					<li className="font-semibold">Skills</li>
					<li className="font-semibold">Testimonials and/or Recommendations (possibly fetched from LinkedIn)</li>
					<li className="font-semibold">Certifications and Participations</li>
					<li className="font-semibold">Outro and Salutations</li>
					<li className="font-semibold">Footer for &copy; copyright and licensing</li>
				</ul>
			</main>
		</div>
	);
}

export default App;
