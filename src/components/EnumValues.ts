export enum Theme {
  Simple = "simple",
  Ghost = "ghost",
  Primary = "primary",
  Secondary = "secondary",
  Footer = "footer"
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
  XLarge = "xlarge"
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
  /*
   * Allow `scientific-notation` and decimal
   * */
  Number = "number",
  /*
   * Only positive & negative 0-9 allowed. EG.: -1, 0, 1
   * No `scientific-notation`
   * */
  IntegerText = "integerText",
  /*
   * Only positive 0-9 allowed. EG.: 0, 1
   * No `scientific-notation`
   * */
  PositiveIntegerText = "positiveIntegerText",
  /*
   * Only positive & negative integer/decimal allowed. EG.: -1.1, -1, 0, 1, 1.1
   * No `scientific-notation`
   * */
  DecimalText = "decimalText",
  /*
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

export enum TooltipsLocationTheme {
  BottomLeft = "bottom left",
  BottomCenter = "bottom center",
  BottomRight = "bottom right"
}
