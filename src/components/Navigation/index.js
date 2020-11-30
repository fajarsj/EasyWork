import React from "react";

import Logo from "../UI/Logo";
import Icon from "../UI/Icon";
import NavigationItems from "./NavigationItems/";

const toolbar = () => {
  return (
    <nav className="navigation">
      <Logo height={80} />
      <NavigationItems />
      <Icon variant="light">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23.2332 21.8602L17.5212 15.9194C18.9898 14.1735 19.7945 11.9768 19.7945 9.68999C19.7945 4.34701 15.4475 0 10.1045 0C4.76156 0 0.414551 4.34701 0.414551 9.68999C0.414551 15.033 4.76156 19.38 10.1045 19.38C12.1104 19.38 14.0218 18.775 15.6561 17.6265L21.4115 23.6124C21.6521 23.8622 21.9756 24 22.3224 24C22.6505 24 22.9619 23.8749 23.1982 23.6474C23.7004 23.1641 23.7164 22.3628 23.2332 21.8602ZM10.1045 2.52782C14.0538 2.52782 17.2667 5.74069 17.2667 9.68999C17.2667 13.6393 14.0538 16.8522 10.1045 16.8522C6.15524 16.8522 2.94237 13.6393 2.94237 9.68999C2.94237 5.74069 6.15524 2.52782 10.1045 2.52782Z" />
        </svg>
      </Icon>
    </nav>
  );
};

export default toolbar;
