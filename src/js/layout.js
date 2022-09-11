import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";
import { Home } from "./views/Home.jsx";
import { Navbar } from "./component/Navbar/Navbar.jsx";
import { Footer } from "./component/Footer/Footer.jsx";
import Skills from "./component/Skills/Skills.jsx";
import Projects from "./component/Projects/Projects.jsx";
import Work from "./component/Work/Work.jsx";
import Contact from "./component/Contact/Contact.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/work" element={<Work />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<h1>Not found!</h1>} /> 
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);
