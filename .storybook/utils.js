import {
  withInfo
} from "@storybook/addon-info";
import {
  wInfoStyle
} from "../src/stories/utils";
export function wInfo(text) {
  return withInfo({
    inline: true,
    source: false,
    styles: wInfoStyle,
    text: text
  });
}
