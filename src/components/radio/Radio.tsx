import classNames from "classnames";
import * as React from "react";
import { NotificationTheme, TooltipsLocationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { InlineNotification } from "../inlineNotification";
import { Tooltips } from "../tooltips";

const styles = require("./radio.scss");
const ICON_SIZE = "16";

export interface IRadioProps {
  className?: string;
  text?: string;
  optionList: IOptionValue[];
  value?: string;
  onChange?: (e: string) => void;
  disabled?: boolean;
  showError?: boolean;
  errorMsg?: string;
  id?: string;
  disableWidth?: boolean;
  radioTextStyleOverride?: string;
  labelStyleOverride?: string;
  subsequentQuestion?: React.ReactNode;
  radioLabelLineBreak?: boolean;
  showTooltip?: boolean;
  toolTipsContent?: JSX.Element | string;
  toolTipsPosition?: TooltipsLocationTheme;
  label?: string;
  promptMessage?: IPromptMessage;
  addOnBelowText?: React.ReactNode;
  uncontrolled?: boolean;
  register?: React.RefObject<any> | ((ref: Element | null) => void);
  name?: string;
}

interface IPromptMessage {
  display: boolean;
  message: string;
}

export interface IOptionValue {
  value: string;
  label: string;
  disabled?: boolean;
}

const getOptionIcon = (optionValue: IOptionValue, props: IRadioProps) => {
  if (optionValue.value === props.value) {
    return <Icon type="radioSelected" />;
  } else {
    if (props.disabled || optionValue.disabled) {
      return <Icon type="radioDisabledUnselected" />;
    }
    return <Icon type="radioEnabledUnselected" />;
  }
};

const getOptionComponents = (props: IRadioProps) => {
  const radioTextClass = classNames(
    props.labelStyleOverride || "",
    styles.optionText
  );
  const optionComponents = props.optionList.map((optionValue, idx: number) => {
    const isDisabled = props.disabled || optionValue.disabled;
    const isSelected = optionValue.value === props.value;
    const radioClassString = classNames(styles.checkBoxIcon, {
      [styles.radioContentDisabled]: isDisabled,
      [styles.radioWrapperDisabled]: isDisabled,
      [styles.radioWrapperEnable]: !isDisabled,
      [styles.radioWrapperSelected]: isSelected,
      [styles.radioWrapperUnselected]: !isSelected,
      [styles.widthDisabled]: props.disableWidth
    });

    const optionIcon = getOptionIcon(optionValue, props);

    const onRadioClick = (event: React.SyntheticEvent<HTMLInputElement>) => {
      if (isDisabled || props.value === event.currentTarget.value) {
        return;
      }
      if (props.onChange) {
        props.onChange(event.currentTarget.value);
      }
    };

    return (
      <React.Fragment key={`option[${idx}][${optionValue.label}]`}>
        {props.uncontrolled === true ? (
          <label
            htmlFor={`option[${idx}][${props.name}]`}
            className={radioClassString}
          >
            <span>{optionIcon}</span>
            <input
              type="radio"
              id={`option[${idx}][${props.name}]`}
              name={props.name}
              value={optionValue.value}
              ref={props.register}
              disabled={isDisabled}
              onClick={onRadioClick}
              defaultChecked={optionValue.value === props.value}
            />
            <span className={radioTextClass}>{optionValue.label}</span>
          </label>
        ) : (
          <label className={radioClassString}>
            <span>{optionIcon}</span>
            <input
              type="radio"
              value={optionValue.value}
              disabled={isDisabled}
              onClick={onRadioClick}
            />
            <span className={radioTextClass}>{optionValue.label}</span>
          </label>
        )}

        {isSelected && props.subsequentQuestion}
      </React.Fragment>
    );
  });
  return optionComponents;
};

export const Radio = (props: IRadioProps) => {
  const optionComponents = getOptionComponents(props);
  const radioClass = classNames(
    props.className ? props.className : "",
    styles.radioWrapper
  );
  const radioTextClass = classNames(
    props.disabled ? styles.radioContentDisabled : "",
    props.radioTextStyleOverride || "",
    styles.radioText
  );
  const radioLabelClass = classNames(
    props.radioLabelLineBreak ? styles.radioLabelLineBreak : styles.radioLabel,
    styles.radioLabel
  );

  const radioHeaderClass = classNames(
    props.showTooltip ? styles.radioWithToolTip : ""
  );

  const radioPanelClass = classNames(
    props.text || props.text ? styles.panel : ""
  );

  return (
    <div id={props.id} className={radioClass}>
      <div className={radioPanelClass}>
        {props.label && (
          <div className={styles.questionLabel}>{props.label}</div>
        )}
      </div>
      <div className={radioHeaderClass}>
        {props.text && <div className={radioTextClass}>{props.text}</div>}
        {props.addOnBelowText && <div>{props.addOnBelowText}</div>}
        {props.showTooltip && (
          <Tooltips
            trigger={(open: boolean) => (
              <Icon
                type="help"
                size={ICON_SIZE}
                className={classNames(
                  styles.labelIcon,
                  open && styles.openTooltip
                )}
              />
            )}
            position={
              props.toolTipsPosition
                ? props.toolTipsPosition
                : TooltipsLocationTheme.BottomCenter
            }
            specializedPosition={true}
          >
            <div className={styles.toolTipsContent}>
              {props.toolTipsContent}
            </div>
          </Tooltips>
        )}
      </div>
      {props.promptMessage && props.promptMessage.display && (
        <div className={styles.notification}>
          <InlineNotification
            text={props.promptMessage.message}
            theme={NotificationTheme.Informational}
          />
        </div>
      )}
      {props.showError && (
        <div className={styles.errorMsg}>{props.errorMsg} </div>
      )}
      <div className={radioLabelClass}>{optionComponents}</div>
    </div>
  );
};
