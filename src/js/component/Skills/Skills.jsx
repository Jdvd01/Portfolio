import React from 'react';
import "./Skills.css"

// Frontend Svg
import Html from "../Icons/Frontend/Html.jsx"
import Css from "../Icons/Frontend/Css.jsx"
import BootStrap from "../Icons/Frontend/BootStrap.jsx"
import JavaScript from "../Icons/Frontend/JavaScript.jsx"
import ReactSvg from "../Icons/Frontend/ReactSvg.jsx"
import Flux from "../Icons/Frontend/Flux.jsx"

// Backend Svg
import Python from "../Icons/Backend/Python.jsx"
import Flask from "../Icons/Backend/Flask.jsx"
import Sql from "../Icons/Backend/Sql.jsx"
import SqlAlchemy from "../Icons/Backend/SqlAlchemy.jsx"
import RestApi from "../Icons/Backend/RestApi.jsx"

// Tools Svg
import Git from "../Icons/Tools/Git.jsx"
import Github from "../Icons/Tools/Github.jsx"
import VS_Code from "../Icons/Tools/VsCode.jsx"
import SCRUM from "../Icons/Tools/Scrum.jsx"
import ThunderClient from "../Icons/Tools/ThunderClient.jsx"

// Soft skills Svg
import Responsability from "../Icons/SoftSkills/Responsability.jsx"
import Problem_Solving from "../Icons/SoftSkills/Problem_Solving.jsx"
import TeamWork from "../Icons/SoftSkills/TeamWork.jsx"

const Skills = () => {
    return (
        <div className='skills'>
            <div className='container container-skills row'>
                <div className="frontend col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className='row'>
                        <h3 className='skills-title'>Frontend</h3>
                        <div className="col-4 col-md-4 frontend-technology">
                            <div className="skill-icon">
                                <Html />
                            </div>
                            HTML 5
                        </div>
                        <div className="col-4 col-md-4 frontend-technology">
                            <div className="skill-icon">
                                <Css />
                            </div>
                            CSS 3
                        </div>
                        <div className="col-4 col-md-4 frontend-technology">
                            <div style={{ width: "100px" }}>
                                <BootStrap />
                            </div>
                            BootStrap
                        </div>
                        <div className='row pt-3'>
                            <div className="col-4 col-md-4 frontend-technology">
                                <div className="skill-icon">
                                    <JavaScript />
                                </div>
                                JavaScript
                            </div>
                            <div className="col-4 col-md-4 frontend-technology">
                                <div className="skill-icon">
                                    <ReactSvg />
                                </div>
                                React
                            </div>
                            <div className="col-4 col-md-4 frontend-technology pt-3">
                                <div style={{ width: "100px" }} className="flux">
                                    <Flux />
                                </div>
                                Flux
                            </div>
                        </div>
                    </div>
                </div>
                <div className="backend col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className='row'>
                        <h3 className='skills-title'>Backend</h3>
                        <div className="col-4 col-md-4 backend-technology">
                            <div className="skill-icon">
                                <Python />
                            </div>
                            Python
                        </div>
                        <div className="col-4 col-md-4 backend-technology">
                            <div className="skill-icon">
                                <Flask />
                            </div>
                            Flask
                        </div>
                        <div className="col-4 col-md-4 backend-technology">
                            <div className="skill-icon">
                                <Sql />
                            </div>
                            SQL
                        </div>
                        <div className='row sql-rest '>
                            <div className="col-4 col-md-6 backend-technology">
                                <div style={{ width: "150px" }}>
                                    <SqlAlchemy />
                                </div>
                                SQL Alchemy
                            </div>
                            
                            <div className="col-4 col-md-6 backend-technology">
                                <div className="skill-icon">
                                    <RestApi color="FFFFFF"/>
                                </div>
                                REST_API
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tools-container col-sm-12 col-md-6 col-lg-6">
                    <div className="row">
                        <h3 className='skills-title'>Herramientas</h3>
                        <div className="col-4 col-md-4 tool">
                            <div className="skill-icon">
                                <VS_Code />
                            </div>
                            VS Code
                        </div>
                        <div className="col-4 col-md-4 tool">
                            <div className="skill-icon">
                                <Git />
                            </div>
                            Git
                        </div>
                        <div className="col-4 col-md-4 tool">
                            <div className="skill-icon">
                                <Github />
                            </div>
                            Github
                        </div>
                        <div className="col-4 col-md-4 tool">
                            <div className="skill-icon">
                                <SCRUM />
                            </div>
                            SCRUM
                        </div>
                        <div className="col-4 col-md-4 tool">
                            <div className="skill-icon">
                                <ThunderClient />
                            </div>
                            Thunder Client
                        </div>
                    </div>
                </div>
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
                            <div style={{width:"60px"}}>
                                <TeamWork />
                            </div>
                            Trabajo en equipo
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;