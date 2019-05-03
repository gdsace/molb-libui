import * as React from "react";
import { ITileProps } from "./tile";

const style = require("./tileGroup.scss");

interface ITileGroupProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  children: React.ReactNode;
  value?: string;
  className?: string;
  deselectable?: boolean;
}

interface ITileGroupState {
  value: any;
}

function getCheckedValue(children: React.ReactNode) {
  let value = null;
  React.Children.forEach(children, (child: any) => {
    if (child && child.props && child.props.checked) {
      value = child.props.value;
    }
  });
  return value;
}

export class TileGroup extends React.Component<
  ITileGroupProps,
  ITileGroupState
> {
  public static defaultProps: Partial<ITileGroupProps> = {
    deselectable: false
  };

  constructor(props: ITileGroupProps) {
    super(props);
    const value =
      "value" in props ? props.value : getCheckedValue(props.children);
    this.state = {
      value
    };
  }

  public onSelectionChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const lastValue = this.state.value;
    const value = ev.target.value;
    if (this.props.deselectable && lastValue === value) {
      this.setState({ value: "" });
      if (this.props.onChange) {
        this.props.onChange(ev);
      }
    }
    if (lastValue !== value) {
      this.setState({
        value
      });
      if (this.props.onChange) {
        this.props.onChange(ev);
      }
    }
  };

  public render() {
    const renderChildren = () => {
      return React.Children.map(this.props.children, child => {
        if (React.isValidElement<ITileProps>(child)) {
          console.log("IN TILE GROUP: child prop:", child.props.value, "state value:",  this.state.value)
          return React.cloneElement<ITileProps>(child, {
            ...child.props,
            deselectable: this.props.deselectable,
            onChange: this.onSelectionChanged,
            checked: child.props.value === this.state.value
          });
        }
      });
    };
    return (
      <div
        className={`${style.tileGroup} ${
          this.props.className ? this.props.className : ""
        }`}
      >
        {renderChildren()}
      </div>
    );
  }
}
