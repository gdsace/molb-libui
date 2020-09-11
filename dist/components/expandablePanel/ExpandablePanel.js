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
import ClassNames from "classnames/bind";
import React, { Component } from "react";
import { Icon } from "../icons";
import styles from "./ExpandablePanel.scss";
var cx = ClassNames.bind(styles).default || ClassNames.bind(styles);
var ExpandablePanel = /** @class */ (function (_super) {
    __extends(ExpandablePanel, _super);
    function ExpandablePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            collapsed: true
        };
        _this.onPanelClick = function () {
            if (_this.props.collapsed === undefined) {
                _this.setState({
                    collapsed: !_this.state.collapsed
                });
            }
            else if (_this.props.onPanelClick) {
                _this.props.onPanelClick(!_this.props.collapsed);
            }
        };
        return _this;
    }
    ExpandablePanel.prototype.render = function () {
        var _a = this.props, title = _a.title, theme = _a.theme, subTitle = _a.subTitle, defaultDisplay = _a.defaultDisplay;
        var collapsed = this.props.collapsed === undefined
            ? this.state.collapsed
            : this.props.collapsed;
        var children = React.Children.toArray(this.props.children);
        var iconType = collapsed ? "dropdown" : "up";
        var isShowSubTitle = defaultDisplay && children && children.length > defaultDisplay;
        var isShowChildren = defaultDisplay && collapsed && children;
        return (React.createElement("div", { className: cx("expandablePanel", theme) },
            React.createElement("div", { className: cx("panelHeader") },
                React.createElement("div", { className: cx("panelTitle") }, title),
                isShowSubTitle && (React.createElement("div", { className: cx("subTitle"), onClick: this.onPanelClick },
                    React.createElement("span", null, subTitle),
                    React.createElement(Icon, { type: iconType, className: cx("collapseIcon"), size: "20" })))),
            isShowChildren &&
                children.map(function (item, index) {
                    return defaultDisplay && index < defaultDisplay ? item : null;
                }),
            !collapsed && this.props.children));
    };
    return ExpandablePanel;
}(Component));
export { ExpandablePanel };
//# sourceMappingURL=ExpandablePanel.js.map