import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser"
import "./Contact.css"

const Contact = () => {
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
            <h1 className='mail-header container'><i className="fa-regular fa-envelope"></i> Contacta conmigo:</h1>
            <form ref={form} id="form" className='col-12 col-sm-12 col-md-8 col-lg-8 p-0 m-0' onSubmit={sendEmail}>
                <div className="field">
                    <label htmlFor="from_name">Nombre:</label>
                    <input type="text" name="from_name" id="from_name" required placeholder='Nombre' />
                </div>
                <div className="field">
                    <label htmlFor="email_id">Email:</label>
                    <input type="text" name="email_id" id="email_id" required placeholder='Email' />
                </div>
                <div className="field">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        type="text"
                        name="message"
                        id="message"
                        required
                        placeholder='Mensaje'
                        rows={3}
                    ></textarea>
                </div>
                {error && (
                    <div className="alert alert-danger" role="alert">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                        &nbsp;
                        No se envio el mail, intentalo de nuevo
                        &nbsp;
                        <i className="fa-solid fa-triangle-exclamation"></i>
                    </div>
                )}
                <input type="submit" id="button" value="Send Email" />
            </form>
        </div>
    );
};

export default Contact;