var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import { Button } from "../button";
import { Size, Theme } from "../EnumValues";
var styles = require("./modalContent.scss");
var ModalContent = /** @class */ (function (_super) {
    __extends(ModalContent, _super);
    function ModalContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalContent.prototype.render = function () {
        return (React.createElement("div", { className: styles.notice },
            this.props.header && React.createElement("header", null, this.props.header),
            this.props.subheader && this.getSubheader(this.props.subheader),
            React.createElement("div", { className: styles.modalFooter + " " + (this.props.rightButtonLabel ? styles.twoBtnFooter : "") },
                this.props.leftButtonLabel && (React.createElement(Button, { className: styles.modalButton, label: this.props.leftButtonLabel, onClick: this.props.leftButtonOnClick, size: Size.Large, theme: Theme.Ghost })),
                this.props.rightButtonLabel && (React.createElement(Button, { className: styles.modalButton, label: this.props.rightButtonLabel, onClick: this.props.rightButtonOnClick, size: Size.Large, theme: Theme.Primary })))));
    };
    ModalContent.prototype.getSubheader = function (subheader) {
        if (typeof subheader === "string") {
            return React.createElement("p", null, subheader);
        }
        else {
            return React.createElement("div", null, subheader);
        }
    };
    return ModalContent;
}(React.Component));
export { ModalContent };
//# sourceMappingURL=ModalContent.js.map