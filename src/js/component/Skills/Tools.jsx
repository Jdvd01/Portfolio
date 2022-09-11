import React from 'react';

// Tools Svg
import Git from "../Icons/Tools/Git.jsx"
import Github from "../Icons/Tools/Github.jsx"
import VS_Code from "../Icons/Tools/VsCode.jsx"
import SCRUM from "../Icons/Tools/Scrum.jsx"
import ThunderClient from "../Icons/Tools/ThunderClient.jsx"

import { useTranslation } from "react-i18next";

const Tools = () => {
    const [t, i18next] = useTranslation("skills")

    return (
        <div className="tools-container col-sm-12 col-md-6 col-lg-6">
            <div className="row">
                <h3 className='skills-title'>{t("header.tools")}</h3>
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
    );
};

export default Tools;