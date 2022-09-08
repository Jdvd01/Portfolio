import React from 'react';
import PropTypes from "prop-types"
import "./Card.css"

const Card = (props) => {
    return (
        <>
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
                    <a href={props.button.url} target={"_blank"} className="btn cardButton">{props.button.description}</a>
                </div>
            </div>
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