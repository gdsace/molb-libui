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
import { FormSectionSpacing } from "../EnumValues";
var styles = require("./formSection.scss");
var FormSection = /** @class */ (function (_super) {
    __extends(FormSection, _super);
    function FormSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormSection.prototype.render = function () {
        var headerSectionClassName = classNames(styles.headerSection, this.props.theme ? styles[this.props.theme] : styles.large);
        return (React.createElement("section", { id: this.props.id, className: styles.section },
            this.props.caption && (React.createElement("div", { className: styles.caption }, this.props.caption)),
            React.createElement("div", { className: this.props.header || this.props.subheader
                    ? headerSectionClassName
                    : "" },
                this.props.header && (React.createElement("h3", { className: styles.header }, this.props.header)),
                this.props.subheader && (React.createElement("h6", { className: styles.subheader }, this.props.subheader))),
            this.props.children));
    };
    FormSection.defaultProps = {
        theme: FormSectionSpacing.Large
    };
    return FormSection;
}(React.Component));
export { FormSection };
//# sourceMappingURL=FormSection.js.map