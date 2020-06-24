import classNames from "classnames";
import * as React from "react";
import { NotificationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";
import styles from "./InlineNotificationWithHeader.scss";

interface IInlineNotificationWithHeaderProps {
  header: string;
  text: string;
  theme: NotificationTheme;
  childNode?: React.ReactNode;
  icon?: string;
}

export const InlineNotificationWithHeader = (
  props: IInlineNotificationWithHeaderProps
) => {
  const { theme, text, childNode } = props;

  const headerStyle = classNames(
    styles.inlineNotificationHeader,
    styles[`${theme}`],
    {
      [addLocatedErrorClassname("")]: theme === NotificationTheme.Error
    }
  );

  const getIcon = (defaultIcon: string) => props.icon || defaultIcon;

  const iconType = {
    [NotificationTheme.Success]: getIcon("notification-checkmark"),
    [NotificationTheme.Error]: getIcon("notification-error"),
    [NotificationTheme.Warning]: getIcon("warning"),
    [NotificationTheme.SeriousWarning]: getIcon("warning"),
    [NotificationTheme.Informational]: getIcon("informational")
  };

  const inlineNotificationClassName = classNames(
    styles.inlineNotification,
    styles[`${theme}`],
    {
      [addLocatedErrorClassname("")]: theme === NotificationTheme.Error
    }
  );

  const processedText = text.split("\n").map((str, index) => (
    <React.Fragment key={`inline-notif-with-header-text-chunk-${index}`}>
      {str}
      <br />
    </React.Fragment>
  ));

  return (
    <div className={inlineNotificationClassName} data-scrollpoint>
      <div className={styles.inlineNotificationTextPart}>
        <div className={styles.inlineNotificationIcon}>
          <Icon type={iconType[theme]} size="24" />
        </div>
        <div className={styles.content}>
          <h5 className={headerStyle}>{props.header}</h5>
          <p className={styles.inlineNotificationText}>{processedText}</p>
        </div>
      </div>
      {childNode && childNode}
    </div>
  );
};
