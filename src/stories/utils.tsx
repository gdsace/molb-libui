import { withInfo } from "@storybook/addon-info";
export const wInfoStyle = {
  header: {
    h1: {
      marginRight: "20px",
      fontSize: "25px",
      display: "inline"
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0
    },
    h2: {
      display: "inline",
      color: "#999"
    }
  },
  infoBody: {
    backgroundColor: "#eee",
    padding: "0px 5px",
    lineHeight: "2"
  }
};

export function wInfo(text: string): any {
  return withInfo({
    inline: true,
    source: false,
    styles: wInfoStyle,
    text
  });
}

export enum CategoryName {
  Buttons = "Buttons",
  Cards = "Cards",
  Dropdown = "Dropdown",
  FlexWrapper = "FlexWrapper",
  Icons = "Icons",
  TextFields = "Text-Fields",
  Links = "Links",
  Modal = "Modal",
  Notification = "Notification",
  Table = "Table",
  Tabs = "Tabs",
  Tags = "Tags",
  Tiles = "Tiles",
  TimePicker = "TimePicker",
  DatePicker = "DatePicker",
  Tooltips = "Tooltips",
  SelectionControls = "Selection-Controls",
  Accordion = "Accordion",
  Others = "Others"
}
