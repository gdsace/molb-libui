import { mount } from "enzyme";
import * as React from "react";
import { TextView } from "../TextView";
var textMockNode = React.createElement("div", { className: "textMock" }, "test");
var textMockString = '<div class="test">test</div>';
describe("TextView", function () {
    it("renders the UI Component", function () {
        var wrapper = mount(React.createElement(TextView, null, textMockNode));
        var textChildren = wrapper.find(".textarea");
        expect(textChildren).toHaveLength(1);
    });
    // because this component render with dangerouslySetInnerHTML
    // the test process will be little different.
    it("renders the children node", function () {
        var wrapper = mount(React.createElement(TextView, null, textMockNode));
        expect(wrapper.html()).toContain("<div class=\"textMock\">test</div>");
    });
    it("renders the children string", function () {
        var wrapper = mount(React.createElement(TextView, { shouldRenderWithHTMLString: true }, textMockString));
        expect(wrapper.html()).toContain(textMockString);
    });
});
//# sourceMappingURL=TextView.test.js.map