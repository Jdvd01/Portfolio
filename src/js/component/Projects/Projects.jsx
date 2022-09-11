import React from 'react';

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
import Git from "../Icons/Tools/Git.jsx"
import Github from "../Icons/Tools/Github.jsx"
import VS_Code from "../Icons/Tools/VsCode.jsx"
import SCRUM from "../Icons/Tools/Scrum.jsx"
import ThunderClient from "../Icons/Tools/ThunderClient.jsx"

const Projects = () => {

    const myProyects = [
        {
            img: Star_Wars,
            alt: "Star wars project",
            title: "Star wars blog",
            description: "Blog de Star Wars hecho con React",
            button_url: "https://github.com/Jdvd01/star-wars-blog",
            deploy_url: "https://star-wars-blog-nu.vercel.app/",
            technologies: [<Html />, <Css />, <BootStrap />, 
            <JavaScript />, <ReactSvg />, <Flux />, <RestApi color="FFFFFF"/>, <ThunderClient />]
        },
        {
            img: Buzzr_web,
            alt: "Buzzr project",
            title: "BuzzrApp",
            description: "Proyecto final para 4Geeks Academy, BuzzrApp es una aplicacion de mensajeria hecha con Socket.IO",
            button_url: "https://github.com/Jdvd01/buzzr-web",
            deploy_url: null,
            technologies: [<Html />, <Css />, <BootStrap />, 
            <JavaScript />, <ReactSvg />, <Flux />, <SocketIO />]
        }
    ]

    return (
        <div className='projects-container container'>
            <div className="row projects-container-row">
                {myProyects.map((project, index) => {
                    const {img, alt, title, description, button_url, deploy_url, technologies} = project
                    return(
                        <div key={index} className="col-12 col-sm-12 col-md-12 col-lg-6 card-container mb-4">
                            <Card 
                            key={index} 
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