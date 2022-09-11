import React from 'react';
import Card from '../Card/Card.jsx';
import {Helmet} from "react-helmet";

import "./Work.css"

// Work images
import Four_Geeks from "../../../imgs/Work/4Geeks_logo.png"
import Farmatodo from "../../../imgs/Work/Farmatodo.png"

import { useTranslation } from "react-i18next";

const Work = () => {
    const [t, i18next] = useTranslation("work")

    const professionalExperience = [
        {
            img: Farmatodo,
            alt: t("farmatodo.alt"),
            title: "Farmatodo C.A.",
            time: t("farmatodo.time"),
            charge: t("farmatodo.charge"),
            description: [
                t("farmatodo.description.first"),
                t("farmatodo.description.second"),
                t("farmatodo.description.third")
            ],
            button_url: "https://www.farmatodo.com.ve/",
        },
        {
            img: Four_Geeks,
            alt: t("4Geeks.alt"),
            title: "4Geeks Academy",
            time: t("4Geeks.time"),
            charge: t("4Geeks.charge"),
            description: [
                t("4Geeks.description.first"),
                t("4Geeks.description.second"),
                t("4Geeks.description.third")
            ],
            button_url: "https://4geeksacademy.com/",
        }
    ]

    return (
        <>
            <Helmet>
                <title>Work</title>
            </Helmet>
            <div className="work-container container">
                <h1 className='work-header'><i className="fas fa-briefcase"></i> {t("title")}:</h1>
                <div className='row'>
                    {professionalExperience.map((item, index) => {
                        const { alt, description, img, button_url, title, time, charge } = item
                        return (
                            <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-6 card-container">
                                <Card
                                    key={index}
                                    img={img}
                                    alt={alt}
                                    title={title}
                                    time={time}
                                    charge={charge}
                                    description={description}
                                    button_url={button_url}
                                    section="work"
                                />
                            </div>

                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Work;