import React from "react";

const Card = (props) => {
  const { clicked, children } = props;

  return (
    <div className="card" onClick={clicked}>
      {children}
    </div>
  );
};

export default Card;
