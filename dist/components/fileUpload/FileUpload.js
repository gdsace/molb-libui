var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import qs from "qs";
import * as React from "react";
import classNames from "classnames";
import Dropzone from "react-dropzone";
import { DefaultFileUploadChild } from "./DefaultFileUploadChild";
import { SubjectType } from "./subjectTypes";
var styles = require("./styles.scss");
export var FileUploadState;
(function (FileUploadState) {
    FileUploadState["Complete"] = "complete";
    FileUploadState["Error"] = "error";
    FileUploadState["Unstarted"] = "unstarted";
    FileUploadState["Uploading"] = "uploading";
})(FileUploadState || (FileUploadState = {}));
export var COMMON_ALLOWED_EXTENSIONS = [".pdf", ".png", ".jpg", ".jpeg"].join(",");
var FileUpload = /** @class */ (function (_super) {
    __extends(FileUpload, _super);
    function FileUpload(props) {
        var _this = _super.call(this, props) || this;
        var uploadState = FileUploadState.Unstarted;
        if (props.document && props.document.id != null) {
            uploadState = FileUploadState.Complete;
        }
        if (props.error) {
            uploadState = FileUploadState.Error;
        }
        _this.state = {
            uploadState: uploadState,
            fileInfo: props.document
        };
        return _this;
    }
    FileUpload.prototype.componentWillReceiveProps = function (nextProps) {
        // if someone clear existing error, reset status
        if (this.props.error &&
            !nextProps.error &&
            this.state.uploadState === FileUploadState.Error) {
            this.setState({
                fileInfo: undefined,
                uploadState: FileUploadState.Unstarted
            });
        }
        // after existing being cleared, errors
        // should set when error comes next time(in nextProps)
        if (!this.props.error &&
            nextProps.error &&
            this.state.uploadState === FileUploadState.Unstarted) {
            this.setState({
                fileInfo: undefined,
                uploadState: FileUploadState.Error
            });
        }
    };
    FileUpload.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.props, baseUrl = _b.baseUrl, documentType = _b.documentType, document = _b.document, token = _b.token, error = _b.error, value = _b.value, subjectId = _b.subjectId, onSuccess = _b.onSuccess, onError = _b.onError, onProgressIconClick = _b.onProgressIconClick, onCompleteIconClick = _b.onCompleteIconClick, onDefaultIconClick = _b.onDefaultIconClick, children = _b.children, forDropzone = __rest(_b, ["baseUrl", "documentType", "document", "token", "error", "value", "subjectId", "onSuccess", "onError", "onProgressIconClick", "onCompleteIconClick", "onDefaultIconClick", "children"]);
        var _c = this.state, uploadState = _c.uploadState, fileInfo = _c.fileInfo;
        var dropzoneClassName = classNames(styles.default, (_a = {},
            _a[styles.dropReject] = uploadState === FileUploadState.Error,
            _a[styles.uploading] = uploadState === FileUploadState.Uploading,
            _a));
        return (React.createElement(Dropzone, __assign({ className: dropzoneClassName, acceptClassName: styles.hover, activeClassName: styles.hover, rejectClassName: styles.dropReject, onDropAccepted: function (files) {
                // Does not support multiple files now, takes the last
                files.forEach(function (f) {
                    _this.setState({ uploadState: FileUploadState.Uploading });
                    _this.uploadFile(f);
                });
            }, onDropRejected: function (err) {
                if (onError) {
                    onError(err);
                }
                _this.setState({ uploadState: FileUploadState.Error });
            } }, forDropzone), children || (React.createElement(DefaultFileUploadChild, __assign({}, this.props, { uploadState: uploadState, document: fileInfo, onCompleteIconClick: function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this.setState({
                    fileInfo: undefined,
                    uploadState: FileUploadState.Unstarted
                });
                if (onCompleteIconClick && documentType && documentType.code) {
                    onCompleteIconClick(e, documentType.code);
                }
            } })))));
    };
    // This is kept here so consumers of the file upload component do not have to keep track of
    // file upload state.
    // Has to be replaced with xhr.upload.onprogress if progress is wanted
    FileUpload.prototype.uploadFile = function (file) {
        var _this = this;
        var _a = this.props, documentType = _a.documentType, subjectId = _a.subjectId, baseUrl = _a.baseUrl, token = _a.token, onSuccess = _a.onSuccess, onError = _a.onError;
        var queryString = qs.stringify({
            documentTypeCode: documentType.code,
            subjectId: subjectId,
            subjectType: SubjectType.Premise // Always premise, backend will handle this
        });
        var formdata = new FormData();
        formdata.append("file", file);
        fetch(baseUrl + "/api/documents/?" + queryString, {
            method: "POST",
            headers: {
                Authorization: "Bearer " + token
            },
            body: formdata
        })
            .then(function (res) {
            if (!res.ok) {
                throw res;
            }
            return res.json();
        })
            // `any` is pending backend response shape
            .then(function (res) {
            if (onSuccess) {
                onSuccess(res);
            }
            _this.setState({
                uploadState: FileUploadState.Complete,
                fileInfo: {
                    name: file.name,
                    fileSize: file.size
                }
            });
        })
            .catch(function (err) {
            if (onError) {
                onError({ error: err });
            }
            _this.setState({ uploadState: FileUploadState.Error });
        });
    };
    return FileUpload;
}(React.Component));
export { FileUpload };
//# sourceMappingURL=FileUpload.js.map