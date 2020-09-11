import { mount, shallow } from "enzyme";
import { noop } from "lodash";
import * as React from "react";
import { Dropdown } from "../../dropdown";
import { Pagination } from "../Pagination";
describe("Pagination Section", function () {
    it("should have only next button on first page", function () {
        var wrapper = mount(React.createElement(Pagination, { totalResultsCount: 20, rowsPerPage: 10, currentPage: 0, showTotalResultsAvailable: true, history: noop, onPageChange: noop }));
        expect(wrapper
            .find("button")
            .at(0)
            .props().disabled).toEqual(true);
        expect(wrapper
            .find("button")
            .at(1)
            .props().disabled).toEqual(false);
    });
    it("should have only previous button on last page", function () {
        var wrapper = mount(React.createElement(Pagination, { totalResultsCount: 20, rowsPerPage: 10, currentPage: 1, showTotalResultsAvailable: true, history: noop, onPageChange: noop }));
        expect(wrapper
            .find("button")
            .at(0)
            .props().disabled).toEqual(false);
        expect(wrapper
            .find("button")
            .at(1)
            .props().disabled).toEqual(true);
    });
    it("should have both previous and next buttons in between pages", function () {
        var wrapper = mount(React.createElement(Pagination, { totalResultsCount: 30, rowsPerPage: 10, currentPage: 1, showTotalResultsAvailable: true, history: noop, onPageChange: noop }));
        expect(wrapper
            .find("button")
            .at(0)
            .props().disabled).toEqual(false);
        expect(wrapper
            .find("button")
            .at(1)
            .props().disabled).toEqual(false);
    });
    it("should show dropdown of page ranges, when canJumpToPages is true", function () {
        var onPageChange = jest.fn();
        var wrapper = shallow(React.createElement(Pagination, { totalResultsCount: 20, rowsPerPage: 10, currentPage: 1, showTotalResultsAvailable: true, history: noop, onPageChange: onPageChange, canJumpToPages: true }));
        var options = [{ label: "1-10", value: 0 }, { label: "11-20", value: 1 }];
        var dropDown = wrapper.find(Dropdown);
        expect(dropDown.length).toEqual(1);
        expect(dropDown.props().value).toEqual(options[1]);
        expect(dropDown.props().options).toEqual(options);
        dropDown.props().onChange({ label: "1-10", value: 0 });
        expect(onPageChange).toHaveBeenCalledWith(0);
    });
});
//# sourceMappingURL=Pagination.test.js.map