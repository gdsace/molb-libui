import { mount, shallow } from "enzyme";
import { noop } from "lodash";
import * as React from "react";
import { Pagination } from "../Pagination";
import { Dropdown } from "../../dropdown";

describe("Pagination Section", () => {
  it("should have only next button on first page", () => {
    const wrapper = mount(
      <Pagination
        totalResultsCount={20}
        rowsPerPage={10}
        currentPage={0}
        showTotalResultsAvailable={true}
        history={noop}
        onPageChange={noop}
      />
    );

    expect(
      wrapper
        .find("button")
        .at(0)
        .props().disabled
    ).toEqual(true);
    expect(
      wrapper
        .find("button")
        .at(1)
        .props().disabled
    ).toEqual(false);
  });

  it("should have only previous button on last page", () => {
    const wrapper = mount(
      <Pagination
        totalResultsCount={20}
        rowsPerPage={10}
        currentPage={1}
        showTotalResultsAvailable={true}
        history={noop}
        onPageChange={noop}
      />
    );

    expect(
      wrapper
        .find("button")
        .at(0)
        .props().disabled
    ).toEqual(false);
    expect(
      wrapper
        .find("button")
        .at(1)
        .props().disabled
    ).toEqual(true);
  });

  it("should have both previous and next buttons in between pages", () => {
    const wrapper = mount(
      <Pagination
        totalResultsCount={30}
        rowsPerPage={10}
        currentPage={1}
        showTotalResultsAvailable={true}
        history={noop}
        onPageChange={noop}
      />
    );

    expect(
      wrapper
        .find("button")
        .at(0)
        .props().disabled
    ).toEqual(false);
    expect(
      wrapper
        .find("button")
        .at(1)
        .props().disabled
    ).toEqual(false);
  });

  it("should show dropdown of page ranges, when canJumpToPages is true", () => {
    const onPageChange = jest.fn();
    const wrapper = shallow(
      <Pagination
        totalResultsCount={20}
        rowsPerPage={10}
        currentPage={1}
        showTotalResultsAvailable={true}
        history={noop}
        onPageChange={onPageChange}
        canJumpToPages={true}
      />
    );

    const options = [{ label: "1-10", value: 0 }, { label: "11-20", value: 1 }];
    const dropDown = wrapper.find(Dropdown);

    expect(dropDown.length).toEqual(1);
    expect(dropDown.props().value).toEqual(options[1]);
    expect(dropDown.props().options).toEqual(options);

    dropDown.props().onChange({ label: "1-10", value: 0 });
    expect(onPageChange).toHaveBeenCalledWith(0);
  });
});
