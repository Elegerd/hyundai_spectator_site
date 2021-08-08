export interface IThemeColorsPrimary {
  default: string
  defaultInverted: string
  secondary: string
  third: string
  [key: string]: string
}

export interface IThemeColorsAccent {
  default: string
  defaultInverted: string
  [key: string]: string
}

export interface IThemeColorsGrays {
  default: string
  white: string
  black: string
  [key: string]: string
}

export interface IThemeColorsStatus {
  success: string
  error: string
  [key: string]: string
}

export interface IThemeColors {
  primary: Readonly<IThemeColorsPrimary>
  accent: Readonly<IThemeColorsAccent>
  grays: Readonly<IThemeColorsGrays>
  status: Readonly<IThemeColorsStatus>
}

export interface IThemeTypographyFonts {
  default: string
  secondary: string
}

export interface IThemeTypographyWeights {
  light: number
  regular: number
  bold: number
  black: number
}
export interface IThemeTypography {
  fonts: Readonly<IThemeTypographyFonts>
  weights: Readonly<IThemeTypographyWeights>
}

export interface ITheme {
  colors: Readonly<IThemeColors>
  typography: Readonly<IThemeTypography>
  ms: (step: number) => string
  layers: Readonly<IThemeLayers>
}

export interface IThemeLayers {
  bottom: number
  middleBottom: number
  middle: number
  middleTop: number
  top: number
  [key: string]: number
}
