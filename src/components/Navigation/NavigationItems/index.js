import React from "react";

import NavigationItem from "./NavigationItem";

const navigationItems = () => (
  <ul className="navigation-items">
    <NavigationItem link="/">Home</NavigationItem>
    <NavigationItem link="/">About Us</NavigationItem>
    <NavigationItem link="/">Services</NavigationItem>
    <NavigationItem link="/">Pricing</NavigationItem>
    <NavigationItem link="/">Careers</NavigationItem>
  </ul>
);

export default navigationItems;
