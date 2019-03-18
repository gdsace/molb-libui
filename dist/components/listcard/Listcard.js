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
import * as React from "react";
import classnames from "classnames";
import { Button } from "../button";
import { ListcardStatus, Size, Theme } from "../EnumValues";
var styles = require("./listcard.scss");
var Listcard = /** @class */ (function (_super) {
    __extends(Listcard, _super);
    function Listcard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Listcard.prototype.render = function () {
        var onButtonClick = this.props.onButtonClick
            ? this.props.onButtonClick
            : function () { return null; };
        var statusClassnames = classnames(styles["" + this.props.status]);
        var dispear = this.props.buttonText ? "" : classnames(styles["dispear"]);
        return (React.createElement("div", { className: styles.container },
            React.createElement("div", { className: styles.titleContainer },
                React.createElement("div", { className: styles.title }, this.props.title),
                React.createElement("div", { className: styles.subTitle }, this.props.subTitle),
                React.createElement("div", { className: styles.description }, this.props.description)),
            React.createElement("div", { className: styles.tagContainer },
                React.createElement("div", { className: styles.label }, "STATUS"),
                React.createElement("div", { className: styles.tag },
                    React.createElement("span", { className: styles.tagText + " " + statusClassnames }, this.props.tag))),
            React.createElement("div", { className: styles.labelContainer },
                React.createElement("div", { className: styles.label }, "FEES"),
                React.createElement("div", { className: styles.supportingText }, this.props.supportingText)),
            React.createElement("div", { className: styles.buttonContainer }, this.props.buttonText && (React.createElement(Button, { className: styles.button + " " + dispear, size: Size.Medium, theme: Theme.Primary, label: this.props.buttonText, onClick: onButtonClick })))));
    };
    Listcard.defaultProps = {
        title: "Licence Title",
        subTitle: "subTitle",
        description: "description",
        tag: "warning",
        supportingText: "supportingText",
        status: ListcardStatus.Normal
    };
    return Listcard;
}(React.Component));
export { Listcard };
//# sourceMappingURL=Listcard.js.map