import React, { useState } from "react";
import "./CalculateArea.css";

const CalculateArea = () => {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [msg, setMessage] = useState("");

  function calculateHandler() {
    console.log("Base : " + base);
    console.log("Height : " + height);

    if (base > 0 && height > 0) {
      let area = (Number(base) * Number(height)) / 2;

      console.log("Area :" + area);
      setMessage(`Area of the triangle is ${area}`);
    } else {
      setMessage("Please enter base and height both");
    }
  }

  return (
    <div className="area-section">
      <h3>Please enter base and height of traingle to calculate it's area</h3>
      <div className="area-div">
        <label>Enter base</label>
        <input type="number" onChange={(e) => setBase(e.target.value)} />
      </div>
      <div className="area-div">
        <label>Enter height</label>
        <input type="number" onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button onClick={calculateHandler}>Calculate</button>
      <div>{msg}</div>
    </div>
  );
};

export default CalculateArea;
