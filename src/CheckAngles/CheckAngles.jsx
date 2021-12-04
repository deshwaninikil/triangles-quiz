import React, { useState } from "react";
import "./CheckAngles.css";
// import { BrowserRouter as Router, Link, Switch, Route, NavLink } from 'react-router-dom';

const CheckAngles = () => {
  const [angleOne, setAngleOne] = useState("");
  const [angleTwo, setAngleTwo] = useState("");
  const [angleThree, setAngleThree] = useState("");
  const [msg, setMessage] = useState("");

  function checkHandler() {
    if (angleOne > 0 && angleTwo > 0 && angleThree > 0) {
      const sum = Number(angleOne) + Number(angleTwo) + Number(angleThree);
      console.log(angleOne);
      console.log(angleTwo);
      console.log(angleThree);
      console.log(sum);
      if (sum === 180) {
        setMessage("Great! Angles entered by you form a traingle");
      } else {
        setMessage("Oooops! Angles entered by you don't form a traingle");
      }
    } else {
      setMessage("Please enter all the three angles");
    }
  }
  return (
    <div className="angles-section">
      <h3>
        Triangle has three angles, sum of those three angles in triangle is 180°
      </h3>
      <p>
        Enter three angles below and we will let you know if they form triangle
        or not
      </p>
      <div className="angles-div">
        <label>Angle1:</label>
        <input
          type="number"
          placeholder="∠"
          onChange={(e) => setAngleOne(e.target.value)}
        />
      </div>
      <div className="angles-div">
        <label>Angle2:</label>
        <input
          type="number"
          placeholder="∠"
          onChange={(e) => setAngleTwo(e.target.value)}
        />
      </div>
      <div className="angles-div">
        <label>Angle3:</label>
        <input
          type="number"
          placeholder="∠"
          onChange={(e) => setAngleThree(e.target.value)}
        />
      </div>
      <button onClick={checkHandler}>Check</button>
      <div>{msg}</div>
    </div>
  );
};

export default CheckAngles;
