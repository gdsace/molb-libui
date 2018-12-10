import * as React from "react";

const styles = require("./table.scss");

export interface IColumn {
  title: string;
  key: string;
}

export interface IDateSource {
  [key: string]: any;
}

export interface ITableProps {
  dataSource: IDateSource[];
  columns: IColumn[];
  style?: object;
}

export class Table extends React.Component<ITableProps, {}> {
  public render() {
    const { columns, dataSource, style } = this.props;
    const theadComponent: React.ReactNode = this.getHeadComponent(columns);
    const tbodyComponent: React.ReactNode = this.getBodyComponent(
      columns,
      dataSource
    );
    return (
      <div className={styles.tableContainer}>
        <table style={style}>
          {theadComponent}
          {tbodyComponent}
        </table>
      </div>
    );
  }
  public getBodyComponent(
    columns: IColumn[],
    dataSource: IDateSource[]
  ): React.ReactNode {
    const keyInOrder = columns.map(column => column.key);
    return (
      <tbody>
        {dataSource.map(rowData => {
          return (
            <tr key={`tr-${rowData.key}`}>
              {keyInOrder.map(key => {
                return <td key={`td-${key}`}>{rowData[key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }
  public getHeadComponent(columns: IColumn[]): React.ReactNode {
    return (
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
    );
  }
}
