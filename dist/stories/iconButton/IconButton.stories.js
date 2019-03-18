import React from "react";
import { storiesOf } from "@storybook/react";
import { IconButton, Input, InputType, Size } from "../../components";
import { CategoryName, wInfo } from "../utils";
import { action } from "@storybook/addon-actions";
var styles = require("./IconButton.stroies.scss");
var rowStyles = {
    padding: "20px 0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
};
storiesOf(CategoryName.Buttons, module).addWithJSX("IconButton", wInfo("")(function () { return (React.createElement("div", { style: { padding: "10px" } },
    "Single iconButton",
    React.createElement("div", { style: rowStyles },
        React.createElement(IconButton, { type: "profile", onClick: action("button-click") }),
        React.createElement(IconButton, { type: "profile", disabled: true, onClick: action("button-click") })),
    "iconButton With Ohter Component",
    React.createElement("div", { style: rowStyles },
        React.createElement("div", { className: styles.wrapper },
            React.createElement(Input, { onChange: action("value"), type: InputType.Number, label: "Number", size: Size.Large }),
            React.createElement(IconButton, { type: "profile", className: styles.iconButton, onClick: action("button-click") })),
        React.createElement("div", { className: styles.wrapperWithoutLabel },
            React.createElement(Input, { onChange: action("value"), type: InputType.Number, size: Size.Large }),
            React.createElement(IconButton, { type: "profile", className: styles.iconButton, onClick: action("button-click") })),
        React.createElement("div", { className: styles.wrapperWithoutLabel },
            React.createElement(Input, { onChange: action("value"), type: InputType.Number, size: Size.Large }),
            React.createElement(IconButton, { type: "profile", disabled: true, className: styles.iconButton, onClick: action("button-click") }))))); }));
//# sourceMappingURL=IconButton.stories.js.map