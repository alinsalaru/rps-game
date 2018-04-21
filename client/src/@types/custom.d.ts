// https://webpack.js.org/guides/typescript/#importing-other-assets

declare module "*.html" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.txt" {
  const content: string;
  export default content;
}
