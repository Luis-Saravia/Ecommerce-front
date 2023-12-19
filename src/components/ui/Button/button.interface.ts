export interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{  
  optionStyleButtons: IOptionStyleButton
}
export type IOptionStyleButton = 'default' | 'warning'