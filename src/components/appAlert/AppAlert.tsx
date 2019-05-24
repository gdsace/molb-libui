import classNames from "classnames";
import * as React from "react";
import { AppAlertAlignmentTheme, AppAlertTheme } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";

const style = require("./appAlert.scss");

interface IAppAlertProps {
  textStart: string;
  textMiddle?: string;
  textEnd?: string;
  theme: AppAlertTheme;
  alignment?: AppAlertAlignmentTheme;
}

export class AppAlert extends React.Component<IAppAlertProps, {}> {
  public static defaultProps: Partial<IAppAlertProps> = {
    alignment: AppAlertAlignmentTheme.LEFT
  };

  public render() {
    const { theme, textStart, textMiddle, textEnd, alignment } = this.props;

    const iconType = {
      [AppAlertTheme.Error]: "notification-error",
      [AppAlertTheme.Warning]: "alert",
      [AppAlertTheme.Informational]: "informational"
    };

    const appAlertClassName = classNames(
      style.appAlert,
      style[`${alignment}`],
      {
        [addLocatedErrorClassname("")]: theme === AppAlertTheme.Error
      }
    );

    return (
      <div className={style[`${theme}`]}>
        <div className={appAlertClassName}>
          <Icon
            className={style.appAlertIcon}
            type={iconType[theme]}
            size="20"
          />
          <span className={style.appAlertText}>
            {textStart}
            {textMiddle && (
              <span className={style.appAlertTextBold}>{textMiddle}</span>
            )}
            {textEnd}
          </span>
        </div>
      </div>
    );
  }
}
