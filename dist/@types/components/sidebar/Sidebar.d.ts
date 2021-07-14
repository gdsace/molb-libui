import * as React from "react";
import { ColourTheme } from "../EnumValues";
export interface ILabelType {
    title: React.ReactNode;
    path?: string;
    isSectionHeader?: boolean;
}
export interface ISidebarProps {
    list: ILabelType[];
    selectedIndex?: number;
    onItemClick?: (index: number) => void;
    type?: "menu" | "indicator";
    greenStyling?: boolean;
    theme?: ColourTheme;
}
export declare class Sidebar extends React.Component<ISidebarProps, {}> {
    static defaultProps: Partial<ISidebarProps>;
    render(): JSX.Element;
    private onItemClick;
}
