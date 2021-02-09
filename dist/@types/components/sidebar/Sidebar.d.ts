import * as React from "react";
interface ILabelType {
    title: React.ReactNode;
    isSectionHeader?: boolean;
}
export interface ISidebarProps {
    list: ILabelType[];
    selectedIndex?: number;
    onItemClick?: (index: number) => void;
    type?: "menu" | "indicator";
    greenStyling?: boolean;
}
export declare class Sidebar extends React.Component<ISidebarProps, {}> {
    static defaultProps: Partial<ISidebarProps>;
    render(): JSX.Element;
    private onItemClick;
}
export {};
