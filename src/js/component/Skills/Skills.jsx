import React from 'react';
import {Helmet} from "react-helmet";

import "./Skills.css"

import FrontendSkills from './FrontendSkills.jsx';
import BackendSkills from './BackendSkills.jsx';
import Tools from './Tools.jsx';
import SoftSkills from './SoftSkills.jsx';

const Skills = () => {
    return (
        <div className='skills'>
            <Helmet>
                <title>Skills</title>
            </Helmet>
            <div className='container container-skills row'>
                <FrontendSkills />
                <BackendSkills />
                <Tools />
                <SoftSkills />
                
            </div>
        </div>
    );
};

export default Skills;