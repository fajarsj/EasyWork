import React from "react";

import Heading from "../../UI/Heading";

import apple from "../../../assets/images/5-partners/apple.png";
import airbnb from "../../../assets/images/5-partners/airbnb.png";
import google from "../../../assets/images/5-partners/google.png";
import nvidia from "../../../assets/images/5-partners/nvidia.png";
import tesla from "../../../assets/images/5-partners/tesla.png";
import samsung from "../../../assets/images/5-partners/samsung.png";
import facebook from "../../../assets/images/5-partners/facebook.png";
import microsoft from "../../../assets/images/5-partners/microsoft.png";

const partner = () => {
  return (
    <div className="partner">
      <div className="container">
        <div className="partner__title">
          <Heading type="h5">We've worked with</Heading>
        </div>
        <div className="partner__logo">
          <img src={apple} alt="Apple Logo" />
          <img src={airbnb} alt="Airbnb Logo" />
          <img src={google} alt="Google Logo" />
          <img src={nvidia} alt="Nvidia Logo" />
          <img src={tesla} alt="Tesla Logo" />
          <img src={samsung} alt="Samsung Logo" />
          <img src={facebook} alt="Facebook Logo" />
          <img src={microsoft} alt="Microsoft Logo" />
        </div>
      </div>
    </div>
  );
};

export default partner;
