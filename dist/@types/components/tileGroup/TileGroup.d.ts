import * as React from "react";
interface ITileGroupProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
    children: React.ReactNode;
    value?: string;
    className?: string;
    deselectable?: boolean;
}
interface ITileGroupState {
    value: any;
}
export declare class TileGroup extends React.Component<ITileGroupProps, ITileGroupState> {
    static defaultProps: Partial<ITileGroupProps>;
    constructor(props: ITileGroupProps);
    componentWillReceiveProps(props: ITileGroupProps): void;
    onSelectionChanged: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
