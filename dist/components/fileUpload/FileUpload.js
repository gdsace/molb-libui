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
import classNames from "classnames";
import qs from "qs";
import React from "react";
import Dropzone from "react-dropzone";
import { DefaultFileUploadChild } from "./DefaultFileUploadChild";
import styles from "./styles.scss";
import { SubjectType } from "./subjectTypes";
export var FileUploadStatus;
(function (FileUploadStatus) {
    FileUploadStatus["Complete"] = "complete";
    FileUploadStatus["Error"] = "error";
    FileUploadStatus["Unstarted"] = "unstarted";
    FileUploadStatus["Uploading"] = "uploading";
})(FileUploadStatus || (FileUploadStatus = {}));
export var COMMON_ALLOWED_EXTENSIONS = ".pdf,.png,.jpg,.jpeg";
var getInitialState = function (props) {
    var uploadState = FileUploadStatus.Unstarted;
    if (props.document && props.document.id != null) {
        uploadState = FileUploadStatus.Complete;
    }
    if (props.error) {
        uploadState = FileUploadStatus.Error;
    }
    return {
        uploadState: uploadState,
        fileInfo: props.document
    };
};
var FileUpload = /** @class */ (function (_super) {
    __extends(FileUpload, _super);
    function FileUpload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = getInitialState(_this.props);
        return _this;
    }
    FileUpload.prototype.componentWillReceiveProps = function (nextProps) {
        // if someone clear existing error, reset status
        if (this.props.error &&
            !nextProps.error &&
            this.state.uploadState === FileUploadStatus.Error) {
            this.setState({
                fileInfo: undefined,
                uploadState: FileUploadStatus.Unstarted
            });
        }
        // after existing being cleared, errors
        // should set when error comes next time(in nextProps)
        if (!this.props.error &&
            nextProps.error &&
            this.state.uploadState === FileUploadStatus.Unstarted) {
            this.setState({
                fileInfo: undefined,
                uploadState: FileUploadStatus.Error
            });
        }
    };
    FileUpload.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.props, baseUrl = _b.baseUrl, documentType = _b.documentType, document = _b.document, token = _b.token, error = _b.error, value = _b.value, subjectId = _b.subjectId, onSuccess = _b.onSuccess, onError = _b.onError, onProgressIconClick = _b.onProgressIconClick, onCompleteIconClick = _b.onCompleteIconClick, onDefaultIconClick = _b.onDefaultIconClick, children = _b.children, validateFile = _b.validateFile, linkDescription = _b.linkDescription, forDropzone = __rest(_b, ["baseUrl", "documentType", "document", "token", "error", "value", "subjectId", "onSuccess", "onError", "onProgressIconClick", "onCompleteIconClick", "onDefaultIconClick", "children", "validateFile", "linkDescription"]);
        var _c = this.state, uploadState = _c.uploadState, fileInfo = _c.fileInfo;
        var dropzoneClassName = classNames(styles.default, (_a = {},
            _a[styles.dropReject] = uploadState === FileUploadStatus.Error,
            _a[styles.uploading] = uploadState === FileUploadStatus.Uploading,
            _a));
        return (React.createElement(Dropzone, __assign({ className: dropzoneClassName, acceptClassName: styles.hover, activeClassName: styles.hover, rejectClassName: styles.dropReject, onDropAccepted: function (files) {
                // Does not support multiple files now, takes the last
                files.forEach(function (f) {
                    _this.setState({ uploadState: FileUploadStatus.Uploading });
                    _this.uploadFile(f);
                });
            }, onDropRejected: function (err) {
                if (onError) {
                    onError(err);
                }
                _this.setState({ uploadState: FileUploadStatus.Error });
            } }, forDropzone), children || (React.createElement(DefaultFileUploadChild, __assign({}, this.props, { uploadState: uploadState, document: fileInfo, onCompleteIconClick: function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this.setState({
                    fileInfo: undefined,
                    uploadState: FileUploadStatus.Unstarted
                });
                if (onCompleteIconClick && document) {
                    onCompleteIconClick(e, document);
                }
            } })))));
    };
    // This is kept here so consumers of the file upload component do not have to keep track of
    // file upload state.
    // Has to be replaced with xhr.upload.onprogress if progress is wanted
    FileUpload.prototype.uploadFile = function (file) {
        var _this = this;
        var _a = this.props, documentType = _a.documentType, subjectId = _a.subjectId, baseUrl = _a.baseUrl, token = _a.token, onSuccess = _a.onSuccess, onError = _a.onError, validateFile = _a.validateFile;
        var errorMsg = validateFile && validateFile(file, documentType.code);
        if (!!errorMsg) {
            if (onError) {
                onError({ error: errorMsg });
            }
            this.setState({ uploadState: FileUploadStatus.Error });
            return;
        }
        var query = {
            documentTypeCode: documentType.code,
            subjectId: subjectId,
            subjectType: SubjectType.Premise // Always premise, backend will handle this
        };
        query["belongsToJourneyTaskIds"] = documentType.belongsToJourneyTaskIds;
        var queryString = qs.stringify(query, { arrayFormat: "repeat" });
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
                res.belongsToJourneyTaskIds = _this.props.documentType.belongsToJourneyTaskIds;
                onSuccess(res);
            }
            _this.setState({
                uploadState: FileUploadStatus.Complete,
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
            _this.setState({ uploadState: FileUploadStatus.Error });
        });
    };
    return FileUpload;
}(React.Component));
export { FileUpload };
//# sourceMappingURL=FileUpload.js.map