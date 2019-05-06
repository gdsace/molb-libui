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
import _ from "lodash";
import React from "react";
import { components } from "react-select";
import { baseComponents, BaseDropdown } from "./BaseDropdown";
var styles = require("./styles.scss");
var PremiseAutoLabel = function (props) {
    var postalCode = _.get(props, "data.value.address.postalCode");
    var label = _.get(props, "data.label", props.label);
    if (postalCode) {
        // This is an address!
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
var PremiseDropdown = /** @class */ (function (_super) {
    __extends(PremiseDropdown, _super);
    function PremiseDropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PremiseDropdown.prototype.render = function () {
        return (React.createElement("div", { className: styles.premise },
            React.createElement(BaseDropdown, __assign({ components: __assign({}, baseComponents, { Option: PremiseAutoLabel, SingleValue: PremiseSingleValue }) }, this.props))));
    };
    return PremiseDropdown;
}(React.Component));
export { PremiseDropdown };
//# sourceMappingURL=PremiseDropdown.js.map