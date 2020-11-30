import React from "react";

const icon = (props) => {
  const { type, children, variant, size, clicked } = props;
  let attachedClasses = ["icon"];

  if (type) {
    attachedClasses.push(`icon--${type}`);
  }

  if (variant) {
    attachedClasses.push(`icon--${variant}`);
  }

  if (size) {
    attachedClasses.push(`icon--${size}`);
  }

  if (attachedClasses.length > 1) {
    attachedClasses = attachedClasses.join(" ");
  }
  return (
    <div className={attachedClasses} onClick={clicked}>
      {children}
    </div>
  );
};

export default icon;
