import * as React from "react";
import { AppAlertAlignmentTheme, AppAlertTheme } from "../EnumValues";
interface IAppAlertProps {
    text: string;
    textToBold?: string;
    theme: AppAlertTheme;
    alignment?: AppAlertAlignmentTheme;
    showIcon?: boolean;
}
export declare class AppAlert extends React.Component<IAppAlertProps, {}> {
    static defaultProps: Partial<IAppAlertProps>;
    render(): JSX.Element;
    private renderText;
}
export {};
