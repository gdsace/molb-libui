import classNames from "classnames/bind";
import * as React from "react";

const styles = require("./table.scss");
const cx = classNames.bind(styles).default || classNames.bind(styles);

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
}

export enum TableSize {
  Small = "small",
  Large = "large"
}

export enum TableTheme {
  Striped = "striped",
  Basic = "basic"
}

export class Table extends React.Component<ITableProps, {}> {
  public static defaultProps: Partial<ITableProps> = {
    bordered: false,
    size: TableSize.Small,
    theme: TableTheme.Basic,
    tableCls: ""
  };

  public render() {
    const { columns, dataSource, tableCls, bordered, size, theme } = this.props;
    const theadComponent: React.ReactNode = this.getHeadComponent(columns);
    const tbodyComponent: React.ReactNode = this.getBodyComponent(
      columns,
      dataSource
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
    dataSource: IDataSource[]
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

    const toRow = (data: IDataSource) => (
      <tr key={`tr-${data.key}`}>
        {columns.map(column => toItem(column, data))}
      </tr>
    );

    return <tbody>{dataSource.map(toRow)}</tbody>;
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
        {column.title}
      </th>
    );

    return (
      <thead>
        <tr>{columns.map(toItem)}</tr>
      </thead>
    );
  }
}
