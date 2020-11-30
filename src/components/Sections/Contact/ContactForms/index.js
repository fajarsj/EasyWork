import React, { useState } from "react";

import Card from "../../../UI/Card";
import Button from "../../../UI/Button";

const contactForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubjectValue(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessageValue(e.target.value);
  };

  return (
    <form className="form form-contact">
      <Card>
        <div className="form__group">
          <label className="form__group__label">Name</label>
          <input
            type="text"
            className="form__control"
            placeholder="Enter your name"
            value={nameValue}
            onChange={handleNameChange}
          />
        </div>
        <div className="form__group">
          <label className="form__group__label">Email</label>
          <input
            type="email"
            className="form__control"
            placeholder="Enter your email"
            value={emailValue}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form__group">
          <label className="form__group__label">Subject</label>
          <div className="form__select">
            <select
              className="form__control"
              value={subjectValue}
              onChange={handleSubjectChange}
            >
              <option disabled value="">
                Please select your subject
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form__group">
          <label className="form__group__label">Message</label>
          <textarea
            className="form__control"
            rows="5"
            placeholder="Write your message here"
            value={messageValue}
            onChange={handleMessageChange}
          />
        </div>
        <Button variant="primary">Send</Button>
      </Card>
    </form>
  );
};

export default contactForm;
