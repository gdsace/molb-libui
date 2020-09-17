import { mount } from "enzyme";
import * as React from "react";

import { DefaultFileUploadChild, formatBytes } from "../DefaultFileUploadChild";
import { FileUploadStatus } from "../FileUpload";
import { documentTypes } from "./__mocks__/documentTypes";

describe("DefaultFileUploadChild", () => {
  it("shows name and description if no file is present", () => {
    const wrapper = mount(<DefaultFileUploadChild documentType={documentTypes.required} baseUrl="" token="" />);
    expect(
      wrapper
        .find(".textTitle")
        .at(0)
        .text()
    ).toEqual("somename");
    expect(
      wrapper
        .find(".textDescription")
        .at(0)
        .text()
    ).toEqual("somedescription");
  });

  it("shows file info if upload completed", () => {
    const wrapper = mount(
      <DefaultFileUploadChild
        documentType={documentTypes.required}
        uploadState={FileUploadStatus.Complete}
        document={{ name: "bar", fileSize: 100 }}
        baseUrl=""
        token=""
      />
    );
    expect(
      wrapper
        .find(".textTitle")
        .at(0)
        .text()
    ).toEqual("somename");
    expect(
      wrapper
        .find(".textFilename")
        .at(0)
        .find("div")
        .at(0)
        .text()
    ).toEqual("bar");
    expect(
      wrapper
        .find(".textFilesize")
        .at(0)
        .text()
    ).toEqual("100 B");
  });

  it("shows error text if upload failed", () => {
    const wrapper = mount(
      <DefaultFileUploadChild
        documentType={documentTypes.optional}
        uploadState={FileUploadStatus.Error}
        error="something wrong"
        baseUrl=""
        token=""
      />
    );
    expect(wrapper.find(".textError").text()).toEqual("something wrong");
  });

  it("shows name and optional text if optional", () => {
    const wrapper = mount(<DefaultFileUploadChild documentType={documentTypes.optional} baseUrl="" token="" />);
    expect(wrapper.find(".textTitle").text()).toEqual("optionalname (Optional)");
  });

  it("shows download link if template file is present and given mandatory linkDescription", () => {
    const wrapper = mount(
      <DefaultFileUploadChild
        documentType={documentTypes.required}
        baseUrl=""
        token=""
        linkDescription="Download mandatory template"
      />
    );
    expect(
      wrapper
        .find(".downloadLink")
        .at(0)
        .text()
    ).toEqual("Download mandatory template");
  });

  it("shows download link if template file is present and given sample linkDescription", () => {
    const linkDescription = "Download sample";
    const wrapper = mount(
      <DefaultFileUploadChild
        documentType={documentTypes.required}
        baseUrl=""
        token=""
        linkDescription={linkDescription}
      />
    );
    expect(
      wrapper
        .find(".downloadLink")
        .at(0)
        .text()
    ).toEqual(linkDescription);
  });

  it("not shows download link if template file is not existed", () => {
    const wrapper = mount(
      <DefaultFileUploadChild
        documentType={{
          ...documentTypes.required,
          hasTemplateFile: false
        }}
        baseUrl=""
        token=""
      />
    );
    expect(wrapper.find(".downloadLink")).toHaveLength(0);
  });

  describe("formatBytes", () => {
    it("formats byte sizes", () => {
      expect(formatBytes(100)).toEqual("100 B");
    });

    it("formats kilobyte sizes", () => {
      expect(formatBytes(1025)).toEqual("1.0 KB");
    });

    it("formats megabyte sizes", () => {
      expect(formatBytes(1024 * 1024 * 2)).toEqual("2.0 MB");
    });
  });
});
