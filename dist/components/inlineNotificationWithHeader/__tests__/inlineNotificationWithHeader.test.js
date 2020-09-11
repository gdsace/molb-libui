import { shallow } from "enzyme";
import * as React from "react";
import { Button } from "../../button";
import { NotificationTheme } from "../../EnumValues";
import { Icon } from "../../icons";
import { InlineNotificationWithHeader } from "../InlineNotificationWithHeader";
describe("Inline notification", function () {
    it("should render warning notification success", function () {
        var testThis = {
            header: "Header Test",
            text: "this is warning text"
        };
        var wrapper = shallow(React.createElement(InlineNotificationWithHeader, { header: "Header Test", text: "this is warning text", theme: NotificationTheme.Warning }));
        expect(wrapper.find("h5").text()).toEqual(testThis.header);
        expect(wrapper.find("p").text()).toEqual(testThis.text);
        expect(wrapper.find(Icon).prop("type")).toEqual("warning");
        expect(wrapper.find(".warning")).toHaveLength(2);
    });
    it("should render error notification success", function () {
        var testThis = {
            header: "Another Header Lah",
            text: "this is error text line 1\nthis is error text line 2"
        };
        var wrapper = shallow(React.createElement(InlineNotificationWithHeader, { header: testThis.header, text: testThis.text, theme: NotificationTheme.Error }));
        expect(wrapper.find("h5").text()).toEqual(testThis.header);
        expect(wrapper.find("p").html()).toContain("this is error text line 1<br/>this is error text line 2<br/>");
        expect(wrapper.find(".error")).toHaveLength(2);
        expect(wrapper.find(Icon).prop("type")).toEqual("notification-error");
    });
    it("should render notification with button when pass a parameter 'childNode'", function () {
        var testThis = {
            header: "Another Header Lah",
            text: "this is error text"
        };
        var wrapper = shallow(React.createElement(InlineNotificationWithHeader, { header: testThis.header, text: testThis.text, theme: NotificationTheme.Error, childNode: React.createElement(Button, null, "test button") }));
        expect(wrapper.find(Button)).toHaveLength(1);
    });
});
//# sourceMappingURL=inlineNotificationWithHeader.test.js.map