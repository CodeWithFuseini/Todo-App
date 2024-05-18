import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

const Card = () => {
  return (
    <div className="card" style={{ width: "600px" , marginTop: '20px' }}>
      <CardHeader title="Todo app" backgroundColor= "rgb(7 63 144)" />
      <CardBody />
    </div>
  );
};

export default Card;
