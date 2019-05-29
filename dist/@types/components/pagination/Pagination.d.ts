import React from "react";
import { IDataSource } from "../table/Table";
export interface IPaginationProps {
    onPageChange: (newPage: number) => any;
    history?: any;
    disablePrev?: boolean;
    disableNext?: boolean;
    className?: string;
    dataSource?: IDataSource[];
    showTotalResultsAvailable?: boolean;
    totalResultsCount: number;
    rowsPerPage: number;
    currentPage: number;
}
export declare enum Results {
    IsOneOrLess = "result available",
    IsMultiple = "results available"
}
export declare class Pagination extends React.Component<IPaginationProps, {}> {
    static defaultProps: Partial<IPaginationProps>;
    onChangePrevPage: () => void;
    onChangeNextPage: () => void;
    render(): JSX.Element;
    private getPageRange;
}
