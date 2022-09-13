import React, { useState, useEffect } from "react";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import uploadImg from "../../assets/images/upload-img.svg";
import Location from "../../components/Location/Location";
import { countries } from "../../Countrys";
import "./FormBooking.css";
import useForm from "../../hooks/useForm";


const FormBooking = ({ quitFilter }) => {



  
  const [resetDefault, setResetDefault] = useState(false);
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [references, setReferences] = useState([]);
 







  const [formValues, handleInputChange, reset] = useForm({
         name: '',
         email: '',
         phone: '',
         bodyArea: '',
         concept: '',
  })


 const {name, email, phone, bodyArea, concept} = formValues




 const [selects, setSelects] = useState({
  country: "",
  sizeRange: "",
  artist: "",
});

const { country, sizeRange, artist } = selects;


useEffect(() => {
  if(references.length < 1) {
    document.getElementById('inputFile').value= null;

  }
}, [references.length])


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

const validatePhone = (phone) => {
  const expReg = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
  //  /^[0-9]{10}$/

  let isValid = expReg.test(phone);

  if (isValid) {

     setErrorPhone(false)
     console.log(phone)
  } else {
    


    setErrorPhone(true);
  }
  return isValid;
};



const validateInputFile = (e) => {
   
  

   setReferences([
     {
    name: e.target.files[0].name,
    id: Math.floor(Math.random() * 10000),
   }, ...references])
  
   

  

  return ;
};






const deleteReference  = (id) => {


  
  const removeReference = [...references].filter(reference => reference.id !== id)

  setReferences(removeReference)
  


  


}






  const handleSubmit = (e) => {
    e.preventDefault();
    if(
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
        !bodyArea.trim() ||
        references.length === 0  ||
        !concept.trim() ||
        !country.trim() ||
        !sizeRange.trim() ||
        !artist.trim() 
    ){
      setError(true)
      return
    }

    setError(false)
   
    if (!validateEmail(email)) {
      return;
    }

    if (!validatePhone(+phone)) {
      return;
    }


    const appointment = {
      name,
      email,
      phone,
      bodyArea,
      references,
      concept,
      country,
      sizeRange,
      artist
    }

    console.table(appointment)

    reset();
    setSelects({
      country: "",
      area: "",
      service: "",
    });

    setResetDefault(true);
    setReferences([])


    quitFilter();
  };

  const sizes = [
    { id: 0, name: "1-3cm" },
    { id: 1, name: "3-6cm" },
    { id: 2, name: "6-9cm" },
    { id: 3, name: "9-12cm" },
    { id: 4, name: "12-15cm" },
    { id: 5, name: "15-18cm" },
    { id: 6, name: "18-21cm" },
    { id: 7, name: "21-24cm" },
    { id: 8, name: "24-27cm" },
    { id: 9, name: "27-30cm" },
    { id: 10, name: "27-30cm" },
    { id: 11, name: "half sleeve" },
    { id: 12, name: "full sleeve" },
    { id: 13, name: "full body" },
  ];

  const artists = [
    { id: 0, name: "Rodrigo Salcedo" },
    { id: 1, name: "Andres Salcedo" },
  ];


  return (
    <div className="FormBooking__container">
      <div className="FormBooking__wrapper">
        {/* buttons */}
        <div className="FormBooking__buttons_container">
          <div style={{ display: "flex" }}>
            <div id="title" className="FormBooking__button_active">
              Appointments
            </div>
          </div>
          <div className="">{">>"}</div>
        </div>
        {/* END buttons */}
        <div className="FormBooking__form_container">
          <form>
            <div className="FormBooking__form_wrapper">
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
                onChange={handleInputChange}

              />
            </div>
            <div className="FormBooking__form_wrapper">
              <CustomSelect
               defaultText="Country"
                optionsList={countries}
                selects={selects}
                  setSelects={setSelects}
                resetDefault={resetDefault}
                setResetDefault={setResetDefault}
                 />
              <input
                type="number"
                placeholder="Phone number"
                className="CustomForm__form_input_text"
                name="phone"
                value={phone}
                onChange={handleInputChange}

              />
            </div>
            <div className="FormBooking__form_wrapper">
              <CustomSelect 
              defaultText="Size Range" 
              optionsList={sizes}
              selects={selects}
              setSelects={setSelects}
              resetDefault={resetDefault}
              setResetDefault={setResetDefault}
               />
              <input
                type="text"
                placeholder="Area of the body"
                className="CustomForm__form_input_text"
                name="bodyArea"
                value={bodyArea}
                onChange={handleInputChange}

              />
            </div>
            <div className="FormBooking__form_wrapper">
              <CustomSelect 
              defaultText="Artist"
               optionsList={artists}
               selects={selects}
               setSelects={setSelects}
               resetDefault={resetDefault}
               setResetDefault={setResetDefault}
                />
              <div className="FormBooking__form_upload">
                <input type="file"
                  name="reference"
                  id="inputFile"
                  onChange={(e) => {
                    validateInputFile(e);
                  }}
                 />
               <div className="FormBooking__form_references">
                 {
                   references.length > 0 ? (
                    references.map((reference) => (
                          <div key={reference.id} className="FormBooking__form_reference">

                          <label  className="FormBooking__form_title" > {reference.name} <span onClick={() => deleteReference(reference.id)}>x</span></label>
                          </div>

                    )
                  
                    ))
                    : (
                      <p>Upload reference images:</p>

                    )
                 }
               </div>

                <img src={uploadImg} alt="" />
              </div>
            </div>
            <div className="FormBooking__form_wrapper">
              <textarea
                className="FormBooking__form_wrapper_area"
                style={{ resize: "none" }}
                type="text"
                placeholder="Idea/concept of the piece detaily explained:"
                name="concept"
                value={concept}
                onChange={handleInputChange}

              />
            </div>
            <div className="FormBooking__form_wrapper">
              <div className="FormBooking__form_button">
              {errorEmail &&(
                  <p className="FormBooking__error">invalid email *</p>
               )}
                 {errorPhone && (
                  <p className="FormBooking__error">invalid phone *</p>
               )}
               {error && (
                  <p className="FormBooking__error">
                    please fill in all the fields to continue *
                  </p>
                )}
                <button onClick={(e) => handleSubmit(e)}>submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Location dots={false} />
    </div>
  );
};

export default FormBooking;
