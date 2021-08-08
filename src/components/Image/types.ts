import { FixedObject, FluidObject } from 'gatsby-image'

export interface IFluidImage {
  id: string
  fluid: FluidObject
}

export interface IFixedImage {
  id: string
  fixed: FixedObject
}

export interface IGqlImage<T extends IFixedImage | IFluidImage> {
  data: T
}

// recreated since gatsby-image does not export one.
export interface IGatsbyImageProps {
  resolutions?: FixedObject
  sizes?: FluidObject
  fixed?: FixedObject | FixedObject[]
  fluid?: FluidObject | FluidObject[]
  fadeIn?: boolean
  title?: string
  alt?: string
  className?: string | object
  critical?: boolean
  crossOrigin?: string | boolean
  style?: object
  imgStyle?: object
  placeholderStyle?: object
  backgroundColor?: string | boolean
  onLoad?: () => void
  onStartLoad?: (param: { wasCached: boolean }) => void
  onError?: (event: any) => void
  Tag?: string
  itemProp?: string
  loading?: 'auto' | 'lazy' | 'eager'
  draggable?: boolean
}
