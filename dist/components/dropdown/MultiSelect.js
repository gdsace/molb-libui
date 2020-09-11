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
import classnames from "classnames";
import React from "react";
import { components } from "react-select";
import { Size } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";
import { baseComponents, BaseDropdown } from "./BaseDropdown";
import { dropdownCustomStyles } from "./Dropdown";
import styles from "./dropdownStyle.scss";
var MultiValueRemove = function (props) { return (React.createElement(components.MultiValueRemove, __assign({}, props),
    React.createElement(Icon, { type: "close", size: "12" }))); };
var multiSelectCustomStyles = __assign({}, dropdownCustomStyles, { multiValueRemove: function (base) { return (__assign({}, base, { "&:hover": {
            backgroundColor: "#dbdfe4",
            color: "#313840"
        } })); }, multiValue: function (base) { return (__assign({}, base, { margin: "4px 0 4px 8px" })); }, valueContainer: function (base) { return (__assign({}, base, { padding: "9px 8px" })); }, placeholder: function (base) { return (__assign({}, base, { fontWeight: 400, fontFamily: "HK Nova", fontSize: "14px", color: "#647283 " })); }, clearIndicator: function () { return ({ display: "none" }); } });
export var MultiSelect = function (props) {
    var multiSelectClassName = classnames(styles.field, styles.multiSelectField, styles[props.size || Size.Large]);
    var errorClassName = addLocatedErrorClassname(styles.errorMessage);
    return (React.createElement("div", { className: multiSelectClassName },
        React.createElement(BaseDropdown, __assign({ isMulti: true, styles: multiSelectCustomStyles, closeMenuOnSelect: false, onChange: props.onChange, onFocus: props.onFocus, components: __assign({}, baseComponents, { MultiValueRemove: MultiValueRemove }), value: props.selectedValue, options: props.options, placeholder: props.placeholder }, props)),
        props.error && React.createElement("p", { className: errorClassName }, props.error)));
};
MultiSelect.defaultProps = {
    selectedValue: []
};
//# sourceMappingURL=MultiSelect.js.map