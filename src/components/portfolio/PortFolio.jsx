import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import avatar from "../../assets/images/m-1.png";
import project1 from "../../assets/images/project1.png";
import NftLaunchPad from "../../assets/images/NFT Launchpad Website.png";
import project3 from '../../assets/images/250shots_so.png'
import project4 from '../../assets/images/Landing Page.png'
import project5 from '../../assets/images/Furniture Website.jpg'
import "./PortFolio.css";
import "../team/Team.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

const PortFolio = () => {
    const projects = [
        {
            project_name: "Carty",
            project_type: "",
            project_preview: project1,
            project_description:
                "Welcome to Carty – Elevate your financial stability with our tailored credit card solutions. Explore low-interest rates, customizable limits, and exclusive rewards. Rebuild credit, enjoy smart spending, and access 24/7 support. Your pathway to financial empowerment starts here.",
            project_deployed_link: "https://www.linkedin.com/in/karuna-yadav/",
        },
        {
            project_name: "NFT LaunchPad",
            project_type: "",
            project_preview: NftLaunchPad,
            project_description:
                "Experience seamless connectivity like never before with NFC Launchpad. Our website empowers you to effortlessly explore the endless possibilities of Near Field Communication technology. Unlock a world of convenience as you launch apps, share content, and connect with a simple tap. Navigate through the future of smart interactions with our user-friendly NFC Launchpad website",
            project_deployed_link: "https://www.linkedin.com/in/karuna-yadav/",
        },
        {
            project_name: "250 shots",
            project_type: "",
            project_preview: project3,
            project_description:
                "Immerse yourself in a world of knowledge with our cutting-edge Books & E-books application. Access a vast library of literary treasures at your fingertips, seamlessly blending the charm of physical books with the convenience of digital reading",
            project_deployed_link: "https://www.linkedin.com/in/karuna-yadav/",
        },

        {
            project_name: "Bueno",
            project_type: "",
            project_preview: project4,
            project_description:
                "Welcome to Bueno, the premier online destination for exclusive Smiling Ape NFTs, powered by Ethereum. Dive into a vibrant digital marketplace where art meets technology, offering a unique collection of Smiling Ape NFTs. Each piece is a blend of creativity and rarity, designed to captivate and collect. With seamless Ethereum transactions, secure ownership, and a community of passionate collectors, Bueno is your gateway to owning a piece of the digital art revolution",
            project_deployed_link: "https://www.linkedin.com/in/karuna-yadav/",
        },

        {
            project_name: "Furniture Website",
            project_type: "",
            project_preview: project5,
            project_description:
                "Discover curated collections of exquisite furniture designed to elevate your spaces. From stylish living room essentials to comfortable bedroom retreats, find quality craftsmanship and timeless design in every piece",
            project_deployed_link: "https://www.linkedin.com/in/karuna-yadav/",
        },

        
    ];
    return (
        <div className="PortFolio-container" id="portfolio">
            <div className="PortFolio-Wrapper">
                <h1 className="PortFolio-Title">OUR PORTFOLIO</h1>
                <div className="PortFolio-Project-Container">
                    <Swiper
                        keyboard={{
                            enabled: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                        }}
                        navigation={true}
                        modules={[Keyboard, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="member project">
                                    <div
                                        className="member-avatar"
                                        style={{ height: "240px" }}
                                    >
                                        <img
                                            src={project.project_preview}
                                            alt={project.project_name}
                                            className="avatar"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div
                                        className="member-details"
                                        style={{ flexDirection: "column" }}
                                    >
                                        <div
                                            className="name-and-designation-details"
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                paddingBottom: "0.7rem",
                                            }}
                                        >
                                            <p className="team-member-name">
                                                {project.project_name}
                                            </p>
                                            <a
                                                href={
                                                    project.project_deployed_link
                                                }
                                                style={{ color: "#6DBBAA" }}
                                            >
                                                {project.project_type}
                                            </a>
                                        </div>
                                        <div className="member-social-link">
                                            <span className="team-member-designation">
                                                {project.project_description}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PortFolio;
