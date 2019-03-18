import { withInfo } from "@storybook/addon-info";
export var wInfoStyle = {
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
export function wInfo(text) {
    return withInfo({
        inline: true,
        source: false,
        styles: wInfoStyle,
        text: text
    });
}
export var CategoryName;
(function (CategoryName) {
    CategoryName["Buttons"] = "Buttons";
    CategoryName["Cards"] = "Cards";
    CategoryName["Dropdown"] = "Dropdown";
    CategoryName["Icons"] = "Icons";
    CategoryName["TextFields"] = "Text-Fields";
    CategoryName["Links"] = "Links";
    CategoryName["Modal"] = "Modal";
    CategoryName["Notification"] = "Notification";
    CategoryName["Table"] = "Table";
    CategoryName["Tabs"] = "Tabs";
    CategoryName["Tags"] = "Tags";
    CategoryName["Tiles"] = "Tiles";
    CategoryName["TimePicker"] = "TimePicker";
    CategoryName["Tooltips"] = "Tooltips";
    CategoryName["SelectionControls"] = "Selection-Controls";
    CategoryName["Others"] = "Others";
})(CategoryName || (CategoryName = {}));
//# sourceMappingURL=utils.js.map