import React from 'react'
import styled from 'styles/styled-components'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import HeroText from 'components/HeroText'
import Step from 'components/Step'
import Icons from 'assets'
import Text, { TextStyle, TextTag } from 'components/Text'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const StepsWrapper = styled.div`
  padding: 1.5em 1.875em 2.1875em;
  max-width: 1600px;
  margin: 0 auto;
`

const TextWrapper = styled.div`
  margin-top: 1.5em;
  text-align: center;

  & > * {
    text-align: center;
    margin-bottom: 0.5em;
  }
`

const TelegramWrapper = styled.div`
  display: flex;
  flex-column: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.5em;
  margin-bottom: 2.5em;
  padding: 15px;

  & svg {
    margin-bottom: 0.5em;
  }
`

const Steps = styled.div`
  height: 6.5em;
  background-color: ${({ theme }) => theme.colors.grays.blue};
  display: flex;
  justify-content: center;
  flex-direction: row;

  & > *:first-child {
    width: 20%;
  }

  & > *:last-child {
    width: 21%;
    margin-right: 0;
    padding-right: 0;
  }

  @media (max-width: 900px) {
    display: none;
  }
`

const HomePage = () => {
  return (
    <Layout>
      <SEO
        title="Hyundai Showroom Spectator"
        lang="ru"
        description="Hyundai Showroom Spectator"
      />
      <Container>
        <HeroText>Hyundai Showroom Spectator</HeroText>
        <StepsWrapper>
          <Steps>
            <Step icon={<Icons.Step1 />} text={'Забронируйте автомобиль из наличия'} />
            <Step
              icon={<Icons.Step2 />}
              text={'Внесите обеспечительный платеж онлайн'}
            />
            <Step
              icon={<Icons.Step3 />}
              text={'Внесите оставшуюся сумму онлайн через 2-3 дня'}
            />
            <Step
              hiddenAngle={true}
              icon={<Icons.Step4 />}
              text={'Заберите доставленный автомобиль'}
            />
          </Steps>
        </StepsWrapper>
        <TextWrapper>
          <Text color={'black'} textStyle={TextStyle.Heading1} textTag={TextTag.h2}>
            Приобритайте автомобиль онлайн без допов через Hyundai Showroom!
          </Text>
          <Text color={'black'} textStyle={TextStyle.Heading2} textTag={TextTag.h3}>
            Получайте многевенные уведомления через наш телеграмм канал и оформалайте
            заказ!
          </Text>
          <TelegramWrapper>
            <a href="https://t.me/hyundai_spectator">
              <Icons.Telegram />
              <Text color={'black'} textStyle={TextStyle.Heading4} textTag={TextTag.p}>
                @hyundai_spectator
              </Text>
            </a>
          </TelegramWrapper>
        </TextWrapper>
      </Container>
    </Layout>
  )
}

export default HomePage
