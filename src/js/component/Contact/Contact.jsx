import React, { useRef, useState } from 'react';
import {Helmet} from "react-helmet";
import emailjs from "@emailjs/browser"
import "./Contact.css"

import { useTranslation } from "react-i18next";

const Contact = () => {
    const [t, i18next] = useTranslation("contact")

    const form = useRef();
    const [error, setError] = useState(false)
    const sendEmail = (event) => {
        event.preventDefault();
        setError(false)
        const serviceID = process.env.REACT_APP_SERVICE_ID || "";
        const templateID = process.env.REACT_APP_TEMPLATE_ID || "";
        const publicKey = 'edbbWgFYQF60xVjKt';

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then(() => {
                setError(false)
                alert("Email enviado ✌🏽😎")
            }, (err) => {
                console.log(err)
                setError(true)
            });
        event.target.reset()
    };



    return (
        <div className='contact container'>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <h1 className='mail-header container'><i className="fa-regular fa-envelope"></i> {t("title")}</h1>
            <form ref={form} id="form" className='col-12 col-sm-12 col-md-8 col-lg-8 p-0 m-0' onSubmit={sendEmail}>
                <div className="field">
                    <label htmlFor="from_name">{t("form.name")}:</label>
                    <input type="text" name="from_name" id="from_name" required placeholder={t("form.name")} />
                </div>
                <div className="field">
                    <label htmlFor="email_id">{t("form.email")}:</label>
                    <input type="text" name="email_id" id="email_id" required placeholder={t("form.email")} />
                </div>
                <div className="field">
                    <label htmlFor="message">{t("form.message")}:</label>
                    <textarea
                        type="text"
                        name="message"
                        id="message"
                        required
                        rows={3}
                        placeholder={t("form.message")}
                    ></textarea>
                </div>
                {error && (
                    <div className="alert alert-danger" role="alert">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                        &nbsp;
                        {t("form.error")}
                        &nbsp;
                        <i className="fa-solid fa-triangle-exclamation"></i>
                    </div>
                )}
                <input type="submit" id="button" value={t("form.button")} />
            </form>
        </div>
    );
};

export default Contact;