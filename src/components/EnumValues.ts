export enum Theme {
  Simple = "simple",
  Ghost = "ghost",
  Primary = "primary",
  Secondary = "secondary",
  Grey = "grey"
}

export enum PanelType {
  Onepage = "onepagePanel",
  Sidebar = "sidebarPanel"
}

export enum PanelTheme {
  Normal = "normal",
  Bottomless = "bottomless",
  Topless = "topless",
  Holing = "holing"
}

export enum TileTheme {
  SmallTile = "smallTile",
  MediumTile = "mediumTile",
  LargeTile = "largeTile",
  BasicTile = "basicTile"
}

export enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large",
  XLarge = "xlarge",
  Square = "square"
}

export enum LinkStatus {
  Normal = "normal",
  Warning = "warning",
  Error = "error",
  Success = "success"
}

export enum InputType {
  Text = "text",
  Email = "email",

  /* @Number:
   * Allow `scientific-notation` and decimal
   * */
  Number = "number",

  /* @IntergerText:
   * Only positive & negative 0-9 allowed. EG.: -1, 0, 1
   * No `scientific-notation`
   * */
  IntegerText = "integerText",

  /* @DigitsOnly:
   * Only digits-only string are allowed. EG.: 0, 00, 0123, 1230
   * No `scientific-notation`
   * */
  DigitsOnly = "digitOnly",

  /* @NonZeroLeadingDigits:
   * Only non-zero-leading digit strings are allowed. EG.: 123, 1230
   * No `scientific-notation`
   * */
  NonZeroLeadingDigits = "nonZeroLeadingDigits",

  /* @DecimalText:
   * Only positive & negative integer/decimal allowed. EG.: -1.1, -1, 0, 1, 1.1
   * No `scientific-notation`
   * */
  DecimalText = "decimalText",

  /* @PositiveDecimalText:
   * Only positive integer/decimal allowed. EG.: 0, 1, 1.1
   * No `scientific-notation`
   * */
  PositiveDecimalText = "positiveDecimalText"
}

export enum CardTheme {
  Normal = "normal",
  Warning = "warning",
  Green = "green",
  Purple = "purple",
  Clickable = "clickable"
}

export enum CardStatus {
  Active = "active",
  Processing = "processing",
  Expired = "expired"
}

export enum ListcardStatus {
  Normal = "normal",
  Warning = "warning",
  Expries = "expries"
}

export enum FormSectionSpacing {
  Zero = "zero",
  Normal = "normal",
  Large = "large"
}

export enum SubFormSectionTheme {
  Zero = "zero",
  Normal = "normal"
}

export enum TagSize {
  Small = "small",
  Large = "large"
}

export enum TagTheme {
  Blue = "blue",
  Green = "green",
  Orange = "orange",
  Red = "red",
  Purple = "purple",
  Grey = "grey"
}

export enum NotificationTheme {
  Success = "success",
  Error = "error",
  Informational = "informational",
  Warning = "warning"
}

export enum AppAlertTheme {
  Error = "error",
  Informational = "informational",
  Warning = "warning"
}

export enum AppAlertAlignmentTheme {
  LEFT = "left",
  CENTER = "center"
}

export enum TooltipsLocationTheme {
  BottomLeft = "bottom left",
  BottomCenter = "bottom center",
  BottomRight = "bottom right"
}

export enum AccordionTheme {
  Standard = "standard",
  Large = "large",
  Wrapped = "wrapped",
  Colored = "colored"
}

export enum ExpandablePanelTheme {
  Standard = "standard",
  Large = "large"
}

export enum HeaderType {
  Demo = "storyBookDemo",
  Main = "main"
}
