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

  public componentDidUpdate(prevProps: ITileGroupProps) {
    const { value } = this.props;
    if (value !== prevProps.value) {
      this.setState({
        value
      });
    }
  }

  public onSelectionChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if ("value" in this.props) {
      if (this.props.onChange) {
        this.props.onChange(ev);
      }
    } else {
      const newValue = ev.target.value;
      const lastValue = this.state.value;

      if (this.props.deselectable && lastValue === newValue) {
        this.setState({ value: "" });
        if (this.props.onChange) {
          this.props.onChange(ev);
        }
      }
      if (lastValue !== newValue) {
        this.setState({
          value: newValue
        });
        if (this.props.onChange) {
          this.props.onChange(ev);
        }
      }
    }
  };

  public render() {
    const renderChildren = () => {
      return React.Children.map(this.props.children, child => {
        if (React.isValidElement<ITileProps>(child)) {
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
