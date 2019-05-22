import { mount } from "enzyme";
import * as React from "react";
import { Echo } from "../Echo";
describe("Echo", function () {
    it("renders the text", function () {
        var wrapper = mount(React.createElement(Echo, { text: "Hello, world!" }));
        var p = wrapper.find("p");
        expect(p).toHaveLength(1);
        expect(p.text()).toEqual("Hello, world!");
    });
});
//# sourceMappingURL=Echo.test.js.map