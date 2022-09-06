import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div className='row about-me'>
            <div className='col-xl-2 col-lg-4 col-md-3 col-sm-4 col-12 img-container'>
                <img src="https://avatars.githubusercontent.com/u/97990022?s=400&u=198211576ca589ce60e75a85d07ce4454bba5e52&v=4" alt="Imagen de perfil" />
            </div>
            <div className='col-xl-10 col-lg-8 col-md-9 col-sm-8 col-12 info-container'>
                <h1>Hi <div className='hand'>👋🏽</div>, my name is</h1>
                <h2>José Velásquez.</h2>
                <h3>I'm Full-Stack Web Developer</h3>
                <p>
                    I'm Full-Stack Web Developer
                </p>
            </div>
            <div className='row more-about'>
                <div className='col-12 col-md-6 languages'>
                    <h3>
                        Languages:
                    </h3>
                    <ul>
                        <li><span className="numList">01.</span> Spanish: Native</li>
                        <li><span className="numList">02.</span> English: Medium</li>
                    </ul>
                </div>
                <div className='col-12 col-md-6 hobbies'>
                    <h3>
                        Hobbies:
                    </h3>
                    <ul>
                        <li><span className="numList">01.</span> Play videogames</li>
                        <li><span className="numList">02.</span> Read books</li>
                        <li><span className="numList">03.</span> Programming</li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default About;