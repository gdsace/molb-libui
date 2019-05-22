import React from "react";
import { storiesOf } from "@storybook/react";
import { Layout } from "../../components";
import { CategoryName, wInfo } from "../utils";
var styles = require("./layout.stories.scss");
storiesOf(CategoryName.Others, module).addWithJSX("Layout", wInfo("")(function () { return (React.createElement("div", { className: styles.rootContainer },
    React.createElement("h6", { className: styles.groupHeader }, "Below are different sizes: Large, Medium, Small"),
    React.createElement("div", { className: styles.itemsContainer },
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Normal"),
            React.createElement(Layout, { hasNotifications: true, header: React.createElement("p", { className: styles.headerContent }, "Header"), mainContent: React.createElement("p", null, "Main Content"), sidebar: React.createElement("p", null, "Side Bar") })),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Normal: with customized class"),
            React.createElement(Layout, { hasNotifications: true, sideBarStyle: styles.sideBarStyle, mainContentStyle: styles.mainContentStyle, header: React.createElement("p", { className: styles.headerContent }, "Header"), mainContent: React.createElement("p", null, "Main Content"), sidebar: React.createElement("p", null, "Side Bar") }))))); }));
//# sourceMappingURL=layout.stories.js.map