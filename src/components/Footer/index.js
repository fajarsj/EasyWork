import React from "react";

import Logo from "../UI/Logo";
import Heading from "../UI/Heading";

const footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__company">
          <Logo height={80} />
          <Heading type="h3">Easy Work</Heading>
        </div>
        <div className="footer__address">
          <Heading type="h4">Address</Heading>
          <p>
            52-1, Jalan Awan Hijau, Taman Overseas Union, 58200 Kuala Lumpur,
            Wilayah Persekutuan Kuala Lumpur
          </p>
        </div>
        <div className="footer__additional-info">
          <Heading type="h4">Contact</Heading>
          <p>123123123123</p>
          <Heading type="h4">Fax</Heading>
          <p>123123123123</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
