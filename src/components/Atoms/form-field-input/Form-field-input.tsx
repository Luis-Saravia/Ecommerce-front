import { Input } from "../../index.ts";
import { IOptionStyleInput } from "../../ui/Input/input.interface.ts";

interface IFormFieldInput {
  label: string;
  id: string;
  type?: string;
  styleInput?: IOptionStyleInput
}

export function FormFieldInput({
  label,
  id,
  type = "text",
  styleInput
}: IFormFieldInput
) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input type={type} id={id} optionStyleInput={styleInput} />
    </div>
  );
}

// configInput?: {
//   styleInput?: IOptionStyleInput
// }  

// ,
//   configInput

//   {...configInput}