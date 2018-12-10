import * as React from "react";
export interface IColumn {
    title: string;
    key: string;
}
export interface IDateSource {
    [key: string]: any;
}
export interface ITableProps {
    dataSource: IDateSource[];
    columns: IColumn[];
    style?: object;
}
export declare class Table extends React.Component<ITableProps, {}> {
    render(): JSX.Element;
    getBodyComponent(columns: IColumn[], dataSource: IDateSource[]): React.ReactNode;
    getHeadComponent(columns: IColumn[]): React.ReactNode;
}
