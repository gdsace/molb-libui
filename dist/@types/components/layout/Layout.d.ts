import * as React from "react";
export interface ILayoutProps {
    header?: React.ReactNode;
    sidebar?: React.ReactNode;
    mainContent?: React.ReactNode;
    className?: string;
}
export declare class Layout extends React.Component<ILayoutProps, {}> {
    render(): JSX.Element;
}
