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
  onExpandButtonClick?: (itemIndex: number) => void;
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
    this.nativeExpandRowHandler = this.nativeExpandRowHandler.bind(this);
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

    return (
      <div className={styles.tableContainer}>
        <table className={cx({ bordered }, size, theme, tableCls)}>
          <thead>
            <tr>
              {columns.map(toHeaderItem)}
              {this.props.expandable ? <th /> : null}
            </tr>
          </thead>
          <tbody>
            {dataSource.length <= 0 && showNoDataAvailableMessage
              ? emptyRows(columns)
              : detailRows({
                  dataSource,
                  columns,
                  props: this.props,
                  expandedRowIndex: this.state.expandedRowIndex,
                  nativeExpandRowHandler: this.nativeExpandRowHandler
                })}
          </tbody>
        </table>
      </div>
    );
  }

  private nativeExpandRowHandler(rowId: number) {
    const currentExpandedRowIndex = this.state.expandedRowIndex;

    this.setState({
      expandedRowIndex: rowId === currentExpandedRowIndex ? -1 : rowId
    });
  }
}

// ----- Header Items -----
const toHeaderItem = (column: IColumn) => (
  <th
    key={`th-${column.key}`}
    style={column.width ? { width: column.width } : {}}
    className={cx({
      alignRight: column.textAlignRight
    })}
  >
    <span dangerouslySetInnerHTML={{ __html: column.title || "" }} />
  </th>
);

// ----- Body Items ------
const toExpandableItem = (
  props: ITableProps,
  columns: IColumn[],
  index: number
) => (
  <tr key={`tr-expandable-${index}`}>
    <td className={styles.expandableTd} colSpan={columns.length + 1}>
      {props.expandableRowTemplate}
    </td>
  </tr>
);

const emptyRows = (columns: IColumn[]) => [
  <tr key={`tr-NO_DATA`}>
    <td key={`td-NO_DATA`} colSpan={columns.length} className={styles.noDatRow}>
      <div className={cx("contentData")}>
        <span>{NO_DATA_IN_TABLE}</span>
      </div>
    </td>
  </tr>
];

const toBodyItem = (column: IColumn, data: IDataSource) => (
  <td
    key={`td-cell-${column.key}`}
    data-title={column.title}
    className={cx({
      alignRight: column.textAlignRight,
      hiddenInlineTitle: column.hiddenInlineTitle,
      emptyContent: !data[column.key]
    })}
  >
    <div className={cx("contentData")}>{data[column.key]}</div>
  </td>
);

interface IDetailRowProps {
  dataSource: IDataSource[];
  columns: IColumn[];
  props: ITableProps;
  expandedRowIndex: number;
  nativeExpandRowHandler: (rowId: number) => void;
}
const detailRows = ({
  dataSource,
  columns,
  props,
  expandedRowIndex,
  nativeExpandRowHandler
}: IDetailRowProps) => {
  return dataSource.map((rowData, index) => {
    const modifier = {
      ...(props.clickableRow ? { onClick: rowData.onRowClickHandler } : {})
    };
    return (
      <React.Fragment key={`tr-fragment-${index}`}>
        <tr
          key={`tr-details-${index}`}
          className={cx(
            rowData.withoutBorder && styles.withoutBorder,
            props.clickableRow && styles.clickableRow
          )}
          {...modifier}
        >
          {columns.map(column => toBodyItem(column, rowData))}
          {!props.expandable ? null : (
            <td
              key={`td-expandable-${index}`}
              onClick={() => {
                if (!props.ignoreExpandButtonClick) {
                  nativeExpandRowHandler(index);
                  if (props.onExpandButtonClick) {
                    props.onExpandButtonClick(index);
                  }
                }
              }}
            >
              <Icon
                className={
                  props.ignoreExpandButtonClick
                    ? styles.tableExpandButtonClickNotAllowed
                    : styles.tableExpandButton
                }
                type={expandedRowIndex === index ? "up" : "dropdown"}
              />
            </td>
          )}
        </tr>
        {expandedRowIndex === index
          ? toExpandableItem(props, columns, index)
          : null}
      </React.Fragment>
    );
  });
};
