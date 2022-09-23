import { useState } from "react";
import React from "react";
import axios from "axios";
import D_T from "./D_T";
import { useNavigate } from "react-router-dom";

function Edit() {
  let local = JSON.parse(localStorage.getItem("dataId"));

  const [firstNames, setFirstNames] = useState(local.firstName);
  const [middleNames, setMiddleNames] = useState(local.middleName);
  const [lastNames, setLastNames] = useState(local.lastName);
  const [batchs, setBatchs] = useState(local.batch);
  const [divisions, setDivisions] = useState(local.division);
  const [rolls, setRolls] = useState(local.roll);
  const [ad1s, setAd1s] = useState(local.ad1);
  const [ad2s, setAd2s] = useState(local.ad2);
  const [landmarks, setLandmarks] = useState(local.landmark);
  const [citys, setCitys] = useState(local.city);
  const [pins, setPins] = useState(local.pin);

  const navigate = useNavigate();

                const data = {
                firstName: firstNames,
                middleName: middleNames,
                lastName: lastNames,
                batch: batchs,
                division: divisions,
                roll: rolls,
                ad1: ad1s,
                ad2: ad2s,
                landmark: landmarks,
                city: citys,
                pin: pins,
              };
  const handleEdit = (e) => {
      e.preventDefault()

      let id = local.id
    // if (
    //   data.firstName &&
    //   data.middleName &&
    //   data.lastName &&
    //   data.batch &&
    //   data.division &&
    //   data.roll &&
    //   data.ad1 &&
    //   data.ad2 &&
    //   data.landmark &&
    //   data.city &&
    //   data.pin
    // ) 
    
      console.log(id, data);
      axios
        .put(`http://localhost:8080/student_data/${id}`, data)
        .then((res) => {
        //   local.getdatas();
          navigate("/manage_student")})
          .then((res) => {
            alert("Update Successfull")
        })
    }
  

  const handleExit = () => {
    navigate("/manage_student");
  };

  return (
    <form onSubmit={handleEdit}>
      <div className="add">
        <div className="same">
          <label htmlFor="name">Edit Student Data</label>
          <div className="date-time">
            <D_T />
          </div>
        </div>

        <br />
        <div className="info-input">
          <input
            required={true}
            className="input_box"
            type="text"
            //placeholder="First Name"
            name="first-name"
            value={firstNames}
            onChange={(e) => {
              setFirstNames(e.target.value)  ;
            }}
          />
          <input
            required={true}
            className="input_box"
            type="text"
            name="middle-name"
            value={middleNames}
            onChange={(e) => {
              setMiddleNames(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="text"
            //placeholder="Last Name"
            name="last-name"
            value={lastNames}
            onChange={(e) => {
              setLastNames(e.target.value);
            }}
          />
          {/* <input
            required={true}
            className="input_box"
            type="number"
            //placeholder="Enter Class"
            value={batchs}
            onChange={(e) => {
              setBatchs(e.target.value);
            }}
          /> */}
          <select placeholder='Select option'onChange={(e) => {setBatchs(e.target.value)}}>
            <option value='default'>Class</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
          </select>
          <input
            required={true}
            className="input_box"
            type="division"
            //placeholder="Enter division"
            value={divisions}
            onChange={(e) => {
              setDivisions(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box roll_no"
            type="number"
            name="roll_no"
            // maxlength="4"
            //placeholder="Enter roll Number"
            value={rolls}
            onChange={(e) => {
              setRolls(e.target.value);
            }}
          />
        </div>
        <br />

        <div className="adinput same">
          <input
            required={true}
            className="input_box"
            type="text"
            name="ad1"
            value={ad1s}
            //placeholder="Enter Adress 1"
            onChange={(e) => {
              setAd1s(e.target.value);
            }}
          />

          <input
            required={true}
            className="input_box"
            type="text"
            name="ad2"
            value={ad2s}
            //placeholder="Enter Adress 2"
            onChange={(e) => {
              setAd2s(e.target.value);
            }}
          />
        </div>
        <div className="info-input">
          <input
            required={true}
            className="input_box"
            type="text"
            name="landmark"
            //placeholder="Landmark"
            value={landmarks}
            onChange={(e) => {
              setLandmarks(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="text"
            name="city"
            //placeholder="City"
            value={citys}
            onChange={(e) => {
              setCitys(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="number"
            name="pin"
            value={pins}
            //placeholder="Pincode"
            onChange={(e) => {
              setPins(e.target.value);
            }}
          />
          <button
            className="button-5"
            type='submit'
          >
            Update
          </button>
          <button className="button-5" onClick={handleExit}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );

}
export default Edit;
