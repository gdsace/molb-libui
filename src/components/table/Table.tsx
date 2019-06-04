import classNames from "classnames/bind";
import * as React from "react";
import { Icon } from "../icons";
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
  onChangePage?: (action: string) => any;
  dataSource: IDataSource[];
  columns: IColumn[];
  tableCls?: string;
  bordered?: boolean;
  expandable?: boolean;
  size?: TableSize;
  theme?: TableTheme;
  showNoDataAvailableMessage?: boolean;
  expandableRowTemplate?: React.ReactChild;
  onExpandButtonClick: (itemIndex: number) => void;
  ignoreExpandButtonClick?: boolean;
  showPagination?: boolean;
  clickableRow?: boolean;
  onRowClickHandler?: () => void;
}

export interface ITableState {
  expandedRowIndex: number;
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
    showNoDataAvailableMessage: true,
    showPagination: false,
    ignoreExpandButtonClick: false,
    clickableRow: false
  };

  public constructor(props: ITableProps) {
    super(props);
    this.state = {
      expandedRowIndex: -1
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
          hiddenInlineTitle: column.hiddenInlineTitle,
          emptyContent: !data[column.key]
        })}
      >
        <div className={cx("contentData")}>{data[column.key]}</div>
      </td>
    );

    const toExpandableItem = () => (
      <tr>
        <td className={styles.expandableTd} colSpan={columns.length + 1}>
          {this.props.expandableRowTemplate}
        </td>
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

    const detailRows = dataSource.map((rowData, index) => {
      const expandedRow = this.state.expandedRowIndex;

      const modifier = {
        ...(this.props.clickableRow
          ? { onClick: rowData.onRowClickHandler }
          : {})
      };
      return (
        <>
          <tr
            key={`tr-${rowData.key}`}
            className={rowData.withoutBorder ? styles.withoutBorder : ""}
            {...modifier}
          >
            {columns.map(column => toItem(column, rowData))}
            {this.props.expandable ? (
              <td
                onClick={() => {
                  if (!this.props.ignoreExpandButtonClick) {
                    handleRowClick(index);
                    this.props.onExpandButtonClick(index);
                  }
                }}
              >
                <Icon
                  className={
                    this.props.ignoreExpandButtonClick
                      ? styles.tableExpandButtonClickNotAllowed
                      : styles.tableExpandButton
                  }
                  type={expandedRow === index ? "up" : "dropdown"}
                />
              </td>
            ) : null}
          </tr>
          {expandedRow === index ? toExpandableItem() : null}
        </>
      );
    });

    const handleRowClick = (rowId: number) => {
      const currentExpandedRowIndex = this.state.expandedRowIndex;

      this.setState({
        expandedRowIndex: rowId === currentExpandedRowIndex ? -1 : rowId
      });
    };

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
