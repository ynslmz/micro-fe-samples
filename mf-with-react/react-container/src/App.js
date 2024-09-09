import React from "react";
import VueChild from "./components/VueChild";
export default () => {
  const card = {
    border: "1px solid #1f778d",
    backgroudColor: "#f3fdff",
    borderRadius: "10px",
    padding: "50px",
    color: "#1F778D",
  };

  return (
    <div style={card}>
      Container : React
      <VueChild />
    </div>
  );
};
