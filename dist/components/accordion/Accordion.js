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
import { isUndefined } from "lodash";
import React from "react";
import { AccordionTheme } from "../EnumValues";
import { Icon } from "../icons";
var styles = require("./accordion.scss");
var cx = ClassNames.bind(styles).default || ClassNames.bind(styles);
var themeClassMapper = (_a = {},
    _a[AccordionTheme.Standard] = "standard",
    _a[AccordionTheme.Large] = "large",
    _a[AccordionTheme.Wrapped] = "wrapped",
    _a);
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion(props) {
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
            collapsed: false
        };
        return _this;
    }
    Accordion.prototype.render = function () {
        var collapsed = isUndefined(this.props.collapsed)
            ? this.state.collapsed
            : this.props.collapsed;
        var _a = this.props, header = _a.header, content = _a.content, theme = _a.theme;
        return (React.createElement("div", { className: cx("accordion", themeClassMapper[theme]) },
            React.createElement("div", { className: cx("panelHeader"), onClick: this.onPanelClick },
                React.createElement("span", { className: cx("panelTitle") }, header),
                collapsed ? (React.createElement(Icon, { type: "dropdown", className: cx("collapseIcon") })) : (React.createElement(Icon, { type: "up", className: cx("collapseIcon") }))),
            !collapsed && React.createElement("div", { className: cx("panelContent") }, content)));
    };
    return Accordion;
}(React.Component));
export { Accordion };
//# sourceMappingURL=Accordion.js.map