import classNames from "classnames";
import React from "react";
import { Icon } from "../icons";
import { addLocatedErrorClassname, getFilenameByHttpHeaders } from "../utils";
import styles from "./defaultChild.scss";
import { FileUploadStatus } from "./FileUpload";
var getIcon = function (state, onProgressIconClick, onCompleteIconClick, onDefaultIconClick) {
    var _a, _b, _c;
    var noop = function (e) {
        e.preventDefault();
    };
    var icons = (_a = {},
        _a[FileUploadStatus.Uploading] = "progress",
        _a[FileUploadStatus.Complete] = "delete",
        _a[FileUploadStatus.Unstarted] = "upload",
        _a[FileUploadStatus.Error] = "upload",
        _a);
    var onIconClickMap = (_b = {},
        _b[FileUploadStatus.Uploading] = onProgressIconClick || noop,
        _b[FileUploadStatus.Complete] = onCompleteIconClick || noop,
        _b[FileUploadStatus.Unstarted] = onDefaultIconClick || noop,
        _b[FileUploadStatus.Error] = onDefaultIconClick || noop,
        _b);
    var onIconClick = onIconClickMap[state || FileUploadStatus.Unstarted];
    return (React.createElement("div", { onClick: onIconClick },
        React.createElement(Icon, { className: classNames(styles.icon, (_c = {},
                _c[styles.iconError] = state === FileUploadStatus.Error,
                _c[styles.iconUploading] = state === FileUploadStatus.Uploading,
                _c[styles.iconDelete] = state === FileUploadStatus.Complete,
                _c[styles.iconClickThrough] = onIconClick === noop,
                _c)), type: icons[state || FileUploadStatus.Unstarted] })));
};
export var formatBytes = function (bytes) {
    if (bytes < 1024) {
        return bytes + " B";
    }
    else if (bytes < 1024 * 1024) {
        return (bytes / 1024).toFixed(1) + " KB";
    }
    else {
        return (bytes / 1024 / 1024).toFixed(1) + " MB";
    }
};
var downloadTemplateFile = function (props) {
    var documentType = props.documentType, baseUrl = props.baseUrl, token = props.token;
    fetch(baseUrl + "/api/document-types/" + documentType.code + "/template", {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token
        }
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Something is wrong! Try later.");
        }
        response.blob().then(function (blob) {
            var url = window.URL.createObjectURL(blob);
            var link = document.createElement("a");
            link.style.display = "none";
            link.href = url;
            link.setAttribute("download", "" + getFilenameByHttpHeaders(response.headers));
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(link.href);
        });
    })
        .catch(function (error) {
        throw new Error("There has been a problem with your fetch operation: " + error.message);
    });
};
// We aren't using the Tile component here because of several
// style/functionality differences
// * border is dashed when not uploaded
// * icon rotates
// * drag and drop styling
// * icon has a different onClick for each file upload states
export var DefaultFileUploadChild = function (props) {
    var _a;
    var showDescription = !(props.uploadState === FileUploadStatus.Complete && props.document);
    var showError = props.uploadState === FileUploadStatus.Error && props.error;
    return (React.createElement("div", { className: classNames(styles.root, (_a = {},
            _a[styles.hasFile] = props.uploadState === FileUploadStatus.Complete ||
                props.uploadState === FileUploadStatus.Uploading,
            _a[styles.hasError] = props.uploadState === FileUploadStatus.Error,
            _a[styles.uploading] = props.uploadState === FileUploadStatus.Uploading,
            _a)), "data-scrollpoint": true },
        React.createElement("div", { className: styles.rowTitle },
            React.createElement("div", { className: styles.textTitle },
                React.createElement("span", null, props.documentType && props.documentType.name),
                props.documentType && props.documentType.additionalRemark && (React.createElement(React.Fragment, null,
                    " ",
                    React.createElement("span", { className: styles.textOptional },
                        "(",
                        props.documentType.additionalRemark,
                        ")")))),
            getIcon(props.uploadState, props.onProgressIconClick, props.onCompleteIconClick, props.onDefaultIconClick)),
        showDescription ? (React.createElement("div", { className: styles.textDescription },
            React.createElement("div", null, props.documentType.description))) : (props.document && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: styles.textFilename },
                React.createElement("div", null, props.document.name)),
            React.createElement("div", { className: styles.textFilesize }, formatBytes(props.document.fileSize || 0))))),
        showError && (React.createElement("div", { className: addLocatedErrorClassname(styles.textError) }, props.error)),
        props.documentType.hasTemplateFile && (React.createElement("div", { className: styles.downloadLink },
            React.createElement("a", { onClick: function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    downloadTemplateFile(props);
                } }, props.linkDescription)))));
};
//# sourceMappingURL=DefaultFileUploadChild.js.map