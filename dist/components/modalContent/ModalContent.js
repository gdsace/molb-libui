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
            this.props.notification &&
                this.getNotification(this.props.notification),
            (this.props.leftButtonLabel || this.props.rightButtonLabel) && (React.createElement("div", { className: styles.modalFooter + " " + (this.props.rightButtonLabel ? styles.twoBtnFooter : "") },
                this.props.leftButtonLabel && (React.createElement(Button, { className: styles.modalButton, label: this.props.leftButtonLabel, onClick: this.props.leftButtonOnClick, size: Size.Large, theme: this.props.leftButtonTheme || Theme.Ghost, loading: this.props.isLeftBtnLoading, disabled: this.props.leftButtonDisabled })),
                this.props.rightButtonLabel && (React.createElement(Button, { className: (this.props.isCustomRightBtn &&
                        styles.customRightBtn) + " " + styles.modalButton, label: this.props.rightButtonLabel, onClick: this.props.rightButtonOnClick, size: Size.Large, theme: this.props.rightButtonTheme || Theme.Primary, loading: this.props.isRightBtnLoading, disabled: this.props.rightButtonDisabled }))))));
    };
    ModalContent.prototype.getSubheader = function (subheader) {
        if (typeof subheader === "string") {
            return React.createElement("p", { className: styles.subheader }, subheader);
        }
        else {
            return React.createElement("div", { className: styles.subheader }, subheader);
        }
    };
    ModalContent.prototype.getNotification = function (notification) {
        if (typeof notification === "string") {
            return React.createElement("p", { className: styles.notification }, notification);
        }
        else {
            return React.createElement("div", { className: styles.notification }, notification);
        }
    };
    return ModalContent;
}(React.Component));
export { ModalContent };
//# sourceMappingURL=ModalContent.js.map