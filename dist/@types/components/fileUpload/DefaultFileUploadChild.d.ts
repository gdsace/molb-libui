/// <reference types="react" />
import { FileUploadState, IFileUploadProps } from ".";
export interface IFileUploadChildProps extends Pick<IFileUploadProps, "document" | "documentType" | "error" | "onCompleteIconClick" | "onDefaultIconClick" | "onProgressIconClick" | "subjectId" | "baseUrl" | "token"> {
    uploadState?: FileUploadState;
}
export declare const formatBytes: (bytes: number) => string;
export declare const DefaultFileUploadChild: (props: IFileUploadChildProps) => JSX.Element;
