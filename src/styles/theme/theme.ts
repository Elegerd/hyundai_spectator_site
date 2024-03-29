import { modularScale } from 'polished'
import { ITheme } from './types'

const Theme: Readonly<ITheme> = {
  colors: {
    primary: {
      default: '#5D899E',
      defaultInverted: '#A27661',
      secondary: '#E38A51',
      third: '#706155',
    },
    accent: {
      default: '#F2C94C',
      defaultInverted: '#0D2E4D',
    },
    grays: {
      default: '#6F7A86',
      white: '#FFFFFF',
      black: '#343339',
      blue: '#10b5dc',
    },
    status: {
      success: '#5ECA82',
      error: '#EA5D5D',
    },
  },
  typography: {
    fonts: {
      default: 'Open Sans, sans-serif',
      secondary: 'Pacifico, sans-serif',
    },
    weights: {
      light: 300,
      regular: 400,
      bold: 700,
      black: 900,
    },
  },

  layers: {
    bottom: 1000,
    middleBottom: 1100,
    middle: 1300,
    middleTop: 1400,
    top: 1500,
  },
  ms: step => modularScale(step, '1rem', 'majorSecond'),
}

export default Theme
