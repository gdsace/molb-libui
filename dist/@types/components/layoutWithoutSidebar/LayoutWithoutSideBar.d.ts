import * as React from "react";
export interface ILayoutWithoutSideBarProps {
    hasNotifications?: boolean;
    header?: React.ReactNode;
    mainContent?: React.ReactNode;
    className?: string;
}
export declare class LayoutWithoutSideBar extends React.Component<ILayoutWithoutSideBarProps, {}> {
    static defaultProps: Partial<ILayoutWithoutSideBarProps>;
    render(): JSX.Element;
}
