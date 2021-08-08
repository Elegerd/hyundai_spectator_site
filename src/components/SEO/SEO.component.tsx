import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { ISiteMetaData } from 'common/types'

interface IMeta {
  name: string
  content: string
}

interface ISEO {
  description?: string
  lang?: string
  meta?: IMeta[]
  title: string
}

interface IData {
  site: {
    siteMetadata: ISiteMetaData
  }
}

const getData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const SEO: FunctionComponent<ISEO> = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery<IData>(getData)

  const metaDescription = description || site.siteMetadata.description

  return (
    // @ts-ignore
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
