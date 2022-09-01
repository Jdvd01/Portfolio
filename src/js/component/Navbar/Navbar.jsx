import React, { useState, useContext } from "react";

import "./Navbar.css"
import { Link } from "react-router-dom";

export const Navbar = () => {

	const [scrolling, setScrolling] = useState(false)
	const [position, setPosition] = useState()

	const isScroll = (position) => {
		if(window.scrollY == 0){
			setScrolling(true)
		}
		if(window.scrollY < position){
			setScrolling(true)
		}else{
			setScrolling(false)
		}
	}

	window.onscroll = function() {
		setPosition(window.scrollY);
		isScroll(position)
	};

	return (
		<nav className={`navbar navbar-expand-lg ${scrolling ? "sobre" : "nosobre"}`}>
			<div className="container-fluid">
				<Link className="navbar-brand text-start" to={"/"}>Navbar</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<i className="fa-solid fa-bars"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav text-start">
							<Link className="nav-link" to={"/"}>01. About</Link>
							<Link className="nav-link" to={"/"}>02. Experience</Link>
							<Link className="nav-link" to={"/"}>03. Work</Link>
							<Link className="nav-link" to={"/"}>04. Contact</Link>
						</div>
					</div>
				
			</div>
		</nav>
	);
};
