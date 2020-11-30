import React from "react";

import Card from "../../../UI/Card";
import Heading from "../../../UI/Heading";

const testimonyCard = (props) => {
  const { profile, name, title, testimony } = props.testimony;
  return (
    <Card>
      <div className="card__body">
        <div className="testimony-profile">
          <div className="testimony-profile__picture">
            <img src={profile} alt="Profile Picture" />
          </div>
          <div className="testimony-profile__title">
            <Heading type="h6">{name}</Heading>
            <p>{title}</p>
          </div>
        </div>
        <p className="testimony-description">{testimony}</p>
      </div>
    </Card>
  );
};

export default testimonyCard;
