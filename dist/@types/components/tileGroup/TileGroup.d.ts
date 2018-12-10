import * as React from "react";
interface ITileGroupProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
    children: React.ReactNode;
    value?: string;
    className?: string;
}
interface ITileGroupState {
    value: any;
}
export declare class TileGroup extends React.Component<ITileGroupProps, ITileGroupState> {
    constructor(props: ITileGroupProps);
    onSelectionChanged: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
