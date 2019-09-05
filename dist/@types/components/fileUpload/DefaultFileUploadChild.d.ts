import React from "react";
import { FileUploadStatus, IFileUploadProps } from "./FileUpload";
export declare type FileUploadChildProps = Pick<IFileUploadProps, "document" | "documentType" | "error" | "onDefaultIconClick" | "onProgressIconClick" | "baseUrl" | "token" | "linkDescription"> & {
    uploadState?: FileUploadStatus;
    onCompleteIconClick?: (event: React.MouseEvent) => any;
};
export declare const formatBytes: (bytes: number) => string;
export declare const DefaultFileUploadChild: (props: FileUploadChildProps) => JSX.Element;
