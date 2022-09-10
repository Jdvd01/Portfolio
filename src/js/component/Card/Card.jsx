import React from 'react';
import PropTypes from "prop-types"
import "./Card.css"

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
                    <p className="card-text">
                        - {props.description[0]} <br />
                        - {props.description[1]} <br />
                        - {props.description[2]}
                    </p>
                    <a href={props.button_url} target={"_blank"} className="btn cardButton">Sitio web</a>
                </div>
            </div>
        ) : (
            <div className="card">
                <div className='logo-container'>
                    <img src={props.img} className="card-img-top" alt={props.alt} />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <hr />
                    <p className="card-text">
                        {props.description}
                        {props.technologies}
                    </p>
                    <a href={props.button_url} target={"_blank"} className="btn cardButton">Repositorio</a>
                    {props.deploy_url && 
                        <a href={props.deploy_url} target={"_blank"} className="btn cardButton">Sitio web</a>
                    }
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