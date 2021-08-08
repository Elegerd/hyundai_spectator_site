import Image from './image.component'
import * as types from './types'

export type IFluidImage = types.IFluidImage
export type IFixedImage = types.IFixedImage
export type IGqlImage<T extends IFixedImage | IFluidImage> = types.IGqlImage<T>

export default Image
