import React from 'react';
import { PropsInput } from './input.interface';
import { styles } from './input.style'


export function Input({ optionStyleInput = 'default', ...props }: PropsInput ) {
  return (
    <input
      {...props}
      className={styles[optionStyleInput]}
    />
  )
}