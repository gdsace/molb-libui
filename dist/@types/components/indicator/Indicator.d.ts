import * as React from "react";
export interface IIndicator {
    activeIndex: number;
    index: number;
    label: string;
}
export declare class Indicator extends React.Component<IIndicator, {}> {
    render(): JSX.Element;
}
