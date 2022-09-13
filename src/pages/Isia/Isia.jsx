import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import galleryLogo from "../../assets/images/gallery-logo.svg";

import Header from "../../components/Header/Header";
import twiter from "../../assets/images/twiter.svg";
import instagram from "../../assets/images/instagram.svg";
import boat from "../../assets/images/boat.svg";
import powered from "../../assets/images/powered.svg";
import multiLine from "../../assets/images/multi-line.svg";
import vector from "../../assets/images/vector.svg";
import qr from "../../assets/images/qr.svg";
import Card from "../../components/Card/Card";
import isiaIcon from "../../assets/images/isia-nft.svg";
import NameSlide from "../../components/NameSlide/NameSlide";
// import "./Kosmovisiones.css";

const Kosmovisiones = () => {
  const wrapperBox = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [state, setState] = useState(false);

  useEffect(() => {
    setWrapperWidth(wrapperBox.current.offsetWidth);
    const timer = setTimeout(() => {
      setState(!state);
    }, 10);
    return () => clearTimeout(timer);
  }, [wrapperWidth, state]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="rodrigo"
    >
      {/* FIXED BARS  */}
      <div className="MainBigSize__stickyBars">
        <div className="MainBigSize__stickyBar_top_container">
          <div className="MainBigSize__stickyBar_top" />
        </div>
        {/* <div className="MainBigSize__stickyBar_bottom_container">
          <ScrollBar />
        </div> */}
      </div>
      <motion.div
        className="Artist__container"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.2,
          stiffness: 100,
          type: "tween",
          duration: 0.5,
        }}
      >
        <div className="Artist__wrapper">
          <div className="Artist__Header__container">
            <Header
              sectionPhoto={galleryLogo}
              phrase="ITO GALLERY is our in house market
              place, (both physical and digital)
              designed to host our team and equipped to exhibit the works of our multidiciplinary artists."
            />
          </div>
          <div className="Artist__content_wrapper">
            <p>
              <span style={{ background: "black", color: "white" }}>NFT</span>{" "}
              DROPS
            </p>
            <div className="Artist__box_container">
              <div className="Artist__box_header" ref={wrapperBox}>
                <NameSlide firtsName="/// BY ALEXANDRO GUSSO" lastName="ISIA" />
              </div>
              <div className="Artist__box_wrapper_content">
                <div className="Artist__content_left">
                  <p className="Artist_float_numbers">00000 01</p>

                  <div className="Artist__card_container">
                    <Card
                      image={isiaIcon}
                      smallPhrase={`"ISIA" #0000018283`}
                      autor="Created by Alexandro Gusso"
                      middlePhrase="sold for 0.04ETH"
                      imageInfo={true}
                      phrase="The portals are the graphic representation of an awakening moment, they are the point of no return, an interdimensional passage through which one can bridge the regular state of mind with altered states of conciousness, the"
                    />
                    <div
                      style={{
                        position: "relative",
                        width: "5%",
                        height: "98%",
                      }}
                    >
                      <p className="Artist_float_code">
                        {
                          '{"internalType":"Kosmovisiones","name":"collectionSize2222","type":soul"uint1"}'
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Artist__content_right">
                  <div className="Artist__content_right_content">
                    <div>
                      <p>
                        Kósmovisiones is a series of 2222 generative light
                        portals conceptualized and brought to the metaverse by
                        artist Rodrigo Salcedo in collaboration with ITO LAB.
                        For Rodrigo, achieving altered states of consciousness
                        meant an unprecedented rupture in the way we perceive
                        life. He described this metamorphosis of the mind as
                        "the opening of a portal that could never be closed."
                        Now, through recent advances in digital technologies and
                        after one year of artistic exploration, we can share
                        with the metaverse how these transcendental experiences
                        shaped the artistry and vision for this unique series.
                      </p>
                      <p>
                        The portals are the graphic representation of an
                        awakening moment, they are the point of no return, the
                        interdimensional passage through which one can bridge
                        the physical world with the rest of the kosmos... A
                        genesis series full of magic, spirituality and
                        mysticism, that inhabits both the physical and digital
                        world, establishing an interesting dialogue between both
                        of them, and leaving some questions for the community to
                        ponder: Will technology and its digital tools replace
                        art as we know it? Or is it that both will eventually
                        coexist and live in harmony? Are we as a species
                        destined to inhabit multiple realities? Click the link
                        below to find out.
                      </p>
                      {/* <div className="Artist__content_right_content_button">
                        <a href="/appointment">appointments</a>
                      </div> */}
                    </div>
                  </div>
                  <div className="Artist__content_right_bottom">
                    <div className="Artist__content_img">
                      <img src={twiter} alt="" />
                    </div>
                    <div className="Artist__content_img">
                      <img src={instagram} alt="" />
                    </div>
                    <div className="Artist__content_img">
                      <img src={boat} alt="" />
                    </div>
                    <div className="Artist__content_img">
                      <img src={powered} alt="" />
                    </div>
                    <div className="Artist__content_img">
                      <img src={multiLine} alt="" />
                    </div>
                    <div className="Artist__content_img">
                      <img src={vector} alt="" />
                    </div>
                    <div className="Artist__content_img">
                      <img src={qr} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Kosmovisiones;
