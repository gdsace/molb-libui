import { mount } from "enzyme";
import * as React from "react";
import { H7 } from "../H7";
describe("H7", function () {
    it("renders the text", function () {
        var wrapper = mount(React.createElement(H7, null, "Test H7 Test"));
        var title = wrapper.find("h6");
        expect(title).toHaveLength(1);
        expect(title.text()).toEqual("Test H7 Test");
    });
});
//# sourceMappingURL=h7.test.js.map