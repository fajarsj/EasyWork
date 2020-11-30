import React from "react";

const button = (props) => {
  const { clicked, variant } = props;

  let attachedClasses = ["button"];

  if (variant) {
    attachedClasses.push(`button--${variant}`);
  }

  if (attachedClasses.length > 1) {
    attachedClasses = attachedClasses.join(" ");
  }

  return (
    <button onClick={clicked} className={attachedClasses}>
      {props.children}
    </button>
  );
};

export default button;
