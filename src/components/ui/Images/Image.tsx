import { PropsImage } from './image.interface';
import { styles } from './image.style';

export function Image({ optionStyleImage = 'default', ...props }: PropsImage) {
  return (
    <img 
      {...props}
      className={styles[optionStyleImage]}
    />
  )
}