import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { ModalContent } from "../../components";
import { CategoryName, wInfo } from "../utils";
var styles = require("./modalContent.stories.scss");
storiesOf(CategoryName.Modal, module).addWithJSX("ModalContent", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement("div", { className: styles.box },
        React.createElement(ModalContent, { header: "This is Header of Modal Content.", subheader: "This is Sub Header of Modal Content", leftButtonLabel: "Left Button", leftButtonOnClick: action("left-button-click"), rightButtonLabel: "Right Button", rightButtonOnClick: action("left-button-click") })),
    React.createElement("div", { className: styles.box },
        React.createElement(ModalContent, { header: "Modal Content with Single Button", subheader: "Sub Header of Modal Content", rightButtonLabel: "Single Button", rightButtonOnClick: action("right-button-click") })),
    React.createElement("div", { className: styles.box },
        React.createElement(ModalContent, { header: "Modal Content without Sub Header", leftButtonLabel: "Left Button", leftButtonOnClick: action("left-button-click"), rightButtonLabel: "Right Button", rightButtonOnClick: action("right-button-click") })),
    React.createElement("div", { className: styles.box },
        React.createElement(ModalContent, { header: "Modal subheader with link subheader", subheader: React.createElement("p", null,
                "Modal subheader with link",
                " ",
                React.createElement("a", { target: "_blank", href: "http://google.com" }, "Sub Header")), leftButtonLabel: "Left Button", leftButtonOnClick: action("left-button-click"), rightButtonLabel: "Right Button", rightButtonOnClick: action("right-button-click") })))); }));
//# sourceMappingURL=ModalContent.stories.js.map