import React from "react";

import Heading from "../../../UI/Heading";
import Icon from "../../../UI/Icon";
import Button from "../../../UI/Button";

const peoplesHeader = (props) => {
  const { showAddModalHandler } = props;

  return (
    <div className="peoples__header">
      <div className="peoples__header__title">
        <Icon type="circle" variant="secondary">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 12C0 18.6274 5.37261 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37261 18.6274 0 12 0C5.37261 0 0 5.37261 0 12ZM16.1278 6.09959C17.2058 6.09959 18.0822 6.97344 18.0822 8.05394C18.0822 9.13195 17.2083 10.0083 16.1278 10.0083C15.0473 10.0083 14.1734 9.13444 14.1734 8.05394C14.1734 6.97344 15.0473 6.09959 16.1278 6.09959ZM7.8722 6.09959C8.95021 6.09959 9.82656 6.97344 9.82656 8.05394C9.82656 9.13195 8.95267 10.0083 7.8722 10.0083C6.7917 10.0083 5.91784 9.13444 5.91784 8.05394C5.91784 6.97344 6.79419 6.09959 7.8722 6.09959ZM5.64647 12.7618C6.32614 12.6523 6.96349 13.1129 7.07552 13.7925C7.26224 14.9477 7.85724 16.0083 8.7535 16.7751C9.65726 17.5519 10.81 17.9776 12.0025 17.9776C13.1926 17.9776 14.3477 17.5519 15.249 16.7776C16.1427 16.0108 16.7378 14.9552 16.927 13.8C17.039 13.1203 17.6788 12.6622 18.356 12.7718C19.0357 12.8838 19.4938 13.5237 19.3842 14.2008C19.1004 15.9336 18.2066 17.517 16.8697 18.6647C15.5154 19.8249 13.7876 20.4647 12.0025 20.4647C10.2149 20.4647 8.48465 19.8249 7.13029 18.6622C5.79087 17.5121 4.89959 15.9237 4.61826 14.1884C4.50622 13.5112 4.96681 12.8714 5.64647 12.7618Z" />
          </svg>
        </Icon>
        <Heading type="h5">Our important people is listed here</Heading>
      </div>
      <div className="peoples__header__buttons">
        <Button variant="warning">Edit</Button>
        <Button clicked={showAddModalHandler}>Add</Button>
      </div>
    </div>
  );
};

export default peoplesHeader;
