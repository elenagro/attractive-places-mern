import React from "react";
import { ReactDOM } from "react";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  const content = <aside className="side-drawer">{props.children}</aside>;
};

export default SideDrawer;
