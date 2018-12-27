import qs from "qs";
import * as React from "react";

import classNames from "classnames";
import Dropzone, { DropzoneProps } from "react-dropzone";
import { IDocument, IDocumentType } from "../types";
import { DefaultFileUploadChild } from "./DefaultFileUploadChild";
import { SubjectType } from "./subjectTypes";

const styles = require("./styles.scss");

export interface IFileUploadProps extends DropzoneProps {
  baseUrl: string;
  document?: Partial<IDocument>;
  documentType: IDocumentType;
  error?: string;
  onCompleteIconClick?: (
    event: React.MouseEvent,
    documentTypeCode: string
  ) => any;
  onDefaultIconClick?: (event: React.MouseEvent) => any;
  onError?: (event: any) => any;
  onProgressIconClick?: (event: React.MouseEvent) => any;
  onSuccess?: (event: any) => any;
  subjectId: string;
  token: string;
}

export interface IFileUploadState {
  // Local document state: incomplete uploads need to show filename as well
  fileInfo?: Partial<IDocument>;
  uploadState: FileUploadState;
}

export enum FileUploadState {
  Complete = "complete",
  Error = "error",
  Unstarted = "unstarted",
  Uploading = "uploading"
}

export const COMMON_ALLOWED_EXTENSIONS = [".pdf", ".png", ".jpg", ".jpeg"].join(
  ","
);

export class FileUpload extends React.Component<
  IFileUploadProps,
  IFileUploadState
> {
  public constructor(props: IFileUploadProps) {
    super(props);

    let uploadState = FileUploadState.Unstarted;
    if (props.document && props.document.id != null) {
      uploadState = FileUploadState.Complete;
    }
    if (props.error) {
      uploadState = FileUploadState.Error;
    }

    this.state = {
      uploadState,
      fileInfo: props.document
    };
  }

  public componentWillReceiveProps(nextProps: IFileUploadProps) {
    // if someone clear existing error, reset status
    if (
      this.props.error &&
      !nextProps.error &&
      this.state.uploadState === FileUploadState.Error
    ) {
      this.setState({
        fileInfo: undefined,
        uploadState: FileUploadState.Unstarted
      });
    }
  }

  public render() {
    const {
      baseUrl,
      documentType,
      document,
      token,
      error,
      value,
      subjectId,
      onSuccess,
      onError,
      onProgressIconClick,
      onCompleteIconClick,
      onDefaultIconClick,
      children,
      ...forDropzone
    } = this.props;

    const { uploadState, fileInfo } = this.state;

    const dropzoneClassName = classNames(styles.default, {
      [styles.dropReject]: error || uploadState === FileUploadState.Error,
      [styles.uploading]: uploadState === FileUploadState.Uploading
    });

    return (
      <Dropzone
        className={dropzoneClassName}
        acceptClassName={styles.hover}
        activeClassName={styles.hover}
        rejectClassName={styles.dropReject}
        onDropAccepted={(files: File[]) => {
          // Does not support multiple files now, takes the last
          files.forEach(f => {
            this.setState({ uploadState: FileUploadState.Uploading });
            this.uploadFile(f);
          });
        }}
        onDropRejected={err => {
          if (onError) {
            onError(err);
          }
        }}
        {...forDropzone}
      >
        {children || (
          <DefaultFileUploadChild
            {...this.props}
            uploadState={uploadState}
            document={fileInfo}
            onCompleteIconClick={(e: React.MouseEvent) => {
              e.preventDefault();
              e.stopPropagation();

              this.setState({
                fileInfo: undefined,
                uploadState: FileUploadState.Unstarted
              });

              if (onCompleteIconClick && documentType && documentType.code) {
                onCompleteIconClick(e, documentType.code);
              }
            }}
          />
        )}
      </Dropzone>
    );
  }

  // This is kept here so consumers of the file upload component do not have to keep track of
  // file upload state.
  // Has to be replaced with xhr.upload.onprogress if progress is wanted
  private uploadFile(file: File) {
    const {
      documentType,
      subjectId,
      baseUrl,
      token,
      onSuccess,
      onError
    } = this.props;

    const queryString = qs.stringify({
      documentTypeCode: documentType.code,
      subjectId,
      subjectType: SubjectType.Premise // Always premise, backend will handle this
    });

    const formdata = new FormData();
    formdata.append("file", file);

    fetch(`${baseUrl}/api/documents/?${queryString}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formdata
    })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      // `any` is pending backend response shape
      .then((res: any) => {
        if (onSuccess) {
          onSuccess(res);
        }
        this.setState({
          uploadState: FileUploadState.Complete,
          fileInfo: {
            name: file.name,
            fileSize: file.size
          }
        });
      })
      .catch(err => {
        if (onError) {
          onError({ error: err });
        }
        this.setState({ uploadState: FileUploadState.Error });
      });
  }
}
