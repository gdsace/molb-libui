import { mount } from "enzyme";
import * as React from "react";
import { Header } from "../Header";
describe("Echo", function () {
    it("renders the text", function () {
        var wrapper = mount(React.createElement(Header, null,
            React.createElement("h2", null, "test")));
        var title = wrapper.find("h2");
        expect(title).toHaveLength(1);
        expect(title.text()).toEqual("test");
    });
});
//# sourceMappingURL=header.test.js.map