export interface PropsSelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<string | number>
  optionStyleSelect?: IOptionStyleSelect
};

export type IOptionStyleSelect = 'default' | 'warning';