import React from "react";
import { CellTheme, ExpandablePanelTheme } from "../EnumValues";
export interface IExpandablePanelProps {
    collapsed?: boolean;
    onPanelClick?: (collapsed: boolean) => any;
    title?: string | React.ReactNode;
    content: string[];
    theme: ExpandablePanelTheme;
    defaultDisplay?: number;
    subTitle?: string;
    cellThem?: CellTheme;
}
export interface IExpandablePanelState {
    collapsed: boolean;
}
export declare class ExpandablePanel extends React.Component<IExpandablePanelProps, IExpandablePanelState> {
    constructor(props: IExpandablePanelProps);
    render(): JSX.Element;
    private onPanelClick;
    private renderPanelContent;
    private renderContent;
}
