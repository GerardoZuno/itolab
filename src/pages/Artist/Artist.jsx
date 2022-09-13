import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import Header from "../../components/Header/Header";
import twiter from "../../assets/images/twiter.svg";
import instagram from "../../assets/images/instagram.svg";
import boat from "../../assets/images/boat.svg";
import powered from "../../assets/images/powered.svg";
import multiLine from "../../assets/images/multi-line.svg";
import vector from "../../assets/images/vector.svg";
import qr from "../../assets/images/qr.svg";
import studioLogo from "../../assets/images/studio-logo.svg";
import Card from "../../components/Card/Card";
import rodrigoIcon from "../../assets/images/rodrigo.png";
import NameSlide from "../../components/NameSlide/NameSlide";
import "./Artist.css";

const Artist = () => {
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
              sectionPhoto={studioLogo}
              phrase="ITO STUDIO is an inhouse contemporary tattoo studio, we implemented blockchain
technology into tattooing, a place
where the physical world collides with the digital one and manages to coexist
in perfect harmony.
 "
            />
          </div>
          <div className="Artist__content_wrapper">
            <p>RESIDENT ARTISTS</p>
            <div className="Artist__box_container">
              <div className="Artist__box_header" ref={wrapperBox}>
                <NameSlide firtsName="/// RODRIGO" lastName="SALCEDO" />
              </div>
              <div className="Artist__box_wrapper_content">
                <div className="Artist__content_left">
                  <p className="Artist_float_numbers">00000 01</p>

                  <div className="Artist__card_container">
                    <Card
                      image={rodrigoIcon}
                      smallPhrase="“Tatooing is more than lines it is art”"
                      autor="Rodrigo Salcedo"
                      middlePhrase="[Loc.*] 40.7548ºN, 73.9774ºW"
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
                        Rodrigo Salcedo Velarca is a multidisciplinary artist
                        born in Guadalajara City, México. <br />
                        Growing up with an artist mother, he was introduced to
                        the art world at a very young age, allowing him to
                        explore its different realms. Eventually discovering the
                        art of tattooing in 2018, where he found a passionate
                        drive and purpose; Now, with only a few years in the
                        industry, he has become one of the most prominent high
                        on-demand tattoo artists in the country, with a list of
                        celebrity clients and international recognition. <br />
                        He’s known for transcending his work through multiple
                        fields with an interdisciplinary focus on digital art
                        and visual media, illustration, painting, fashion, and
                        jewelry design. He currently resides in Mexico City and
                        works at his project studio @ito.estudio
                      </p>
                      <div className="Artist__content_right_content_button">
                        <a href="/appointment">appointments</a>
                      </div>
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

export default Artist;
