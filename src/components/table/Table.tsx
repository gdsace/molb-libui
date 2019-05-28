import classNames from "classnames/bind";
import * as React from "react";
import { Icon } from "..";
const styles = require("./table.scss");
const cx = classNames.bind(styles).default || classNames.bind(styles);
const NO_DATA_IN_TABLE = "No data available in table";

export interface IColumn {
  title?: string;
  key: string;
  width?: string;
  textAlignRight?: boolean;
  hiddenInlineTitle?: boolean;
}

export interface IDataSource {
  [key: string]: any;
}

export interface ITableProps {
  dataSource: IDataSource[];
  columns: IColumn[];
  tableCls?: string;
  bordered?: boolean;
  expandable?: boolean;
  size?: TableSize;
  theme?: TableTheme;
  showNoDataAvailableMessage?: boolean;
  expandableRowTemplate?: React.ReactNode;
}

export interface ITableState {
  expandedRow: number;
}

export enum TableSize {
  Small = "small",
  Large = "large"
}

export enum TableTheme {
  Striped = "striped",
  Expandable = "expandable",
  Basic = "basic"
}

export class Table extends React.Component<ITableProps, ITableState> {
  public static defaultProps: Partial<ITableProps> = {
    bordered: false,
    size: TableSize.Small,
    theme: TableTheme.Basic,
    tableCls: "",
    showNoDataAvailableMessage: true
  };

  public constructor(props: ITableProps) {
    super(props);
    this.state = {
      expandedRow: -1
    };
  }

  public render() {
    const {
      columns,
      dataSource,
      tableCls,
      bordered,
      size,
      theme,
      showNoDataAvailableMessage
    } = this.props;
    const theadComponent: React.ReactNode = this.getHeadComponent(columns);
    const tbodyComponent: React.ReactNode = this.getBodyComponent(
      columns,
      dataSource,
      showNoDataAvailableMessage
    );

    return (
      <div className={styles.tableContainer}>
        <table className={cx({ bordered }, size, theme, tableCls)}>
          {theadComponent}
          {tbodyComponent}
        </table>
      </div>
    );
  }

  private getBodyComponent(
    columns: IColumn[],
    dataSource: IDataSource[],
    showNoDataAvailableMessage?: boolean
  ): React.ReactNode {
    const toItem = (column: IColumn, data: IDataSource) => (
      <td
        data-title={column.title}
        key={`td-${column.key}`}
        className={cx({
          alignRight: column.textAlignRight,
          hiddenInlineTitle: column.hiddenInlineTitle
        })}
      >
        <div className={cx("contentData")}>{data[column.key]}</div>
      </td>
    );

    const toExpandableItem = (index: number) => (
      <tr>
        <td colSpan={columns.length + 1}>{this.props.expandableRowTemplate}</td>
      </tr>
    );

    const emptyRows = [
      <tr key={`tr-NO_DATA`}>
        <td
          key={`td-NO_DATA`}
          colSpan={columns.length}
          className={styles.noDatRow}
        >
          <div className={cx("contentData")}>
            <span>{NO_DATA_IN_TABLE}</span>
          </div>
        </td>
      </tr>
    ];

    const handleRowClick = (rowId: number) => {
      const currentExpandedRow = this.state.expandedRow;

      this.setState({
        expandedRow: rowId === currentExpandedRow ? -1 : rowId
      });
    };

    const detailRows = dataSource.map((rowData, index) => {
      const expandedRow = this.state.expandedRow;
      return (
        <>
          <tr key={`tr-${rowData.key}`}>
            {columns.map(column => {
              return toItem(column, rowData);
            })}
            {this.props.expandable ? (
              <td
                onClick={() => {
                  handleRowClick(index);
                }}
              >
                <Icon
                  className={styles.tableDropdownButton}
                  type={expandedRow === index ? "up" : "dropdown"}
                />
              </td>
            ) : null}
          </tr>
          {expandedRow === index ? toExpandableItem(index) : null}
        </>
      );
    });

    return (
      <tbody>
        {dataSource.length <= 0 && showNoDataAvailableMessage
          ? emptyRows
          : detailRows}
      </tbody>
    );
  }

  private getHeadComponent(columns: IColumn[]): React.ReactNode {
    const toItem = (column: IColumn) => (
      <th
        key={column.key}
        style={column.width ? { width: column.width } : {}}
        className={cx({
          alignRight: column.textAlignRight
        })}
      >
        <span dangerouslySetInnerHTML={{ __html: column.title || "" }} />
      </th>
    );

    return (
      <thead>
        <tr>
          {columns.map(toItem)}
          {this.props.expandable ? <th /> : null}
        </tr>
      </thead>
    );
  }
}
