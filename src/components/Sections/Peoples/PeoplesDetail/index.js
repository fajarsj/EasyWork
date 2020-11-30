import React from "react";

import Heading from "../../../UI/Heading";

const peoplesDetail = (props) => {
  const { profile, name, title, description } = props.people;

  return (
    <div className="peoples-detail">
      <div className="peoples-detail__picture">
        <img src={profile} alt="Profile Picture" />
      </div>
      <div className="peoples-detail__info">
        <Heading type="h6">{name}</Heading>
        <p className="peoples-detail__info__title">{title}</p>
        <p className="peoples-detail__info__description">{description}</p>
      </div>
    </div>
  );
};

export default peoplesDetail;
