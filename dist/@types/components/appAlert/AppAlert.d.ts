import * as React from "react";
import { AppAlertAlignmentTheme, AppAlertTheme } from "../EnumValues";
interface IAppAlertProps {
    textStart: string;
    textMiddle?: string;
    textEnd?: string;
    theme: AppAlertTheme;
    alignment?: AppAlertAlignmentTheme;
}
export declare class AppAlert extends React.Component<IAppAlertProps, {}> {
    static defaultProps: Partial<IAppAlertProps>;
    render(): JSX.Element;
}
export {};
