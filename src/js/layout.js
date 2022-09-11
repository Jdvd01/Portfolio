import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

// Components
import { Home } from "./views/Home.jsx";
import { Navbar } from "./component/Navbar/Navbar.jsx";
import { Footer } from "./component/Footer/Footer.jsx";
import Skills from "./component/Skills/Skills.jsx";
import Projects from "./component/Projects/Projects.jsx";
import Work from "./component/Work/Work.jsx";
import Contact from "./component/Contact/Contact.jsx";

// Translations
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import about_es from "../Translations/es/about.json"
import about_en from "../Translations/en/about.json"
import skills_es from "../Translations/es/skills.json"
import skills_en from "../Translations/en/skills.json"
import projects_es from "../Translations/es/projects.json"
import projects_en from "../Translations/en/projects.json"
import card_es from "../Translations/es/card.json"
import card_en from "../Translations/en/card.json"

i18next.init({
	interpolation: { escapeValue: false },
	lng: "es",
	resources: {
		es: {
			about: about_es,
			skills: skills_es,
			projects: projects_es,
			card: card_es
		},
		en: {
			about: about_en,
			skills: skills_en,
			projects: projects_en,
			card: card_en
		}
	}
})

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<>
			<BrowserRouter basename={basename}>
				<I18nextProvider i18n={i18next}>
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
				</I18nextProvider>
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);
