import React from "react";

import Heading from "../../UI/Heading";
import ContactForms from "./ContactForms";

const contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__title">
          <Heading type="h5">Contact Us</Heading>
        </div>
        <div className="contact__content">
          <ContactForms />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9398074582473!2d107.6115502153752!3d-6.897802969420652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64e3c924ddf%3A0x1a243802bbf96ff5!2sCO%26CO%20Space!5e0!3m2!1sid!2sid!4v1606647056846!5m2!1sid!2sid"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </div>
  );
};

export default contact;
