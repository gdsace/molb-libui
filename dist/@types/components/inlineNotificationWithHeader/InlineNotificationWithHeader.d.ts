/// <reference types="react" />
import { NotificationTheme } from "../EnumValues";
interface IInlineNotificationWithHeaderProps {
    header: string;
    text: string;
    theme: NotificationTheme;
}
export declare const InlineNotificationWithHeader: (props: IInlineNotificationWithHeaderProps) => JSX.Element;
export {};
