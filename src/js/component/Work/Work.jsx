import React from 'react';
import Card from '../Card/Card.jsx';

import "./Work.css"

// Work images
import Four_Geeks from "../../../imgs/Work/4Geeks_logo.png"
import Farmatodo from "../../../imgs/Work/Farmatodo.png"

const Work = () => {

    const professionalExperience = [
        {
            img: Farmatodo,
            alt: "Logo Farmatodo",
            title: "Farmatodo C.A.",
            description: [
                "Mantener la tienda completamente abastecida.",
                "Mantenerme al corriente de la información sobre los productos.",
                "Atención al cliente."
            ],
            button: {
                url: "https://www.farmatodo.com.ve/",
                description: "Pagina web"
            }
        },
        {
            img: Four_Geeks,
            alt: "Logo 4Geeks Academy",
            title: "4Geeks Academy",
            description: [
                "Corrección de proyectos de los alumnos.",
                "Ayudar a los alumnos a adaptarse y aprender.",
                "Apoyar a los alumnos en el proceso de aprendizaje."
            ],
            button_url: "https://4geeksacademy.com/",
        }
    ]

    return (
        <>
            <div className="work-container container">
                <h1 className='work-header'><i className="fas fa-briefcase"></i> Experiencia profesional:</h1>
                <div className='row'>
                    {professionalExperience.map((item, index) => {
                        const { alt, description, img, button_url, title } = item
                        return (
                            <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-6 card-container">
                                <Card
                                    key={index}
                                    alt={alt}
                                    description={description}
                                    img={img}
                                    button_url={button_url}
                                    title={title}
                                    section="work"
                                />
                            </div>

                        )
                    })}
                </div>

            </div>
        </>
    );
}

export default Work; Work