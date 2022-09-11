import React from 'react';

// Soft skills Svg
import Responsability from "../Icons/SoftSkills/Responsability.jsx"
import Problem_Solving from "../Icons/SoftSkills/Problem_Solving.jsx"
import TeamWork from "../Icons/SoftSkills/TeamWork.jsx"

const SoftSkills = () => {
    return (
        <div className="soft-skills-container col-sm-12 col-md-6 col-lg-6">
            <div className="row">
                <h3 className='skills-title'>Habilidades blandas</h3>
                <div className="col-6 col-sm-6 soft-center">
                    <div className='soft-skill'>
                        <Responsability />
                    </div>
                    Responsable
                </div>
                <div className="col-6 col-sm-6 soft-center">
                    <div className='soft-skill'>
                        <Problem_Solving />
                    </div>
                    Resolucion de problemas
                </div>
                <div className='col-12 soft-center'>
                    <div style={{ width: "60px" }}>
                        <TeamWork />
                    </div>
                    Trabajo en equipo
                </div>
            </div>
        </div>
    );
};

export default SoftSkills;