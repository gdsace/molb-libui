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
import { Icon } from "../icons";
var styles = require("./iconButton.scss");
var IconButton = /** @class */ (function (_super) {
    __extends(IconButton, _super);
    function IconButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnClick = function (onClick) {
            if (!_this.props.disabled) {
                onClick();
            }
        };
        return _this;
    }
    IconButton.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.props, className = _b.className, disabled = _b.disabled, type = _b.type, iconClassName = _b.iconClassName, category = _b.category, size = _b.size, viewBox = _b.viewBox, onClick = _b.onClick;
        var iconButtonClassName = classNames(styles.iconButtonContainer, className, (_a = {},
            _a[styles.disabled] = disabled,
            _a));
        return (React.createElement("div", { className: iconButtonClassName, onClick: function () { return _this.handleOnClick(onClick); } },
            React.createElement(Icon, { className: iconClassName, category: category, type: type, size: size, viewBox: viewBox })));
    };
    IconButton.defaultProps = {
        className: "",
        disabled: false,
        iconClassName: "",
        category: undefined,
        size: "",
        viewBox: ""
    };
    return IconButton;
}(React.Component));
export { IconButton };
//# sourceMappingURL=IconButton.js.map