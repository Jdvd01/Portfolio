import React from 'react';
import "./About.css"

import { useTranslation } from "react-i18next";


const About = () => {
    const [t, i18next] = useTranslation("about")

    return (
        <div className='row about-me'>
            <div className='col-xl-2 col-lg-4 col-md-3 col-sm-4 col-12 img-container'>
                <img src="https://avatars.githubusercontent.com/u/97990022?s=400&u=198211576ca589ce60e75a85d07ce4454bba5e52&v=4" alt="Imagen de perfil" />
            </div>
            <div className='col-xl-10 col-lg-8 col-md-9 col-sm-8 col-12 info-container'>
                <h1>{t("header.one-first")} <span className='hand'>👋🏽</span>, {t("header.one-second")}</h1>
                <h2>{t("header.name")}</h2>
                <h3>{t("header.profession")}</h3>
                <p>
                    {t("description")} ✌🏽😎.
                </p>
            </div>
            <div className='row more-about'>
                <div className='col-12 col-sm-6 col-md-4 col-lg-4 languages'>
                    <h3>
                        {t("more.languages.title")}
                    </h3>
                    <ul>
                        <li><span className="numList">01.</span> {t("more.languages.first")}</li>
                        <li>
                            <span className="numList">02.</span> {t("more.languages.second")}
                        </li>
                    </ul>
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-4 hobbies'>
                    <h3>
                        {t("more.hobbies.title")}
                    </h3>
                    <ul>
                        <li><span className="numList">01.</span> {t("more.hobbies.list.first")}</li>
                        <li><span className="numList">02.</span> {t("more.hobbies.list.second")}</li>
                        <li><span className="numList">03.</span> {t("more.hobbies.list.third")}</li>
                    </ul>
                </div>
                <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                    <p className='last-p'>
                        {t("more.description")}
                        <span className="hand-up">☝🏽</span> 
                    </p>
                </div>
            </div>
        </div>

    );
};

export default About;