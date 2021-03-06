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
    onChangePage?: (action: string) => any;
    dataSource: IDataSource[];
    columns: IColumn[];
    tableCls?: string;
    bordered?: boolean;
    expandable?: boolean;
    size?: TableSize;
    theme?: TableTheme;
    showNoDataAvailableMessage?: boolean;
    expandableRowTemplate?: (subProps: {
        [k: string]: any;
    }) => React.ReactChild | JSX.Element;
    expandableRowProps?: {
        tdCls?: string;
    };
    onExpandButtonClick?: (itemIndex: number) => void;
    ignoreExpandButtonClick?: boolean;
    showPagination?: boolean;
    clickableRow?: boolean;
    onRowClickHandler?: () => void;
    closeExpandedRow?: boolean;
}
export interface ITableState {
    expandedRowIndex: number;
}
export declare enum TableSize {
    Small = "small",
    Large = "large"
}
export declare enum TableTheme {
    Striped = "striped",
    Expandable = "expandable",
    Basic = "basic"
}
export declare class Table extends React.Component<ITableProps, ITableState> {
    static defaultProps: Partial<ITableProps>;
    static getDerivedStateFromProps(nextProps: ITableProps): {
        expandedRowIndex: number;
    } | null;
    constructor(props: ITableProps);
    render(): JSX.Element;
    private nativeExpandRowHandler;
}
