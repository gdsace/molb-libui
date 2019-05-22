export var Theme;
(function (Theme) {
    Theme["Simple"] = "simple";
    Theme["Ghost"] = "ghost";
    Theme["Primary"] = "primary";
    Theme["Secondary"] = "secondary";
    Theme["Flat"] = "flat";
})(Theme || (Theme = {}));
export var PanelType;
(function (PanelType) {
    PanelType["Onepage"] = "onepagePanel";
    PanelType["Sidebar"] = "sidebarPanel";
})(PanelType || (PanelType = {}));
export var PanelTheme;
(function (PanelTheme) {
    PanelTheme["Normal"] = "normal";
    PanelTheme["Bottomless"] = "bottomless";
    PanelTheme["Topless"] = "topless";
    PanelTheme["Holing"] = "holing";
})(PanelTheme || (PanelTheme = {}));
export var TileTheme;
(function (TileTheme) {
    TileTheme["SmallTile"] = "smallTile";
    TileTheme["MediumTile"] = "mediumTile";
    TileTheme["LargeTile"] = "largeTile";
    TileTheme["BasicTile"] = "basicTile";
})(TileTheme || (TileTheme = {}));
export var Size;
(function (Size) {
    Size["Small"] = "small";
    Size["Medium"] = "medium";
    Size["Large"] = "large";
    Size["XLarge"] = "xlarge";
})(Size || (Size = {}));
export var LinkStatus;
(function (LinkStatus) {
    LinkStatus["Normal"] = "normal";
    LinkStatus["Warning"] = "warning";
    LinkStatus["Error"] = "error";
    LinkStatus["Success"] = "success";
})(LinkStatus || (LinkStatus = {}));
export var InputType;
(function (InputType) {
    InputType["Text"] = "text";
    InputType["Email"] = "email";
    /* @Number:
     * Allow `scientific-notation` and decimal
     * */
    InputType["Number"] = "number";
    /* @IntergerText:
     * Only positive & negative 0-9 allowed. EG.: -1, 0, 1
     * No `scientific-notation`
     * */
    InputType["IntegerText"] = "integerText";
    /* @DigitsOnly:
     * Only digits-only string are allowed. EG.: 0, 00, 0123, 1230
     * No `scientific-notation`
     * */
    InputType["DigitsOnly"] = "digitOnly";
    /* @NonZeroLeadingDigits:
     * Only non-zero-leading digit strings are allowed. EG.: 123, 1230
     * No `scientific-notation`
     * */
    InputType["NonZeroLeadingDigits"] = "nonZeroLeadingDigits";
    /* @DecimalText:
     * Only positive & negative integer/decimal allowed. EG.: -1.1, -1, 0, 1, 1.1
     * No `scientific-notation`
     * */
    InputType["DecimalText"] = "decimalText";
    /* @PositiveDecimalText:
     * Only positive integer/decimal allowed. EG.: 0, 1, 1.1
     * No `scientific-notation`
     * */
    InputType["PositiveDecimalText"] = "positiveDecimalText";
})(InputType || (InputType = {}));
export var CardTheme;
(function (CardTheme) {
    CardTheme["Normal"] = "normal";
    CardTheme["Warning"] = "warning";
    CardTheme["Green"] = "green";
    CardTheme["Purple"] = "purple";
    CardTheme["Clickable"] = "clickable";
})(CardTheme || (CardTheme = {}));
export var CardStatus;
(function (CardStatus) {
    CardStatus["Active"] = "active";
    CardStatus["Processing"] = "processing";
    CardStatus["Expired"] = "expired";
})(CardStatus || (CardStatus = {}));
export var ListcardStatus;
(function (ListcardStatus) {
    ListcardStatus["Normal"] = "normal";
    ListcardStatus["Warning"] = "warning";
    ListcardStatus["Expries"] = "expries";
})(ListcardStatus || (ListcardStatus = {}));
export var FormSectionSpacing;
(function (FormSectionSpacing) {
    FormSectionSpacing["Zero"] = "zero";
    FormSectionSpacing["Normal"] = "normal";
    FormSectionSpacing["Large"] = "large";
})(FormSectionSpacing || (FormSectionSpacing = {}));
export var SubFormSectionTheme;
(function (SubFormSectionTheme) {
    SubFormSectionTheme["Zero"] = "zero";
    SubFormSectionTheme["Normal"] = "normal";
})(SubFormSectionTheme || (SubFormSectionTheme = {}));
export var TagSize;
(function (TagSize) {
    TagSize["Small"] = "small";
    TagSize["Large"] = "large";
})(TagSize || (TagSize = {}));
export var TagTheme;
(function (TagTheme) {
    TagTheme["Blue"] = "blue";
    TagTheme["Green"] = "green";
    TagTheme["Orange"] = "orange";
    TagTheme["Red"] = "red";
    TagTheme["Purple"] = "purple";
    TagTheme["Grey"] = "grey";
})(TagTheme || (TagTheme = {}));
export var NotificationTheme;
(function (NotificationTheme) {
    NotificationTheme["Success"] = "success";
    NotificationTheme["Error"] = "error";
    NotificationTheme["Informational"] = "informational";
    NotificationTheme["Warning"] = "warning";
})(NotificationTheme || (NotificationTheme = {}));
export var AppAlertTheme;
(function (AppAlertTheme) {
    AppAlertTheme["Error"] = "error";
    AppAlertTheme["Informational"] = "informational";
    AppAlertTheme["Warning"] = "warning";
})(AppAlertTheme || (AppAlertTheme = {}));
export var AppAlertAlignmentTheme;
(function (AppAlertAlignmentTheme) {
    AppAlertAlignmentTheme["LEFT"] = "left";
    AppAlertAlignmentTheme["CENTER"] = "center";
})(AppAlertAlignmentTheme || (AppAlertAlignmentTheme = {}));
export var TooltipsLocationTheme;
(function (TooltipsLocationTheme) {
    TooltipsLocationTheme["BottomLeft"] = "bottom left";
    TooltipsLocationTheme["BottomCenter"] = "bottom center";
    TooltipsLocationTheme["BottomRight"] = "bottom right";
})(TooltipsLocationTheme || (TooltipsLocationTheme = {}));
export var AccordionTheme;
(function (AccordionTheme) {
    AccordionTheme["Standard"] = "standard";
    AccordionTheme["Large"] = "large";
    AccordionTheme["Wrapped"] = "wrapped";
})(AccordionTheme || (AccordionTheme = {}));
export var ExpandablePanelTheme;
(function (ExpandablePanelTheme) {
    ExpandablePanelTheme["Standard"] = "standard";
    ExpandablePanelTheme["Large"] = "large";
})(ExpandablePanelTheme || (ExpandablePanelTheme = {}));
//# sourceMappingURL=EnumValues.js.map