import { any } from "prop-types";

// Example, empty custom typing for untyped libraries

declare module "my-custom-typing" {

}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  const content: any;
  export default content;
}
