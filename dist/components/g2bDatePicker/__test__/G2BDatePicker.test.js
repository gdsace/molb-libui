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
import { shallow } from "enzyme";
import * as React from "react";
import DatePicker from "react-datepicker";
import { G2BDatePicker } from "../G2BDatePicker";
describe("G2BDatePicker", function () {
    var props;
    beforeEach(function () {
        props = {
            selectedDate: null,
            onChange: jest.fn(),
            placeholderText: "this is place holder",
            dateFormat: "DD/MM/YYYY",
            showError: false,
            errorMsg: undefined
        };
    });
    it("render DatePicker", function () {
        var wrapper = shallow(React.createElement(G2BDatePicker, __assign({}, props)));
        var datePicker = wrapper.find(DatePicker);
        expect(datePicker).toHaveLength(1);
    });
    it("should render errorMsg when showError is true", function () {
        props.showError = true;
        props.errorMsg = "this is error msg.";
        var wrapper = shallow(React.createElement(G2BDatePicker, __assign({}, props)));
        var errorMsg = wrapper.find(".errorMsg");
        expect(errorMsg).toHaveLength(1);
        expect(errorMsg.text()).toEqual("this is error msg.");
    });
});
//# sourceMappingURL=G2BDatePicker.test.js.map