export interface PropsImage extends React.ImgHTMLAttributes<HTMLImageElement> {
  optionStyleImage?: IOptionStyleImage
}

export type IOptionStyleImage = 'default' | 'warning' | 'rounded1'