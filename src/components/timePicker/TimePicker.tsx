import moment from "moment";
import Trigger from "rc-trigger";
import React, { RefObject } from "react";

import classNames from "classnames";
import Panel from "./Panel";
import placements from "./placements";

import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";
import "./assets/index.scss";

function noop() {
  return;
}

interface ITimePickerProps {
  prefixCls?: string;
  clearText?: string;
  defaultOpenValue: moment.Moment;
  value?: moment.Moment;
  inputReadOnly?: boolean;
  disabled?: boolean;
  allowEmpty?: boolean;
  defaultValue?: moment.Moment;
  open?: boolean;
  defaultOpen?: boolean;
  align?: object;
  placement?: any;
  transitionName?: string;
  getPopupContainer?: (...args: any[]) => any;
  placeholder?: string;
  format?: string;
  showHour?: boolean;
  showMinute?: boolean;
  showSecond?: boolean;
  style?: object;
  className?: string;
  popupClassName?: string;
  disabledHours?: (...args: any[]) => any;
  disabledMinutes?: (...args: any[]) => any;
  disabledSeconds?: (...args: any[]) => any;
  hideDisabledOptions?: boolean;
  onChange?: (...args: any[]) => any;
  onOpen?: (...args: any[]) => any;
  onClose?: (...args: any[]) => any;
  onFocus?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
  addon?: (...args: any[]) => any;
  name?: string;
  autoComplete?: string;
  use12Hours?: boolean;
  hourStep?: number;
  minuteStep?: number;
  secondStep?: number;
  focusOnOpen?: boolean;
  onKeyDown?: (...args: any[]) => any;
  autoFocus?: boolean;
  id?: string;
  inputIcon?: React.ReactNode;
  clearIcon?: React.ReactNode;
  title?: string;
  errorMsg?: string;
  showError?: boolean;
}

interface ITimePickerState {
  value?: moment.Moment;
  open?: boolean;
}

/**
 * when TimePicker use in modalBox, need to use getPopupContainer to pass a element that needs to be mounted
 * example: OperatingHoursComponent.tst in molb-web
 */
export class TimePicker extends React.Component<
  ITimePickerProps,
  ITimePickerState
> {
  public static defaultProps = {
    clearText: "clear",
    prefixCls: "rc-time-picker",
    defaultOpen: false,
    inputReadOnly: false,
    style: {},
    className: "",
    popupClassName: "",
    id: "",
    align: {},
    defaultOpenValue: moment()
      .hour(0)
      .minute(0),
    allowEmpty: true,
    showHour: true,
    showMinute: true,
    showSecond: true,
    disabledHours: noop,
    disabledMinutes: noop,
    disabledSeconds: noop,
    hideDisabledOptions: false,
    placement: "bottomLeft",
    onChange: noop,
    onOpen: noop,
    onClose: noop,
    onFocus: noop,
    onBlur: noop,
    addon: noop,
    use12Hours: false,
    focusOnOpen: true,
    onKeyDown: noop,
    showError: false
  };
  private readonly saveInputRef: RefObject<HTMLInputElement>;
  private readonly savePanelRef: RefObject<Panel>;

  constructor(props: ITimePickerProps) {
    super(props);
    this.saveInputRef = React.createRef(); // refFn.bind(this, "picker");
    this.savePanelRef = React.createRef(); // refFn.bind(this, "panelInstance");
    const {
      defaultOpen,
      defaultValue,
      open = defaultOpen,
      value = defaultValue
    } = props;
    this.state = {
      open,
      value
    };
  }

  public componentWillReceiveProps(nextProps: ITimePickerProps) {
    const { value, open } = nextProps;
    if ("value" in nextProps) {
      this.setState({
        value
      });
    }
    if (open !== undefined) {
      this.setState({ open });
    }
  }

  public onPanelChange = (value: any) => {
    this.setValue(value);
    this.focus();
  };

  public onPanelClear = () => {
    this.setValue(null);
    this.setOpen(false);
  };

  public onVisibleChange = (open: any) => {
    this.setOpen(open);
  };

  public onEsc = () => {
    this.setOpen(false);
    this.focus();
  };

  public onKeyDown = (e: any) => {
    if (e.keyCode === 40) {
      this.setOpen(true);
    }
  };

  public setValue(value: any) {
    if (!("value" in this.props)) {
      this.setState({
        value
      });
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  public getFormat() {
    const { format, showHour, showMinute, showSecond, use12Hours } = this.props;
    if (format) {
      return format;
    }
    if (use12Hours) {
      const fmtString = [
        showHour ? "h" : "",
        showMinute ? "mm" : "",
        showSecond ? "ss" : ""
      ]
        .filter(item => !!item)
        .join(":");
      return fmtString.concat(" a");
    }
    return [
      showHour ? "HH" : "",
      showMinute ? "mm" : "",
      showSecond ? "ss" : ""
    ]
      .filter(item => !!item)
      .join(":");
  }

  public getPanelElement() {
    const {
      prefixCls,
      placeholder,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      hideDisabledOptions,
      inputReadOnly,
      allowEmpty,
      showHour,
      showMinute,
      showSecond,
      defaultOpenValue,
      clearText,
      addon,
      use12Hours,
      focusOnOpen,
      onKeyDown,
      hourStep,
      minuteStep,
      secondStep,
      clearIcon
    } = this.props;
    return (
      <Panel
        clearText={clearText}
        prefixCls={`${prefixCls}-panel`}
        ref={this.savePanelRef}
        value={this.state.value && moment(this.state.value)}
        inputReadOnly={inputReadOnly}
        onChange={this.onPanelChange}
        onClear={this.onPanelClear}
        defaultOpenValue={defaultOpenValue}
        showHour={showHour}
        showMinute={showMinute}
        showSecond={showSecond}
        onEsc={this.onEsc}
        allowEmpty={allowEmpty}
        format={this.getFormat()}
        placeholder={placeholder}
        disabledHours={disabledHours}
        disabledMinutes={disabledMinutes}
        disabledSeconds={disabledSeconds}
        hideDisabledOptions={hideDisabledOptions === true}
        use12Hours={use12Hours}
        hourStep={hourStep}
        minuteStep={minuteStep}
        secondStep={secondStep}
        addon={addon}
        focusOnOpen={focusOnOpen}
        onKeyDown={onKeyDown}
        clearIcon={clearIcon}
        showHeader={false}
      />
    );
  }

  public getPopupClassName() {
    const {
      showHour,
      showMinute,
      showSecond,
      use12Hours,
      prefixCls
    } = this.props;
    let popupClassName = this.props.popupClassName;
    // Keep it for old compatibility
    // if ((!showHour || !showMinute || !showSecond) && !use12Hours) {
    //   popupClassName += ` ${prefixCls}-panel-narrow`;
    // }
    let selectColumnCount = 0;
    if (showHour) {
      selectColumnCount += 1;
    }
    if (showMinute) {
      selectColumnCount += 1;
    }
    if (showSecond) {
      selectColumnCount += 1;
    }
    if (use12Hours) {
      selectColumnCount += 1;
    }
    popupClassName += ` ${prefixCls}-panel-column-${selectColumnCount}`;
    return popupClassName;
  }

  public setOpen(open: any) {
    const { onOpen, onClose } = this.props;
    if (this.state.open !== open) {
      if (!("open" in this.props)) {
        this.setState({ open });
      }
      if (open) {
        if (onOpen) {
          onOpen({ open });
        }
      } else {
        if (onClose) {
          onClose({ open });
        }
      }
    }
  }

  public focus() {
    if (this.saveInputRef.current) {
      this.saveInputRef.current.focus();
    }
  }

  public blur() {
    if (this.saveInputRef.current) {
      this.saveInputRef.current.blur();
    }
  }

  public render() {
    const {
      prefixCls,
      placeholder,
      placement,
      align,
      id,
      disabled,
      transitionName,
      style,
      className,
      getPopupContainer,
      name,
      autoComplete,
      onFocus,
      onBlur,
      autoFocus,
      inputReadOnly,
      inputIcon,
      title,
      errorMsg,
      showError
    } = this.props;
    const { open, value } = this.state;
    const popupClassName = this.getPopupClassName();
    const textInputClassName = classNames(`${prefixCls}-input`, {
      [`${prefixCls}-error`]: showError
    });
    return (
      <div className={`${prefixCls}-root-container`}>
        {title && (
          <div
            className={`${prefixCls}-header-section`}
            data-scrollpoint={true}
          >
            <label className={`${prefixCls}-title`}>{title}</label>
          </div>
        )}
        <Trigger
          prefixCls={`${prefixCls}-panel`}
          popupClassName={popupClassName}
          popup={this.getPanelElement()}
          popupAlign={align}
          builtinPlacements={placements}
          popupPlacement={placement}
          action={disabled ? [] : ["click"]}
          destroyPopupOnHide
          getPopupContainer={getPopupContainer}
          popupTransitionName={transitionName}
          popupVisible={open}
          onPopupVisibleChange={this.onVisibleChange}
        >
          <span className={`${prefixCls} ${className}`} style={style}>
            <input
              className={textInputClassName}
              ref={this.saveInputRef}
              type="text"
              placeholder={placeholder}
              name={name}
              onKeyDown={this.onKeyDown}
              disabled={disabled}
              value={(value && moment(value).format(this.getFormat())) || ""}
              autoComplete={autoComplete}
              onFocus={onFocus}
              onBlur={onBlur}
              autoFocus={autoFocus}
              onChange={noop}
              readOnly={inputReadOnly}
              id={id}
            />
            {inputIcon || (
              <Icon
                type="time"
                size="16"
                className={`${prefixCls}-input-icon`}
              />
            )}
          </span>
        </Trigger>
        {showError && (
          <div
            className={`${addLocatedErrorClassname(
              `${prefixCls}-footer-section`
            )}`}
          >
            <div className={`${prefixCls}-footer-message`}>{errorMsg}</div>
          </div>
        )}
      </div>
    );
  }
}
