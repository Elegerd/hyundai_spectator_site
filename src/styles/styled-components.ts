import * as styledComponents from "styled-components";

import { ITheme } from "./theme";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme,
  ServerStyleSheet
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet,
  withTheme
};
export default styled;
