import React from "react";

import { NavItem } from "../../components/navItem/NavItem";

export const _NavItem = () => (
  <div style={{ padding: "10px" }}>
    <NavItem type={"dashboard"} label={"This is Label"} />
  </div>
);

export default {
  title: "NavItem",
  component: NavItem
};
