export interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
  optionStyleInput?: IOptionStyleInput
}

export type IOptionStyleInput = 'default' | 'warning';