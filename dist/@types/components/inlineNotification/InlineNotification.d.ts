/// <reference types="react" />
import { NotificationTheme } from "@src/components";
interface IInlineNotificationProps {
    text: string;
    theme: NotificationTheme;
}
export declare const InlineNotification: (props: IInlineNotificationProps) => JSX.Element;
export {};
