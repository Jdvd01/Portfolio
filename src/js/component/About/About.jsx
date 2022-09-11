import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div className='row about-me'>
            <div className='col-xl-2 col-lg-4 col-md-3 col-sm-4 col-12 img-container'>
                <img src="https://avatars.githubusercontent.com/u/97990022?s=400&u=198211576ca589ce60e75a85d07ce4454bba5e52&v=4" alt="Imagen de perfil" />
            </div>
            <div className='col-xl-10 col-lg-8 col-md-9 col-sm-8 col-12 info-container'>
                <h1>Hola <div className='hand'>👋🏽</div>, mi nombre es</h1>
                <h2>José Velásquez.</h2>
                <h3>Soy Desarrollador web full stack.</h3>
                <p>
                    Desde pequeño siempre me ha interesado el mundo tecnologico, 
                    en primaria aprendi lo basico de HTML y en la universidad estudie lo basico de C++ y Java,
                    y ahora me dedico al desarrollo web ✌🏽😎.
                </p>
            </div>
            <div className='row more-about'>
                <div className='col-12 col-sm-6 col-md-6 col-lg-6 languages'>
                    <h3>
                        Idiomas:
                    </h3>
                    <ul>
                        <li><span className="numList">01.</span> Español: Nativo</li>
                        <li><span className="numList">02.</span> Inglés: Medio</li>
                    </ul>
                </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-6 hobbies'>
                    <h3>
                        Pasatiempos:
                    </h3>
                    <ul>
                        <li><span className="numList">01.</span> Jugar a videojuegos</li>
                        <li><span className="numList">02.</span> Leer libros</li>
                        <li><span className="numList">03.</span> Programar</li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default About;