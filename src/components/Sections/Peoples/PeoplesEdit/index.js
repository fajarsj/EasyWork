import React, { useState, useEffect } from "react";

import Heading from "../../../UI/Heading";
import Button from "../../../UI/Button";
import Icon from "../../../UI/Icon";

const peoplesEdit = (props) => {
  const { profile, name, title, description } = props.people;

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
      <div className="peoples-edit">
        <Heading type="h5">Edit People</Heading>
        <div className="peoples-edit__thumbnail">
          <div className="peoples-edit__thumbnail__preview">
            <img src={profile} alt="Profil Thumbnail" />
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
        <div className="peoples-edit__delete-thumbnail">
          <Icon type="circle" variant="danger" size="sm">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.0068 3.45395H17.0134V2.6398C17.0134 1.18421 15.8292 0 14.3736 0H9.62686C8.17126 0 6.98705 1.18421 6.98705 2.6398V3.45395H1.99363C1.62357 3.45395 1.32751 3.75 1.32751 4.12007C1.32751 4.49013 1.62357 4.78618 1.99363 4.78618H3.19758V20.4375C3.19758 22.4013 4.79626 24 6.76008 24H17.2403C19.2042 24 20.8028 22.4013 20.8028 20.4375V4.78618H22.0068C22.3769 4.78618 22.6729 4.49013 22.6729 4.12007C22.6729 3.75 22.3769 3.45395 22.0068 3.45395ZM8.31929 2.6398C8.31929 1.91941 8.90646 1.33224 9.62686 1.33224H14.3736C15.094 1.33224 15.6811 1.91941 15.6811 2.6398V3.45395H8.31929V2.6398ZM19.4706 20.4375C19.4706 21.6661 18.469 22.6678 17.2403 22.6678H6.76008C5.53146 22.6678 4.52982 21.6661 4.52982 20.4375V4.78618H19.4755V20.4375H19.4706Z" />
              <path d="M12.0007 20.2796C12.3708 20.2796 12.6668 19.9835 12.6668 19.6135V7.84043C12.6668 7.47037 12.3708 7.17432 12.0007 7.17432C11.6306 7.17432 11.3346 7.47037 11.3346 7.84043V19.6085C11.3346 19.9786 11.6306 20.2796 12.0007 20.2796Z" />
              <path d="M7.65284 19.5443C8.02291 19.5443 8.31896 19.2483 8.31896 18.8782V8.57066C8.31896 8.20059 8.02291 7.90454 7.65284 7.90454C7.28278 7.90454 6.98672 8.20059 6.98672 8.57066V18.8782C6.98672 19.2483 7.28771 19.5443 7.65284 19.5443Z" />
              <path d="M16.3475 19.5443C16.7175 19.5443 17.0136 19.2483 17.0136 18.8782V8.57066C17.0136 8.20059 16.7175 7.90454 16.3475 7.90454C15.9774 7.90454 15.6814 8.20059 15.6814 8.57066V18.8782C15.6814 19.2483 15.9774 19.5443 16.3475 19.5443Z" />
            </svg>
          </Icon>
          <span>Delete Picture</span>
        </div>
        <form className="form form-peoples-edit peoples-edit__forms">
          <div className="form__group">
            <label className="form__group__label">Name</label>
            <input
              type="text"
              className="form__control"
              placeholder="Enter name"
              value={nameValue || name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form__group">
            <label className="form__group__label">Position</label>
            <input
              type="text"
              className="form__control"
              placeholder="Enter position"
              value={positionValue || title}
              onChange={handlePositionChange}
            />
          </div>
          <div className="form__group">
            <label className="form__group__label">Description</label>
            <textarea
              className="form__control"
              rows="5"
              placeholder="Write your message here"
              value={destiptionValue || description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="form__group--buttons">
            <Button variant="transparent">Cancel</Button>
            <Button variant="primary">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default peoplesEdit;
