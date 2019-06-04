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

  describe("when configured to be row clickable", () => {
    let rfaDataSource: {};

    beforeEach(() => {
      rfaDataSource = [
        {
          key: "1",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
          onRowclickHandler: jest.fn()
        }
      ];
    });

    it("should allow its row to be clickable if [clickableRow] is set to true", () => {
      const wrapper = Enzyme.shallow(
        <Table
          columns={tableColumns}
          // @ts-ignore
          dataSource={rfaDataSource}
          clickableRow={true}
        />
      );

      wrapper
        .find("tbody")
        .find("tr")
        .simulate("click");

      // @ts-ignore
      expect(rfaDataSource[0].onRowclickHandler).toHaveBeenCalledTimes(1);
    });

    it("else it should not be clickable", () => {
      const wrapper = Enzyme.shallow(
        <Table
          columns={tableColumns}
          // @ts-ignore
          dataSource={rfaDataSource}
          clickableRow={false}
        />
      );

      wrapper
        .find("tbody")
        .find("tr")
        .simulate("click");

      // @ts-ignore
      expect(rfaDataSource[0].onRowclickHandler).toHaveBeenCalledTimes(0);
    });
  });
});
