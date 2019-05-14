import * as React from "react";
export interface IColumn {
    title?: string;
    key: string;
    width?: string;
    textAlignRight?: boolean;
    hiddenInlineTitle?: boolean;
}
export interface IDataSource {
    [key: string]: any;
}
export interface ITableProps {
    dataSource: IDataSource[];
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
    private getBodyComponent;
    private getHeadComponent;
}
