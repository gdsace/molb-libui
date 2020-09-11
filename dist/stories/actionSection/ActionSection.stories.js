import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { ActionSection } from "../../components";
import { CategoryName, wInfo } from "../utils";
var styles = require("./actionSection.stories.scss");
storiesOf(CategoryName.Others, module).addWithJSX("ActionSection", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement("h6", null, "Action Section with only default Next Button"),
    React.createElement("div", { className: styles.box },
        React.createElement(ActionSection, { showPrevious: false, showNext: true, onNextClick: action("next-button-click") })),
    React.createElement("h6", null, "Action Section with default Previous and Next Button"),
    React.createElement("div", { className: styles.box },
        React.createElement(ActionSection, { showPrevious: true, showNext: true, onNextClick: action("next-button-click"), onPreviousClick: action("previous-button-click") })),
    React.createElement("h6", null, "Action Section with custom Left and Right Button"),
    React.createElement("div", { className: styles.box },
        React.createElement(ActionSection, { showPrevious: true, showNext: true, onNextLabel: "RIGHT", onPreviousLabel: "LEFT", onNextClick: action("next-button-click"), onPreviousClick: action("previous-button-click") })),
    React.createElement("h6", null, "Action Section with custom Left and loading"),
    React.createElement("div", { className: styles.box },
        React.createElement(ActionSection, { showPrevious: true, showNext: true, onNextLabel: "RIGHT", onPreviousLabel: "LEFT", loading: true, onNextClick: action("next-button-click"), onPreviousClick: action("previous-button-click") })),
    React.createElement("h6", null, "Action Section without right icon "),
    React.createElement("div", { className: styles.box },
        React.createElement(ActionSection, { showPrevious: true, showNext: true, showNextIcon: false, onNextLabel: "RIGHT", onPreviousLabel: "LEFT", onNextClick: action("next-button-click"), onPreviousClick: action("previous-button-click") })))); }));
//# sourceMappingURL=ActionSection.stories.js.map