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

// About translation
import about_es from "../Translations/es/about.json"
import about_en from "../Translations/en/about.json"
// Skills Translation
import skills_es from "../Translations/es/skills.json"
import skills_en from "../Translations/en/skills.json"
// Projects Translation
import projects_es from "../Translations/es/projects.json"
import projects_en from "../Translations/en/projects.json"
// Card Translation
import card_es from "../Translations/es/card.json"
import card_en from "../Translations/en/card.json"
// Contact Translation
import contact_es from "../Translations/es/contact.json"
import contact_en from "../Translations/en/contact.json"
// Work Translation
import work_es from "../Translations/es/work.json"
import work_en from "../Translations/en/work.json"
// Navbar Translation
import navbar_es from "../Translations/es/navbar.json"
import navbar_en from "../Translations/en/navbar.json"
// Footer Translation
import footer_es from "../Translations/es/footer.json"
import footer_en from "../Translations/en/footer.json"


i18next.init({
	interpolation: { escapeValue: false },
	lng: "es",
	resources: {
		es: {
			about: about_es,
			skills: skills_es,
			projects: projects_es,
			card: card_es,
			contact: contact_es,
			work: work_es,
			navbar: navbar_es,
			footer: footer_es
		},
		en: {
			about: about_en,
			skills: skills_en,
			projects: projects_en,
			card: card_en,
			contact: contact_en,
			work: work_en,
			navbar: navbar_en,
			footer: footer_en
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
