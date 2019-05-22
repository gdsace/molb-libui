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
import { LinkStatus, Size } from "../EnumValues";
import { Icon } from "../icons";
var styles = require("./link.scss");
export var LinkTarget;
(function (LinkTarget) {
    LinkTarget["Self"] = "_self";
    LinkTarget["Blank"] = "_blank";
    LinkTarget["Parent"] = "_parent";
    LinkTarget["Top"] = "_top";
})(LinkTarget || (LinkTarget = {}));
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnClick = function (e) {
            if (_this.props.disabled) {
                e.preventDefault();
                return;
            }
            if (_this.props.onClick) {
                _this.props.onClick();
            }
        };
        return _this;
    }
    Link.prototype.render = function () {
        var linkClassName = classNames(styles.link, styles["" + this.props.size], this.props.className, this.props.disabled ? styles.disabled : styles.enable, styles["" + this.props.status]);
        return (React.createElement("span", { className: linkClassName, onClick: this.handleOnClick },
            React.createElement("a", { href: this.props.link, target: this.props.target },
                React.createElement("span", null, this.props.label),
                this.props.icon && (React.createElement(Icon, { className: styles.icon, type: this.props.icon, size: "16" })))));
    };
    Link.defaultProps = {
        className: "",
        disabled: false,
        size: Size.Small,
        status: LinkStatus.Normal,
        target: LinkTarget.Self,
        link: "#"
    };
    return Link;
}(React.Component));
export { Link };
//# sourceMappingURL=Link.js.map