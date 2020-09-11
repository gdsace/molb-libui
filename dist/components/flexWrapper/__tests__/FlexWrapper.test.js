import { mount } from "enzyme";
import * as React from "react";
import { FlexDirectionType } from "../../EnumValues";
import { FlexWrapper } from "../FlexWrapper";
describe("FlexWrapper", function () {
    it("renders flexbox with flex direction row by default", function () {
        var wrapper = mount(React.createElement(FlexWrapper, null,
            React.createElement("h2", null, "child 1"),
            React.createElement("h2", null, "child 1")));
        expect(wrapper.props().flexDirection).toEqual("row");
        expect(wrapper.find("div").hasClass("row")).toBe(true);
    });
    it("renders flexbox with flex direction column when value column is specified in flexDirection prop", function () {
        var wrapper = mount(React.createElement(FlexWrapper, { flexDirection: FlexDirectionType.COLUMN },
            React.createElement("h2", null, "child 1"),
            React.createElement("h2", null, "child 1")));
        expect(wrapper.props().flexDirection).toEqual("column");
        expect(wrapper.find("div").hasClass("column")).toBe(true);
    });
});
//# sourceMappingURL=FlexWrapper.test.js.map