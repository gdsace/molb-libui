export declare const wInfoStyle: {
    header: {
        h1: {
            marginRight: string;
            fontSize: string;
            display: string;
        };
        body: {
            paddingTop: number;
            paddingBottom: number;
        };
        h2: {
            display: string;
            color: string;
        };
    };
    infoBody: {
        backgroundColor: string;
        padding: string;
        lineHeight: string;
    };
};
export declare function wInfo(text: string): any;
export declare enum CategoryName {
    Buttons = "Buttons",
    Cards = "Cards",
    Dropdown = "Dropdown",
    Flex = "Flex",
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
