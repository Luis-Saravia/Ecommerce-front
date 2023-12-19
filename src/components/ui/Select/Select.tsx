import { styles } from "./select.style";
import { PropsSelect } from "./select.interface";

export const Select = ({
  options,
  optionStyleSelect = "default",
  ...props
}: PropsSelect) => {
  
  return (
    <select
      {...props}
      className={styles[optionStyleSelect]}
      // {styles[optionStyleSelect]}
    >
      <option value="1">Seleccionar</option>
      {options.map((e: string | number, i: number) => (
        <option value={i + 2} key={e}>
          {e}
        </option>
      ))}
    </select>
  );
};
