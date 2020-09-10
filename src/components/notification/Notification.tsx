import classnames from "classnames";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotificationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { forPhoneOnlyMediaQuery } from "../utils";
import styles from "./notification.scss";

export type NotificationProps = {
  header: string;
  text: string;
  theme: NotificationTheme;
};

type NotifyCloseBtnProps = {
  closeToast?: (event: React.MouseEvent<HTMLElement>) => void;
};

const CloseButton = (props: NotifyCloseBtnProps) => (
  <div onClick={props.closeToast} className={styles.close}>
    <Icon type="close" size={"16"} />
  </div>
);

const notificationContent = (props: NotificationProps): React.ReactElement<any> => {
  const { header, text, theme } = props;
  const notificationContentContainerClassname = classnames(styles.notificationContentContainer, styles[`${theme}`]);

  const iconType = {
    [NotificationTheme.Success]: "notification-checkmark",
    [NotificationTheme.Error]: "notification-error",
    [NotificationTheme.Warning]: "warning",
    [NotificationTheme.SeriousWarning]: "warning",
    [NotificationTheme.Informational]: "informational"
  };

  return (
    <div className={notificationContentContainerClassname}>
      <div className={styles.iconContainer}>
        <Icon type={iconType[theme]} />
      </div>
      <div className={styles.contentContainer}>
        <header className={styles.title}>{header}</header>
        <span className={styles.description}>{text}</span>
      </div>
    </div>
  );
};

export const notification = (options: NotificationProps) => {
  const content = notificationContent(options);
  const toastContainerClassname = classnames(styles.toastContainer, styles[`${options.theme}`]);
  const responsiveForMobile = forPhoneOnlyMediaQuery();

  const position = responsiveForMobile ? "top-center" : "top-right";
  toast(content, {
    hideProgressBar: true,
    closeOnClick: false,
    position,
    pauseOnHover: true,
    draggable: true,
    autoClose: 5000,
    className: toastContainerClassname,
    closeButton: <CloseButton />
  });
};
