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
import { Icon } from "../icons";
var styles = require("./navItem.scss");
var NavItem = /** @class */ (function (_super) {
    __extends(NavItem, _super);
    function NavItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onItemClick = function () {
            var onClick = _this.props.onClick;
            if (onClick) {
                onClick();
            }
        };
        return _this;
    }
    NavItem.prototype.render = function () {
        return (React.createElement("div", { className: styles.navLabel, onClick: this.onItemClick },
            React.createElement(Icon, { type: this.props.type }),
            React.createElement("label", null, this.props.label)));
    };
    return NavItem;
}(React.Component));
export { NavItem };
//# sourceMappingURL=NavItem.js.map