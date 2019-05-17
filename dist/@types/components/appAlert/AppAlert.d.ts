import * as React from "react";
import { AppAlertAlignmentTheme, AppAlertTheme } from "../EnumValues";
interface IAppAlertProps {
    text: string;
    theme: AppAlertTheme;
    alignment?: AppAlertAlignmentTheme;
}
export declare class AppAlert extends React.Component<IAppAlertProps, {}> {
    static defaultProps: Partial<IAppAlertProps>;
    render(): JSX.Element;
}
export {};
