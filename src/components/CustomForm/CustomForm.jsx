import React, { useState } from "react";
import upload from "../../assets/images/upload.png";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import Location from "../Location/Location";
import useForm from "../../hooks/useForm";
import { countries } from "../../Countrys.jsx";

import "./CustomForm.css";

const CustomForm = ({ handleShowFilter }) => {
  const [isWork, setIsWork] = useState(false);

  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [inputFile, setInputFile] = useState('');
  const [resetDefault, setResetDefault] = useState(false);

  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    message: "",
    link: "",
  });

  const { name, email, message, link } = formValues;

  const [selects, setSelects] = useState({
    country: "",
    area: "",
    service: "",
  });

  const { country, area, service } = selects;

  const validateEmail = (email) => {
    const expReg = 

      
     /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    let isValid = expReg.test(email);

    if (!isValid) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
    return isValid;
  };

  const validateInputFile = (e) => {
    let files = e.target.files[0].name
    setInputFile(files);
    console.log(files);

    return files;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isWork) {
      if (
        !name.trim() ||
        !email.trim() ||
        !message.trim() ||
        !country.trim() ||
        !area.trim()
      ) {
        setError(true);

        return;
      }

      if (!inputFile.trim() && !link.trim()) {
        setError(true);
        alert('true')
        return;
      }

      if (inputFile.trim() || !link.trim()) {
        setError(false);
      }

      if (!inputFile.trim() || link.trim()) {
        setError(false);
      }
    }

    if (!isWork) {
      if (
        !name.trim() ||
        !email.trim() ||
        !message.trim() ||
        !country.trim() ||
        !service.trim()
      ) {
        setError(true);
        return;
      }
    }

    if (!validateEmail(email)) {
      return;
    }

     

    const getIn = {
      name,
      email,
      country,
      service,
      message,
    };

    const workWithUs = {
      name,
      email,
      country,
      area,
      message,
      link,
      inputFile,
    };

    setSelects({
      country: "",
      area: "",
      service: "",
    });

    setInputFile('')

    setResetDefault(true);

    reset();

    handleShowFilter();
  };

  const services = [
    {
      id: 1,
      name: "Collaboration",
    },
    {
      id: 2,
      name: "Consulting",
    },
    {
      id: 3,
      name: "I'm an artist",
    },
    {
      id: 4,
      name: "Other",
    },
  ];

  const areas = [
    {
      id: 1,
      name: "Artist",
    },
    {
      id: 2,
      name: "Tatooist",
    },
    {
      id: 3,
      name: "3d Designer",
    },
    {
      id: 4,
      name: "Other",
    },
  ];

  return (
    <div className="CustomForm__container">
      <div className="CustomForm__wrapper">
        {/* buttons */}
        <div className="CustomForm__buttons_container">
          <div style={{ display: "flex" }}>
            <div
              id="title"
              onClick={() => setIsWork(false)}
              className={
                !isWork ? "CustomForm__button_active" : "CustomForm__button"
              }
            >
              Get in touch
            </div>
            <div
              id="title"
              onClick={() => setIsWork(true)}
              className={
                isWork ? "CustomForm__button_active" : "CustomForm__button"
              }
              style={{ marginLeft: "1em" }}
            >
              Work with us
            </div>
          </div>
          <div className="CustomForm__icon_arrow">{">>"}</div>
        </div>
        {/* END buttons */}

        {isWork ? (
          <div className="CustomForm__form_container">
            <form>
              <div className="CustomForm__form_wrapper">
                <input
                  className="CustomForm__form_input_text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="CustomForm__form_input_text"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
              </div>
              <div className="CustomForm__form_select_container">
                <CustomSelect
                  defaultText="Country"
                  optionsList={countries}
                  selects={selects}
                  setSelects={setSelects}
                  resetDefault={resetDefault}
                  setResetDefault={setResetDefault}
                />
                <CustomSelect
                  defaultText="Area"
                  optionsList={areas}
                  selects={selects}
                  setSelects={setSelects}
                  resetDefault={resetDefault}
                  setResetDefault={setResetDefault}
                />
              </div>
              <div>
                <textarea
                  style={{ resize: "none" }}
                  type="text"
                  placeholder="Message"
                  className="CustomForm__form_input_area"
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="CustomFrom__upload_wrapper">
                <div className="CustomForm__upload_container">


                  {
                    inputFile ? (
                      <p className="CustomForm__upload_label" accept="application/pdf" htmlFor="">
                      {inputFile}
                    </p>
                    ) : (
                      <p className="CustomForm__upload_label" htmlFor="">
                      Upload Portafolio
                    </p>
                    )
                  }
                 
                  <input
                    type="file"
                    size={100}
                    className="file"
                    onChange={(e) => {
                      validateInputFile(e);
                    }}
                  />
                  <img
                    src={upload}
                    alt="upload"
                    className="profile__icon"
                    id="title"
                  />


                </div>
                <div>
                  <input
                    placeholder="Link to profile"
                    type="text"
                    className="CustomForm__input_url"
                    name="link"
                    value={link}
                    onChange={handleInputChange}
                    accept="application/pdf"
                  />
                </div>
              </div>
              <div className="CustomForm_submit_container_2">
                {errorEmail && (
                  <p className="CustomForm__error">invalid email *</p>
                )}
                {error && (
                  <p className="CustomForm__error">
                    submit pdf and/or add link to continue *
                  </p>
                )}
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  className="CustomForm__form_submit_button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="CustomForm__form_container">
            <form>
              <div className="CustomForm__form_wrapper">
                <input
                  className="CustomForm__form_input_text"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="CustomForm__form_input_text"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="CustomForm__form_select_container">
                <CustomSelect
                  defaultText="Country"
                  optionsList={countries}
                  selects={selects}
                  setSelects={setSelects}
                  resetDefault={resetDefault}
                  setResetDefault={setResetDefault}
                />
                <CustomSelect
                  defaultText="Service"
                  optionsList={services}
                  selects={selects}
                  setSelects={setSelects}
                  resetDefault={resetDefault}
                  setResetDefault={setResetDefault}
                />
              </div>
              <div>
                <textarea
                  style={{ resize: "none" }}
                  type="text"
                  placeholder="Message"
                  className="CustomForm__form_input_area"
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="CustomForm__form_submit_container">
                {errorEmail && (
                  <p className="CustomForm__error">invalid email *</p>
                )}
                {error && (
                  <p className="CustomForm__error">
                    please fill in all the fields to continue *
                  </p>
                )}
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  id="title"
                  className="CustomForm__form_submit_button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Location />
    </div>
  );
};

export default CustomForm;
