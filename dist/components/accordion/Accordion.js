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
import ClassNames from "classnames/bind"; // TODO Consider Styled-Component as replacement
import React, { Component } from "react";
import { Icon } from "../icons";
import styles from "./accordion.scss";
var cx = ClassNames.bind(styles).default || ClassNames.bind(styles);
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            collapsed: _this.props.defaultCollapsed ? _this.props.defaultCollapsed : false
        };
        _this.getCollapsedStatus = function () {
            if (_this.props.displayMode) {
                return false;
            }
            else if (_this.props.collapsed === undefined) {
                return _this.state.collapsed;
            }
            else {
                return _this.props.collapsed;
            }
        };
        _this.renderSubHeader = function (subHeader, collapsed) { return (React.createElement("span", { className: cx("subHeader") }, subHeader &&
            (subHeader.length === 1
                ? subHeader[0]
                : collapsed
                    ? subHeader[0]
                    : subHeader[1]))); };
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
    Accordion.prototype.render = function () {
        var collapsed = this.getCollapsedStatus();
        var iconType = collapsed ? "dropdown" : "up";
        var _a = this.props, header = _a.header, content = _a.content, theme = _a.theme, subHeader = _a.subHeader, displayMode = _a.displayMode;
        return (React.createElement("div", { className: cx("accordion", theme) },
            React.createElement("div", { className: cx("panelHeader"), onClick: this.onPanelClick },
                React.createElement("span", { className: cx("panelTitle") }, header),
                !displayMode && (React.createElement("div", { className: cx("subHeaderWithIcon") },
                    this.renderSubHeader(subHeader, collapsed),
                    React.createElement(Icon, { type: iconType, className: cx("collapseIcon") })))),
            !collapsed && React.createElement("div", { className: cx("panelContent") }, content)));
    };
    return Accordion;
}(Component));
export { Accordion };
//# sourceMappingURL=Accordion.js.map