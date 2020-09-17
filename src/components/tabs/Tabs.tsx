import classnames from "classnames";
import * as React from "react";

const styles = require("./tabs.scss");

export interface ITabNode {
  tabPanel: React.ReactNode;
  label: string;
}

export interface ITabProps {
  list: ITabNode[];
  leftNode?: React.ReactNode;
  tabsBarContentStyle?: string;
  customizedTabComponent?: React.ReactElement<{
    onClick: () => any;
    key: number;
  }>;
}

export interface ITabState {
  currentIndex?: number;
}

export class Tabs extends React.Component<ITabProps, ITabState> {
  constructor(props: ITabProps) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  public render() {
    const { currentIndex } = this.state;
    const { list, leftNode, customizedTabComponent } = this.props;
    const activeTabPanel = list[currentIndex as number].tabPanel;
    return (
      <div className={styles.tab}>
        <div className={styles.tabsBarContainer}>
          <div className={classnames(styles.tabsBarContent, this.props.tabsBarContentStyle)}>
            {leftNode ? this.getLeftComponent(leftNode) : null}
            <div className={styles.tabItems}>
              {list.map((item, index) =>
                customizedTabComponent ? (
                  React.cloneElement(customizedTabComponent, {
                    onClick: this.tabItemClick(index),
                    key: index
                  })
                ) : (
                  <div
                    key={index}
                    onClick={this.tabItemClick(index)}
                    className={`${currentIndex === index ? styles.activeItem : ""} ${styles.item}`}
                  >
                    <label>{item.label}</label>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className={styles.tabPanel}>{activeTabPanel}</div>
      </div>
    );
  }

  private getLeftComponent(leftNode: React.ReactNode) {
    return <div className={styles.leftComponent}>{leftNode}</div>;
  }

  private tabItemClick = (index: number) => () => {
    this.setState({
      currentIndex: index
    });
  };
}
