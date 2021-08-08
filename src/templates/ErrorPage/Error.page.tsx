import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Text, { TextStyle, TextTag } from 'components/Text'
import styled from 'styles/styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-column: column;
  align-items: center;
  justify-content: center;
  margin-top: 4.5em;
  margin-bottom: 2.5em;
  padding: 15px;

  & > * {
    text-align: center;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <Text color={'black'} textStyle={TextStyle.Heading1} textTag={TextTag.h2}>
        Страница не найдена
      </Text>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
