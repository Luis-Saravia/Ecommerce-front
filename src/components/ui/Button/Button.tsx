import { PropsButton } from './button.interface';
import { styles } from './button.style';

export function Button({ children, optionStyleButtons, ...props }: PropsButton) {
  return (
    <button
      {...props}
      className={styles[optionStyleButtons]}
    >{children}</button>
  )
}