import React from "react";
import Header from "../../components/header/Header";
import AboutUs from "../../components/aboutUs/AboutUs";
import Services from "../../components/services/Services";
import PortFolio from "../../components/portfolio/PortFolio";
import Achievement from "../../components/achievements/Achievement";
import Team from "../../components/team/Team";
import ContactForm from "../../components/contactform/ContactForm";
import SuccessStories from "../../components/successStories/SuccessStories";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <div className="App-Container" id='home'>
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      <PortFolio />
      <Achievement />
      {/* <Team /> */}
      <ContactForm />
      {/* <SuccessStories /> */}
      <Footer />
    </div>
  );
};

export default Home;
