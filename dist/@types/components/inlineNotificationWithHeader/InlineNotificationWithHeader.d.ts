import * as React from "react";
import { NotificationTheme } from "../EnumValues";
interface IInlineNotificationWithHeaderProps {
    header: string;
    text: string;
    theme: NotificationTheme;
    childNode?: string | React.ReactNode;
}
export declare const InlineNotificationWithHeader: (props: IInlineNotificationWithHeaderProps) => JSX.Element;
export {};
