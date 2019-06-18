import * as React from "react";
import classNames from "classnames";
import * as _ from "lodash";
import { Theme, Size, Button, Input } from "..";
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

export class NumberPicker extends React.Component<INumberPickerProps, INumberPickerStates> {
  public constructor(props: INumberPickerProps) {
    super(props);
    this.state = {
      inputError: props.quantity > props.max ? true : false
    };
  }

  public static defaultProps: Partial<INumberPickerProps> = {
    quantity: 0,
    max: 50,
    min: 0
  };

  public DecreaseItem = () => {
    const { quantity, min, max } = this.props;
    const { inputError } = this.state;

    if (quantity > min && quantity <= max + 1) {
      if (inputError) {
        this.setState({
          inputError: false
        })
      }
    }
    this.props.onQuantityChange(quantity - 1);
  }

   public IncrementItem = () => {
    const { quantity, max } = this.props;
    const { inputError } = this.state;

    if (quantity < max) {
      if (inputError) {
        this.setState({
          inputError: false
        })
      }
      this.props.onQuantityChange(quantity + 1);
    }
  }

  public onInputChange = (value: any) => {
    const newQuantity = Number(value);
    const { max } = this.props;
    const { inputError } = this.state;

    if (newQuantity > max) {
      if (!inputError) {
        this.setState({
          inputError: true
        })
      }
    } else {
      if (inputError) {
        this.setState({
          inputError: false
        })
      }
    }
    this.props.handleInputChange(newQuantity);
  }

  render() {
    const { className, disablePrev, disableNext, disableInput, quantity, min, max } = this.props;
    const wrapperClassName = classNames(
      className ? className : ""
    );
    const inputError = classNames(
      this.state.inputError ? styles.inputError : ""
    );

    return ( 
      <div className={`${styles.mainWrapper} ${wrapperClassName}`}>
        <Button
          className={styles.prevButton}
          size={Size.SSquare}
          theme={Theme.Grey}
          icon={"minus"}
          iconAlign="center"
          disabled={
            !_.isNil(disablePrev)
              ? disablePrev
              : quantity <= min
          }
          onClick={
            this.DecreaseItem ||
            (() => {
              /* noop */
            })
          }
        />
          <Input 
            maxLength={3}
            value={quantity || 0}
            className={`${styles.numInput} ${inputError}`}
            disabled={disableInput || false}
            type={InputType.DigitsOnly}
            onChange={event => this.onInputChange(event.target.value)}
          />
        <Button
          className={styles.nextButton}
          size={Size.SSquare}
          theme={Theme.Grey}
          icon={"plus"}
          iconAlign="center"
          disabled={
            !_.isNil(disableNext)
              ? disableNext
              : quantity >= max
          }
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
