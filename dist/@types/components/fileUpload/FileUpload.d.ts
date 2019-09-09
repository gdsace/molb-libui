import React from "react";
import { DropzoneProps } from "react-dropzone";
import { IDocument, IDocumentType } from "../types";
export declare type IFileUploadProps = DropzoneProps & {
    baseUrl: string;
    subjectId: string;
    token: string;
    document?: Partial<IDocument>;
    documentType: IDocumentType;
    error?: string;
    linkDescription?: string;
    onSuccess?: (event: any) => any;
    onError?: (event: any) => any;
    onCompleteIconClick?: (event: React.MouseEvent, document: Partial<IDocument>) => any;
    onDefaultIconClick?: (event: React.MouseEvent) => any;
    onProgressIconClick?: (event: React.MouseEvent) => any;
    validateFile?: (file: File, documentTypeCode: string) => any;
};
export declare type FileUploadState = {
    fileInfo?: Partial<IDocument>;
    uploadState: FileUploadStatus;
};
export declare enum FileUploadStatus {
    Complete = "complete",
    Error = "error",
    Unstarted = "unstarted",
    Uploading = "uploading"
}
export declare const COMMON_ALLOWED_EXTENSIONS = ".pdf,.png,.jpg,.jpeg";
export declare class FileUpload extends React.Component<IFileUploadProps, FileUploadState> {
    state: FileUploadState;
    componentWillReceiveProps(nextProps: IFileUploadProps): void;
    render(): JSX.Element;
    uploadFile(file: File): void;
}
