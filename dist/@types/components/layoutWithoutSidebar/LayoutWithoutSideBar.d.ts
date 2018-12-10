import * as React from "react";
export interface ILayoutWithoutSideBarProps {
    header?: React.ReactNode;
    mainContent?: React.ReactNode;
    className?: string;
}
export declare class LayoutWithoutSideBar extends React.Component<ILayoutWithoutSideBarProps, {}> {
    render(): JSX.Element;
}
