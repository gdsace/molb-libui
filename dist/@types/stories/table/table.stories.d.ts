/// <reference types="react" />
export declare const tableColumns: ({
    title: string;
    key: string;
    render?: undefined;
    hiddenInlineTitle?: undefined;
} | {
    title: string;
    key: string;
    render: boolean;
    hiddenInlineTitle: boolean;
})[];
export declare const dataSource: ({
    key: string;
    name: string;
    age: number;
    address: JSX.Element;
    tags: JSX.Element;
} | {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: JSX.Element;
})[];
