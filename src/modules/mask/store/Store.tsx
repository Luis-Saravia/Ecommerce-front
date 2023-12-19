import { Product } from "../../../components/common/Product/Product";
import { FormFieldInput } from "../../../components/Atoms/form-field-input/Form-field-input";

import productsImages from './products.imports.image' 

export function Store() {
  return (
    <section>
      <h3>Todos los productos</h3>
      <FormFieldInput label={"Filter:"} id={"filterProducts"} />
      <div className="flex flex-wrap justify-center gap-10">
        <Product
          imageProduct={productsImages.barras}
          price={20}
          quantityProducts={3}
          stock={100}
        />
        <Product
          imageProduct={productsImages.cocacola}
          price={20}
          quantityProducts={3}
          stock={100}
        />
        <Product
          imageProduct={productsImages.js}
          price={20}
          quantityProducts={3}
          stock={100}
        />
        <Product
          imageProduct={productsImages.ts}
          price={20}
          quantityProducts={3}
          stock={100}
        />
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </div>
    </section>
  );
}
