var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { mount } from "enzyme";
import * as React from "react";
import { DefaultFileUploadChild, formatBytes } from "../DefaultFileUploadChild";
import { FileUploadStatus } from "../FileUpload";
import { documentTypes } from "./__mocks__/documentTypes";
describe("DefaultFileUploadChild", function () {
    it("shows name and description if no file is present", function () {
        var wrapper = mount(React.createElement(DefaultFileUploadChild, { documentType: documentTypes.required, baseUrl: "", token: "" }));
        expect(wrapper
            .find(".textTitle")
            .at(0)
            .text()).toEqual("somename");
        expect(wrapper
            .find(".textDescription")
            .at(0)
            .text()).toEqual("somedescription");
    });
    it("shows file info if upload completed", function () {
        var wrapper = mount(React.createElement(DefaultFileUploadChild, { documentType: documentTypes.required, uploadState: FileUploadStatus.Complete, document: { name: "bar", fileSize: 100 }, baseUrl: "", token: "" }));
        expect(wrapper
            .find(".textTitle")
            .at(0)
            .text()).toEqual("somename");
        expect(wrapper
            .find(".textFilename")
            .at(0)
            .find("div")
            .at(0)
            .text()).toEqual("bar");
        expect(wrapper
            .find(".textFilesize")
            .at(0)
            .text()).toEqual("100 B");
    });
    it("shows error text if upload failed", function () {
        var wrapper = mount(React.createElement(DefaultFileUploadChild, { documentType: documentTypes.optional, uploadState: FileUploadStatus.Error, error: "something wrong", baseUrl: "", token: "" }));
        expect(wrapper.find(".textError").text()).toEqual("something wrong");
    });
    it("shows name and optional text if optional", function () {
        var wrapper = mount(React.createElement(DefaultFileUploadChild, { documentType: documentTypes.optional, baseUrl: "", token: "" }));
        expect(wrapper.find(".textTitle").text()).toEqual("optionalname (Optional)");
    });
    it("shows download link if template file is present and given mandatory linkDescription", function () {
        var wrapper = mount(React.createElement(DefaultFileUploadChild, { documentType: documentTypes.required, baseUrl: "", token: "", linkDescription: "Download mandatory template" }));
        expect(wrapper
            .find(".downloadLink")
            .at(0)
            .text()).toEqual("Download mandatory template");
    });
    it("shows download link if template file is present and given sample linkDescription", function () {
        var linkDescription = "Download sample";
        var wrapper = mount(React.createElement(DefaultFileUploadChild, { documentType: documentTypes.required, baseUrl: "", token: "", linkDescription: linkDescription }));
        expect(wrapper
            .find(".downloadLink")
            .at(0)
            .text()).toEqual(linkDescription);
    });
    it("not shows download link if template file is not existed", function () {
        var wrapper = mount(React.createElement(DefaultFileUploadChild, { documentType: __assign({}, documentTypes.required, { hasTemplateFile: false }), baseUrl: "", token: "" }));
        expect(wrapper.find(".downloadLink")).toHaveLength(0);
    });
    describe("formatBytes", function () {
        it("formats byte sizes", function () {
            expect(formatBytes(100)).toEqual("100 B");
        });
        it("formats kilobyte sizes", function () {
            expect(formatBytes(1025)).toEqual("1.0 KB");
        });
        it("formats megabyte sizes", function () {
            expect(formatBytes(1024 * 1024 * 2)).toEqual("2.0 MB");
        });
    });
});
//# sourceMappingURL=DefaultFileUploadChild.test.js.map