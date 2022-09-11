import React from 'react';

// Backend Svg
import Python from "../Icons/Backend/Python.jsx"
import Flask from "../Icons/Backend/Flask.jsx"
import Sql from "../Icons/Backend/Sql.jsx"
import SqlAlchemy from "../Icons/Backend/SqlAlchemy.jsx"
import RestApi from "../Icons/Backend/RestApi.jsx"

const BackendSkills = () => {
    return (
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
                            <RestApi color="0098FE" />
                        </div>
                        REST_API
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackendSkills;