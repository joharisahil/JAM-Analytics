import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SuccessStories.css";
import { FaStar } from "react-icons/fa";
import success_story_1 from "../../components/assests/success_story_1.png";
import success_story_2 from "../../components/assests/success_story_2.png";
import success_story_3 from "../../components/assests/success_story_3.png";
import success_story_4 from "../../components/assests/success_story_4.png";
import success_story_5 from "../../components/assests/success_story_5.png";
import success_story_6 from "../../components/assests/success_story_6.png";
import success_story_7 from "../../components/assests/success_story_7.png";

const items = [
    {
        id: 1,
        subtitle: "Ajeet",
        title: "Gupta",
        name: "John D.",
        image: success_story_1,
        text: "From day one, Cynthronix has been a true partner in our IT journey. Their expertise and proactive approach have helped us navigate complex technological challenges and achieve our business goals.",
    },
    {
        id: 2,
        subtitle: "Ajeet",
        title: "Gupta",
        name: "Alexa Carey",
        image: success_story_2,
        text: "From day one, Cynthronix has been a true partner in our IT journey. Their expertise and proactive approach have helped us navigate complex technological challenges and achieve our business goals.",
    },
    {
        id: 3,
        subtitle: "Ajeet",
        title: "Gupta",
        name: "Josh Rendy",
        image: success_story_3,
        text: "From day one, Cynthronix has been a true partner in our IT journey. Their expertise and proactive approach have helped us navigate complex technological challenges and achieve our business goals.",
    },
    {
        id: 4,
        subtitle: "Ajeet",
        title: "Gupta",
        name: "Ravindra Datta",
        image: success_story_4,
        text: "From day one, Cynthronix has been a true partner in our IT journey. Their expertise and proactive approach have helped us navigate complex technological challenges and achieve our business goals.",
    },
    {
        id: 5,
        subtitle: "Ajeet",
        title: "Gupta",
        name: "Elexa Watson",
        image: success_story_5,
        text: "From day one, Cynthronix has been a true partner in our IT journey. Their expertise and proactive approach have helped us navigate complex technological challenges and achieve our business goals.",
    },
    {
        id: 6,
        subtitle: "Ajeet",
        title: "Gupta",
        name: "Chaitnya",
        image: success_story_6,
        text: "From day one, Cynthronix has been a true partner in our IT journey. Their expertise and proactive approach have helped us navigate complex technological challenges and achieve our business goals.",
    },
    {
        id: 7,
        subtitle: "Ajeet",
        title: "Gupta",
        name: "Destiry Denna",
        image: success_story_7,
        text: "From day one, Cynthronix has been a true partner in our IT journey. Their expertise and proactive approach have helped us navigate complex technological challenges and achieve our business goals.",
    },
];

const SuccessStories = () => {
    const [selectedId, setSelectedId] = useState(null);

     
    return (
        // <div>SuccessStories</div>

        <>
            <div className="success-stories-main-container">
                <div className="success-stories-heading">
                    CLIENT SUCCESS STORIES
                </div>
                <div style={{}} className="success-stories-circles-main">
                    {items.map((item) => (
                        <>
                            <motion.div
                                layoutId={item.id}
                                onClick={() => setSelectedId(item.id)}
                                style={
                                    item.id % 2 !== 0
                                        ? {
                                              borderRadius: "50%",
                                              width: "50%",
                                              height: "30px",
                                              textAlign: "center",
                                              display: "flex",
                                              marginBottom: "2rem",
                                              // position: "absolute",
                                              // left: "10% !important",
                                          }
                                        : {
                                              borderRadius: "50%",
                                              width: "50%",
                                              height: "30px",
                                              textAlign: "center",
                                              display: "flex",
                                              marginBottom: "2rem",
                                              // position: "absolute",
                                              // left: "50% !important",
                                            //   alignItems: "center",
                                            //   justifyContent: "center"
                                          }
                                }
                            >
                                <motion.img src={item.image}></motion.img>
                            </motion.div>
                        </>
                    ))}
                </div>
                

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            layoutId={selectedId}
                            style={{}}
                            className="motion-main-div"
                        >
                            {items
                                .filter((item) => item.id === selectedId)
                                .map((item) => (
                                    <>
                                        <div style={{ position: "relative" }}>
                                            <motion.button
                                                style={{
                                                    width: "1rem",
                                                    height: "1rem",
                                                    textAlign: "center",
                                                    width: "1.5rem",
                                                    height: "1.5rem",
                                                    textAlign: "center",
                                                    /* display: flex; */
                                                    /* flex-direction: column; */
                                                    position: "absolute",
                                                    left: "96%",
                                                    top: "0rem",
                                                    border: "none",
                                                    background: "white",
                                                    boxShadow:
                                                        "2px 3px 2px grey",
                                                }}
                                                onClick={() =>
                                                    setSelectedId(null)
                                                }
                                            >
                                                X
                                            </motion.button>
                                            <img src={item.image} alt="" />

                                            <motion.h3
                                                style={{
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
                                                {item.name}
                                            </motion.h3>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
                                                <FaStar
                                                    style={{ color: "#6DBBAA" }}
                                                ></FaStar>
                                                <FaStar
                                                    style={{ color: "#6DBBAA" }}
                                                ></FaStar>
                                                <FaStar
                                                    style={{ color: "#6DBBAA" }}
                                                ></FaStar>
                                                <FaStar
                                                    style={{ color: "#6DBBAA" }}
                                                ></FaStar>
                                            </div>
                                            <motion.h5>{item.text}</motion.h5>
                                        </div>
                                    </>
                                ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default SuccessStories;





