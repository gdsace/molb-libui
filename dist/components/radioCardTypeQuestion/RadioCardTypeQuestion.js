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
import { H7 } from "../h7";
import { TileGroup } from "../tileGroup";
import { Tile } from "../tileGroup/tile";
import { map } from "lodash";
import { NotificationTheme, TileTheme } from "../EnumValues";
import { InlineNotification } from "../inlineNotification";
var styles = require("./radioCardTypeQuestion.scss");
var RadioCardTypeQuestion = /** @class */ (function (_super) {
    __extends(RadioCardTypeQuestion, _super);
    function RadioCardTypeQuestion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (event) {
            _this.props.onChange(event.target.value);
        };
        return _this;
    }
    RadioCardTypeQuestion.prototype.render = function () {
        var _a = this.props, question = _a.question, options = _a.options, selectedAnswer = _a.selectedAnswer;
        return (React.createElement("div", { id: this.props.id, className: styles.questionWrapper },
            React.createElement("div", { className: styles.header },
                React.createElement(H7, null, question),
                this.props.questionTooltip),
            this.props.showError && this.props.errorMsg && (React.createElement("div", { className: styles.errorMsg },
                React.createElement(InlineNotification, { text: this.props.errorMsg, theme: NotificationTheme.Error }))),
            React.createElement(TileGroup, { onChange: this.onChange, className: styles.tileGroupWrapper, value: selectedAnswer }, map(options, function (option) { return (React.createElement(Tile, { key: option.value, theme: TileTheme.MediumTile, icon: "", content: option.label, description: option.description, value: option.value, containerStyle: styles.tileWrapper })); }))));
    };
    RadioCardTypeQuestion.defaultProps = {
        showError: false
    };
    return RadioCardTypeQuestion;
}(React.Component));
export { RadioCardTypeQuestion };
//# sourceMappingURL=RadioCardTypeQuestion.js.map