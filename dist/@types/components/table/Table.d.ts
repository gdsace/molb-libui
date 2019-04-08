import * as React from "react";
export interface IColumn {
    title: string;
    key: string;
    width?: string;
    textAlignRight?: boolean;
}
export interface IDateSource {
    [key: string]: any;
}
export interface ITableProps {
    dataSource: IDateSource[];
    columns: IColumn[];
    tableCls?: string;
    bordered?: boolean;
    size?: TableSize;
    theme?: TableTheme;
}
export declare enum TableSize {
    Small = "small",
    Large = "large"
}
export declare enum TableTheme {
    Striped = "striped",
    Basic = "basic"
}
export declare class Table extends React.Component<ITableProps, {}> {
    static defaultProps: Partial<ITableProps>;
    render(): JSX.Element;
    getBodyComponent(columns: IColumn[], dataSource: IDateSource[]): React.ReactNode;
    getHeadComponent(columns: IColumn[]): React.ReactNode;
}
