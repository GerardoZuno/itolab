import React from "react";
import longArrow from "../../assets/images/longArrow.svg";
import desingIcon from "../../assets/images/3-ito-design.svg";
import folderIcon from "../../assets/images/folder.svg";
import studioIcon from "../../assets/images/tatto-studio.svg";
import galleryIcon from "../../assets/images/frame-gallery.svg";
import "./GridAboutSmall.css";

const GridAboutSmall = () => {
  return (
    <div className="GridAboutSmall__container">
      {/* LEFT SIDE */}
      <div className="GridAboutSmall__left_container">
        <div className="GridAboutSmall__item">
          <div className="GridAboutSmall__subitem_top">
            <img src={desingIcon} alt="" />
          </div>
          <div className="GridAboutSmall__subitem_bottom">
            <div className="GridAboutSmall__subitem_bottom_left">
              <img src={folderIcon} alt="" />
            </div>
            <div className="GridAboutSmall__subitem_bottom_right">
              <p>デザインスタジオ</p>
            </div>
          </div>
        </div>
        <div className="GridAboutSmall__item">
          <div className="GridAboutSmall__subitem_top">
            <img src={studioIcon} alt="" />
          </div>
          <div className="GridAboutSmall__subitem_bottom">
            <div className="GridAboutSmall__subitem_bottom_left">
              <img src={folderIcon} alt="" />
            </div>
            <div className="GridAboutSmall__subitem_bottom_right">
              <p>タトゥースタジオ</p>
            </div>
          </div>
        </div>
        <div className="GridAboutSmall__item">
          <div className="GridAboutSmall__subitem_top">
            <img src={galleryIcon} alt="" />
          </div>
          <div className="GridAboutSmall__subitem_bottom">
            <div className="GridAboutSmall__subitem_bottom_left">
              <img src={folderIcon} alt="" />
            </div>
            <div className="GridAboutSmall__subitem_bottom_right">
              <p>アートギャラリー</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="GridAboutSmall__right_container">
        <div className="GridAboutSmall__item">
          <div className="GridAboutSmall__item_text">
            <p>
              <span>I</span>s a collective of design, and cryptoart dedicated to
              the development of 3D and various digital assets.
            </p>
          </div>
          <div className="GridAboutSmall__item_link">
            <a href="">Learn more</a>
            <img src={longArrow} alt="" />
          </div>
        </div>
        <div className="GridAboutSmall__item">
          <div className="GridAboutSmall__item_text">
            <p>
              <span>A</span>n inhouse contemporary tattoo studio, a place where
              the physical world collides with the digital one.
            </p>
          </div>
          <div className="GridAboutSmall__item_link">
            <a href="">Learn more</a>
            <img src={longArrow} alt="" />
          </div>
        </div>
        <div className="GridAboutSmall__item">
          <div className="GridAboutSmall__item_text">
            <p>
              <span>T</span>his is our in house market place, equipped to
              exhibit our own individual work, and the work of other digital
              artists.
            </p>
          </div>
          <div className="GridAboutSmall__item_link">
            <a href="">Learn more</a>
            <img src={longArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridAboutSmall;
