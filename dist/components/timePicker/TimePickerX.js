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
// export class TimePicker extends React.Component<{}, {}> {
//   public render() {
//     return <span>aaa</span>;
//   }
// }
var TimePickerX = /** @class */ (function (_super) {
    __extends(TimePickerX, _super);
    function TimePickerX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimePickerX.prototype.render = function () {
        return React.createElement("div", null, "aaa");
    };
    return TimePickerX;
}(React.Component));
export { TimePickerX };
//# sourceMappingURL=TimePickerX.js.map