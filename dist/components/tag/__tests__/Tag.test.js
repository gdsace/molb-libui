import { mount } from "enzyme";
import * as React from "react";
import { TagTheme } from "../../EnumValues";
import { Tag } from "../Tag";
describe("Tag", function () {
    it("render ui", function () {
        var wrapper = mount(React.createElement(Tag, { label: "this is lable", theme: TagTheme.Green }));
        var span = wrapper.find("span");
        expect(span.text()).toEqual("this is lable");
    });
});
//# sourceMappingURL=Tag.test.js.map