import React from "react";
import { storiesOf } from "@storybook/react";
import { NavItem } from "../../components/navItem/NavItem";
import { CategoryName, wInfo } from "../utils";
storiesOf(CategoryName.Others, module).addWithJSX("NavItem", wInfo("")(function () { return (React.createElement("div", { style: { padding: "10px" } },
    React.createElement(NavItem, { type: "dashboard", label: "This is Label" }))); }));
//# sourceMappingURL=NavItem.stories.js.map