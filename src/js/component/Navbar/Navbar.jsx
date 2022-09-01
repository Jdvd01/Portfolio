import React from "react";

import "./Navbar.css"
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Navbar</a>
				<div>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<Link className="nav-link" to={"/"}>01. About</Link>
							<Link className="nav-link" to={"/"}>02. Experience</Link>
							<Link className="nav-link" to={"/"}>03. Work</Link>
							<Link className="nav-link" to={"/"}>04. Contact</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
