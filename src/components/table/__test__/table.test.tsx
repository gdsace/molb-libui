import * as Enzyme from "enzyme";
import * as React from "react";
import { Table } from "../Table";
import { dataSource, tableColumns } from "./__mocks__";

describe("Table", () => {
  it("should show table header", () => {
    const wrapper = Enzyme.shallow(
      <Table columns={tableColumns} dataSource={dataSource} />
    );

    const tHeaderText = wrapper
      .find("thead")
      .render()
      .text();
    expect(tHeaderText).toEqual("NameAgeAddress");
  });

  it("should show table header with html-tag allowed", () => {
    const wrapper = Enzyme.shallow(
      <Table columns={tableColumns} dataSource={dataSource} />
    );

    const tHeaderCell = wrapper.find("thead tr th").at(2);
    expect(tHeaderCell.html()).toEqual(
      '<th class=""><span>Address<BR/></span></th>'
    );
  });

  it("should show table body", () => {
    const wrapper = Enzyme.shallow(
      <Table columns={tableColumns} dataSource={dataSource} />
    );

    const tBodyText = wrapper.find("tbody").text();
    expect(tBodyText).toEqual("Joe Black32Joe Black33");
  });
});
