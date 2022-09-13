import React from "react";
import marker from "../../assets/images/marker.png";
import "./Location.css";

const Location = ({ dots = true }) => {
  return (
    <div className="Location">
      {dots && (
        <>
          <div className="main__bar_container">
            <div className="main__bar" />
          </div>
          <div className="main__dots_container">
            <div className="main__dot main__dot_1" />
            <div className="main__dot main__dot_2" />
            <div className="main__dot main__dot_3" />
            <div className="main__dot main__dot_4" />
            <div className="main__dot main__dot_5" />
            <div className="main__dot main__dot_6" />
            <div className="main__dot main__dot_7" />
            <div className="main__dot main__dot_8" />
            <div className="main__dot main__dot_9" />
          </div>
        </>
      )}
      <div className="main__location">
        <div className="main__inside">
          <div className="main__location_info">
            <div className="main__location_icon">
              <img
                src={marker}
                alt="marker"
                className="main__location_marker"
              />
            </div>
            <div className="main__location_address">
              <p>
                CHIHUAHUA 222ROMA NTE., CUAUHTÉMOC, 06700 CIUDAD DE MÉXICO, CDMX{" "}
              </p>
            </div>
          </div>

          <div className="main__location_coordinates">
            <p>19.41658054397012, -99.16435399935689</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
