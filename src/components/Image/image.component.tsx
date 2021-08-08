import React, { FunctionComponent } from 'react'
import styled from 'styles/styled-components'
import Img, { FixedObject, FluidObject } from 'gatsby-image'
import { IGatsbyImageProps } from './types'

interface IImage {
  className?: string
  alt: string
  image: {
    fluid?: FluidObject | FluidObject[]
    fixed?: FixedObject | FixedObject[]
  }
}

const Wrapper = styled.figure`
  margin: 0;
  height: 100%;
  width: 100%;
`

const commonConfig: IGatsbyImageProps = {
  fadeIn: true,
  className: '__image',
}

const Image: FunctionComponent<IImage> = ({
  alt,
  className,
  image: { fluid, fixed },
}) => (
  <Wrapper className={className}>
    {fluid && <Img fluid={fluid} alt={alt} {...commonConfig} />}
    {fixed && <Img fixed={fixed} alt={alt} {...commonConfig} />}
  </Wrapper>
)

export default Image
