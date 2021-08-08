import React, { FunctionComponent } from 'react'
import styled, { css } from 'styles/styled-components'
import { ITheme } from 'styles/theme'

const DEFAULT_SPACING = '0.2px'

interface ITextProps {
  className?: string
  textTag: TextTag
  textStyle: TextStyle
  textAlign?: TextAlign
  color?: string
  weight?: number
}

interface IDefaultFontStylingRules {
  fontSizeStep: number
  lineHeightRatio: number
  fontWeight?: number
  spacing?: string
}

export enum TextTag {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  span = 'span',
  label = 'label',
  p = 'p',
  li = 'li',
  a = 'a',
}

export enum TextStyle {
  Heading1 = 'Heading1',
  Heading2 = 'Heading2',
  Heading3 = 'Heading3',
  Heading4 = 'Heading4',
  Heading5 = 'Heading5',
  Body = 'Body',
  LabelSmall = 'LabelSmall',
  LabelMedium = 'LabelMedium',
  LabelDefault = 'LabelDefault',
  ParagraphSmall = 'ParagraphSmall',
  ParagraphDefault = 'ParagraphDefault',
}

export enum TextAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right',
  Justify = 'justify',
}

const styleFonts = (
  theme: ITheme,
  props: ITextProps,
  defaults: IDefaultFontStylingRules,
) => {
  return css`
    text-align: ${props.textAlign || TextAlign.Left};
    font-family: ${theme.typography.fonts.default};
    font-size: ${theme.ms(defaults.fontSizeStep)};
    line-height: ${defaults.lineHeightRatio};
    letter-spacing: ${defaults.spacing || DEFAULT_SPACING};
    font-weight: ${props.weight ||
      defaults.fontWeight ||
      theme.typography.weights.regular};
  `
}

const getTextStyles = (theme: ITheme, props: ITextProps) => {
  const { textStyle } = props

  switch (textStyle) {
    case TextStyle.Heading1:
      return styleFonts(theme, props, {
        fontSizeStep: 7,
        lineHeightRatio: 1.39,
        fontWeight: theme.typography.weights.bold,
      })

    case TextStyle.Heading2:
      return styleFonts(theme, props, {
        fontSizeStep: 4,
        lineHeightRatio: 1.4,
        fontWeight: theme.typography.weights.bold,
      })

    case TextStyle.Heading3:
      return styleFonts(theme, props, {
        fontSizeStep: 2,
        lineHeightRatio: 1.4,
        fontWeight: theme.typography.weights.bold,
      })

    case TextStyle.Heading4:
      return styleFonts(theme, props, {
        fontSizeStep: 2,
        lineHeightRatio: 1.2,
        fontWeight: theme.typography.weights.black,
      })

    case TextStyle.Heading5:
      return styleFonts(theme, props, {
        fontSizeStep: 1,
        lineHeightRatio: 1.55,
      })

    case TextStyle.Body:
      return styleFonts(theme, props, {
        fontSizeStep: 0,
        lineHeightRatio: 1.75,
      })

    case TextStyle.LabelSmall:
      return styleFonts(theme, props, {
        fontSizeStep: -4,
        lineHeightRatio: 1.2,
        spacing: '1.0px',
        fontWeight: theme.typography.weights.bold,
      })

    case TextStyle.LabelMedium:
      return styleFonts(theme, props, {
        fontSizeStep: -3,
        lineHeightRatio: 1.25,
        spacing: '1.0px',
        fontWeight: theme.typography.weights.bold,
      })

    case TextStyle.LabelDefault:
      return styleFonts(theme, props, {
        fontSizeStep: -1,
        lineHeightRatio: 1.214,
        spacing: '1.5px',
        fontWeight: theme.typography.weights.bold,
      })

    case TextStyle.ParagraphSmall:
      return styleFonts(theme, props, {
        fontSizeStep: -2,
        lineHeightRatio: 1.25,
      })

    case TextStyle.ParagraphDefault:
      return styleFonts(theme, props, {
        fontSizeStep: -1,
        lineHeightRatio: 1.214,
      })
  }
}

const StyledText = styled.p<ITextProps>`
  margin: 0;
  display: inline-block;
  color: ${({ theme, ...props }) => props.color || theme.colors.grays.white};
  ${({ textStyle }) =>
    (textStyle === TextStyle.LabelDefault ||
      textStyle === TextStyle.LabelMedium ||
      textStyle === TextStyle.LabelSmall) &&
    'text-transform: uppercase'};
  ${({ theme, ...props }) => getTextStyles(theme, props)}
`

const Text: FunctionComponent<ITextProps> = ({
  textTag = TextTag.span,
  textStyle = TextStyle.Body,
  className,
  children,
  ...restOfProps
}) => {
  return (
    <StyledText
      className={className}
      {...restOfProps}
      as={textTag}
      textTag={textTag}
      textStyle={textStyle}
    >
      {children}
    </StyledText>
  )
}

export default Text
