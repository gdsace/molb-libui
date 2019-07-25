import classNames from "classnames";
import * as React from "react";

import _ from "lodash";
import { FileUploadState, IFileUploadProps } from ".";
import { Icon } from "../icons";
import { addLocatedErrorClassname, getFilenameByHttpHeaders } from "../utils";

const styles = require("./defaultChild.scss");

const getIcon = (
  state?: FileUploadState,
  onProgressIconClick?: (e: React.MouseEvent) => any,
  onCompleteIconClick?: (e: React.MouseEvent, documentTypeCode: string) => any,
  onDefaultIconClick?: (e: React.MouseEvent) => any
) => {
  const noop = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const icons: { [k in FileUploadState]: string } = {
    [FileUploadState.Uploading]: "progress",
    [FileUploadState.Complete]: "delete",
    [FileUploadState.Unstarted]: "upload",
    [FileUploadState.Error]: "upload"
  };

  const onIconClickMap: { [k in FileUploadState]: any } = {
    [FileUploadState.Uploading]: onProgressIconClick || noop,
    [FileUploadState.Complete]: onCompleteIconClick || noop,
    [FileUploadState.Unstarted]: onDefaultIconClick || noop,
    [FileUploadState.Error]: onDefaultIconClick || noop
  };

  const onIconClick = onIconClickMap[state || FileUploadState.Unstarted];

  return (
    <div onClick={onIconClick}>
      <Icon
        className={classNames(styles.icon, {
          [styles.iconError]: state === FileUploadState.Error,
          [styles.iconUploading]: state === FileUploadState.Uploading,
          [styles.iconDelete]: state === FileUploadState.Complete,
          [styles.iconClickThrough]: onIconClick === noop
        })}
        type={icons[state || FileUploadState.Unstarted]}
      />
    </div>
  );
};

export interface IFileUploadChildProps
  extends Pick<
    IFileUploadProps,
    | "document"
    | "documentType"
    | "error"
    | "onCompleteIconClick"
    | "onDefaultIconClick"
    | "onProgressIconClick"
    | "baseUrl"
    | "token"
    | "linkDescription"
  > {
  uploadState?: FileUploadState;
}

export const formatBytes = (bytes: number): string => {
  if (bytes < 1024) {
    return `${bytes} B`;
  } else if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  } else {
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  }
};

const downloadTemplateFile = (props: IFileUploadChildProps) => {
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
        link.setAttribute(
          "download",
          `${getFilenameByHttpHeaders(response.headers)}`
        );
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      });
    })
    .catch((error: Error) => {
      throw new Error(
        `There has been a problem with your fetch operation: ${error.message}`
      );
    });
};

// We aren't using the Tile component here because of several
// style/functionality differences
// * border is dashed when not uploaded
// * icon rotates
// * drag and drop styling
// * icon has a different onClick for each file upload states
export const DefaultFileUploadChild = (props: IFileUploadChildProps) => {
  const showDescription = !(
    props.uploadState === FileUploadState.Complete && props.document
  );
  const showError = props.uploadState === FileUploadState.Error && props.error;

  return (
    <div
      className={classNames(styles.root, {
        [styles.hasFile]:
          props.uploadState === FileUploadState.Complete ||
          props.uploadState === FileUploadState.Uploading,
        [styles.hasError]: props.uploadState === FileUploadState.Error,
        [styles.uploading]: props.uploadState === FileUploadState.Uploading
      })}
      data-scrollpoint={true}
    >
      <div className={styles.rowTitle}>
        <div className={styles.textTitle}>
          <span>{props.documentType && props.documentType.name}</span>
          {props.documentType && props.documentType.additionalRemark && (
            <>
              {" "}
              <span className={styles.textOptional}>
                ({props.documentType.additionalRemark})
              </span>
            </>
          )}
        </div>

        {getIcon(
          props.uploadState,
          props.onProgressIconClick,
          props.onCompleteIconClick,
          props.onDefaultIconClick
        )}
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

            <div className={styles.textFilesize}>
              {formatBytes(props.document.fileSize || 0)}
            </div>
          </>
        )
      )}
      {showError && (
        <div className={addLocatedErrorClassname(styles.textError)}>
          {props.error}
        </div>
      )}
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
