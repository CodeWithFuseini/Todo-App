import React from "react";
import CardTitle from "./CardTitle";
import CardButton from "./CardButton";

const CardHeader = ({ title, backgroundColor }) => {
  return (
    <>
      <div
        className="card-header d-flex justify-content-between"
        style={{ backgroundColor: backgroundColor }}
      >
        <CardTitle title={title} titleColor='white' />
        <CardButton cardHeader='Add Post' />
      </div>
    </>
  );
};
export default CardHeader;
