import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import aboutLogo from "../../assets/images/about-logo.svg";
import fakeStatutte from "../../assets/images/fake-statutte.svg";
import GridAbout from "../../components/GridAbout/GridAbout";

import "./About.css";
const About = () => {
  return (
    <motion.div
      className="About__container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{
        delay: 0.2,
        stiffness: 100,
        type: "tween",
        duration: 0.5,
      }}
    >
      <div className="About__wrapper">
        <div className="About__Header__container">
          <Header
            sectionPhoto={aboutLogo}
            phrase="ITO Laboratories is a phygital creative center dedicated to the exploration of the different realms of art and design. We
            focus primarily on bridging art between the real world and web 3.
            "
          />
        </div>
        <div className="About__content_wrapper">
          <div className="About__content_text">
            <p>
              In the midst of a digital revolution it is inevitable for us to
              see the potential that blockchain technology has to help
              potentialize any business, or brand.
            </p>
            <p>
              ITO Lab´s vision is to help brands, artists and all types of
              creators tap into the digital world by the imnplementation of NFTs
              and blockchain.
            </p>
            <p>
              Through our main pillars: ITO GALLERY, ITO D3SIGN and ITO STUDIO
              we are able to offer a complete set of integral services ranging
              from design, art production and digitalization, to specialized art
              and NFT consulting.
            </p>
          </div>
          <div className="About__content_box">
            <div style={{ height: "100%", width: "95%" }}>
              <GridAbout />
            </div>
            <p>19.41658054397012, -99.16435399935689</p>
          </div>
          <div className="About__content_image">
            <img src={fakeStatutte} alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
