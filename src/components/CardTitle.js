import React from "react";

const CardTitle = ({title , titleColor}) => {
  return (
    <React.Fragment>
      <h3 className={`text text-${titleColor}`}>{title}</h3>
    </React.Fragment>
  );
};

export default CardTitle;
