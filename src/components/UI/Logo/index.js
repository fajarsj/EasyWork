import React from "react";

import easyWorkLogo from "../../../assets/images/1-header/logo.png";

const logo = (props) => {
  const { height } = props;

  return (
    <div className="logo" style={{ height: height }}>
      <img src={easyWorkLogo} alt="Logo" />
    </div>
  );
};

export default logo;
