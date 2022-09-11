import React, { useContext, useState } from "react";
import {Helmet} from "react-helmet";
import "../../styles/home.css";


import About from "../component/About/About.jsx";

import { Context } from "../store/appContext";

export const Home = () => {
	const {store} = useContext(Context)

	return (
		<>
			<Helmet>
                <title>Portfolio</title>
            </Helmet>
			<About />		
		</>

	)
}

