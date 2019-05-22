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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import classNames from "classnames";
import React from "react";
import Select, { components } from "react-select";
import { Icon } from "../icons/Icon";
import "./library.scss.nomangle";
var styles = require("./styles.scss");
// Use custom components so we can assign our own styles via CSS modules
// Ignore usages of any since we're just doing thin wrappers over react-select
var Menu = function (props) { return (React.createElement(components.Menu, __assign({ className: styles.menu }, props), props.children)); };
var Control = function (props) { return (React.createElement(components.Control, __assign({ className: styles.dropdownControl }, props), props.children)); };
var DropdownIndicator = function (props) {
    return components.DropdownIndicator && (React.createElement(components.DropdownIndicator, __assign({ className: styles.dropdownIndicator }, props),
        React.createElement(Icon, { type: "dropdown", className: styles.dropdownIcon })));
};
var MenuList = function (props) { return (React.createElement(components.MenuList, __assign({ className: styles.menuList }, props), props.children)); };
var Option = function (props) { return (React.createElement(components.Option, __assign({ className: styles.option }, props), props.children)); };
var Placeholder = function (props) { return (React.createElement(components.Placeholder, __assign({ className: styles.placeholder }, props), props.children)); };
var ValueContainer = function (props) { return (React.createElement(components.ValueContainer, __assign({ className: styles.valueContainer }, props), props.children)); };
var SingleValue = function (props) { return (React.createElement(components.SingleValue, __assign({ className: styles.singleValue }, props), props.children)); };
export var baseComponents = {
    Menu: Menu,
    Control: Control,
    DropdownIndicator: DropdownIndicator,
    MenuList: MenuList,
    Option: Option,
    Placeholder: Placeholder,
    SingleValue: SingleValue,
    ValueContainer: ValueContainer
};
var BaseDropdown = /** @class */ (function (_super) {
    __extends(BaseDropdown, _super);
    function BaseDropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseDropdown.prototype.render = function () {
        var customComponents = __assign({}, baseComponents, this.props.components);
        return (React.createElement(Select, __assign({ className: classNames(styles.dropdown, this.props.size, this.props.className), classNamePrefix: "dropdown", components: customComponents, styles: this.props.styles || {}, isSearchable: this.props.isSearchable || false }, this.props)));
    };
    BaseDropdown.defaultProps = {
        components: {}
    };
    return BaseDropdown;
}(React.Component));
export { BaseDropdown };
//# sourceMappingURL=BaseDropdown.js.map