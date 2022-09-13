import React from "react";
import thunderIcon from "../../assets/images/thunder.svg";
import handlerIcon from "../../assets/images/handler.svg";
import statutteIcon from "../../assets/images/statutte-minimal.svg";

import "./DesignBox.css";

const DesignBox = () => {
  return (
    <div className="DesignBox__container">
      <div className="DesignBox__wrapper">
        {/* FIRTS SIDE */}
        <div className="DesignBox__item__container">
          <div className="DesignBox__item__wrapper">
            <div className="DesignBox__item__left">
              <div className="DesignBox__item_head">
                <img src={thunderIcon} alt="" /> <p>Secondary media</p>
              </div>
              <p>
                We can help your project Creation and development of digital
                assets for social media: We will take the utilities and perks of
                NFTs as a medium to unlock new revenues and potentialize
                engagement with your audience and clientele.
              </p>
            </div>
            <div className="DesignBox__item__right">
              <img src={handlerIcon} alt="" />
            </div>
          </div>
        </div>
        {/* SECOND SIDE */}
        <div className="DesignBox__item__container">
          <div className="DesignBox__item__wrapper">
            <div className="DesignBox__item__left">
              <div className="DesignBox__item_head">
                <img src={thunderIcon} alt="" /> <p>Nft collection</p>
              </div>
              <p>
                Ito lab will provide you and your team with all the necessary
                tools to succesfully manage your NFT collection, from strategic
                advising to artistic direction or creative production, we can
                potentialize your vision and bring it into web 3 successfully,
              </p>
            </div>
            <div className="DesignBox__item__right">
              <img src={statutteIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignBox;
