import * as React from "react";
export interface ITabNode {
    tabPanel: React.ReactNode;
    label: string;
}
export interface ITabProps {
    list: ITabNode[];
    leftNode?: React.ReactNode;
    tabsBarContentStyle?: string;
    customizedTabComponent?: React.ReactElement<{
        onClick: () => any;
        key: number;
    }>;
}
export interface ITabState {
    currentIndex?: number;
}
export declare class Tabs extends React.Component<ITabProps, ITabState> {
    constructor(props: ITabProps);
    render(): JSX.Element;
    private getLeftComponent;
    private tabItemClick;
}
