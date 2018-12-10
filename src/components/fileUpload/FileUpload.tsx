import _ from "lodash";
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

export const COMMON_ALLOWED_EXTENSIONS = [
  ".pdf",
  ".doc",
  ".png",
  ".jpg",
  ".jpeg"
].join(",");

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
      ...forDropzone
    } = this.props;

    return (
      <Dropzone
        className={classNames(styles.default, {
          [styles.dropReject]:
            this.props.error ||
            this.state.uploadState === FileUploadState.Error,
          [styles.uploading]:
            this.state.uploadState === FileUploadState.Uploading
        })}
        acceptClassName={styles.hover}
        activeClassName={styles.hover}
        rejectClassName={styles.dropReject}
        onDropAccepted={(files: File[]) => {
          files.forEach(f => {
            // Does not support multiple files now, takes the last
            this.setState({
              uploadState: FileUploadState.Uploading,
              fileInfo: {
                name: f.name,
                fileSize: f.size
              }
            });

            const queryString = qs.stringify({
              documentTypeCode: documentType.code,
              subjectId: this.props.subjectId,
              subjectType: SubjectType.Premise // Always premise, backend will handle this
            });

            this.uploadFile(
              `${this.props.baseUrl}/api/documents/?${queryString}`,
              token,
              f
            );
          });
        }}
        onDropRejected={this.props.onError || _.noop}
        {...forDropzone}
      >
        {this.props.children || (
          <DefaultFileUploadChild
            uploadState={this.state.uploadState}
            {...this.props}
            onCompleteIconClick={(e: React.MouseEvent) => {
              e.preventDefault();
              e.stopPropagation();
              this.setState({
                fileInfo: undefined,
                uploadState: FileUploadState.Unstarted
              });

              if (
                this.props.onCompleteIconClick &&
                this.props.documentType &&
                this.props.documentType.code
              ) {
                this.props.onCompleteIconClick(e, this.props.documentType.code);
              }
            }}
            document={this.state.fileInfo}
          />
        )}
      </Dropzone>
    );
  }

  // This is kept here so consumers of the file upload component do not have to keep track of
  // file upload state.
  // Has to be replaced with xhr.upload.onprogress if progress is wanted
  private uploadFile(endpoint: string, token: string, file: File) {
    const formdata = new FormData();
    formdata.append("file", file);

    fetch(endpoint, {
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
        if (this.props.onSuccess) {
          this.props.onSuccess(res);
        }
        this.setState({
          uploadState: FileUploadState.Complete
        });
      })
      .catch(err => {
        if (this.props.onError) {
          this.props.onError({ error: err });
        }
        this.setState({
          uploadState: FileUploadState.Error
        });
      });
  }
}
