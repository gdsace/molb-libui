import React from "react";

import { storiesOf } from "@storybook/react";

import { InlineNotification, NotificationTheme } from "../../components";
import { InlineNotifWithHeader } from "../../components/inlineNotifWithHeader";
import { CategoryName, wInfo } from "../utils";

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
            text={"Where's my header?!"}
            theme={NotificationTheme.Informational}
          />
        </div>
      </div>
    );
  })
);
