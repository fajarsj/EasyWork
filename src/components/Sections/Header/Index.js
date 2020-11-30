import React from "react";

import Navigation from "../../Navigation";
import HeaderContent from "./HeaderContent";

const header = () => {
  return (
    <div className="header">
      <div className="container">
        <Navigation />
        <HeaderContent
          title="Make development easy with us."
          description="Doing development can never be easy, and it takes time and resources. We at EasyWork has the solution"
        />
      </div>
    </div>
  );
};

export default header;
