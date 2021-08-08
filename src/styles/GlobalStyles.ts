import { normalize } from 'polished'
import { createGlobalStyle, css } from './styled-components'
import generateFontUrl from './utils/generateFontUrl'

const fontCSS = css`
  @import url(${({
    theme: {
      typography: { fonts },
    },
  }) => generateFontUrl([fonts.default, fonts.secondary])});
`

const GlobalStyles = createGlobalStyle`
  ${fontCSS}
  ${normalize()};
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  [type="search"] {
    appearance: initial;
  }
  
`

export default GlobalStyles
