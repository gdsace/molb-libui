import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Link, LinkTarget } from "../../components";
import { CategoryName, wInfo } from "../utils";
var rowStyles = {
    padding: "20px 0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
};
storiesOf(CategoryName.Links, module).addWithJSX("Link", wInfo("")(function () { return (React.createElement("div", { style: { padding: "10px" } },
    "Is Disabled",
    React.createElement("div", { style: rowStyles },
        React.createElement(Link, { label: "default", onClick: action("link-click"), link: "https://www.google.com", target: LinkTarget.Blank }),
        React.createElement(Link, { label: "disabled", onClick: action("link-click"), disabled: true, link: "https://www.google.com" })),
    "Has Icon",
    React.createElement("div", { style: rowStyles },
        React.createElement(Link, { label: "arrow", icon: "arrowNext", onClick: action("link-click"), link: "https://www.google.com" }),
        React.createElement(Link, { label: "arrow", icon: "external-link", onClick: action("link-click"), link: "https://www.google.com" })),
    "Is Inline",
    React.createElement("div", { style: rowStyles },
        React.createElement(Link, { label: "Inline enabled", inline: true }),
        React.createElement(Link, { label: "Inline disabled", inline: true, disabled: true })))); }));
//# sourceMappingURL=Link.stories.js.map