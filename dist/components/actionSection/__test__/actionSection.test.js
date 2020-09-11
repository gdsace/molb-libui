import { mount } from "enzyme";
import { noop } from "lodash";
import * as React from "react";
import { Button } from "../../button";
import { ActionSection } from "../ActionSection";
describe("Action Section", function () {
    it("next action section", function () {
        var wrapper = mount(React.createElement(ActionSection, { showPrevious: false, showNext: true, onNextClick: noop, history: noop }));
        var button = wrapper.find("button");
        expect(button).toHaveLength(1);
        expect(button.text()).toEqual("Next");
    });
    it("previous action section", function () {
        var wrapper = mount(React.createElement(ActionSection, { showPrevious: true, showNext: false, onNextClick: noop, history: noop }));
        var button = wrapper.find("button");
        expect(button).toHaveLength(1);
        expect(button.text()).toEqual("Prev");
    });
    it("next and previous action section", function () {
        var wrapper = mount(React.createElement(ActionSection, { showPrevious: true, showNext: true, onNextClick: noop, history: noop }));
        var button = wrapper.find("button");
        expect(button).toHaveLength(2);
    });
    it("should display custom label", function () {
        var wrapper = mount(React.createElement(ActionSection, { onPreviousLabel: "previous label", onNextLabel: "next label", showPrevious: true, showNext: true, onNextClick: noop, history: noop }));
        expect(wrapper
            .find(Button)
            .at(0)
            .props().label).toEqual("previous label");
        expect(wrapper
            .find(Button)
            .at(1)
            .props().label).toEqual("next label");
    });
    it("should have loading icon when loading is set", function () {
        var wrapper = mount(React.createElement(ActionSection, { showPrevious: true, showNext: true, onPreviousLabel: "Previous", onNextLabel: "Next", onNextClick: noop, history: noop, loading: true }));
        expect(wrapper
            .find(Button)
            .at(0)
            .props().loading).toEqual(false);
        expect(wrapper
            .find(Button)
            .at(1)
            .props().loading).toEqual(true);
    });
    it("should have onlyNext class when only showNext to be true", function () {
        var wrapper = mount(React.createElement(ActionSection, { showPrevious: false, showNext: true, onNextClick: noop, history: noop }));
        expect(wrapper.find(".onlyNext")).toHaveLength(1);
    });
    it("should have onlyPrevious class when only showPrevious to be true", function () {
        var wrapper = mount(React.createElement(ActionSection, { showPrevious: true, showNext: false, onNextClick: noop, history: noop }));
        expect(wrapper.find(".onlyPrevious")).toHaveLength(1);
    });
});
//# sourceMappingURL=actionSection.test.js.map