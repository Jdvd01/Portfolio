import React from 'react';
import "./Skills.css"

// Frontend images
import HTML from "../../../imgs/Icons-Portfolio/Frontend/HTML.png"
import CSS from "../../../imgs/Icons-Portfolio/Frontend/CSS.png"
import BootStrap from "../../../imgs/Icons-Portfolio/Frontend/BootStrap.png"
import JavaScript from "../../../imgs/Icons-Portfolio/Frontend/JavaScript.png"
import ReactJS from "../../../imgs/Icons-Portfolio/Frontend/React.png"
import Flux from "../../../imgs/Icons-Portfolio/Frontend/Flux.png"

// Backend images
import Python from "../../../imgs/Icons-Portfolio/Backend/Python.png"
import Flask from "../../../imgs/Icons-Portfolio/Backend/Flask.png"
import SQL from "../../../imgs/Icons-Portfolio/Backend/SQL.png"
import SQL_Alchemy from "../../../imgs/Icons-Portfolio/Backend/SQL-Alchemy.png"
import Rest_API from "../../../imgs/Icons-Portfolio/Backend/REST-API.png"

// Tools images
import Git from "../../../imgs/Icons-Portfolio/Tools/Git.png"
import Github from "../../../imgs/Icons-Portfolio/Tools/Github.png"
import VS_Code from "../../../imgs/Icons-Portfolio/Tools/VS-Code.png"
import SCRUM from "../../../imgs/Icons-Portfolio/Tools/SCRUM.png"
import Thunder_Client from "../../../imgs/Icons-Portfolio/Tools/Thunder-Client.png"

// Soft skills images
import Responsability from "../../../imgs/Icons-Portfolio/Soft-Skills/Responsability.png"
import Problem_Solving from "../../../imgs/Icons-Portfolio/Soft-Skills/Problem_Solving.png"
import Team_Work from "../../../imgs/Icons-Portfolio/Soft-Skills/Team_Work.png"

const Skills = () => {
    return (
        <div className='skills'>
            <div className='container container-skills row'>
                <div className="frontend col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className='row'>
                        <h3 className='skills-title'>Frontend</h3>
                        <div className="col-6 col-md-4">
                            <figure className='frontend-technology'>
                                <img src={HTML} alt="HTML 5" />
                                <figcaption>HTML 5</figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-md-4">
                            <figure className='frontend-technology'>
                                <img src={CSS} alt="CSS 3" />
                                <figcaption>CSS 3</figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-md-4">
                            <figure className='frontend-technology bootstrap'>
                                <img src={BootStrap} alt="BootStrap" />
                                <figcaption>BootStrap</figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-md-4">
                            <figure className='frontend-technology javascript'>
                                <img src={JavaScript} alt="JavaScript" />
                                <figcaption>JavaScript</figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-md-4">
                            <figure className='react'>
                                <img src={ReactJS} alt="ReactJS" className='react-img' />
                                <figcaption>React</figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-md-4">
                            <figure className='flux'>
                                <img src={Flux} alt="Flux" className='flux-img'/>
                                <figcaption>Flux</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="backend col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className='row'>
                        <h3 className='skills-title'>Backend</h3>
                        <div className="col-6 col-md-4">
                            <figure className="backend-technology">
                                <img src={Python} alt="Python" />
                                <figcaption>Python</figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-md-4">
                            <figure className="backend-technology flask">
                                <img src={Flask} alt="Flask" />
                                <figcaption>Flask</figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-md-4">
                            <figure className="backend-technology">
                                <img src={SQL} alt="SQL" />
                                <figcaption>SQL</figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-md-5">
                            <figure className="backend-technology sql_alchemy">
                                <img src={SQL_Alchemy} alt="SQL Alchemy" />
                                <figcaption>SQL Alchemy</figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-md-5">
                            <figure className="backend-technology rest_api">
                                <img src={Rest_API} alt="Rest Api" />
                                <figcaption>REST_API</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="tools-container col-sm-12 col-md-6 col-lg-6">
                    <div className="row">
                        <h3 className='skills-title'>Herramientas</h3>
                        <div className="col-6 col-md-4">
                            <figure className="tool">
                                <img src={VS_Code} alt="VS Code" />
                                <figcaption>VS Code</figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-md-4">
                            <figure className="tool">
                                <img src={Git} alt="Git" />
                                <figcaption>Git</figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-md-4">
                            <figure className="tool">
                                <img src={Github} alt="Github" />
                                <figcaption>Github</figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-md-4">
                            <figure className="tool">
                                <img src={SCRUM} alt="SCRUM" />
                                <figcaption>SCRUM</figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-md-4">
                            <figure className="tool thunder_client">
                                <img src={Thunder_Client} alt="Thunder Client" />
                                <figcaption>Thunder Client</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="soft-skills-container col-sm-12 col-md-6 col-lg-6">
                    <div className="row">
                        <h3 className='skills-title'>Habilidades blandas</h3>
                        <div className="col-6">
                            <figure className="soft-skill">
                                <img src={Responsability} alt="Responsability" />
                                <figcaption>Responsable</figcaption>
                            </figure>
                        </div>
                        <div className="col-6">
                            <figure className="soft-skill">
                                <img src={Problem_Solving} alt="Problem solving" />
                                <figcaption>Resolucion de problemas</figcaption>
                            </figure>
                        </div>
                        <div className='col-12'>
                            <figure className="soft-skill team_work">
                                <img src={Team_Work} alt="Team Work" />
                                <figcaption>Trabajo en equipo</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;