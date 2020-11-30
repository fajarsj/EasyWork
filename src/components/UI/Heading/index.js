import React from "react";

const heading = (props) => {
  const { children, type, color } = props;
  let attachedClasses = "heading";
  let heading;

  if (color) {
    attachedClasses = `heading heading--${color}`;
  }

  switch (type) {
    case "h1":
      heading = <h1 className={attachedClasses}>{children}</h1>;
      break;
    case "h2":
      heading = <h2 className={attachedClasses}>{children}</h2>;
      break;
    case "h3":
      heading = <h3 className={attachedClasses}>{children}</h3>;
      break;
    case "h4":
      heading = <h4 className={attachedClasses}>{children}</h4>;
      break;
    case "h5":
      heading = <h5 className={attachedClasses}>{children}</h5>;
      break;
    case "h6":
      heading = <h6 className={attachedClasses}>{children}</h6>;
      break;
    default:
      heading = <h1 className={attachedClasses}>{children}</h1>;
  }

  return heading;
};

export default heading;
