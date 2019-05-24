import React from "react";

import { storiesOf } from "@storybook/react";

import { AppAlertAlignmentTheme, AppAlertTheme } from "../../components";
import { AppAlert } from "../../components/appAlert";
import { CategoryName, wInfo } from "../utils";

(storiesOf(CategoryName.Notification, module) as any).addWithJSX(
  "App-level Alert",
  wInfo(``)(() => {
    return (
      <div>
        <h1>AppAlert</h1>
        <br />
        <h5>Alignment: left</h5>
        <div>
          <AppAlert
            text={"Normal Notification"}
            theme={AppAlertTheme.Informational}
          />
          <AppAlert
            text={"Warning Notification"}
            theme={AppAlertTheme.Warning}
          />
          <AppAlert text={"Error Notification"} theme={AppAlertTheme.Error} />
          <AppAlert
            text={
              "Normal Notification with a very very very very very very very very long text."
            }
            theme={AppAlertTheme.Informational}
          />
          <AppAlert
            text={"Warning Notification with a bold text."}
            textToBold={"bold"}
            theme={AppAlertTheme.Warning}
          />
        </div>
        <br />
        <h5>Alignment: center</h5>
        <div>
          <AppAlert
            text={"Normal Notification"}
            theme={AppAlertTheme.Informational}
            alignment={AppAlertAlignmentTheme.CENTER}
          />
          <AppAlert
            text={"Warning Notification"}
            theme={AppAlertTheme.Warning}
            alignment={AppAlertAlignmentTheme.CENTER}
          />
          <AppAlert
            text={"Error Notification"}
            theme={AppAlertTheme.Error}
            alignment={AppAlertAlignmentTheme.CENTER}
          />
          <AppAlert
            text={
              "Normal Notification with a very very very very very very very very long text."
            }
            theme={AppAlertTheme.Informational}
            alignment={AppAlertAlignmentTheme.CENTER}
          />
        </div>
      </div>
    );
  })
);
