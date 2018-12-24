import React from "react";
import { PanelTheme, PanelType } from "@src/components/EnumValues";
export interface IPanelProps {
    containerStyle?: string;
    contentStyle?: string;
    children?: React.ReactNode;
    type?: PanelType;
    theme?: PanelTheme;
}
export declare class Panel extends React.Component<IPanelProps, {}> {
    static defaultProps: Partial<IPanelProps>;
    render(): JSX.Element;
}
