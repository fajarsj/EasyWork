import React from "react";
import Heading from "../../../UI/Heading";

import banner from "../../../../assets/images/2-banner/banner.png";

const headerContent = (props) => {
  const { title, description } = props;

  return (
    <div className="header__content">
      <div className="header__content__description">
        <Heading type="h1" color="light">
          {title}
        </Heading>
        <p>{description}</p>
      </div>
      <div className="header__content__image">
        <img src={banner} alt="Banner Image" />
      </div>
    </div>
  );
};

export default headerContent;
