import React, { useState } from "react";
import "./Footer.css";
import logo from "../assests/cynthronix_small_logo.png";
import Button from "react-bootstrap/Button";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
    const [data, setData] = useState("")
    return (
        <>
            <div className="footer-main-div">
                <div className="footer-about-us">
                    <div style={{ display: "flex" }}>
                        <div>
                            <img
                                className="cynthronix_small_logo"
                                src={logo}
                                alt="cynthronix_logo"
                                srcset=""
                            />
                        </div>
                        <div>
                            <h1>Cynthronix</h1>
                        </div>
                    </div>

                    <div>
                        <p style={{ marginTop: "0.5rem", fontFamily: "Lato" }} className="p">
                            Welcome to our IT company, where we are dedicated to
                            empowering businesses with transformative technology
                            solutions for your businesses.
                        </p>
                    </div>
                </div>
                <div className="footer-subscribe">
                    <div>
                        <p
                            style={{
                                color: "#6DBBAA",
                                fontFamily: "Montserrat",
                                fontWeight: "Bold",
                                fontSize: "20px",
                            }}
                            className="p"
                        >
                            SUBSCRIBE OUR LETTER
                        </p>
                    </div>
                    <div
                        style={{ borderBottom: "1px solid black" }}
                        className="footer-email"
                    >
                        <input
                            type="text"
                            placeholder="Email"
                            className="footer-email-input"
                            value = {data}
                            onChange={(e)=>{setData(e.target.value)}}
                            style={{ outline: "none", border: "none" }}
                        />
                    </div>
                    <div>
                        <button className="footer-button" onClick={()=>{setData(""); return alert("You have successfully subscribed")}}>Subscribe</button>
                    </div>
                </div>
                <div className="footer-contact">
                    <div>
                        <FiPhoneCall></FiPhoneCall>
                        <h5>+91 7248148407</h5>
                    </div>
                    <div>
                        <FiMail></FiMail>
                        <h5>cynthronix@gmail.com</h5>
                    </div>
                    <div>
                        <TfiLocationPin></TfiLocationPin>
                        <h5>Sector-6 Gurugram, Haryana</h5>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "5px",
                    fontSize: "20px",
                    padding: "20px",
                }}
            >
                <div>
                    <a
                        href="https://in.linkedin.com/in/cynthronix-softwares-371897284"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#191962" }}
                    >
                        <FaLinkedin></FaLinkedin>
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.instagram.com/cynthronix?igshid=YzVkODRmOTdmMw=="
                        target="_blank"
                    >
                        <FaInstagram
                            href=""
                            style={{ color: "#eb0707" }}
                        ></FaInstagram>
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.facebook.com/profile.php?id=100093245913986&mibextid=rS40aB7S9Ucbxw6v"
                        target="_blank"
                    >
                        <FaFacebook
                            href=""
                            style={{ color: "blue" }}
                        ></FaFacebook>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Footer;
