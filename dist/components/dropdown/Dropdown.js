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
import classnames from "classnames";
import _ from "lodash";
import React from "react";
import { Size } from "../EnumValues";
import { Input } from "../input";
import { addLocatedErrorClassname } from "../utils";
import { baseComponents, BaseDropdown } from "./BaseDropdown";
var styles = require("./styles.scss");
// This Dropdown has outlining, a label and an error field over BaseDropdown
// tslint:disable-next-line:max-classes-per-file
export var dropdownCustomStyles = {
    container: function (base, state) {
        var borderColor;
        if (_.get(state, "selectProps.error")) {
            borderColor = "1px solid #dc3545";
        }
        else if (state.isFocused && !state.isDisabled) {
            borderColor = "1px solid #408";
        }
        else {
            borderColor = "1px solid #dbdfe4";
        }
        // We don't have a handle to the "container" component
        // so we can't set a className on the outermost component
        // Also, react-select cannot insert --focused classNames
        // therefore we have to use css-in-js to set the styles for focused
        return __assign({}, base, { boxSizing: "border-box", borderRadius: state.isFocused ? "3px 3px 0 0" : "3px", border: borderColor, backgroundColor: state.isDisabled ? "#f9fafa" : "white" });
    },
    control: function (base) {
        return __assign({}, base, { border: "none", boxShadow: "none", "&:hover": {
                border: "none"
            }, backgroundColor: "transparent" });
    }
};
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dropdown.prototype.render = function () {
        var _this = this;
        var dropdownClassName = classnames(styles.field, styles.dropdownField, styles[this.props.size || Size.Large]);
        var dropdown = (React.createElement("div", { className: dropdownClassName },
            React.createElement(BaseDropdown, __assign({ components: __assign({}, baseComponents), styles: dropdownCustomStyles }, this.props)),
            this.props.error && (React.createElement("p", { className: addLocatedErrorClassname(styles.errorMessage) }, this.props.error))));
        var input = (React.createElement(Input, { value: this.props.textInputValue || "", size: Size.Large, errorMsg: "" + this.props.error, showError: !!this.props.error, maxLength: this.props.maxLength, onChange: function (event) {
                if (_this.props.onTextInputChange) {
                    _this.props.onTextInputChange(event);
                }
            } }));
        // Wrap select in label for accessibility
        // Todo: use a common Label component
        if (this.props.label) {
            return (React.createElement("label", { "data-scrollpoint": true },
                React.createElement("div", { className: styles.label }, this.props.label),
                this.props.editable ? input : dropdown));
        }
        return dropdown;
    };
    return Dropdown;
}(React.Component));
export { Dropdown };
//# sourceMappingURL=Dropdown.js.map