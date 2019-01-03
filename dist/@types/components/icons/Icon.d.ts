/// <reference types="react" />
export interface IIconProps {
    type: string;
    category?: "licences";
    className?: string;
    size?: string;
    viewBox?: string;
}
export declare const Icon: (props: IIconProps) => JSX.Element;
