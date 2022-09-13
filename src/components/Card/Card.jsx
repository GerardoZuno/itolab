import React from "react";
import ito from "../../assets/images/ITOLAB.svg";
import bar from "../../assets/images/bar.svg";
import vector from "../../assets/images/vector.svg";
import shades from "../../assets/images/shades.svg";
import dotQr from "../../assets/images/dot-qr.png";
import powered from "../../assets/images/powered.svg";
import mundiIcon from "../../assets/images/mundi.png";

import artwork from "../../assets/images/card-info-artwork.png";
import "./Card.css";

const Card = ({
  image,
  imageInfo,
  phrase,
  smallPhrase,
  middlePhrase,
  autor,
}) => {
  return (
    <div className="card__container">
      <div className="card__wrapper">
        <div className="card__img_container">
          <img src={image} alt="" />
        </div>
        <div className="card__info_container">
          <div className="card__info_left">
            <div className="card__info_left_upper">
              {smallPhrase && <p>{smallPhrase}</p>}
              {autor && <p>{autor}</p>}
              {middlePhrase && <p>{middlePhrase}</p>}
            </div>
            <div className="card__info_left_bottom">
              <p>{phrase}</p>
              <div className="card__info_left_bottom_images">
                <img src={powered} alt="" />
                <img src={ito} alt="" />
                <img src={bar} alt="" />
                <img src={vector} alt="" />
              </div>
            </div>
          </div>
          <div className="card__info_right">
            <div className="card__info_right_img">
              {imageInfo && <img src={mundiIcon} alt="" />}
            </div>
            <div className="card__info_right_img_2">
              <div className="card__info_right_img_wrapper">
                <img src={shades} alt="" className="card_info_icon" />
                <img src={dotQr} alt="" className="card_info_icon_2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
