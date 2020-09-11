import React from "react";
import { storiesOf } from "@storybook/react";
import { FlexDirectionType, FlexWrapper } from "../../components";
import { CategoryName, wInfo } from "../utils";
var styles = require("./flexWrapper.stories.scss");
storiesOf(CategoryName.FlexWrapper, module)
    .addWithJSX("FlexWrapper Row", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement(FlexWrapper, null,
        React.createElement("div", { className: styles.child }, "1st child"),
        React.createElement("div", { className: styles.child }, "2nd child")))); }))
    .addWithJSX("FlexWrapper Column", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement(FlexWrapper, { flexDirection: FlexDirectionType.COLUMN },
        React.createElement("div", { className: styles.child }, "1st child"),
        React.createElement("div", { className: styles.child }, "2nd child")))); }));
//# sourceMappingURL=flexWrapper.stories.js.map