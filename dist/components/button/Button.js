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
import classNames from "classnames";
import * as React from "react";
import { Size, Theme } from "../EnumValues";
import { Icon } from "../icons";
var styles = require("./button.scss");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnClick = function (event) {
            if (!_this.props.disabled && !_this.props.loading && _this.props.onClick) {
                _this.props.onClick(event);
            }
        };
        return _this;
    }
    Button.prototype.render = function () {
        var buttonClassName = classNames(styles.button, styles["" + this.props.size], this.props.disabled
            ? this.props.theme === Theme.Grey
                ? styles.disabledGrey
                : this.props.theme === Theme.DarkGrey
                    ? styles.disabledDarkGrey
                    : styles.disabled
            : styles["" + this.props.theme], this.props.className);
        return (React.createElement("button", { type: this.props.type, disabled: this.props.disabled, className: buttonClassName, onClick: this.handleOnClick }, this.renderContent()));
    };
    Button.prototype.renderContent = function () {
        var isLeftIcon = this.props.iconAlign === "left";
        var isRightIcon = this.props.iconAlign === "right";
        var isCenterIcon = this.props.iconAlign === "center";
        var iconSize = this.props.size === Size.Small
            ? "16"
            : this.props.size === Size.Square ||
                this.props.size === Size.SmallSquare
                ? "16"
                : "24";
        return this.props.loading ? (React.createElement("span", { className: styles.buttonContent },
            React.createElement(Icon, { className: styles.loading, type: "progress", size: iconSize }))) : (React.createElement("span", { className: styles.buttonContent },
            this.props.children,
            this.props.icon && isLeftIcon && (React.createElement(Icon, { className: styles.leftIcon, type: this.props.icon, size: iconSize })),
            React.createElement("span", null, this.props.label),
            this.props.icon && isRightIcon && (React.createElement(Icon, { className: styles.rightIcon, type: this.props.icon, size: iconSize })),
            this.props.icon && isCenterIcon && (React.createElement(Icon, { type: this.props.icon, size: iconSize }))));
    };
    Button.defaultProps = {
        type: "submit",
        className: "",
        disabled: false,
        size: Size.Small,
        theme: Theme.Ghost,
        iconAlign: "left",
        loading: false
    };
    return Button;
}(React.Component));
export { Button };
//# sourceMappingURL=Button.js.map