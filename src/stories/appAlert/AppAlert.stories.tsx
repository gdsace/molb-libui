import React from "react";

import { storiesOf } from "@storybook/react";

import { AppAlertAlignmentTheme, AppAlertTheme } from "../../components";
import { AppAlert } from "../../components/appAlert";
import { CategoryName, wInfo } from "../utils";

(storiesOf(CategoryName.AppAlert, module) as any).addWithJSX(
  "AppAlert",
  wInfo(``)(() => {
    return (
      <div>
        <h3>App-level Alert content alignment left</h3>
        <div style={{ padding: "10px" }}>
          <AppAlert
            text={"Normal Notification"}
            theme={AppAlertTheme.Informational}
          />
          <AppAlert
            text={"Warning Notification"}
            theme={AppAlertTheme.Warning}
          />
          <AppAlert text={"Error Notification"} theme={AppAlertTheme.Error} />
        </div>

        <h3>App-level Alert content alignment center</h3>
        <div style={{ padding: "10px" }}>
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
        </div>
      </div>
    );
  })
);
