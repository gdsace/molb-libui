/// <reference types="react" />
import { NotificationTheme } from "../EnumValues";
declare type InlineNotificationProps = {
    text: string;
    theme: NotificationTheme;
};
export declare const InlineNotification: (props: InlineNotificationProps) => JSX.Element;
export {};
