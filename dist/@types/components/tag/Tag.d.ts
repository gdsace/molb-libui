import * as React from "react";
import { TagSize, TagTheme, TooltipsLocationTheme } from "../EnumValues";
export interface ITagProps {
    label: string;
    theme: TagTheme;
    showTooltip: boolean;
    tooltipContent?: JSX.Element | string;
    toolTipsPosition: TooltipsLocationTheme;
    tagSize: TagSize;
    helperMsg?: string | React.ReactNode;
    toolTipsSpecializedPosition?: boolean;
}
export declare class Tag extends React.Component<ITagProps, {}> {
    static defaultProps: Partial<ITagProps>;
    render(): JSX.Element;
}
