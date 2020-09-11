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
import { get } from "lodash";
import React from "react";
import { components } from "react-select";
import { baseComponents, BaseDropdown } from "./BaseDropdown";
import styles from "./dropdownStyle.scss";
var PremiseAutoLabel = function (props) {
    var postalCode = get(props, "data.value.address.postalCode");
    var label = get(props, "data.label", props.label);
    if (postalCode) {
        return (React.createElement(components.Option, __assign({}, props),
            React.createElement("div", { className: styles.premiseLabel },
                React.createElement("div", { className: styles.addressLabel },
                    React.createElement("div", { className: styles.addressText }, label),
                    React.createElement("div", { className: styles.addressPostal },
                        "\u00A0(",
                        postalCode,
                        ")")))));
    }
    return (React.createElement(components.Option, __assign({}, props),
        React.createElement("div", { className: styles.premiseLabel }, label)));
};
var PremiseSingleValue = function (props) { return (React.createElement(PremiseAutoLabel, __assign({ className: styles.value }, props))); };
export var PremiseDropdown = function (props) { return (React.createElement("div", { className: styles.premise },
    React.createElement(BaseDropdown, __assign({ components: __assign({}, baseComponents, { Option: PremiseAutoLabel, SingleValue: PremiseSingleValue }) }, props)))); };
//# sourceMappingURL=PremiseDropdown.js.map