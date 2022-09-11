import React, { useState } from "react";

import "./Navbar.css"
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

export const Navbar = () => {
	const [scrolling, setScrolling] = useState(true)
	const [position, setPosition] = useState()
	const [isClicked, setIsClicked] = useState(false)

    const [t, i18next] = useTranslation("navbar")

	const isScroll = (position) => {
		if (window.scrollY < position || window.scrollY == 0) {
			setScrolling(true)
		} else {
			setScrolling(false)
		}
	}

	window.onscroll = function () {
		setPosition(window.scrollY);
		isScroll(position)
	};

	return (
		<nav className={`navbar navbar-expand-lg ${scrolling ? "scrolling" : ""}`}>
			<div className="container-fluid">
				<div className="d-flex">
					<Link className="navbar-brand" to={"/"}>
						<img src="https://avatars.githubusercontent.com/u/97990022?s=400&u=198211576ca589ce60e75a85d07ce4454bba5e52&v=4" alt="Imagen de perfil" />
					</Link>

					{/* Upcoming */}
					
					{/* <div className="flag">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" alt="" />
					</div> */}
				</div>
				<button className={`navbar-toggler navButton ${isClicked ? "close" : "open"}`} 
				type="button" 
				data-bs-toggle="collapse" 
				data-bs-target="#navbarNavAltMarkup" 
				aria-controls="navbarNavAltMarkup" 
				aria-expanded="false" 
				aria-label="Toggle navigation"
				onClick={() => setIsClicked((prev) => !prev)}
				>
					<div></div>
					<div></div>
					<div></div>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav text-start">
						<Link className="nav-link" to={"/"}><span className="numList">01.</span> {t("menu.about")}</Link>
						<Link className="nav-link" to={"/skills"}><span className="numList">02.</span> {t("menu.skills")}</Link>
						<Link className="nav-link" to={"/projects"}><span className="numList">03.</span> {t("menu.projects")}</Link>
						<Link className="nav-link" to={"/work"}><span className="numList">04.</span> {t("menu.work")}</Link>
						<Link className="nav-link" to={"/contact"}><span className="numList">05.</span> {t("menu.contact")}</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
