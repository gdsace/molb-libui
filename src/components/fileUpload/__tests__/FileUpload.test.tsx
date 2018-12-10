import { mount } from "enzyme";
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
    expect(child.text()).toEqual("somenamesomedescription");
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
});
