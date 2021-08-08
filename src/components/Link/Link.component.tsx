import React, { FunctionComponent } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styles/styled-components'

export enum Pages {
  Root = '/',
  About = '/about',
  Typography = '/typography',
  Colors = '/colors',
}

interface ILink {
  to: Pages | string
  className?: string
  external?: boolean
}

const linkCSS = css`
  text-decoration: none;
  color: inherit;
`

const ExternalLink = styled.a`
  ${linkCSS}
`

const InternalLink = styled(GatsbyLink)`
  ${linkCSS}
`

const Link: FunctionComponent<ILink> = ({ to, children, className, external }) => {
  return external ? (
    <ExternalLink href={to} target={'_blank'} className={className}>
      {children}
    </ExternalLink>
  ) : (
    <InternalLink to={to} className={className}>
      {children}
    </InternalLink>
  )
}

export default Link
