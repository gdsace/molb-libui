import { mount, shallow } from "enzyme";
import * as React from "react";
import { DefaultFileUploadChild } from "../DefaultFileUploadChild";
import { FileUpload } from "../FileUpload";
import { documentTypes } from "./__mocks__/documentTypes";

describe("FileUpload", () => {
  it("renders and passes down props to the default child component when not given an override", () => {
    const wrapper = mount(
      <FileUpload
        baseUrl=""
        subjectId=""
        token=""
        documentType={documentTypes.required}
      />
    );

    const child = wrapper.find(DefaultFileUploadChild);
    expect(child).toHaveLength(1);
    expect(
      child
        .find(".textTitle")
        .at(0)
        .text()
    ).toEqual("somename");
    expect(
      child
        .find(".textDescription")
        .at(0)
        .text()
    ).toEqual("somedescription");
    expect(
      child
        .find(".downloadLink")
        .at(0)
        .text()
    ).toEqual("Download mandatory template");
  });

  it("renders the child when given a child", () => {
    const wrapper = mount(
      <FileUpload
        baseUrl=""
        subjectId=""
        token=""
        documentType={documentTypes.required}
      >
        <div>foo</div>
      </FileUpload>
    );

    const child = wrapper.find(DefaultFileUploadChild);
    expect(child).toHaveLength(0);
    expect(wrapper.text()).toEqual("foo");
  });

  it("renders the child when given a child", () => {
    const wrapper = mount(
      <FileUpload
        baseUrl=""
        subjectId=""
        token=""
        documentType={documentTypes.required}
      >
        <div>foo</div>
      </FileUpload>
    );

    const child = wrapper.find(DefaultFileUploadChild);
    expect(child).toHaveLength(0);
    expect(wrapper.text()).toEqual("foo");
  });

  it("component will set uploadState to Unstarted after clearing errors", () => {
    const wrapper = shallow(
      <FileUpload
        baseUrl=""
        subjectId=""
        token=""
        error="test"
        documentType={documentTypes.required}
      />
    );
    const mySetState = jest.fn();
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

  it("component will set uploadState to Error after setting errors", () => {
    const wrapper = shallow(
      <FileUpload
        baseUrl=""
        subjectId=""
        token=""
        documentType={documentTypes.required}
      />
    );
    const mySetState = jest.fn();
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
