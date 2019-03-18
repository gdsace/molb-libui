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
var styles = require("./sidebar.scss");
var Sidebar = /** @class */ (function (_super) {
    __extends(Sidebar, _super);
    function Sidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onItemClick = function (index) { return function () {
            var onItemClick = _this.props.onItemClick;
            if (onItemClick) {
                onItemClick(index);
            }
        }; };
        return _this;
    }
    Sidebar.prototype.render = function () {
        var _this = this;
        var _a = this.props, list = _a.list, selectedIndex = _a.selectedIndex;
        var typeClass = styles[this.props.type + "Item"];
        return (React.createElement("div", { className: styles.sidebar },
            React.createElement("ul", null, list.map(function (item, index) { return (React.createElement("li", { key: index, className: "" + (selectedIndex === index ? styles.activeItem : ""), onClick: _this.onItemClick(index) },
                React.createElement("div", { className: styles.item + " " + typeClass }, item.title))); }))));
    };
    Sidebar.defaultProps = {
        selectedIndex: 0,
        type: "menu"
    };
    return Sidebar;
}(React.Component));
export { Sidebar };
//# sourceMappingURL=Sidebar.js.map