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
var styles = require("./indicator.scss");
var Indicator = /** @class */ (function (_super) {
    __extends(Indicator, _super);
    function Indicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Indicator.prototype.render = function () {
        var isActive = this.props.activeIndex === this.props.index;
        var isDisabled = this.props.activeIndex < this.props.index;
        var navStatusClass = isActive
            ? styles.active
            : isDisabled
                ? styles.disabled
                : styles.enabled;
        return (React.createElement("div", { className: styles.navLabel + " " + navStatusClass },
            React.createElement("label", { className: styles.label },
                React.createElement("span", { className: styles.index }, this.props.index),
                this.props.label)));
    };
    return Indicator;
}(React.Component));
export { Indicator };
//# sourceMappingURL=Indicator.js.map