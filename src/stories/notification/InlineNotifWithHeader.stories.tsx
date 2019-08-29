import { storiesOf } from "@storybook/react";
import React from "react";

import { Button, NotificationTheme, Theme } from "../../components";
import { InlineNotificationWithHeader } from "../../components/inlineNotificationWithHeader";
import { CategoryName, wInfo } from "../utils";

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus doloribus aperiam ipsum consectetur, accusamus laborum nam dolor error consequatur beatae quaerat doloremque placeat impedit illo cumque. Provident, eos aperiam.";

(storiesOf(CategoryName.Notification, module) as any).addWithJSX(
  "InlineNotificationWithHeader",
  wInfo(``)(() => {
    return (
      <div>
        <h1>InlineNotificationWithHeader</h1>
        <p>
          Essentially the same component as <code>InlineNotification</code>, but
          with an extra header
        </p>
        <br />
        <h5>Informational Type</h5>
        <div style={{ padding: "10px" }}>
          <InlineNotificationWithHeader
            header="Normal Header"
            text={"Very infomational thanks"}
            theme={NotificationTheme.Informational}
          />
          <InlineNotificationWithHeader
            header="Normal Header"
            text={lorem}
            theme={NotificationTheme.Informational}
          />
          <InlineNotificationWithHeader
            header="Normal Header"
            text={lorem + lorem}
            theme={NotificationTheme.Informational}
          />
          <InlineNotificationWithHeader
            header="A very very very very very very very very long header"
            text={lorem}
            theme={NotificationTheme.Informational}
          />
          <br />
          <h5>Success Type</h5>
          <InlineNotificationWithHeader
            header="Success Header"
            text={"Bleh"}
            theme={NotificationTheme.Success}
          />
          <br />
          <h5>Warning Type</h5>
          <InlineNotificationWithHeader
            header="Warning Header"
            text={"Bleh"}
            theme={NotificationTheme.Warning}
          />
          <br />
          <h5>Error Type</h5>
          <InlineNotificationWithHeader
            header="Error Header"
            text={"Bleh"}
            theme={NotificationTheme.Error}
          />
          <br />
          <h5>With ChildNode</h5>
          <InlineNotificationWithHeader
            header="Warning Header"
            text="Bleh"
            theme={NotificationTheme.Warning}
            childNode={<Button theme={Theme.Orange} label="button" />}
          />
        </div>
      </div>
    );
  })
);
