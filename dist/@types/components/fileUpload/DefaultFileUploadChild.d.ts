import * as React from "react";
import { FileUploadState, IFileUploadProps } from ".";
export interface IFileUploadChildProps extends Pick<IFileUploadProps, "document" | "documentType" | "error" | "onDefaultIconClick" | "onProgressIconClick" | "baseUrl" | "token" | "linkDescription"> {
    uploadState?: FileUploadState;
    onCompleteIconClick?: (event: React.MouseEvent) => any;
}
export declare const formatBytes: (bytes: number) => string;
export declare const DefaultFileUploadChild: (props: IFileUploadChildProps) => JSX.Element;
