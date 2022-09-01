import React, { Component } from "react";
import { Link } from "react-router-dom";


import "./Footer.css"

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by <a href="https://github.com/jdvd01" target={"_blank"}>Jose Velasquez</a>
		</p>
		<hr />
		<div className="row iconos">
			<Link to={""} className="col-1">
				<i className="fa-brands fa-github "></i>
			</Link>
			<Link to={""} className="col-1">
				<i className="fa-brands fa-instagram "></i>
			</Link>
			<Link to={""} className="col-1">
				<i className="fa-brands fa-linkedin-in "></i>
			</Link>
		</div>
	</footer>
);
