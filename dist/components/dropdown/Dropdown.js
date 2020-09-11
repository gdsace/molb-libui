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
import { get } from "lodash";
import React from "react";
import { Size } from "../EnumValues";
import { Input } from "../input";
import { addLocatedErrorClassname } from "../utils";
import { baseComponents, BaseDropdown } from "./BaseDropdown";
import styles from "./dropdownStyle.scss";
// tslint:disable-next-line:max-classes-per-file
export var dropdownCustomStyles = {
    container: function (base, state) {
        var borderColor;
        if (get(state, "selectProps.error")) {
            borderColor = "1px solid #dc3545";
        }
        else if (state.isFocused && !state.isDisabled) {
            borderColor = "1px solid #408";
        }
        else {
            borderColor = "1px solid #dbdfe4";
        }
        return __assign({}, base, { boxSizing: "border-box", borderRadius: "3px", border: borderColor, backgroundColor: state.isDisabled ? "#f9fafa" : "white" });
    },
    control: function (base) {
        return __assign({}, base, { border: "none", boxShadow: "none", "&:hover": {
                border: "none"
            }, backgroundColor: "transparent" });
    },
    menuPortal: function (base) { return (__assign({}, base, { zIndex: 9999 })); }
};
export var Dropdown = function (props) {
    var dropdownClassName = classnames(styles.field, styles.dropdownField, styles[props.size || Size.Large]);
    var errorClassName = addLocatedErrorClassname(styles.errorMessage);
    var dropdown = (React.createElement("div", { className: dropdownClassName },
        React.createElement(BaseDropdown, __assign({ components: __assign({}, baseComponents), styles: dropdownCustomStyles }, props)),
        props.error ? (React.createElement("p", { className: errorClassName }, props.error)) : (React.createElement("div", { className: styles.addonBelow }, props.addonBelow))));
    var onInputChange = function (event) {
        if (props.onTextInputChange) {
            event.persist();
            props.onTextInputChange(event);
        }
    };
    var input = (React.createElement(Input, { value: props.textInputValue || "", size: Size.Large, disabled: props.isDisabled, errorMsg: "" + props.error, showError: !!props.error, helperMsg: props.addonBelow, maxLength: props.maxLength, onChange: onInputChange }));
    // Wrap select in label for accessibility
    if (props.label) {
        var labelClass = classnames(styles.label, props.isDisabled ? styles.disabledLabel : "");
        return (React.createElement("label", { "data-scrollpoint": true },
            React.createElement("div", { className: labelClass }, props.label),
            props.editable ? input : dropdown));
    }
    return dropdown;
};
//# sourceMappingURL=Dropdown.js.map