import * as React from "react";
import { SidebarTheme } from "../EnumValues";
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
    theme?: SidebarTheme;
}
export declare class Sidebar extends React.Component<ISidebarProps, {}> {
    static defaultProps: Partial<ISidebarProps>;
    render(): JSX.Element;
    private onItemClick;
}
