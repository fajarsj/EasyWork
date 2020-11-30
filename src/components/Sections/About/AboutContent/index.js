import React from "react";
import Heading from "../../../UI/Heading";

const aboutContent = (props) => {
  const { title, description, image, reverse } = props;
  let attachedClasses = "about__content";

  if (reverse) {
    attachedClasses = `about__content about__content--reverse`;
  }

  return (
    <div className={attachedClasses}>
      <div className="about__content__image">
        <img src={image} alt="Thumbnail" />
      </div>
      <div className="about__content__description">
        <Heading type="h5">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default aboutContent;
