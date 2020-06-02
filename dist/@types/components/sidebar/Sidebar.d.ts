import * as React from "react";
interface ILabelType {
    title: React.ReactNode;
    path?: string;
}
export interface ISidebarProps {
    list: ILabelType[];
    selectedIndex?: number;
    onItemClick?: any;
    type?: "menu" | "indicator";
    greenStyling?: boolean;
}
export declare class Sidebar extends React.Component<ISidebarProps, {}> {
    static defaultProps: Partial<ISidebarProps>;
    render(): JSX.Element;
    private onItemClick;
}
export {};
