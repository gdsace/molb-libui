import React from "react";
import { ExpandablePanelTheme } from "../EnumValues";
export interface IExpandablePanelProps {
    collapsed?: boolean;
    onPanelClick?: (collapsed: boolean) => any;
    title?: string | React.ReactNode;
    content?: React.ReactNode[] | string[] | React.ReactNode;
    theme: ExpandablePanelTheme;
    defaultDisplay?: number;
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
