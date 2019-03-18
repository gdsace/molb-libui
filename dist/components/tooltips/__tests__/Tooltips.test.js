import { shallow } from "enzyme";
import * as React from "react";
import Popup from "reactjs-popup";
import { TooltipsLocationTheme } from "../../EnumValues";
import { Icon, Link } from "../../index";
import { Tooltips } from "../Tooltips";
describe("Tooltips", function () {
    it("render ui", function () {
        var wrapper = shallow(React.createElement(Tooltips, { trigger: React.createElement("div", null), position: TooltipsLocationTheme.BottomLeft },
            React.createElement("div", null, "test ")));
        var popup = wrapper.find(Popup);
        expect(popup).toHaveLength(1);
    });
    it("render link button ui", function () {
        var wrapper = shallow(React.createElement(Tooltips, { trigger: React.createElement(Icon, { type: "help" }), position: TooltipsLocationTheme.BottomRight, width: 240, linkLabel: "Link Button", linkUrl: "http://www.baidu.com" },
            React.createElement("div", null, "Tooltip Label")));
        var link = wrapper.find(Link);
        expect(link).toHaveLength(1);
    });
});
//# sourceMappingURL=Tooltips.test.js.map