import React from 'react';

// Frontend Svg
import Html from "../Icons/Frontend/Html.jsx"
import Css from "../Icons/Frontend/Css.jsx"
import BootStrap from "../Icons/Frontend/BootStrap.jsx"
import JavaScript from "../Icons/Frontend/JavaScript.jsx"
import ReactSvg from "../Icons/Frontend/ReactSvg.jsx"
import Flux from "../Icons/Frontend/Flux.jsx"

const FrontendSkills = () => {
    return (
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
    );
};

export default FrontendSkills;