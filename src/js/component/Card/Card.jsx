import React from 'react';
import PropTypes from "prop-types"
import "./Card.css"
import SQLAlchemy from '../Icons/Backend/SqlAlchemy.jsx';

const Card = (props) => {
    return (
        <>
            {props.section == "work" ? (

                <div className="card">
                    <div className='logo-container'>
                        <img src={props.img} className="card-img-top" alt={props.alt} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">{props.title}</h5>
                        <hr />
                        <h6>{props.charge}</h6>
                        <h6>{props.time}</h6>
                        <p className="card-text">
                            - {props.description[0]} <br />
                            - {props.description[1]} <br />
                            - {props.description[2]}
                        </p>
                        <a href={props.button_url} target={"_blank"} className="btn cardButton">Sitio web</a>
                    </div>
                </div>

            ) : props.section == "projects" ? (

                <div className={`project-card card ${props.index == 0 ? "padding-first" : props.index == 2 ? "padding-third" : ""}`}>
                    <div className='logo-container project-img'>
                        <img src={props.img} className="card-img-top" alt={props.alt} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">{props.title}</h5>
                        <hr />
                        <p className="card-text">
                            {props.description}
                        </p>

                        <h5>
                            Tecnologias usadas:
                        </h5>
                        <div className='row row-tech'>

                            {props.technologies?.map((technology, index) => {
                                return (
                                    <div key={index} className="card-tech">
                                        {technology}
                                    </div>
                                )
                            })}
                        </div>

                        <div className='anchors'>
                            <a href={props.button_url} target={"_blank"} className="btn cardButton">Repositorio</a>
                            {props.deploy_url &&
                                <a href={props.deploy_url} target={"_blank"} className="btn cardButton">Sitio web</a>
                            }
                        </div>
                    </div>
                </div>

            ) : (

                <div className="card" aria-hidden="true">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                        </p>
                        <a href="#" tabindex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                    </div>
                </div>
            )}

        </>
    );
};


Card.ProtoTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
}

export default Card;