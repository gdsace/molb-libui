import { mount } from "enzyme";
import * as React from "react";
import { DefaultFileUploadChild, formatBytes } from "../DefaultFileUploadChild";

import { documentTypes } from "./__mocks__/documentTypes";

describe("DefaultFileUploadChild", () => {
  it("shows description if no file is present", () => {
    const wrapper = mount(
      <DefaultFileUploadChild documentType={documentTypes.required} />
    );
    expect(wrapper.text()).toEqual("somename");
  });

  it("shows file info if given ", () => {
    const wrapper = mount(
      <DefaultFileUploadChild
        documentType={documentTypes.required}
        document={{ name: "bar", fileSize: 100 }}
      />
    );
    expect(wrapper.text()).toEqual("somenamebar100 B");
  });

  it("shows optional text if optional", () => {
    const wrapper = mount(
      <DefaultFileUploadChild documentType={documentTypes.optional} />
    );
    expect(wrapper.text()).toEqual("optionalname (Optional)");
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
