import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import designLogo from "../../assets/images/design-logo.svg";
import InfoDate from "../../components/InfoDate";
import DesignBoxSmall from "../../components/DesignBox/DesignBoxSmall";
import "./DesignSmall.css";

const ItoDesignSmall = () => {
  const wrapperBox = useRef(null);
  const info = useRef(null);
  const [infoHeight, setInfoHeight] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);

  useEffect(() => {
    const infoHeight = info.current.offsetHeight;
    const boxHeight = wrapperBox.current.offsetHeight;

    setBoxHeight(boxHeight);
    setInfoHeight(infoHeight);
  }, []);
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{
        delay: 0.2,
        stiffness: 100,
        type: "tween",
        duration: 0.5,
      }}
      className="DesignSmall__container"
    >
      <div className="DesignSmall__wrapper">
        <div className="DesignSmall__Header_container">
          <Header
            sectionPhoto={designLogo}
            phrase="ITO D3SGN is where most of the magic happens, here we create all of our digital art, including renders,
            animations, UI/UX and a whide variety of graphics.
            "
          />
        </div>
        <div className="DesignSmall__maincontent_wrapper">
          <div className="DesignSmall__subtitle">
            <h3>
              <span>CREATIVE </span> <span>LAB</span>
            </h3>
          </div>
          <div style={{ width: "100%" }}>
            <div className="DesignSmall__box_text">
              <p>
                Alongside our blockchain specialists we are equiped to develop
                any type of digital asset, enough to be able to complement your
                vision and bring it to the metaverse..
              </p>
              <p>
                Through our specialized services, we can find offerings that go
                from art direction and production of artistic projects, to a
                complete set of integral branding services.
              </p>
              <p>
                Through our specialized services, we can find offerings that go
                from art direction and production of artistic projects, to a
                complete set of integral branding services. With effort we have
                gathered an unprecedented team of talents, all brought together
                to complement the creative needs of web 3 ,able to potentialize
                any projects and take them to higher levels. ITO LAB thrives
                from collaborating with emergent artists, tech companies and
                multidisciplinary creative projects, helping in the process to
                transcend their artistic vision into to the digital world (or
                the other way around).
              </p>
              <p>
                We tailor our packages to perfectly accommodate any of our
                clients needs.
              </p>
            </div>
            <div className="DesignSmall__subtitle2">
              <h3>
                ART <span>DIRECTION </span> // <span>PRODUCTION</span>
              </h3>
            </div>
            <div ref={wrapperBox} style={{ height: "400px", width: "100%" }}>
              <div style={{ height: "100%" }}>
                <DesignBoxSmall />
                <div style={{ width: "100%" }} ref={info}>
                  <InfoDate />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <ScrollBar />
      </div>
    </motion.div>
  );
};

export default ItoDesignSmall;
