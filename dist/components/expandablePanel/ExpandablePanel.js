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
var _a;
import ClassNames from "classnames/bind";
import { isUndefined, map } from "lodash";
import React from "react";
import { ExpandablePanelTheme } from "../EnumValues";
import { Icon } from "../icons";
var styles = require("./ExpandablePanel.scss");
var cx = ClassNames.bind(styles).default || ClassNames.bind(styles);
var themeClassMapper = (_a = {},
    _a[ExpandablePanelTheme.Standard] = "standard",
    _a[ExpandablePanelTheme.Large] = "large",
    _a);
var ExpandablePanel = /** @class */ (function (_super) {
    __extends(ExpandablePanel, _super);
    function ExpandablePanel(props) {
        var _this = _super.call(this, props) || this;
        _this.onPanelClick = function () {
            if (isUndefined(_this.props.collapsed)) {
                _this.setState({
                    collapsed: !_this.state.collapsed
                });
            }
            else if (_this.props.onPanelClick) {
                _this.props.onPanelClick(!_this.props.collapsed);
            }
        };
        _this.state = {
            collapsed: true
        };
        return _this;
    }
    ExpandablePanel.prototype.render = function () {
        var collapsed = isUndefined(this.props.collapsed)
            ? this.state.collapsed
            : this.props.collapsed;
        var _a = this.props, title = _a.title, theme = _a.theme, subTitle = _a.subTitle, defaultDisplay = _a.defaultDisplay;
        var children = React.Children.toArray(this.props.children);
        return (React.createElement("div", { className: cx("expandablePanel", themeClassMapper[theme]) },
            React.createElement("div", { className: cx("panelHeader") },
                React.createElement("div", { className: cx("panelTitle") }, title),
                defaultDisplay && children && children.length > defaultDisplay && (React.createElement("div", { className: cx("subTitle"), onClick: this.onPanelClick },
                    React.createElement("span", null, subTitle),
                    React.createElement(Icon, { type: collapsed ? "dropdown" : "up", className: cx("collapseIcon"), size: "20" })))),
            collapsed &&
                children &&
                defaultDisplay &&
                map(children, function (item, index) {
                    return index < defaultDisplay ? item : null;
                }),
            !collapsed && this.props.children));
    };
    return ExpandablePanel;
}(React.Component));
export { ExpandablePanel };
//# sourceMappingURL=ExpandablePanel.js.map