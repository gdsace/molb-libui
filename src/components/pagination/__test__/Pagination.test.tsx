import { mount } from "enzyme";
import { noop } from "lodash";
import * as React from "react";
import { Pagination } from "../Pagination";

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
});
