import React from 'react';

import "./Projects.css"
import Card from '../Card/Card.jsx';

// Projects images
import Star_Wars from "../../../imgs/Img_Proyectos/Star_wars_blog.jpg"

const Projects = () => {

    const projects = [
        {
            img: Star_Wars,
            alt: "Star wars project",
            title: "Star wars blog",
            description: "Hola ",
            button_url: "https://github.com/Jdvd01/star-wars-blog",
            deploy_url: "https://star-wars-blog-nu.vercel.app/"
        },
        // {
        //     img: Star_Wars,
        //     alt: "Star wars project",
        //     title: "Star wars blog",
        //     description: "Hola ",
        //     button_url: "https://github.com/Jdvd01/star-wars-blog",
        //     deploy_url: null
        // }
    ]

    return (
        <div className='projects-container'>
            {projects.map((project, index) => {
                const {img, alt, title, description, button_url, deploy_url} = project
                return(
                    <Card 
                    key={index} 
                    img={img}
                    alt={alt}
                    title={title}
                    description={description}
                    button_url={button_url}
                    deploy_url={deploy_url}
                    />
                )
            })}
        </div>
    );
};

export default Projects;