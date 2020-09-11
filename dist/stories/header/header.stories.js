import React from "react";
import { storiesOf } from "@storybook/react";
import { Header, HeaderType } from "../../components";
import { CategoryName, wInfo } from "../utils";
var styles = require("./header.stories.scss");
storiesOf(CategoryName.Others, module).addWithJSX("Header", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement("div", { className: styles.default },
        React.createElement(Header, { className: HeaderType.Demo },
            React.createElement("h4", null, "Demo Header"))),
    React.createElement("div", { className: styles.main },
        React.createElement(Header, { className: HeaderType.Main },
            React.createElement("h4", null, "Main Header"))))); }));
//# sourceMappingURL=header.stories.js.map