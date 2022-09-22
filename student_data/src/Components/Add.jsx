import { useState } from "react";
import React from "react";

function Add({ handleform }) {
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

  return (
    <div className="add">
      <div className="same">
        <label htmlFor="name">Add Student</label>
        <div className="date-time"> date&time </div>
      </div>

      <br />
      <div className="info-input">
        <input
          required={true}
          className="input_box"
          type="text"
          placeholder="First Name"
          id="first-name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          required={true}
          className="input_box"
          type="text"
          placeholder="Middle Name"
          id="middle-name"
          onChange={(e) => {
            setMiddleName(e.target.value);
          }}
        />
        <input
          required={true}
          className="input_box"
          type="text"
          placeholder="Last Name"
          id="last-name"
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
          className="input_box"
          type="number"
          placeholder="Enter roll Number"
          onChange={(e) => {
            setRoll(e.target.value);
          }}
        />
      </div>
      <br />

      <div className="adinput same">
        <input
          required={true}
          className="input_box"
          type="text"
          placeholder="Enter Adress 1"
          onChange={(e) => {
            setAd1(e.target.value);
          }}
        />

        <input
          required={true}
          className="input_box"
          type="text"
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
          placeholder="Landmark"
          onChange={(e) => {
            setLandmark(e.target.value);
          }}
        />
        <input
          required={true}
          className="input_box"
          type="text"
          placeholder="City"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <input
          required={true}
          className="input_box"
          type="number"
          placeholder="Pincode"
          onChange={(e) => {
            setPin(e.target.value);
          }}
        />{" "}
        <br />
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
  );
}

export default Add;
