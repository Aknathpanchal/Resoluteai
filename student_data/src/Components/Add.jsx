import { useState } from "react";
import React from "react";
import axios from "axios";
import D_T from "./D_T";

function Add() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [batch, setBatch] = useState("");
  const [division, setDivision] = useState("");
  const [roll, setRoll] = useState("");
  const [ad1, setAd1] = useState("");
  const [ad2, setAd2] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [data, setdata] = useState([]);

  function handleform(
    firstName,
    middleName,
    lastName,
    batch,
    division,
    roll,
    ad1,
    ad2,
    landmark,
    city,
    pin
  ) {
    if (
      firstName &&
      middleName &&
      lastName &&
      batch &&
      division &&
      roll &&
      ad1 &&
      ad2 &&
      landmark &&
      city &&
      pin
    ) {
      const obj = {
        firstName,
        middleName,
        lastName,
        batch,
        division,
        roll,
        ad1,
        ad2,
        landmark,
        city,
        pin,
      };
      axios.post("http://localhost:8080/student_data", obj).then((res) => {
        console.log(res);

        console.log(res.data);

        setdata([...data, res.data]);
      });
    } else {
      alert("Please fill all required fields");
    }
  }

  return (
    <form>
      <div className="add">
        <div className="same">
          <label htmlFor="name">Add Student</label>
          <div className="date-time">
            {" "}
            <D_T />{" "}
          </div>
        </div>

        <br />
        <div className="info-input">
          <input
            required={true}
            className="input_box"
            type="text"
            placeholder="First Name"
            name="first-name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="text"
            placeholder="Middle Name"
            name="middle-name"
            onChange={(e) => {
              setMiddleName(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="text"
            placeholder="Last Name"
            name="last-name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="number"
            placeholder="Enter Class"
            onChange={(e) => {
              setBatch(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="division"
            placeholder="Enter division"
            onChange={(e) => {
              setDivision(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box roll_no"
            type="number"
            name="roll_no"
            // maxlength="4"
            placeholder="Enter roll Number"
            onChange={(e) => {
              // if(e.target.value.length <= 2) {
              setRoll(e.target.value);
              // }
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
            placeholder="Enter Adress 1"
            onChange={(e) => {
              setAd1(e.target.value);
            }}
          />

          <input
            required={true}
            className="input_box"
            type="text"
            name="ad2"
            placeholder="Enter Adress 2"
            onChange={(e) => {
              setAd2(e.target.value);
            }}
          />
        </div>
        <div className="info-input">
          <input
            required={true}
            className="input_box"
            type="text"
            name="landmark"
            placeholder="Landmark"
            onChange={(e) => {
              setLandmark(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="text"
            name="city"
            placeholder="City"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="number"
            name="pin"
            placeholder="Pincode"
            onChange={(e) => {
              setPin(e.target.value);
            }}
          />
          <button
            className="button-5"
            onClick={() => {
              handleform(
                firstName,
                middleName,
                lastName,
                batch,
                division,
                roll,
                ad1,
                ad2,
                landmark,
                city,
                pin
              );
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Add;
