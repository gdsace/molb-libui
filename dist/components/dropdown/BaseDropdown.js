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
import styles from "./dropdownStyle.scss";
import "./library.scss";
var Menu = function (props) { return (React.createElement(components.Menu, __assign({ className: styles.menu }, props))); };
var Control = function (props) { return (React.createElement(components.Control, __assign({ className: styles.dropdownControl }, props))); };
var DropdownIndicator = function (props) {
    return components.DropdownIndicator && (React.createElement(components.DropdownIndicator, __assign({ className: styles.dropdownIndicator }, props),
        React.createElement(Icon, { type: "dropdown", className: styles.dropdownIcon })));
};
var MenuList = function (props) { return (React.createElement(components.MenuList, __assign({ className: styles.menuList }, props))); };
var Option = function (props) { return (React.createElement(components.Option, __assign({ className: styles.option }, props))); };
var Placeholder = function (props) { return (React.createElement(components.Placeholder, __assign({ className: styles.placeholder }, props))); };
var ValueContainer = function (props) { return (React.createElement(components.ValueContainer, __assign({ className: styles.valueContainer }, props))); };
var SingleValue = function (props) { return (React.createElement(components.SingleValue, __assign({ className: styles.singleValue }, props))); };
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
export var BaseDropdown = function (props) { return (React.createElement(Select, __assign({ className: classNames(styles.dropdown, props.size, props.className), isOptionDisabled: props.isOptionDisabled, classNamePrefix: "dropdown", components: __assign({}, baseComponents, components), styles: props.styles || {}, isSearchable: props.isSearchable || false }, props))); };
//# sourceMappingURL=BaseDropdown.js.map