import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import avatar from "../../assets/images/m-1.png";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      designation: "Chief Technology Officer (CTO)",
      image: avatar,
      linkedinUrl: "https://www.linkedin.com/in/karuna-yadav/",
      instagramUrl: "https://twitter.com/ClickkarAt",
    },
    {
      name: "John Smith",
      designation: "Chief Technology Officer (CTO)",
      image: avatar,
      linkedinUrl: "https://www.linkedin.com/in/karuna-yadav/",
      instagramUrl: "https://twitter.com/ClickkarAt",
    },
    {
      name: "John Smith",
      designation: "Chief Technology Officer (CTO)",
      image: avatar,
      linkedinUrl: "https://www.linkedin.com/in/karuna-yadav/",
      instagramUrl: "https://twitter.com/ClickkarAt",
    },
  ];
  return (
    <div className="team-container">
      <div className="team-wrapper">
        <div className="team-top-section">
          <h1 className="team-title">MEET OUR EXPERTS</h1>
          <p className="team-description">
            we are proud to have a team of highly skilled professionals who are
            passionate about technology and dedicated to delivering good
            results.
          </p>
        </div>
        <div className="team-members">
          <div className="members-wrapper">
            {teamMembers.map((member,index) => (
              <div className="member" key={index}>
                <div className="member-avatar">
                  <img src={member.image} alt={member.name} className="avatar" />
                </div>
                <div className="member-details">
                  <div className="name-and-designation-details">
                    <p className="team-member-name">{member.name}</p>
                    <span className="team-member-designation">
                      {member.designation}
                    </span>
                  </div>
                  <div className="member-social-link">
                    <a href={member.instagramUrl}>
                      <FaInstagram className="people-connecting-icon" />
                    </a>
                    <a href={member.linkedinUrl}>
                      <FaLinkedinIn className="people-connecting-icon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
