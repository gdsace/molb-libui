import React from "react";
import { storiesOf } from "@storybook/react";
import { SubFormSection, SubFormSectionTheme } from "../../components";
import { CategoryName, wInfo } from "../utils";
var styles = require("./subFormSection.stories.scss");
storiesOf(CategoryName.Others, module).addWithJSX("SubFormSection", wInfo("")(function () {
    return (React.createElement("div", null,
        React.createElement("div", { className: styles.box },
            React.createElement(SubFormSection, { id: "operatingHoursSubSection", title: "Standard Operating Hours", theme: SubFormSectionTheme.Zero },
                React.createElement("p", { className: styles.content }, "Theme: Zero, Some sample content"))),
        React.createElement("div", { className: styles.box },
            React.createElement(SubFormSection, { id: "operatingHoursSubSection", title: "Standard Operating Hours", theme: SubFormSectionTheme.Normal },
                React.createElement("p", { className: styles.content }, "Theme: Normal, Some sample content")))));
}));
//# sourceMappingURL=SubFormSection.stories.js.map