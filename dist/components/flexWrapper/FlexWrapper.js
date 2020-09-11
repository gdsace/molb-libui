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
import classnames from "classnames";
import * as React from "react";
import { FlexDirectionType } from "../EnumValues";
var styles = require("./flexWrapper.scss");
var FlexWrapper = /** @class */ (function (_super) {
    __extends(FlexWrapper, _super);
    function FlexWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlexWrapper.prototype.render = function () {
        var flexClass = classnames(styles.flex, styles[this.props.flexDirection]);
        return React.createElement("div", { className: flexClass }, this.props.children);
    };
    FlexWrapper.defaultProps = {
        flexDirection: FlexDirectionType.ROW
    };
    return FlexWrapper;
}(React.Component));
export { FlexWrapper };
//# sourceMappingURL=FlexWrapper.js.map