import * as React from "react";
export interface ILayoutProps {
    hasNotifications?: boolean;
    header?: React.ReactNode;
    sidebar?: React.ReactNode;
    mainContent?: React.ReactNode;
    className?: string;
}
export declare class Layout extends React.Component<ILayoutProps, {}> {
    static defaultProps: Partial<ILayoutProps>;
    render(): JSX.Element;
}
