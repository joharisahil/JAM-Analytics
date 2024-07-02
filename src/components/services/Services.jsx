import React from "react";
import coding from "../../assets/images/coding.svg";
import cloud from "../../assets/images/cloud.svg";
import shield from "../../assets/images/shield.svg";
import innovation from "../../assets/images/innovation.svg";
import "./Services.css";

const Services = () => {
  
  const services = [
    {
      type: "Software Development",
      description:
        "Our experienced team of software developers specializes in creating custom solutions tailored to meet your specific business needs. From web applications to mobile apps and enterprise software.",
      logo: coding,
      label: "coding",
      id: 1,
    },
    {
      type: "Cloud Computing",
      description:
        "Harness the power of cloud computing to transform your business operations. We offer cloud migration, infrastructure setup, and managed services to help you optimize performance,enhance security, and reduce costs.",
      logo: cloud,
      label: "cloud",
      id: 2,
    },
    {
      type: "Cybersecurity Solutions",
      description:
        "Protect your digital assets and sensitive data from evolving cyber threats. Our comprehensive cybersecurity services include vulnerability assessments, penetration testing,network security, data encryption, and employee training.",
      logo: shield,
      label: "shield",
      id: 3,
    },
    {
      type: "Artificial Intelligence Solutions",
      description:
        "Unlock the potential of AI to gain valuable insights and drive intelligent automation. Our AI services encompass machine learning, natural language processing, computer vision, and predictive analytics.",
      logo: innovation,
      label: "innovation",
      id: 4,
    },
  ];


  return (
    <div className="services-container" id='services'>
      <div className="services-wrapper">
        <div className="services-left-content">
          <h1 className="services-title">
            POWERFUL IT SOLUTIONS FOR YOUR BUSINESS SUCCESS
          </h1>
          <p className="services-paragraph">
            we specialize in delivering powerful IT solutions that drive your
            business success. Our team of experts is dedicated to providing
            innovative technology solutions tailored to your unique needs. From
            strategic planning to implementation and ongoing support, we ensure
            that your IT infrastructure is robust, secure, and optimized for
            maximum performance.
          </p>
        </div>
        <div className="services-right-content">
          <div className="services-right-content-wrapper">
            {services.map((service) => (
              <div className="first-service" key={service.id}>
                <div className="service-type">
                  <div className='service-logo-wrapper'>
                    <img src={service.logo} alt="coding" className="service-image"/>
                  </div>
                  <h3 className="service-type-name">{service.type}</h3>
                </div>
                <div className="service-description">
                  <p className="service-description-content">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
