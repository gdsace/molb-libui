import { mount } from "enzyme";
import * as React from "react";
import { Icon } from "../Icon";
describe("Icon", function () {
    it("should render profile icon", function () {
        var icon = mount(React.createElement(Icon, { type: "profile" }));
        expect(icon).toHaveLength(1);
        expect(icon.props().type).toEqual("profile");
    });
    it("should render close icon", function () {
        var icon = mount(React.createElement(Icon, { type: "close" }));
        expect(icon).toHaveLength(1);
        expect(icon.props().type).toEqual("close");
    });
    it("should render dashboard icon", function () {
        var icon = mount(React.createElement(Icon, { type: "dashboard" }));
        expect(icon).toHaveLength(1);
        expect(icon.props().type).toEqual("dashboard");
    });
    it("should render payment icon", function () {
        var icon = mount(React.createElement(Icon, { type: "payment" }));
        expect(icon).toHaveLength(1);
        expect(icon.props().type).toEqual("payment");
    });
    it("should render business icon", function () {
        var icon = mount(React.createElement(Icon, { type: "business" }));
        expect(icon).toHaveLength(1);
        expect(icon.props().type).toEqual("business");
    });
});
//# sourceMappingURL=Icon.test.js.map