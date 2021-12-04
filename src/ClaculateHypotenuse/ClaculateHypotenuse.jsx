import React, { useState } from "react";
import "./ClaculateHypotenuse.css";

const ClaculateHypotenuse = () => {
  const [sideOne, setSideOne] = useState("");
  const [sideTwo, setSideTwo] = useState("");
  const [msg, setMessage] = useState("");

  function checkHypotenuse() {
    if (sideOne > 0 && sideTwo > 0) {
      console.log("sideOne: " + sideOne);
      console.log("sideTwo: " + sideTwo);

      let c = Math.sqrt(sideOne ** 2 + sideTwo ** 2);
      console.log("Hypotenuse" + c.toFixed(3));
      setMessage("Hypotenuse of trainagle is" + c.toFixed(3));
    } else {
      setMessage("Please enter valid side");
    }
  }
  return (
    <div className="hypo-section">
      <h3>
        To know the Hypotenuse of triangle, please enter it's other two sides
      </h3>
      <div className="hypo-div">
        <label>Side1:</label>
        <input type="number" onChange={(e) => setSideOne(e.target.value)} />
      </div>
      <div className="hypo-div">
        <label>Side2:</label>
        <input type="number" onChange={(e) => setSideTwo(e.target.value)} />
      </div>
      <button onClick={checkHypotenuse}>Calculate</button>

      <div>{msg}</div>
    </div>
  );
};

export default ClaculateHypotenuse;
