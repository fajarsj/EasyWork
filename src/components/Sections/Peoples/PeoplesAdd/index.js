import React, { useState } from "react";

import Heading from "../../../UI/Heading";
import Button from "../../../UI/Button";
import Icon from "../../../UI/Icon";

const peoplesAdd = () => {
  const [nameValue, setNameValue] = useState("");
  const [positionValue, setPositionValue] = useState("");
  const [destiptionValue, setDescriptionValue] = useState("");

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPositionValue(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value);
  };

  return (
    <div className="modal__dialog__body">
      <div className="peoples-add">
        <Heading type="h5">Add People</Heading>
        <div className="peoples-add__thumbnail">
          <div className="peoples-add__thumbnail__preview">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-anonymous"
            >
              <path d="M12.0001 11.7376C14.6685 11.7376 16.8318 9.11006 16.8318 5.86882C16.8318 2.62752 16.1216 0 12.0001 0C7.87861 0 7.16821 2.62752 7.16821 5.86882C7.16821 9.11006 9.33157 11.7376 12.0001 11.7376Z" />
              <path d="M2.87385 20.6985C2.87302 20.5009 2.8722 20.6428 2.87385 20.6985V20.6985Z" />
              <path d="M21.1259 20.8528C21.1284 20.7987 21.1267 20.4775 21.1259 20.8528V20.8528Z" />
              <path d="M21.1155 20.4614C21.0261 14.8151 20.2886 13.2062 14.6457 12.1877C14.6457 12.1877 13.8514 13.1999 11.9999 13.1999C10.1485 13.1999 9.35403 12.1877 9.35403 12.1877C3.77266 13.1951 2.9904 14.7801 2.88754 20.2779C2.8791 20.7269 2.8752 20.7505 2.87369 20.6984C2.87403 20.796 2.87444 20.9766 2.87444 21.2916C2.87444 21.2916 4.21789 23.9999 11.9999 23.9999C19.7818 23.9999 21.1254 21.2916 21.1254 21.2916C21.1254 21.0892 21.1256 20.9485 21.1258 20.8528C21.1243 20.885 21.1212 20.8225 21.1155 20.4614Z" />
            </svg>
          </div>
          <Icon type="circle" variant="info" size="sm">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M14.9239 4.04412L19.8061 8.92622L7.44801 21.2843L2.56863 16.4022L14.9239 4.04412ZM23.5107 2.86667L21.3334 0.689423C20.492 -0.152008 19.1257 -0.152008 18.2814 0.689423L16.1958 2.77501L21.0779 7.65715L23.5107 5.22443C24.1633 4.57177 24.1633 3.51929 23.5107 2.86667ZM0.0137079 23.2644C-0.0751408 23.6642 0.285881 24.0225 0.685791 23.9253L6.12612 22.6062L1.24674 17.7241L0.0137079 23.2644Z" />
              </g>
              <defs>
                <clipPath>
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Icon>
        </div>
        <form className="form form-peoples-add peoples-add__forms">
          <div className="form__group">
            <label className="form__group__label">Name</label>
            <input
              type="text"
              className="form__control"
              placeholder="Enter name"
              value={nameValue}
              onChange={handleNameChange}
            />
          </div>
          <div className="form__group">
            <label className="form__group__label">Position</label>
            <input
              type="text"
              className="form__control"
              placeholder="Enter position"
              value={positionValue}
              onChange={handlePositionChange}
            />
          </div>
          <div className="form__group">
            <label className="form__group__label">Description</label>
            <textarea
              className="form__control"
              rows="5"
              placeholder="Write your message here"
              value={destiptionValue}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="form__group--buttons">
            <Button variant="transparent">Cancel</Button>
            <Button variant="primary">Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default peoplesAdd;
