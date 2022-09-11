import React, { Component } from "react";

import "./Footer.css"
import ReactSvg from "../Icons/Frontend/ReactSvg.jsx";

export const Footer = () => (
	<footer className="footer mt-auto py-2 text-center">
		<p>
			Hecho con <span className="react-logo"><ReactSvg /></span> por <a href="https://github.com/jdvd01" target={"_blank"}>José Velásquez</a>
		</p>
		<hr />
		<div className="icons">
			<a href="https://github.com/Jdvd01" target={"_blank"} className="icon-anchor">
				<i className="fa-brands fa-github  col-1"></i>
			</a>
			<a href="https://instagram.com/josevelasquez010" target={"_blank"} className="icon-anchor">
				<i className="fa-brands fa-instagram  col-1"></i>
			</a>
			<a href="https://www.linkedin.com/in/jdvd01/" target={"_blank"} className="icon-anchor">
				<i className="fa-brands fa-linkedin-in  col-1"></i>
			</a>
			<a href="mailto:velasquezdenorajose@gmail.com" target={"_blank"} className="icon-anchor">
				<i className="fa-regular fa-envelope col-1"></i>
			</a>
		</div>
	</footer>
);
