import React, { FunctionComponent } from 'react'
import Text, { TextStyle, TextTag, TextAlign } from 'components/Text'
import styled from 'styles/styled-components'

interface IHeroText {
  textAlign?: TextAlign
  textTag?: TextTag
  className?: string
}

const StyledHeroText = styled(Text)`
  font-family: ${({ theme }) => theme.typography.fonts.secondary};
  font-size: 0;
`

const HeroText: FunctionComponent<IHeroText> = ({
  children,
  textAlign = TextAlign.Left,
  textTag = TextTag.h1,
  className,
}) => (
  <StyledHeroText
    textStyle={TextStyle.Heading1}
    textTag={textTag}
    textAlign={textAlign}
    className={className}
  >
    {children}
  </StyledHeroText>
)

export default HeroText
