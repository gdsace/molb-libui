import React from "react";

import { storiesOf } from "@storybook/react";

import { InlineNotification, NotificationTheme } from "../../components";
import { InlineNotifWithHeader } from "../../components/inlineNotifWithHeader";
import { CategoryName, wInfo } from "../utils";

const lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus doloribus aperiam ipsum consectetur, accusamus laborum nam dolor error consequatur beatae quaerat doloremque placeat impedit illo cumque. Provident, eos aperiam.";


(storiesOf(CategoryName.Notification, module) as any).addWithJSX(
  "InlineNotification",
  wInfo(``)(() => {
    return (
      <div>
        <h1>InlineNotification</h1>
        <div style={{ padding: "10px" }}>
          <InlineNotification
            text={"Normal Notification"}
            theme={NotificationTheme.Informational}
          />
          <InlineNotification
            text={"Success Notification"}
            theme={NotificationTheme.Success}
          />
          <InlineNotification
            text={"Warning Notification"}
            theme={NotificationTheme.Warning}
          />
          <InlineNotification
            text={"Error Notification"}
            theme={NotificationTheme.Error}
          />
          <InlineNotifWithHeader
            header="Normal Header"
            text={"Bleh"}
            theme={NotificationTheme.Informational}
          />
          <InlineNotifWithHeader
            header="Normal Header"
            text={lorem}
            theme={NotificationTheme.Informational}
          />
          <InlineNotifWithHeader
            header="Normal Header"
            text={lorem + lorem}
            theme={NotificationTheme.Informational}
          />
        </div>
      </div>
    );
  })
);
