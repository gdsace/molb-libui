import classNames from "classnames";
import * as React from "react";
import { FileUploadState } from ".";
import { Icon } from "../icons";
import { addLocatedErrorClassname, getFilenameByHttpHeaders } from "../utils";
var styles = require("./defaultChild.scss");
var getIcon = function (state, onProgressIconClick, onCompleteIconClick, onDefaultIconClick) {
    var _a, _b, _c;
    var noop = function (e) {
        e.preventDefault();
    };
    var icons = (_a = {},
        _a[FileUploadState.Uploading] = "progress",
        _a[FileUploadState.Complete] = "delete",
        _a[FileUploadState.Unstarted] = "upload",
        _a[FileUploadState.Error] = "upload",
        _a);
    var onIconClickMap = (_b = {},
        _b[FileUploadState.Uploading] = onProgressIconClick || noop,
        _b[FileUploadState.Complete] = onCompleteIconClick || noop,
        _b[FileUploadState.Unstarted] = onDefaultIconClick || noop,
        _b[FileUploadState.Error] = onDefaultIconClick || noop,
        _b);
    var onIconClick = onIconClickMap[state || FileUploadState.Unstarted];
    return (React.createElement("div", { onClick: onIconClick },
        React.createElement(Icon, { className: classNames(styles.icon, (_c = {},
                _c[styles.iconError] = state === FileUploadState.Error,
                _c[styles.iconUploading] = state === FileUploadState.Uploading,
                _c[styles.iconDelete] = state === FileUploadState.Complete,
                _c[styles.iconClickThrough] = onIconClick === noop,
                _c)), type: icons[state || FileUploadState.Unstarted] })));
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
    var showDescription = !(props.uploadState === FileUploadState.Complete && props.document);
    var showError = props.uploadState === FileUploadState.Error && props.error;
    return (React.createElement("div", { className: classNames(styles.root, (_a = {},
            _a[styles.hasFile] = props.uploadState === FileUploadState.Complete ||
                props.uploadState === FileUploadState.Uploading,
            _a[styles.hasError] = props.uploadState === FileUploadState.Error,
            _a[styles.uploading] = props.uploadState === FileUploadState.Uploading,
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
                } }, "Download mandatory template")))));
};
//# sourceMappingURL=DefaultFileUploadChild.js.map