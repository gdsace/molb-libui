import * as React from "react";
import { DropzoneProps } from "react-dropzone";
import { IDocument, IDocumentType } from "../types";
export interface IFileUploadProps extends DropzoneProps {
    baseUrl: string;
    document?: Partial<IDocument>;
    documentType: IDocumentType;
    error?: string;
    onCompleteIconClick?: (event: React.MouseEvent, documentTypeCode: string) => any;
    onDefaultIconClick?: (event: React.MouseEvent) => any;
    onError?: (event: any) => any;
    onProgressIconClick?: (event: React.MouseEvent) => any;
    onSuccess?: (event: any) => any;
    subjectId: string;
    token: string;
    existingDocumentIds?: number[];
}
export interface IFileUploadState {
    fileInfo?: Partial<IDocument>;
    uploadState: FileUploadState;
}
export declare enum FileUploadState {
    Complete = "complete",
    Error = "error",
    Unstarted = "unstarted",
    Uploading = "uploading"
}
export declare const COMMON_ALLOWED_EXTENSIONS: string;
export declare class FileUpload extends React.Component<IFileUploadProps, IFileUploadState> {
    constructor(props: IFileUploadProps);
    componentWillReceiveProps(nextProps: IFileUploadProps): void;
    render(): JSX.Element;
    private uploadFile;
}
