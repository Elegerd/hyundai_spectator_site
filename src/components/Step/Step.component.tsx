import Text, { TextStyle, TextTag } from 'components/Text'
import React, { FunctionComponent } from 'react'
import Icons from 'assets'
import styled from 'styles/styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: content-box;
  padding-right: 2%;
  margin-right: 2%;
  position: relative;
  width: 21%;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  margin-right: 1.4375em;
`

const StyledAngle = styled(Icons.Angle)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  width: 0.5em;
  height: 1.0625em;
`

interface IStepComponentProps {
  icon: React.ReactNode
  text: string
  hiddenAngle?: boolean
}

const StepComponent: FunctionComponent<IStepComponentProps> = ({
  icon,
  text,
  hiddenAngle,
}: IStepComponentProps) => (
  <Container>
    <IconContainer>{icon}</IconContainer>
    <Text textStyle={TextStyle.ParagraphDefault} textTag={TextTag.label}>
      {text}
    </Text>
    {!hiddenAngle && <StyledAngle />}
  </Container>
)

export default StepComponent
