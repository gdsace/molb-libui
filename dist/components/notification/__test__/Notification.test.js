import * as React from "react";
import { shallow } from "enzyme";
import { ToastContainer } from "react-toastify";
import { Button } from "../../button";
import { NotificationTheme } from "../../EnumValues";
import { notification } from "../Notification";
describe("Notification", function () {
    window.matchMedia = jest.fn().mockReturnValue({
        matches: true
    });
    it("renders the children component", function () {
        var successOption = {
            header: "Notification header",
            text: "Notification text",
            theme: NotificationTheme.Success
        };
        var wrapper = shallow(React.createElement("div", null,
            React.createElement(Button, { label: "success", onClick: function () { return notification(successOption); } }),
            React.createElement(ToastContainer, null)));
        var button = wrapper.find(Button);
        var toastContainer = wrapper.find(ToastContainer);
        expect(button).toHaveLength(1);
        expect(toastContainer).toHaveLength(1);
    });
});
//# sourceMappingURL=Notification.test.js.map