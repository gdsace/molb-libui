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
  size?: TableSize;
  theme?: TableTheme;
  showNoDataAvailableMessage?: boolean;
}

export enum TableSize {
  Small = "small",
  Large = "large"
}

export enum TableTheme {
  expandable = "expandable",
  Striped = "striped",
  Basic = "basic"
}

export class Table extends React.Component<ITableProps, {}> {
  public static defaultProps: Partial<ITableProps> = {
    bordered: false,
    size: TableSize.Small,
    theme: TableTheme.Basic,
    tableCls: "",
    showNoDataAvailableMessage: true
  };

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

    const expandableContent = (data: IDateSource) => (
      <tr>
        <td colSpan={columns.length + 1}>
          <div>OK</div>
        </td>
      </tr>
    );

    const detailRows = dataSource.map(rowData => (
      <>
        <tr key={`tr-${rowData.key}`}>
          {columns.map(column => {
            return toItem(column, rowData);
          })}
          {this.props.theme === "striped" ? <Icon type="dropdown" /> : null}
        </tr>
        {/* TODO if expandable */}
        {expandableContent(rowData)}
      </>
    ));

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
          {this.props.theme === "striped" ? <th /> : null}
        </tr>
      </thead>
    );
  }
}
