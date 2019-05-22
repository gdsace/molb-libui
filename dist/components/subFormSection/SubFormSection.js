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
import React from "react";
import { SubFormSectionTheme, TooltipsLocationTheme } from "../EnumValues";
import { Icon } from "../icons/Icon";
import { Tooltips } from "../tooltips";
var styles = require("./subFormSection.scss");
var SubFormSection = /** @class */ (function (_super) {
    __extends(SubFormSection, _super);
    function SubFormSection(props) {
        var _this = _super.call(this, props) || this;
        _this.onClickHandler = function () {
            _this.setState({
                isCollapsed: !_this.state.isCollapsed
            });
        };
        _this.state = {
            isCollapsed: false
        };
        return _this;
    }
    SubFormSection.prototype.render = function () {
        var _a;
        var rootContainerClassName = classNames(styles.rootContainer, styles[this.props.theme], (_a = {}, _a["" + styles.collapsible] = this.props.isCollapsible, _a));
        return (React.createElement("section", { id: this.props.id, className: rootContainerClassName },
            (this.props.title || this.props.subTitle) && (React.createElement("div", { className: styles.headerSection },
                React.createElement("div", null,
                    this.props.title && (React.createElement("div", { className: styles.titleContainer },
                        React.createElement("span", { className: styles.title }, this.props.title),
                        this.props.optional && (React.createElement("span", { className: styles.optional }, "(Optional)")),
                        !!this.props.tooltip && (React.createElement("div", { className: styles.tooltip },
                            React.createElement(Tooltips, { trigger: React.createElement(Icon, { type: "help", size: "16", className: styles.helpIcon }), width: 250, position: TooltipsLocationTheme.BottomLeft, specializedPosition: true },
                                React.createElement("div", null, this.props.tooltip)))))),
                    this.props.subTitle && (React.createElement("h6", { className: styles.subTitle }, this.props.subTitle))),
                this.props.isCollapsible && (React.createElement("div", { className: styles.collapsibleButton, onClick: this.onClickHandler },
                    React.createElement(Icon, { type: "dropdown", className: this.state.isCollapsed
                            ? styles.dropdownIconCollapsed
                            : styles.dropdownIcon }))))),
            !this.state.isCollapsed && this.props.children));
    };
    SubFormSection.defaultProps = {
        theme: SubFormSectionTheme.Zero
    };
    return SubFormSection;
}(React.Component));
export { SubFormSection };
//# sourceMappingURL=SubFormSection.js.map