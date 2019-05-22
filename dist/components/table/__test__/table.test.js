import * as Enzyme from "enzyme";
import * as React from "react";
import { Table } from "../Table";
import { dataSource, tableColumns } from "./__mocks__";
describe("Table", function () {
    it("should show table header", function () {
        var wrapper = Enzyme.shallow(React.createElement(Table, { columns: tableColumns, dataSource: dataSource }));
        var tHeaderText = wrapper
            .find("thead")
            .render()
            .text();
        expect(tHeaderText).toEqual("NameAgeAddress");
    });
    it("should show table header with html-tag allowed", function () {
        var wrapper = Enzyme.shallow(React.createElement(Table, { columns: tableColumns, dataSource: dataSource }));
        var tHeaderCell = wrapper.find("thead tr th").at(2);
        expect(tHeaderCell.html()).toEqual('<th class=""><span>Address<BR/></span></th>');
    });
    it("should show table body", function () {
        var wrapper = Enzyme.shallow(React.createElement(Table, { columns: tableColumns, dataSource: dataSource }));
        var tBodyText = wrapper.find("tbody").text();
        expect(tBodyText).toEqual("Joe Black32Joe Black33");
    });
});
//# sourceMappingURL=table.test.js.map