import qs from "qs";
import React from "react";
import Dropzone, { DropzoneProps } from "react-dropzone";
import { IDocument, IDocumentType } from "../types";
import { DefaultFileUploadChild } from "./DefaultFileUploadChild";
import { SubjectType } from "./subjectTypes";

export type IFileUploadProps = Omit<DropzoneProps, "children"> & {
  baseUrl: string;
  subjectId: string;
  token: string;
  document?: Partial<IDocument>;
  documentType: IDocumentType;
  error?: string;
  linkDescription?: string;
  className?: string;
  onSuccess?: (event: any) => any;
  onError?: (event: any) => any;
  onCompleteIconClick?: (event: React.MouseEvent, document: Partial<IDocument>) => any;
  onDefaultIconClick?: (event: React.MouseEvent) => any;
  onProgressIconClick?: (event: React.MouseEvent) => any;
  validateFile?: (file: File, documentTypeCode: string) => any;
};

export type FileUploadState = {
  fileInfo?: Partial<IDocument>;
  uploadState: FileUploadStatus;
};

export enum FileUploadStatus {
  Complete = "complete",
  Error = "error",
  Unstarted = "unstarted",
  Uploading = "uploading"
}

export const COMMON_ALLOWED_EXTENSIONS = ".pdf,.png,.jpg,.jpeg";

const getInitialState = (props: IFileUploadProps): FileUploadState => {
  let uploadState = FileUploadStatus.Unstarted;
  if (props.document && props.document.id != null) {
    uploadState = FileUploadStatus.Complete;
  }
  if (props.error) {
    uploadState = FileUploadStatus.Error;
  }

  return {
    uploadState,
    fileInfo: props.document
  };
};

export class FileUpload extends React.Component<IFileUploadProps, FileUploadState> {
  state = getInitialState(this.props);

  UNSAFE_componentWillReceiveProps(nextProps: IFileUploadProps) {
    // if someone clear existing error, reset status
    if (this.props.error && !nextProps.error && this.state.uploadState === FileUploadStatus.Error) {
      this.setState({
        fileInfo: undefined,
        uploadState: FileUploadStatus.Unstarted
      });
    }

    // after existing being cleared, errors
    // should set when error comes next time(in nextProps)
    if (!this.props.error && nextProps.error && this.state.uploadState === FileUploadStatus.Unstarted) {
      this.setState({
        fileInfo: undefined,
        uploadState: FileUploadStatus.Error
      });
    }
  }

  render() {
    const { document, onError, onCompleteIconClick, className, ...forDropzone } = this.props;
    const { uploadState, fileInfo } = this.state;

    return (
      <Dropzone
        onDropAccepted={(files: File[]) => {
          // Does not support multiple files now, takes the last
          files.forEach(f => {
            this.setState({ uploadState: FileUploadStatus.Uploading });
            this.uploadFile(f);
          });
        }}
        onDropRejected={err => {
          if (onError) {
            onError(err);
          }
          this.setState({ uploadState: FileUploadStatus.Error });
        }}
        {...forDropzone}
      >
        {({ getInputProps, getRootProps }) => (
          <div {...getRootProps()} className={className} style={{ outline: "none" }}>
            <input {...getInputProps()} />
            {
              <DefaultFileUploadChild
                {...this.props}
                uploadState={uploadState}
                document={fileInfo}
                onCompleteIconClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  e.stopPropagation();

                  this.setState({
                    fileInfo: undefined,
                    uploadState: FileUploadStatus.Unstarted
                  });

                  if (onCompleteIconClick && document) {
                    onCompleteIconClick(e, document);
                  }
                }}
              />
            }
          </div>
        )}
      </Dropzone>
    );
  }

  // This is kept here so consumers of the file upload component do not have to keep track of
  // file upload state.
  // Has to be replaced with xhr.upload.onprogress if progress is wanted
  uploadFile(file: File) {
    const { documentType, subjectId, baseUrl, token, onSuccess, onError, validateFile } = this.props;
    const errorMsg = validateFile && validateFile(file, documentType.code);
    if (!!errorMsg) {
      if (onError) {
        onError({ error: errorMsg });
      }
      this.setState({ uploadState: FileUploadStatus.Error });
      return;
    }
    const query: { [key: string]: any } = {
      documentTypeCode: documentType.code,
      subjectId,
      subjectType: SubjectType.Premise // Always premise, backend will handle this
    };

    query[`belongsToJourneyTaskIds`] = documentType.belongsToJourneyTaskIds;
    const queryString = qs.stringify(query, { arrayFormat: "repeat" });

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
          res.belongsToJourneyTaskIds = this.props.documentType.belongsToJourneyTaskIds;
          onSuccess(res);
        }
        this.setState({
          uploadState: FileUploadStatus.Complete,
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
        this.setState({ uploadState: FileUploadStatus.Error });
      });
  }
}
