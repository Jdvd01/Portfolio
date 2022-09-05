import React, { useState, useContext } from "react";

import "./Navbar.css"
import { Link } from "react-router-dom";

export const Navbar = () => {

	const [scrolling, setScrolling] = useState(true)
	const [position, setPosition] = useState()

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
				<Link className="navbar-brand" to={"/"}>Navbar</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<i className="fa-solid fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav text-start">
						<Link className="nav-link" to={"/"}><span className="numList">01.</span> About</Link>
						<Link className="nav-link" to={"/"}><span className="numList">02.</span> Experience</Link>
						<Link className="nav-link" to={"/"}><span className="numList">03.</span> Work</Link>
						<Link className="nav-link" to={"/"}><span className="numList">04.</span> Contact</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
