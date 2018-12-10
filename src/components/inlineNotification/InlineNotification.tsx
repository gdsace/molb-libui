import classNames from "classnames";
import * as React from "react";
import { Icon } from "../icons";

const style = require("./inlineNotification.scss");

interface IInlineNotificationProps {
  text: string;
  type: string;
}

export const InlineNotification = (props: IInlineNotificationProps) => {
  const typeClass = {
    [style.error]: props.type === "error",
    [style.warning]: props.type === "warning"
  };
  const iconClassName = classNames(style.inlineNotificationIcon, typeClass);

  const inlineNotificationClassName = classNames(
    style.inlineNotification,
    typeClass
  );

  return (
    <div className={inlineNotificationClassName}>
      <div className={iconClassName}>
        <Icon type="alert" size="24" />
      </div>
      <p className={style.inlineNotificationText}>{props.text}</p>
    </div>
  );
};
