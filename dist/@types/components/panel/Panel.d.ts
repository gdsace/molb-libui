import React from "react";
export interface IPanelProps {
    className?: string;
    children?: React.ReactNode;
}
export declare class Panel extends React.Component<IPanelProps, {}> {
    render(): JSX.Element;
}
