import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styled, { ThemeProvider } from 'styles/styled-components'
import GlobalStyles from 'styles/GlobalStyles'
import Theme from 'styles/theme'
import { ISiteMetaData } from 'common/types'
import Header from 'components/Header'
import Footer from 'components/Footer'

interface ILayoutData {
  site: {
    siteMetadata: Pick<ISiteMetaData, 'title'>
  }
}

const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.grays.white};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1 0 auto;
`

const getData = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const LayoutComponent: FunctionComponent = ({ children }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery<ILayoutData>(getData)

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <PageContainer>
          <Header siteTitle={title} />
          <Main>{children}</Main>
          <Footer />
        </PageContainer>
      </>
    </ThemeProvider>
  )
}

export default LayoutComponent
