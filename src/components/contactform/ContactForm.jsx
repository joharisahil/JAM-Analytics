import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import axios  from "axios";
import "./ContactForm.css";

const ContactForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [date, setDate] = useState(new Date().toLocaleString());

    const formhandler = (event) => {
      console.log(event.target.value)
        event.preventDefault();
        const data = {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Subject: subject,
            Message: message,
            
            Date: date,
        };
        axios
            .post(
                "https://sheet.best/api/sheets/2e0997bc-d336-4e82-873b-8145a4c5af67",
                data
            )
            .then((response) => {
              console.log(response);
              alert("message sent successfully")
                setFirstName("");
                setLastName("");
                setEmail("");
                setSubject("");
                setMessage("");
            });
    };
    return (
        <div className="form-container" id="contact">
            <form className="form" onSubmit={formhandler}>
                <div className="firstName-field">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="field"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                </div>
                <div className="lastName-field">
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="field"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
                </div>
                <div className="email-field">
                    <input
                        type="email"
                        placeholder="Email"
                        className="field"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="subject-field">
                    <input
                        type="text"
                        placeholder="Subject"
                        className="field"
                        name="subject"
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
                    />
                </div>
                <div className="message-field">
                    <textarea
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Message"
                        className="field"
                        name="message"
                        value={message}
                        onChange={(e)=>{
                          setMessage(e.target.value)
                        }}
                    ></textarea>
                </div>
                <div>
                    <button type="submit" className="form-submit-button">
                        Send Message
                    </button>
                </div>
            </form>
            <div className="contact-info-container">
                <p className="phone">
                    <span>
                        <FaPhoneAlt className="contact-icon" />
                    </span>
                    <span>+91 7248148407</span>
                </p>
                <p className="email">
                    <span>
                        <MdOutlineMailOutline className="contact-icon" />
                    </span>
                    <span>cynthronix@gmail.com</span>
                </p>
            </div>
        </div>
    );
};

export default ContactForm;
