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
import { SubFormSectionTheme } from "../EnumValues";
var styles = require("./subFormSection.scss");
var SubFormSection = /** @class */ (function (_super) {
    __extends(SubFormSection, _super);
    function SubFormSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubFormSection.prototype.render = function () {
        var rootContainerClassName = classNames(styles.rootContainer, this.props.theme ? styles[this.props.theme] : "");
        return (React.createElement("section", { id: this.props.id, className: rootContainerClassName },
            (this.props.title || this.props.subTitle) && (React.createElement("div", { className: styles.headerSection },
                this.props.title && (React.createElement("div", { className: styles.titleContainer },
                    React.createElement("span", { className: styles.title }, this.props.title),
                    this.props.optional && (React.createElement("span", { className: styles.optional }, "(Optional)")))),
                this.props.subTitle && (React.createElement("h6", { className: styles.subTitle }, this.props.subTitle)))),
            this.props.children));
    };
    SubFormSection.defaultProps = {
        theme: SubFormSectionTheme.Zero
    };
    return SubFormSection;
}(React.Component));
export { SubFormSection };
//# sourceMappingURL=SubFormSection.js.map