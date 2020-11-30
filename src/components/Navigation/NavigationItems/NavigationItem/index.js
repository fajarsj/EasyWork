import React from "react";
import { NavLink } from "react-router-dom";

const navigationItem = (props) => {
  const { link, exact, children } = props;

  return (
    <li className="navigation-items__item">
      <NavLink to={link} exact={exact} activeClassName="active">
        {children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
