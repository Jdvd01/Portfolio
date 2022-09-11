import React from 'react';

// Soft skills Svg
import Responsability from "../Icons/SoftSkills/Responsability.jsx"
import Problem_Solving from "../Icons/SoftSkills/Problem_Solving.jsx"
import TeamWork from "../Icons/SoftSkills/TeamWork.jsx"

import { useTranslation } from "react-i18next";

const SoftSkills = () => {
    const [t, i18next] = useTranslation("skills")
    return (
        <div className="soft-skills-container col-sm-12 col-md-6 col-lg-6">
            <div className="row">
                <h3 className='skills-title'>{t("header.soft.title")}</h3>
                <div className="col-6 col-sm-6 soft-center">
                    <div className='soft-skill'>
                        <Responsability />
                    </div>
                    {t("header.soft.responsability")}
                </div>
                <div className="col-6 col-sm-6 soft-center">
                    <div className='soft-skill'>
                        <Problem_Solving />
                    </div>
                    {t("header.soft.problem")}
                </div>
                <div className='col-12 soft-center'>
                    <div style={{ width: "60px" }}>
                        <TeamWork />
                    </div>
                    {t("header.soft.team")}
                </div>
            </div>
        </div>
    );
};

export default SoftSkills;