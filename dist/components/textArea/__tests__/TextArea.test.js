import * as Enzyme from "enzyme";
import * as React from "react";
import { TextArea } from "../TextArea";
describe("TextArea", function () {
    it("should show title", function () {
        var wrapper = Enzyme.shallow(React.createElement(TextArea, { title: "Lable" }));
        var lable = wrapper
            .find("label")
            .at(0)
            .text();
        expect(lable).toEqual("Lable");
    });
    it("should show helperText", function () {
        var wrapper = Enzyme.shallow(React.createElement(TextArea, { helperText: "help" }));
        var span = wrapper.find(".helperMsg").text();
        expect(span).toEqual("help");
    });
    it("should show maxlength", function () {
        var wrapper = Enzyme.shallow(React.createElement(TextArea, { maxLength: 10 }));
        var span = wrapper.find(".countMsg").text();
        expect(span).toEqual("0/10");
    });
});
//# sourceMappingURL=TextArea.test.js.map