import classnames from "classnames";
import React, { Component, RefObject } from "react";
import ReactDom from "react-dom";

const scrollTo = (element: any, to: any, duration: any) => {
  const requestAnimationFrame =
    window.requestAnimationFrame ||
    function requestAnimationFrameTimeout(callback: () => void) {
      return setTimeout(callback, 10);
    };
  // jump to target if duration zero
  if (duration <= 0) {
    element.scrollTop = to;
    return;
  }
  const difference = to - element.scrollTop;
  const perTick = (difference / duration) * 10;
  requestAnimationFrame(() => {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) {
      return;
    }
    scrollTo(element, to, duration - 10);
  });
};

interface ISelectProps {
  prefixCls: string;
  options: any[];
  selectedIndex?: number;
  type?: string;
  onSelect: (...args: any[]) => any;
  onMouseEnter?: (...args: any[]) => any;
}

interface ISelectState {
  active: boolean;
}

export class Select extends Component<ISelectProps, ISelectState> {
  private readonly saveListRef: RefObject<HTMLUListElement>;

  constructor(props: ISelectProps) {
    super(props);
    this.saveListRef = React.createRef();
    this.state = {
      active: false
    };
  }

  public componentDidMount() {
    // jump to selected option
    this.scrollToSelected(0);
  }

  public componentDidUpdate(prevProps: ISelectProps) {
    // smooth scroll to selected option
    if (prevProps.selectedIndex !== this.props.selectedIndex) {
      this.scrollToSelected(120);
    }
  }

  public onItemSelect = (event: React.MouseEvent<HTMLLIElement>) => {
    const { onSelect, type } = this.props;
    if (onSelect) {
      onSelect(type, event);
    }
  };

  public getOptions() {
    const { options, selectedIndex, prefixCls } = this.props;
    return options.map((item, index) => {
      const cls = classnames({
        [`${prefixCls}-select-option-selected`]: selectedIndex === index,
        [`${prefixCls}-select-option-disabled`]: item.disabled
      });

      let onItemClick = () => {
        return;
      };
      if (!item.disabled) {
        onItemClick = this.onItemSelect.bind(this, item.value);
      }
      return (
        <li
          className={cls}
          key={index}
          onClick={onItemClick}
          // disabled={item.disabled} // Note: Looks like `disabled` feature works fine without this line, comment it out.
        >
          {item.value}
        </li>
      );
    });
  }

  public scrollToSelected(duration: any) {
    // move to selected item
    // eslint-disable-next-line react/no-find-dom-node
    const select = ReactDom.findDOMNode(this);
    const list = this.saveListRef.current;
    if (!list) {
      return;
    }

    let index = this.props.selectedIndex || 0;
    if (index && index < 0) {
      index = 0;
    }

    const topOption = list.children[index] as HTMLElement;
    const to = topOption.offsetTop;
    scrollTo(select, to, duration);
  }

  public handleMouseEnter = (e: any) => {
    this.setState({ active: true });
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e);
    }
  };
  public handleMouseLeave = () => {
    this.setState({ active: false });
  };

  public render() {
    if (this.props.options.length === 0) {
      return null;
    }
    const { prefixCls } = this.props;
    const cls = classnames({
      [`${prefixCls}-select`]: 1,
      [`${prefixCls}-select-active`]: this.state.active
    });
    return (
      <div className={cls} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <ul ref={this.saveListRef}>{this.getOptions()}</ul>
      </div>
    );
  }
}
export default Select;
