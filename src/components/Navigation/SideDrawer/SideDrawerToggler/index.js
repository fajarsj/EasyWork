import React from "react";

const drawerToggle = (props) => {
  const { clicked } = props;

  return (
    <div className="side-drawer__toggle" onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;
