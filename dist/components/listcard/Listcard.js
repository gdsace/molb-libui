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
        var _a = this.props, onButtonClick = _a.onButtonClick, status = _a.status, buttonText = _a.buttonText, twoContainers = _a.twoContainers, title = _a.title, subTitle = _a.subTitle, description = _a.description, tag = _a.tag, supportingText = _a.supportingText, buttonIcon = _a.buttonIcon, buttonTheme = _a.buttonTheme, buttonSize = _a.buttonSize;
        var buttonClick = onButtonClick ? onButtonClick : function () { return null; };
        var statusClassnames = classnames(styles["" + status]);
        var dispear = buttonText ? "" : classnames(styles["dispear"]);
        return (React.createElement("div", { className: styles.container },
            React.createElement("div", { className: twoContainers ? styles.leftContainer : styles.titleContainer },
                React.createElement("div", { className: styles.title }, title),
                React.createElement("div", { className: styles.subTitle }, subTitle),
                React.createElement("div", { className: styles.description }, description)),
            !twoContainers && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: styles.tagContainer },
                    React.createElement("div", { className: styles.label }, "STATUS"),
                    React.createElement("div", { className: styles.tag },
                        React.createElement("span", { className: styles.tagText + " " + statusClassnames }, tag))),
                React.createElement("div", { className: styles.labelContainer },
                    React.createElement("div", { className: styles.label }, "FEES"),
                    React.createElement("div", { className: styles.supportingText }, supportingText)))),
            React.createElement("div", { className: twoContainers ? styles.rightContainer : styles.buttonContainer }, buttonText && (React.createElement(Button, { className: styles.button + " " + dispear, size: buttonSize, theme: buttonTheme, label: buttonText, onClick: buttonClick, icon: buttonIcon, iconAlign: "right" })))));
    };
    Listcard.defaultProps = {
        title: "Licence Title",
        subTitle: "subTitle",
        description: "description",
        tag: "warning",
        supportingText: "supportingText",
        status: ListcardStatus.Normal,
        buttonIcon: "",
        buttonTheme: Theme.Primary,
        buttonSize: Size.Small
    };
    return Listcard;
}(React.Component));
export { Listcard };
//# sourceMappingURL=Listcard.js.map