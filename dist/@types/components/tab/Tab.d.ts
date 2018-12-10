import * as React from "react";
export interface ITabNode {
    tabPanel: React.ReactNode;
    label: string;
}
export interface ITabProps {
    list: ITabNode[];
    leftNode?: React.ReactNode;
    spacing?: number;
    panePadding?: number;
}
export interface ITabState {
    currentIndex?: number;
}
export declare class Tab extends React.Component<ITabProps, ITabState> {
    constructor(props: ITabProps);
    render(): JSX.Element;
    private getLeftComponent;
    private tabItemClick;
}
