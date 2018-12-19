import _ from "lodash";
import * as React from "react";

import { Icon } from "@libui/components/icons";
import classnames from "classnames";
import { addLocatedErrorClassname } from "../utils";

const styles = require("./textArea.scss");

export type HTMLTextareaProps = React.TextareaHTMLAttributes<
  HTMLTextAreaElement
>;
export interface ITextAreaPros extends HTMLTextareaProps {
  onIconMouseOver?: () => any;
  onIconMouseOut?: () => any;
  onIconMouseClick?: () => any;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => any;
  title?: string;
  helperText?: string;
  overwrite?: boolean;
  iconType?: string;
  errorMsg?: string;
  showError?: boolean;
}

export class TextArea extends React.Component<ITextAreaPros, any> {
  public static defaultProps: Partial<ITextAreaPros> = {
    title: "",
    helperText: "",
    overwrite: false,
    iconType: "",
    showError: false
  };

  constructor(props: any) {
    super(props);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleIconMouseOver = this.handleIconMouseOver.bind(this);
    this.handleIconMouseOut = this.handleIconMouseOut.bind(this);
    this.handleIconClick = this.handleIconClick.bind(this);
    this.state = {
      characterCount: (this.props.value || "").toString().length,
      isOverwrite: false
    };
  }

  public render() {
    const textareaValidation =
      (this.props.overwrite && this.state.isOverwrite) || this.props.showError;
    const rootContainerClassname = classnames(styles.textarea, {
      [styles[`disabled`]]: this.props.disabled,
      [styles[`validation`]]: textareaValidation
    });
    const helperMsgClassname = textareaValidation
      ? addLocatedErrorClassname(styles.helperMsg)
      : styles.helperMsg;
    const maxLength = this.props.overwrite ? undefined : this.props.maxLength;
    const props = this.props;
    const otherProps = _.omit(props, [
      "title",
      "helperText",
      "overwrite",
      "iconType",
      "errorMsg",
      "showError",
      "onIconMouseOver",
      "onIconMouseOut",
      "onIconMouseClick"
    ]);
    const iconSize = "16";
    return (
      <div className={rootContainerClassname} data-scrollpoint={true}>
        <div className={styles.headerSection}>
          <label className={styles.title}>{this.props.title}</label>
          <div
            className={styles.infoIcon}
            onMouseOver={this.handleIconMouseOver}
            onMouseOut={this.handleIconMouseOut}
            onClick={this.handleIconClick}
          >
            {this.props.iconType ? (
              <Icon type={this.props.iconType} size={iconSize} />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={styles.content}>
          <textarea
            {...otherProps}
            className={styles.input}
            placeholder={this.props.placeholder}
            maxLength={maxLength}
            onChange={this.handleTextareaChange}
            disabled={!!this.props.disabled}
          />
        </div>
        <div className={styles.bottomSection}>
          <div className={helperMsgClassname}>
            {textareaValidation ? this.props.errorMsg : this.props.helperText}
          </div>
          {this.props.maxLength && (
            <div className={styles.countMsg}>
              {`${this.state.characterCount}/${this.props.maxLength}`}
            </div>
          )}
        </div>
      </div>
    );
  }

  private handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
    const maxLength = this.props.maxLength ? this.props.maxLength : 0;
    this.setState({
      characterCount: e.target.value.length,
      isOverwrite: e.target.value.length > maxLength
    });
  }

  private handleIconMouseOver(event: React.MouseEvent) {
    if (this.props.onIconMouseOver) {
      this.props.onIconMouseOver();
    }
  }
  private handleIconMouseOut(event: React.MouseEvent) {
    if (this.props.onIconMouseOut) {
      this.props.onIconMouseOut();
    }
  }

  private handleIconClick(event: React.MouseEvent) {
    if (this.props.onIconMouseClick) {
      this.props.onIconMouseClick();
    }
  }
}
