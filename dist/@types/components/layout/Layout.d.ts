import * as React from "react";
export interface ILayoutProps {
    hasNotifications?: boolean;
    header?: React.ReactNode;
    showSideBar?: boolean;
    sidebar?: React.ReactNode;
    sideBarStyle?: string;
    mainContent?: React.ReactNode;
    mainContentStyle?: string;
}
export declare class Layout extends React.Component<ILayoutProps, {}> {
    static defaultProps: Partial<ILayoutProps>;
    render(): JSX.Element;
}
