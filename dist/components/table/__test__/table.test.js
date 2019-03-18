import * as Enzyme from "enzyme";
import * as React from "react";
import { Table } from "../Table";
import { dataSource, tableColumns } from "./__mocks__";
describe("Table", function () {
    it("should show table header", function () {
        var wrapper = Enzyme.shallow(React.createElement(Table, { columns: tableColumns, dataSource: dataSource }));
        var tHeaderText = wrapper.find("thead").text();
        expect(tHeaderText).toEqual("NameAgeAddress");
    });
    it("should show table body", function () {
        var wrapper = Enzyme.shallow(React.createElement(Table, { columns: tableColumns, dataSource: dataSource }));
        var tHeaderText = wrapper.find("tbody").text();
        expect(tHeaderText).toEqual("Joe Black32Joe Black33");
    });
});
//# sourceMappingURL=table.test.js.map