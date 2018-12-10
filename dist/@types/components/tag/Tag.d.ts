import { TagTheme } from "@libui/components/EnumValues";
import * as React from "react";
export interface ITagProps {
    label: string;
    theme?: TagTheme;
    className?: string;
}
export declare class Tag extends React.Component<ITagProps, {}> {
    static defaultProps: Partial<ITagProps>;
    render(): JSX.Element;
}
