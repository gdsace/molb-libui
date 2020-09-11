import * as Enzyme from "enzyme";
import * as React from "react";
import { Table } from "../index";
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
    describe("when configured to [clickable === true]", function () {
        var rowClickableDataSource;
        beforeEach(function () {
            rowClickableDataSource = [
                {
                    key: "1",
                    name: "Joe Black",
                    age: 32,
                    address: "Sidney No. 1 Lake Park",
                    onRowClickHandler: jest.fn()
                }
            ];
        });
        it("should allow its row to be clickable if [clickableRow] is set to true", function () {
            var wrapper = Enzyme.shallow(React.createElement(Table, { columns: tableColumns, 
                // @ts-ignore
                dataSource: rowClickableDataSource, clickableRow: true }));
            wrapper
                .find("tbody")
                .find("tr")
                .simulate("click");
            // @ts-ignore
            expect(rowClickableDataSource[0].onRowClickHandler)
                .toHaveBeenCalledTimes(1); // tslint:disable-line:prettier
        });
        it("else it should not be clickable", function () {
            var wrapper = Enzyme.shallow(React.createElement(Table, { columns: tableColumns, 
                // @ts-ignore
                dataSource: rowClickableDataSource, clickableRow: false }));
            wrapper
                .find("tbody")
                .find("tr")
                .simulate("click");
            // @ts-ignore
            expect(rowClickableDataSource[0].onRowClickHandler)
                .toHaveBeenCalledTimes(0); // tslint:disable-line:prettier
        });
    });
});
//# sourceMappingURL=table.test.js.map