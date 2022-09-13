import React from "react";
import "./NameSlide.css";

const NameSlide = ({ firtsName, lastName }) => {
  return (
    <div className="NameSlide__container">
      <div className="scroll text4">
        <div>
          {`${firtsName} `} <span>{`${lastName} `} </span> {`${firtsName} `}
          <span>{`${lastName} `} </span> {`${firtsName} `}
          <span>{`${lastName} `} </span>
          {`${firtsName} `} <span>{`${lastName} `} </span>
        </div>
        <div>
          {`${firtsName} `} <span>{`${lastName} `} </span> {`${firtsName} `}
          <span>{`${lastName} `} </span> {`${firtsName} `}
          <span>{`${lastName} `} </span>
          {`${firtsName} `} <span>{`${lastName} `} </span>
        </div>
      </div>
    </div>
  );
};

export default NameSlide;
