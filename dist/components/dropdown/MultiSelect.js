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
import React from "react";
import { components } from "react-select";
import { Size } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";
import { baseComponents, BaseDropdown } from "./BaseDropdown";
import { dropdownCustomStyles } from "./Dropdown";
var styles = require("./styles.scss");
var ClearIndicator = function () {
    return React.createElement(React.Fragment, null);
};
var MultiValueRemove = function (props) {
    return (React.createElement(components.MultiValueRemove, __assign({}, props),
        React.createElement(Icon, { type: "close", size: "12" })));
};
var MultiValueContainer = function (props) {
    return React.createElement(components.MultiValueContainer, __assign({}, props));
};
var ValueContainer = function (props) {
    return (React.createElement(components.ValueContainer, __assign({}, props), props.children));
};
var multiSelectCustomComponents = __assign({}, baseComponents, { ClearIndicator: ClearIndicator,
    MultiValueRemove: MultiValueRemove,
    MultiValueContainer: MultiValueContainer,
    ValueContainer: ValueContainer });
var multiSelectCustomStyles = __assign({}, dropdownCustomStyles, { multiValueRemove: function (base) { return (__assign({}, base, { "&:hover": {
            backgroundColor: "#dbdfe4",
            color: "#313840"
        } })); }, multiValue: function (base) { return (__assign({}, base, { margin: "4px 0 4px 8px" })); }, valueContainer: function (base) { return (__assign({}, base, { padding: "9px 8px" })); }, placeholder: function (base) { return (__assign({}, base, { fontWeight: 400, fontFamily: "HK Nova", fontSize: "14px", color: "#647283 " })); } });
var MultiSelect = /** @class */ (function (_super) {
    __extends(MultiSelect, _super);
    function MultiSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiSelect.prototype.render = function () {
        var multiSelectClassName = classnames(styles.field, styles.multiSelectField, styles[this.props.size || Size.Large]);
        return (React.createElement("div", { className: multiSelectClassName },
            React.createElement(BaseDropdown, __assign({ isMulti: true, styles: multiSelectCustomStyles, closeMenuOnSelect: false, onChange: this.props.onChange, onFocus: this.props.onFocus, components: multiSelectCustomComponents, value: this.props.selectedValue, options: this.props.options }, this.props)),
            this.props.error && (React.createElement("p", { className: addLocatedErrorClassname(styles.errorMessage) }, this.props.error))));
    };
    MultiSelect.defaultProps = {
        selectedValue: []
    };
    return MultiSelect;
}(React.Component));
export { MultiSelect };
//# sourceMappingURL=MultiSelect.js.map