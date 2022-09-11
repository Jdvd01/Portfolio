import React from 'react';

import "./Projects.css"
import Card from '../Card/Card.jsx';

// Projects images
import Star_Wars from "../../../imgs/Img_Proyectos/Star_wars_blog.jpg"
import Buzzr_web from "../../../imgs/Img_Proyectos/Buzzr_web.jpg"

// SVG
import ThunderClient from '../Icons/Tools/ThunderClient.jsx';


const Projects = () => {

    const projects = [
        {
            img: Star_Wars,
            alt: "Star wars project",
            title: "Star wars blog",
            description: "Blog de Star Wars hecho con React, react router DOM, arquitectura Flux, uso de Context",
            technologies: [

            ],
            button_url: "https://github.com/Jdvd01/star-wars-blog",
            deploy_url: "https://star-wars-blog-nu.vercel.app/"
        },
        {
            img: Buzzr_web,
            alt: "Buzzr project",
            title: "BuzzrApp",
            description: "Hola ",
            button_url: "https://github.com/Jdvd01/buzzr-web",
            deploy_url: null
        }
    ]

    return (
        <div className='projects-container'>
            <div className="row m-0">
                {projects.map((project, index) => {
                    const {img, alt, title, description, button_url, deploy_url} = project
                    return(
                        <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <Card 
                            key={index} 
                            img={img}
                            alt={alt}
                            title={title}
                            description={description}
                            button_url={button_url}
                            deploy_url={deploy_url}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Projects;