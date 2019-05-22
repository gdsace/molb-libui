import { shallow } from "enzyme";
import * as React from "react";
import { Icon } from "../../icons";
import { CustomInput } from "../CustomInput";
describe("CustomInput", function () {
    it("render CustomInput icon", function () {
        var wrapper = shallow(React.createElement(CustomInput, null));
        var icon = wrapper.find(Icon);
        expect(icon).toHaveLength(1);
    });
});
//# sourceMappingURL=CustomInput.test.js.map