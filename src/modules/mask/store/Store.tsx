import React from "react";
import { Product } from "../../../components/common/Product/Product";
import { Input } from "../../../components";
import { FormFieldInput } from "../../../components/Atoms/form-field-input/Form-field-input";
// styleInput={'warning'}
export function Store() {
  return (
    <section>
      <h3>Todos los productos</h3>
      <FormFieldInput
        label={'Filter:'}
        id={'filterProducts'}
      />
      <div
        className="flex flex-wrap justify-center gap-10"
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
}
