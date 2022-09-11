import React from 'react';
import {Helmet} from "react-helmet";

import "./Projects.css"
import Card from '../Card/Card.jsx';

// Projects images
import Star_Wars from "../../../imgs/Img_Proyectos/Star_wars_blog.jpg"
import Buzzr_web from "../../../imgs/Img_Proyectos/Buzzr_web.jpg"

// Frontend Svg
import Html from "../Icons/Frontend/Html.jsx"
import Css from "../Icons/Frontend/Css.jsx"
import BootStrap from "../Icons/Frontend/BootStrap.jsx"
import JavaScript from "../Icons/Frontend/JavaScript.jsx"
import ReactSvg from "../Icons/Frontend/ReactSvg.jsx"
import Flux from "../Icons/Frontend/Flux.jsx"
import SocketIO from "../Icons/Frontend/SocketIO.jsx"

// Backend Svg
import Python from "../Icons/Backend/Python.jsx"
import Flask from "../Icons/Backend/Flask.jsx"
import Sql from "../Icons/Backend/Sql.jsx"
import SqlAlchemy from "../Icons/Backend/SqlAlchemy.jsx"
import RestApi from "../Icons/Backend/RestApi.jsx"

// Tools Svg
import ThunderClient from "../Icons/Tools/ThunderClient.jsx"
import VsCode from '../Icons/Tools/VsCode.jsx';

import { useTranslation } from "react-i18next";


const Projects = () => {
    const [t, i18next] = useTranslation("projects")

    const myProyects = [
        {
            img: Buzzr_web,
            alt: "Buzzr project",
            title: "BuzzrApp Web",
            description: t("cards.first.description"),
            button_url: "https://github.com/Jdvd01/buzzr-web",
            deploy_url: null,
            technologies: [<Html />, <Css />, <BootStrap />, 
            <JavaScript />, <ReactSvg />, <Flux />, <SocketIO />]
        },
        {
            img: "https://starwars-visualguide.com/assets/img/placeholder.jpg",
            alt: "Placeholder",
            title: "BuzzrApp Api",
            description: t("cards.second.description"),
            button_url: "https://github.com/Jdvd01/buzzr-api",
            deploy_url: null,
            technologies: [<Python />, <Flask />, <Sql />, 
            <ThunderClient />, <VsCode />, <SocketIO />, <SqlAlchemy /> ]
        },
        {
            img: Star_Wars,
            alt: "Star wars project",
            title: "Star wars blog",
            description: t("cards.third.description"),
            button_url: "https://github.com/Jdvd01/star-wars-blog",
            deploy_url: "https://star-wars-blog-nu.vercel.app/",
            technologies: [<Html />, <Css />, <BootStrap />, 
            <JavaScript />, <ReactSvg />, <Flux />, <RestApi color="0098FE"/>]
        },
        {
            img: "https://starwars-visualguide.com/assets/img/placeholder.jpg",
            alt: "Star wars img",
            title: "Star wars api",
            description: t("cards.fourth.description"),
            button_url: "https://github.com/Jdvd01/star-wars-api",
            deploy_url: null,
            technologies: [<Python />, <Flask />, <ThunderClient />, <RestApi color="0098FE"/>,
            , <Sql />, <SqlAlchemy />]
        }
        
    ]

    return (
        <div className='projects-container container'>
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <div className="row projects-container-row">
                {myProyects.map((project, index) => {
                    const {img, alt, title, description, button_url, deploy_url, technologies} = project
                    return(
                        <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 card-container mb-4">
                            <Card 
                            key={index}
                            index={index}
                            img={img}
                            alt={alt}
                            title={title}
                            technologies={technologies}
                            description={description}
                            button_url={button_url}
                            deploy_url={deploy_url}
                            section="projects"
                            />
                        </div>
                    )
                })}
                
            </div>
        </div>
    );
};

export default Projects;