import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div className='row about-me'>
            <div className='col-lg-2 col-md-3 col-sm-4 col-12 my-4 img-container'>
                <img src="https://avatars.githubusercontent.com/u/97990022?s=400&u=198211576ca589ce60e75a85d07ce4454bba5e52&v=4" alt="Imagen de perfil" />
            </div>
            <div className='col-lg-9 col-md-9 col-sm-8 col-12 info-container'>
                <h1>Hola <div className='hand'>👋🏽</div>, mi nombre es</h1>
                <h2>José Velásquez.</h2>
                <h3>I'm Full-Stack web developer</h3>
                <p>
                    Soy Desarrollador web full stack
                </p>
            </div>
        </div>

    );
};

export default About;