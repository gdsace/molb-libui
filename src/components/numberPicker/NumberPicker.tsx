import classNames from "classnames";
import * as _ from "lodash";
import * as React from "react";
import { Button, Input, Size, Theme } from "..";
import { InputType } from "../EnumValues";

const styles = require("./numberPicker.scss");

export interface INumberPickerStates {
  inputError: boolean;
}

export interface INumberPickerProps {
  onQuantityChange: (newQuantity: number) => any;
  handleInputChange: (newQuantity: number) => any;
  quantity: number;
  max: number;
  min: number;
  history?: any;
  disablePrev?: boolean;
  disableNext?: boolean;
  disableInput?: boolean;
  className?: string;
}

export class NumberPicker extends React.Component<
  INumberPickerProps,
  INumberPickerStates
> {
  public static defaultProps: Partial<INumberPickerProps> = {
    quantity: 0,
    max: 50,
    min: 0
  };
  public constructor(props: INumberPickerProps) {
    super(props);
    this.state = {
      inputError: props.quantity > props.max ? true : false
    };
  }

  public DecreaseItem = () => {
    const { quantity, min, max } = this.props;
    const { inputError } = this.state;

    if (quantity > min && quantity <= max + 1) {
      if (inputError) {
        this.setState({
          inputError: false
        });
      }
    }
    this.props.onQuantityChange(quantity - 1);
  };

  public IncrementItem = () => {
    const { quantity, max } = this.props;
    const { inputError } = this.state;

    if (quantity < max) {
      if (inputError) {
        this.setState({
          inputError: false
        });
      }
      this.props.onQuantityChange(quantity + 1);
    }
  };

  public onInputChange = (value: any) => {
    const newQuantity = Number(value);
    const { max } = this.props;
    const { inputError } = this.state;

    if (newQuantity > max) {
      if (!inputError) {
        this.setState({
          inputError: true
        });
      }
    } else {
      if (inputError) {
        this.setState({
          inputError: false
        });
      }
    }
    this.props.handleInputChange(newQuantity);
  };

  public render() {
    const {
      className,
      disablePrev,
      disableNext,
      disableInput,
      quantity,
      min,
      max
    } = this.props;
    const wrapperClassName = classNames(className ? className : "");
    const inputError = classNames(
      this.state.inputError ? styles.inputError : ""
    );

    return (
      <div className={`${styles.mainWrapper} ${wrapperClassName}`}>
        <Button
          className={styles.prevButton}
          size={Size.SmallSquare}
          theme={Theme.DarkGrey}
          icon={"minus"}
          iconAlign="center"
          disabled={!_.isNil(disablePrev) ? disablePrev : quantity <= min}
          onClick={
            this.DecreaseItem ||
            (() => {
              /* noop */
            })
          }
        />
        <div className={styles.inputContainer}>
          <Input
            maxLength={3}
            value={quantity || 0}
            className={`${styles.numInput} ${inputError} ${
              quantity === 0 ? styles.minValue : ""
            }`}
            disabled={disableInput || false}
            type={InputType.DigitsOnly}
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>
        <Button
          className={styles.nextButton}
          size={Size.SmallSquare}
          theme={Theme.DarkGrey}
          icon={"plus"}
          iconAlign="center"
          disabled={!_.isNil(disableNext) ? disableNext : quantity >= max}
          onClick={
            this.IncrementItem ||
            (() => {
              /* noop */
            })
          }
        />
      </div>
    );
  }
}
