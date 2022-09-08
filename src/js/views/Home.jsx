import React, { useContext, useState } from "react";
import "../../styles/home.css";
import About from "../component/About/About.jsx";

import { Context } from "../store/appContext";

export const Home = () => {
	const {store} = useContext(Context)

	return (
		<>
			<About />		
		</>

	)
}

