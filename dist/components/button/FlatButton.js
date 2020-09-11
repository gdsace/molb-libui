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
import { FlatButtonTheme } from "../EnumValues";
import { Icon } from "../icons";
var styles = require("./flatButton.scss");
var FlatButton = /** @class */ (function (_super) {
    __extends(FlatButton, _super);
    function FlatButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnClick = function (onClick) {
            if (!_this.props.disabled) {
                onClick();
            }
        };
        return _this;
    }
    FlatButton.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.props, containerClassName = _b.containerClassName, disabled = _b.disabled, onClick = _b.onClick, iconType = _b.iconType, theme = _b.theme;
        var buttonClassName = classNames(styles.rootContainer, containerClassName, (_a = {},
            _a[styles.disabled] = disabled,
            _a[styles.secondary] = theme === FlatButtonTheme.Secondary,
            _a));
        return (React.createElement("div", { className: styles.rootWrapper },
            React.createElement("div", { className: buttonClassName, onClick: function () { return _this.handleOnClick(onClick); } },
                React.createElement(Icon, { type: iconType, size: "24", className: styles.icon }),
                React.createElement("span", { className: styles.label }, this.props.label))));
    };
    FlatButton.defaultProps = {
        containerClassName: "",
        disabled: false,
        theme: FlatButtonTheme.Primary
    };
    return FlatButton;
}(React.Component));
export { FlatButton };
//# sourceMappingURL=FlatButton.js.map