/// <reference types="react" />
import { TileTheme } from "../../EnumValues";
export interface ITileProps {
    icon?: string;
    content: string;
    subContent?: string;
    description?: string;
    checked?: boolean;
    onChange?: (e: any) => void;
    disabled?: boolean;
    value?: string;
    theme?: TileTheme;
    containerStyle?: string;
    error?: string;
    deselectable?: boolean;
    imgSrc?: string;
    imgAlt?: string;
    validationToolTip?: string;
}
export declare const Tile: (props: ITileProps) => JSX.Element;
