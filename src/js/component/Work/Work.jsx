import React from 'react';
import Card from '../Card/Card.jsx';

import "./Work.css"

const Work = () => {

    const professionalExperience = [
        {
            img: "https://play-lh.googleusercontent.com/4r8YvH3eLH2Q_U4hGz6aBHihLqjgFl06w-suyesqtFPL9xQnqhRKxE1_JEhNc9yj6Q=w240-h480-rw",
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
            img: "https://4geeks.com/static/images/4geeks.png",
            alt: "Logo 4Geeks Academy",
            title: "4Geeks Academy",
            description: [
                "Corrección de proyectos de los alumnos.",
                "Ayudar a los alumnos a adaptarse y aprender.",
                "Apoyar a los alumnos en el proceso de aprendizaje."
            ],
            button: {
                url: "https://4geeksacademy.com/",
                description: "Pagina web"
            }
        }
    ]

    return (
        <>
            <div className="work-container container">
                <h1>Experiencia profesional:</h1>
                <div className='row'>
                    {professionalExperience.map((item, index) => {
                        const { alt, description, img, button, title } = item
                        return (
                            <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-6 card-container">
                                <Card
                                    key={index}
                                    alt={alt}
                                    description={description}
                                    img={img}
                                    button={button}
                                    title={title}
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