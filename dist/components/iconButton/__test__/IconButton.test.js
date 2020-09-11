import { shallow } from "enzyme";
import { noop } from "lodash";
import * as React from "react";
import { Icon } from "../../icons";
import { IconButton } from "../IconButton";
describe("IconButton", function () {
    it("renders profile icon", function () {
        var wrapper = shallow(React.createElement(IconButton, { type: "profile", onClick: noop }));
        var iconContainer = wrapper.find(Icon);
        expect(iconContainer).toHaveLength(1);
        expect(iconContainer.html()).toContain("#profile");
    });
    it("can click and not click when disabled", function () {
        var callbackFunc = jest.fn();
        var disabledCallbackFunc = jest.fn();
        var wrapper = shallow(React.createElement(IconButton, { onClick: callbackFunc }));
        wrapper.simulate("click");
        expect(callbackFunc).toHaveBeenCalled();
        var disabledWrapper = shallow(React.createElement(IconButton, { disabled: true, onClick: disabledCallbackFunc }));
        disabledWrapper.simulate("click");
        expect(disabledCallbackFunc).toHaveBeenCalledTimes(0);
    });
});
//# sourceMappingURL=IconButton.test.js.map