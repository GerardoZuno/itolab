import React, { useEffect, useState } from "react";
import polygon from "../../assets/images/polygon.png";

import "./CustomSelect.css";

const CustomSelect = ({
  defaultText,
  optionsList,
  selects,
  setSelects,
  initialState = "",
  resetDefault,
  setResetDefault,
 
}) => {
  const [defaultSelectText, setDefaultSelectText] = useState("");

  const [showOptionList, setShowOptionList] = useState(false);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    if (resetDefault) {
      setDefaultSelectText(initialState);
      setResetDefault(false);
    }
    setDefaultSelectText(defaultText);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [defaultText, initialState, resetDefault, setResetDefault]);

  const handleClickOutside = (e) => {
    if (
      !e.target.classList.contains("custom-select-option") &&
      !e.target.classList.contains("selected-text")
    ) {
      setShowOptionList(false);
    }
  };

  const handleListDisplay = () => {
    setShowOptionList(!showOptionList);
  };

  const handleOptionClick = (e) => {
    setDefaultSelectText(e.target.getAttribute("data-name"));

    console.log(e.target.getAttribute("name"))

    if (e.target.getAttribute("name") === "Country") {
      setSelects({
        ...selects,
        country: e.target.getAttribute("data-name"),
      });
    }

    if (e.target.getAttribute("name") === "Area") {
      setSelects({
        ...selects,
        area: e.target.getAttribute("data-name"),
      });
    }

    if (e.target.getAttribute("name") === "Service") {
      setSelects({
        ...selects,
        service: e.target.getAttribute("data-name"),

      });

    }

  

    if (e.target.getAttribute("name") === "Size Range") {
      setSelects({
        ...selects,
        sizeRange: e.target.getAttribute("data-name"),
      });

    }

    if (e.target.getAttribute("name") === "Artist") {
      setSelects({
        ...selects,
        artist: e.target.getAttribute("data-name"),
      });

    }



    setShowOptionList(false);
  };

  return (
    <div className="custom-select-container">
      <div
        className={showOptionList ? "selected-text" : "selected-text"}
        onClick={() => handleListDisplay()}
      >
        {defaultSelectText}
        <div className="custom-select-button">
          {/* insert image here and adjust the size */}
          <img src={polygon} alt="polygon" className="custom-select-image" />
        </div>
      </div>
      {showOptionList && (
        <ul className="select-options">
          {optionsList.map((option) => {
            return (
              <li
                className="custom-select-option"
                data-name={option.name}
                key={option.id}
                onClick={handleOptionClick}
                name={defaultText}
              >
                {option.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
