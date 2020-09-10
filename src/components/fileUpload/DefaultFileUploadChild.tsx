import classNames from "classnames";
import React from "react";
import { Icon } from "../icons";
import { addLocatedErrorClassname, getFilenameByHttpHeaders } from "../utils";
import styles from "./defaultChild.scss";
import { FileUploadStatus, IFileUploadProps } from "./FileUpload";

type UploadHandler = React.EventHandler<React.MouseEvent>;

const getIcon = (
  state?: FileUploadStatus,
  onProgressIconClick?: UploadHandler,
  onCompleteIconClick?: UploadHandler,
  onDefaultIconClick?: UploadHandler
) => {
  const noop = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const icons: { [k in FileUploadStatus]: string } = {
    [FileUploadStatus.Uploading]: "progress",
    [FileUploadStatus.Complete]: "delete",
    [FileUploadStatus.Unstarted]: "upload",
    [FileUploadStatus.Error]: "upload"
  };

  const onIconClickMap: { [k in FileUploadStatus]: UploadHandler } = {
    [FileUploadStatus.Uploading]: onProgressIconClick || noop,
    [FileUploadStatus.Complete]: onCompleteIconClick || noop,
    [FileUploadStatus.Unstarted]: onDefaultIconClick || noop,
    [FileUploadStatus.Error]: onDefaultIconClick || noop
  };

  const onIconClick = onIconClickMap[state || FileUploadStatus.Unstarted];

  return (
    <div onClick={onIconClick}>
      <Icon
        className={classNames(styles.icon, {
          [styles.iconError]: state === FileUploadStatus.Error,
          [styles.iconUploading]: state === FileUploadStatus.Uploading,
          [styles.iconDelete]: state === FileUploadStatus.Complete,
          [styles.iconClickThrough]: onIconClick === noop
        })}
        type={icons[state || FileUploadStatus.Unstarted]}
      />
    </div>
  );
};

export type FileUploadChildProps = Pick<
  IFileUploadProps,
  | "document"
  | "documentType"
  | "error"
  | "onDefaultIconClick"
  | "onProgressIconClick"
  | "baseUrl"
  | "token"
  | "linkDescription"
> & {
  uploadState?: FileUploadStatus;
  onCompleteIconClick?: (event: React.MouseEvent) => any;
};

export const formatBytes = (bytes: number): string => {
  if (bytes < 1024) {
    return `${bytes} B`;
  } else if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  } else {
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  }
};

const downloadTemplateFile = (props: FileUploadChildProps) => {
  const { documentType, baseUrl, token } = props;

  fetch(`${baseUrl}/api/document-types/${documentType!.code}/template`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error("Something is wrong! Try later.");
      }
      response.blob().then((blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.style.display = "none";
        link.href = url;
        link.setAttribute("download", `${getFilenameByHttpHeaders(response.headers)}`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      });
    })
    .catch((error: Error) => {
      throw new Error(`There has been a problem with your fetch operation: ${error.message}`);
    });
};

// We aren't using the Tile component here because of several
// style/functionality differences
// * border is dashed when not uploaded
// * icon rotates
// * drag and drop styling
// * icon has a different onClick for each file upload states
export const DefaultFileUploadChild = (props: FileUploadChildProps) => {
  const showDescription = !(props.uploadState === FileUploadStatus.Complete && props.document);
  const showError = props.uploadState === FileUploadStatus.Error && props.error;

  return (
    <div
      className={classNames(styles.root, {
        [styles.hasFile]:
          props.uploadState === FileUploadStatus.Complete || props.uploadState === FileUploadStatus.Uploading,
        [styles.hasError]: props.uploadState === FileUploadStatus.Error,
        [styles.uploading]: props.uploadState === FileUploadStatus.Uploading
      })}
      data-scrollpoint={true}
    >
      <div className={styles.rowTitle}>
        <div className={styles.textTitle}>
          <span>{props.documentType && props.documentType.name}</span>
          {props.documentType && props.documentType.additionalRemark && (
            <>
              {" "}
              <span className={styles.textOptional}>({props.documentType.additionalRemark})</span>
            </>
          )}
        </div>

        {getIcon(props.uploadState, props.onProgressIconClick, props.onCompleteIconClick, props.onDefaultIconClick)}
      </div>

      {showDescription ? (
        <div className={styles.textDescription}>
          <div>{props.documentType.description}</div>
        </div>
      ) : (
        props.document && (
          <>
            <div className={styles.textFilename}>
              <div>{props.document.name}</div>
            </div>

            <div className={styles.textFilesize}>{formatBytes(props.document.fileSize || 0)}</div>
          </>
        )
      )}
      {showError && <div className={addLocatedErrorClassname(styles.textError)}>{props.error}</div>}
      {props.documentType.hasTemplateFile && (
        <div className={styles.downloadLink}>
          <a
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              downloadTemplateFile(props);
            }}
          >
            {props.linkDescription}
          </a>
        </div>
      )}
    </div>
  );
};
