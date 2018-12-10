import * as Enzyme from "enzyme";
import * as React from "react";
import { Table } from "../Table";
import { dataSource, tableColumns } from "./__mocks__";

describe("Table", () => {
  it("should show table header", () => {
    const wrapper = Enzyme.shallow(
      <Table columns={tableColumns} dataSource={dataSource} />
    );

    const tHeaderText = wrapper.find("thead").text();
    expect(tHeaderText).toEqual("NameAgeAddress");
  });

  it("should show table body", () => {
    const wrapper = Enzyme.shallow(
      <Table columns={tableColumns} dataSource={dataSource} />
    );

    const tHeaderText = wrapper.find("tbody").text();
    expect(tHeaderText).toEqual("Joe Black32Joe Black33");
  });
});
