import classNames from "classnames";
import * as React from "react";
import { AppAlertAlignmentTheme, AppAlertTheme } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";

const style = require("./appAlert.scss");

interface IAppAlertProps {
  text: string;
  textToBold?: string;
  theme: AppAlertTheme;
  alignment?: AppAlertAlignmentTheme;
}

export class AppAlert extends React.Component<IAppAlertProps, {}> {
  public static defaultProps: Partial<IAppAlertProps> = {
    alignment: AppAlertAlignmentTheme.LEFT
  };

  public render() {
    const { theme, text, textToBold, alignment } = this.props;

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
            size="24"
          />
          {this.renderText(text, textToBold)}
        </div>
      </div>
    );
  }

  private renderText(mainText: string, textToBold?: string) {
    if (textToBold) {
      const splitText = mainText.split(new RegExp(`(${textToBold})`, "gi"));
      return (
        <div className={style.appAlertText}>
          {splitText.map((part, i) =>
            part.toLowerCase() === textToBold.toLowerCase() ? (
              <span className={style.appAlertTextBold} key={i}>
                {part}
              </span>
            ) : (
              part
            )
          )}
        </div>
      );
    } else {
      return <div className={style.appAlertText}>{mainText}</div>;
    }
  }
}
