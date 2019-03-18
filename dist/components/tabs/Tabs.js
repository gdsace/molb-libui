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
import classnames from "classnames";
import * as React from "react";
var styles = require("./tabs.scss");
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.tabItemClick = function (index) { return function () {
            _this.setState({
                currentIndex: index
            });
        }; };
        _this.state = {
            currentIndex: 0
        };
        return _this;
    }
    Tabs.prototype.render = function () {
        var _this = this;
        var currentIndex = this.state.currentIndex;
        var _a = this.props, list = _a.list, leftNode = _a.leftNode;
        var activeTabPanel = list[currentIndex].tabPanel;
        return (React.createElement("div", { className: styles.tab },
            React.createElement("div", { className: styles.tabsBarContainer },
                React.createElement("div", { className: classnames(styles.tabsBarContent, this.props.tabsBarContentStyle) },
                    leftNode ? this.getLeftComponent(leftNode) : null,
                    React.createElement("div", { className: styles.tabItems }, list.map(function (item, index) { return (React.createElement("div", { key: index, onClick: _this.tabItemClick(index), className: (currentIndex === index ? styles.activeItem : "") + " " + styles.item },
                        React.createElement("label", null, item.label))); })))),
            React.createElement("div", { className: styles.tabPanel }, activeTabPanel)));
    };
    Tabs.prototype.getLeftComponent = function (leftNode) {
        return React.createElement("div", { className: styles.leftComponent }, leftNode);
    };
    return Tabs;
}(React.Component));
export { Tabs };
//# sourceMappingURL=Tabs.js.map