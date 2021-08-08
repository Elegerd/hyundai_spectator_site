import Text, { TextStyle, TextTag } from 'components/Text'
import React, { FunctionComponent } from 'react'
import styled from 'styles/styled-components'

const Container = styled.footer`
  padding: ${({ theme }) => theme.ms(2)} 0;
  min-height: ${({ theme }) => theme.ms(15)};
  background-color: ${({ theme }) => theme.colors.grays.black};
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 0 0 auto;
  max-height: 100px;
`

const StyledLabel = styled(Text)`
  color: ${({ theme }) => theme.colors.grays.white};
`

const FooterComponent: FunctionComponent = () => (
  <Container>
    <StyledLabel textTag={TextTag.label} textStyle={TextStyle.LabelSmall}>
      © {new Date().getFullYear()} Hyundai Showroom Spectator
    </StyledLabel>
  </Container>
)

export default FooterComponent
