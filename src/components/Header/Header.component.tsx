import React, { FunctionComponent } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image, { IFluidImage, IGqlImage } from 'components/Image'
import Link, { Pages } from 'components/Link'
import Text, { TextStyle, TextTag } from 'components/Text'
import styled from 'styles/styled-components'

interface IHeader {
  siteTitle?: string
}

interface IHeaderData {
  logoImage: IGqlImage<IFluidImage>
}

const LogoImage = styled(Image)`
  margin: ${({ theme: { ms } }) => `${ms(6)} ${ms(-2)}`};
`

const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.grays.black};
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.layers.top};
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  max-height: 100px;
`

const getData = graphql`
  query {
    logoImage: file(relativePath: { eq: "favicon.png" }) {
      data: childImageSharp {
        id
        fixed(width: 25) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const HeaderComponent: FunctionComponent<IHeader> = ({ siteTitle }) => {
  const { logoImage } = useStaticQuery<IHeaderData>(getData)

  return (
    <Container>
      <Link to={Pages.Root}>
        <LogoImage image={logoImage.data} alt={'logo'} />
      </Link>
      <Text textStyle={TextStyle.Heading2} textTag={TextTag.label}>
        {siteTitle}
      </Text>
    </Container>
  )
}

export default HeaderComponent
