const FONT_URL_PATH = '/css?family='

export const getValidFontName = (fontName: string) =>
  fontName
    .split(',')[0]
    .replace(/'/g, '')
    .replace(/ /g, '+')

export const generateFontUrl = (fontNames: string[]) =>
  `${process.env.GATSBY_FONT_PROVIDER_BASE_URL}${FONT_URL_PATH}${fontNames
    .map(fontName => getValidFontName(fontName))
    .join('|')}`
