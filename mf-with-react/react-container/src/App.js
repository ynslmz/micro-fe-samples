import React from "react";
import VueChild from "./components/VueChild";
import ReactChild from "./components/ReactChild";
export default () => {
  const card = {
    border: "1px solid #1f778d",
    backgroudColor: "#f3fdff",
    borderRadius: "10px",
    padding: "20px",
    color: "#1F778D",
    margin: "20px",
  };

  return (
    <div style={card}>
      Container : React
      <hr />
      <VueChild />
      <ReactChild />
    </div>
  );
};
