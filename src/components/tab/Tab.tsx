import * as React from "react";

const styles = require("./tab.scss");

export interface ITabNode {
  tabPanel: React.ReactNode;
  label: string;
}

export interface ITabProps {
  list: ITabNode[];
  leftNode?: React.ReactNode;
  spacing?: number;
  panePadding?: number;
}

export interface ITabState {
  currentIndex?: number;
}

export class Tab extends React.Component<ITabProps, ITabState> {
  constructor(props: ITabProps) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  public render() {
    const { currentIndex } = this.state;
    const { list, leftNode } = this.props;
    const spacing = `${this.props.spacing || 134}px`;
    const panePadding = `0 ${this.props.panePadding || 0}px`;
    const activeTabPanel = list[currentIndex as number].tabPanel;
    return (
      <div className={styles.tab}>
        <div className={styles.tabContainer}>
          {leftNode ? this.getLeftComponent(leftNode, spacing) : null}
          <div className={styles.tabItems} style={{ paddingRight: spacing }}>
            {list.map((item, index) => (
              <div
                key={index}
                onClick={this.tabItemClick(index)}
                className={`${
                  currentIndex === index ? styles.activeItem : ""
                } ${styles.item}`}
              >
                <label>{item.label}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.tabPanel} style={{ padding: panePadding }}>
          {activeTabPanel}
        </div>
      </div>
    );
  }

  private getLeftComponent(leftNode: React.ReactNode, spacing: string) {
    return (
      <div className={styles.leftComponent} style={{ paddingLeft: spacing }}>
        {leftNode}
      </div>
    );
  }

  private tabItemClick = (index: number) => () => {
    this.setState({
      currentIndex: index
    });
  };
}
