import React from "react";

import { storiesOf } from "@storybook/react";
import { FormSection, FormSectionSpacing } from "../../components";
import { CategoryName, wInfo } from "../utils";

const random =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien quis elit gravida, sit amet aliquet mi hendrerit. Donec et tempor quam. Nam euismod fringilla arcu ut condimentum. Cras tempor congue scelerisque. In facilisis neque est. Pellentesque neque eros, auctor quis diam semper, tincidunt hendrerit ligula. Donec eget elementum leo. Nulla facilisi. Suspendisse dapibus elit bibendum arcu convallis scelerisque. Integer pellentesque dictum neque, at auctor est accumsan nec. Vivamus dictum malesuada efficitur. Mauris maximus pharetra lacus, vitae auctor odio maximus vitae. Quisque laoreet, justo a convallis hendrerit, diam odio ultricies neque, eget consequat arcu justo ullamcorper augue. Duis sit amet tincidunt enim, id viverra sapien. Sed suscipit, magna a malesuada accumsan, massa leo porttitor mi, quis luctus risus arcu at risus.";

storiesOf(CategoryName.Others, module).add(
  "FormSection",
  wInfo(``)(() => (
    <div>
      <FormSection header="First Form Section Header" subheader="First Form Section Sub Header">
        <p>{random}</p>
      </FormSection>
      <FormSection
        caption="Second Form Section Caption"
        header="Second Form Section Header"
        subheader="Second Form Section Sub Header"
        theme={FormSectionSpacing.Normal}
      >
        <p>{random}</p>
      </FormSection>
      <FormSection
        caption="Third Form Section Caption"
        header="Third Form Section Header"
        theme={FormSectionSpacing.Zero}
      >
        <p>{random}</p>
      </FormSection>
    </div>
  ))
);
