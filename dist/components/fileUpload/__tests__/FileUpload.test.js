import { mount, shallow } from "enzyme";
import * as React from "react";
import { DefaultFileUploadChild } from "../DefaultFileUploadChild";
import { FileUpload } from "../FileUpload";
import { documentTypes } from "./__mocks__/documentTypes";
describe("FileUpload", function () {
    it("renders and passes down props to the default child component when not given an override", function () {
        var wrapper = mount(React.createElement(FileUpload, { baseUrl: "", subjectId: "", token: "", documentType: documentTypes.required, linkDescription: "Download mandatory template" }));
        var child = wrapper.find(DefaultFileUploadChild);
        expect(child).toHaveLength(1);
        expect(child
            .find(".textTitle")
            .at(0)
            .text()).toEqual("somename");
        expect(child
            .find(".textDescription")
            .at(0)
            .text()).toEqual("somedescription");
        expect(child
            .find(".downloadLink")
            .at(0)
            .text()).toEqual("Download mandatory template");
    });
    it("renders the child when given a child", function () {
        var wrapper = mount(React.createElement(FileUpload, { baseUrl: "", subjectId: "", token: "", documentType: documentTypes.required },
            React.createElement("div", null, "foo")));
        var child = wrapper.find(DefaultFileUploadChild);
        expect(child).toHaveLength(0);
        expect(wrapper.text()).toEqual("foo");
    });
    it("renders the child when given a child", function () {
        var wrapper = mount(React.createElement(FileUpload, { baseUrl: "", subjectId: "", token: "", documentType: documentTypes.required },
            React.createElement("div", null, "foo")));
        var child = wrapper.find(DefaultFileUploadChild);
        expect(child).toHaveLength(0);
        expect(wrapper.text()).toEqual("foo");
    });
    it("component will set uploadState to Unstarted after clearing errors", function () {
        var wrapper = shallow(React.createElement(FileUpload, { baseUrl: "", subjectId: "", token: "", error: "test", documentType: documentTypes.required }));
        var mySetState = jest.fn();
        wrapper.instance().setState = mySetState;
        wrapper.setState({
            uploadState: "error"
        });
        wrapper.setProps({
            error: undefined
        });
        expect(mySetState).toHaveBeenCalledWith({
            fileInfo: undefined,
            uploadState: "unstarted"
        });
    });
    it("component will set uploadState to Error after setting errors", function () {
        var wrapper = shallow(React.createElement(FileUpload, { baseUrl: "", subjectId: "", token: "", documentType: documentTypes.required }));
        var mySetState = jest.fn();
        wrapper.instance().setState = mySetState;
        wrapper.setState({
            uploadState: "unstarted"
        });
        wrapper.setProps({
            error: "test"
        });
        expect(mySetState).toHaveBeenCalledWith({
            fileInfo: undefined,
            uploadState: "error"
        });
    });
});
//# sourceMappingURL=FileUpload.test.js.map