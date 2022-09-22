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
    <div style={{marginTop:"4%"}} >
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
        <label for="name">Add Student</label>
        <div className="date-time"></div>
        </div>
      
			<br />
            <div className="info-input" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1%"}}>
            <input
        required={true}
        className="text-gray-800 pl-2 rounded-lg"
        type="text"
        placeholder="First Name"
        id="first-name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        required={true}
        className="text-gray-800 pl-2 rounded-lg"
        type="text"
        placeholder="Middle Name"
        id="middle-name"
        onChange={(e) => {
          setMiddleName(e.target.value);
        }}
      />
      <input
        required={true}
        className="text-gray-800 pl-2 rounded-lg"
        type="text"
        placeholder="Last Name"
        id="last-name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        required={true}
        className="text-gray-800 pl-2 rounded-lg"
        type="number"
        placeholder="Enter Class"
        onChange={(e) => {
          setBatch(e.target.value);
        }}
      />
      <input
        required={true}
        className="text-gray-800 pl-2 rounded-lg"
        type="division"
        placeholder="Enter division"
        onChange={(e) => {
          setDivision(e.target.value);
        }}
      />
      <input
        required={true}
        className="text-gray-800 pl-2 rounded-lg"
        type="number"
        placeholder="Enter roll Number"
        onChange={(e) => {
          setRoll(e.target.value);
        }}
      />
            </div>
      <br/>

      <div className="adinput" style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
        {/* <div> */}
        <input
        required={true}
        className="text-gray-800 pl-2 rounded-lg"
        type="text"
        placeholder="Enter Adress 1"
        onChange={(e) => {
          setAd1(e.target.value);
        }}
      />
        {/* </div> */}
        {/* <div> */}
        <input
        required={true}
        className="text-gray-800 pl-2 rounded-lg"
        type="text"
        placeholder="Enter Adress 2"
        onChange={(e) => {
          setAd2(e.target.value);
        }}
      />
        {/* </div> */}
       
    </div>
    <div className="info2-input" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
    <input
        required={true}
        className="text-gray-800 pl-2 rounded-lg"
        type="text"
        placeholder="Landmark"
        onChange={(e) => {
          setLandmark(e.target.value);
        }}
      />
      <input
        required={true}
        className="text-gray-800 pl-2 rounded-lg"
        type="text"
        placeholder="City"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <input
        required={true}
        className="text-gray-800 pl-2 rounded-lg"
        type="number"
        placeholder="Pincode"
        onChange={(e) => {
          setPin(e.target.value);
        }}
      />{" "}
      <br />
      <button
        className=" text-center  px-4 py-2  m-0 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
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
