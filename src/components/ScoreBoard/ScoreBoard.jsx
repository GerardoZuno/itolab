import React from "react";
import rectangle from "../../assets/images/rectangle.png";
import "./ScoreBoard.css";

const LeaderBoard = () => {
  return (
    <div className="top__scores_wrapper">
      <div className="top__scores_bar">
        <div className="top__scores">
          <p>Top Scores</p>
        </div>
      </div>
      <div className="top__scores_players">
        <div className="top__play_text">
          <p>Play to beat</p>
        </div>
        <div className="top__scores_container">
          <div className="top__scores_rankings">
            <div className="top__players">
              <p>1. El Tona</p>
              <p>456</p>
            </div>
            <div className="top__players">
              <p>2. Rorrockstar</p>
              <p>455</p>
            </div>
            <div className="top__players">
              <p>3. El Jimbo</p>
              <p>430</p>
            </div>
            <div className="top__players">
              <p>4. JC</p>
              <p>400</p>
            </div>
            <div className="top__players">
              <p>5. Andres</p>
              <p>398</p>
            </div>
          </div>
          <div className="top__scores_rankings">
            <div className="top__players">
              <p>6. El Tona</p>
              <p>456</p>
            </div>
            <div className="top__players">
              <p>7. Rorrockstar</p>
              <p>455</p>
            </div>
            <div className="top__players">
              <p>8. El Jimbo</p>
              <p>430</p>
            </div>
            <div className="top__players">
              <p>9. JC</p>
              <p>400</p>
            </div>
            <div className="top__players">
              <p>10. Andres</p>
              <p>398</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
