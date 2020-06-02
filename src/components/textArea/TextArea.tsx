import * as React from "react";

import classnames from "classnames";
import { Icon } from "../icons";
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
  id?: string;
  displayContentWithoutScroll?: boolean;
  title?: string;
  helperText?: string;
  overwrite?: boolean;
  iconType?: string;
  errorMsg?: string;
  warningMsg?: string | React.ReactNode;
  showError?: boolean;
  name?: string;
}

export interface ITextAreaState {
  characterCount?: number;
  isOverwrite?: boolean;
  height?: number;
}

export class TextArea extends React.Component<ITextAreaPros, ITextAreaState> {
  public static defaultProps: Partial<ITextAreaPros> = {
    title: "",
    helperText: "",
    overwrite: false,
    iconType: "",
    showError: false,
    displayContentWithoutScroll: false
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

  public componentDidMount(): void {
    if (this.props.displayContentWithoutScroll && this.props.id) {
      const textAreaEle = document.getElementById(this.props.id);
      const heightWithOutScrollBar = textAreaEle!!.scrollHeight + 5;
      this.setState({ height: heightWithOutScrollBar });
    }
  }

  public render() {
    const textareaValidation =
      (this.props.overwrite && this.state.isOverwrite) || this.props.showError;
    const rootContainerClassname = classnames(styles.textarea, {
      [styles[`disabled`]]: this.props.disabled,
      [styles[`validation`]]: textareaValidation
    });
    const leftSideMessageClass = textareaValidation
      ? addLocatedErrorClassname(styles.helperMsg)
      : this.props.warningMsg
      ? styles.warningMsg
      : styles.helperMsg;
    const maxLength = this.props.overwrite ? undefined : this.props.maxLength;
    const iconSize = "16";
    return (
      <div
        className={classnames(rootContainerClassname, this.props.className)}
        data-scrollpoint={true}
      >
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
            id={this.props.id}
            style={this.getStyle()}
            name={this.props.name}
            className={styles.input}
            value={this.props.value}
            placeholder={this.props.placeholder}
            maxLength={maxLength}
            onChange={this.handleTextareaChange}
            disabled={!!this.props.disabled}
          />
        </div>
        <div className={styles.bottomSection}>
          <div className={leftSideMessageClass}>
            {textareaValidation
              ? this.props.errorMsg
              : this.props.warningMsg
              ? this.renderWarningMsg()
              : this.props.helperText && this.renderHelperText()}
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

  private renderHelperText() {
    return <p>{this.props.helperText}</p>;
  }

  private renderWarningMsg() {
    return <>{this.props.warningMsg}</>;
  }

  private getStyle() {
    return this.state.height ? { height: this.state.height } : {};
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
