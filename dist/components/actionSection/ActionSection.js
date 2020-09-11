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
import { Button } from "../button";
import { Size, Theme } from "../EnumValues";
var styles = require("./actionSection.scss");
var PREVIOUS = "Prev";
var NEXT = "Next";
var ActionSection = /** @class */ (function (_super) {
    __extends(ActionSection, _super);
    function ActionSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionSection.prototype.render = function () {
        var _a;
        var rowStyle = classNames(styles.row, styles.actionSectionRow, (_a = {},
            _a[styles.onlyPrevious] = this.props.showPrevious && !this.props.showNext,
            _a[styles.onlyNext] = !this.props.showPrevious && this.props.showNext,
            _a));
        var sectionClassName = classNames(this.props.className ? this.props.className : "");
        return (React.createElement("section", { className: styles.section + " " + sectionClassName },
            React.createElement("div", { className: rowStyle },
                this.props.showPrevious && (React.createElement(Button, { label: this.props.onPreviousLabel
                        ? this.props.onPreviousLabel
                        : PREVIOUS, size: Size.Medium, theme: Theme.Secondary, icon: this.props.showPreviousIcon ? "arrowPrev" : "", onClick: this.props.onPreviousClick ||
                        (function () {
                            /* noop */
                        }) })),
                this.props.showNext && (React.createElement(Button, { label: this.props.onNextLabel ? this.props.onNextLabel : NEXT, size: Size.Medium, theme: Theme.Primary, icon: this.props.showNextIcon ? "arrowNext" : "", iconAlign: "right", disabled: this.props.disableNext, loading: this.props.loading, onClick: this.props.onNextClick ||
                        (function () {
                            /* noop */
                        }) })))));
    };
    ActionSection.defaultProps = {
        showPreviousIcon: true,
        showNextIcon: true
    };
    return ActionSection;
}(React.Component));
export { ActionSection };
//# sourceMappingURL=ActionSection.js.map