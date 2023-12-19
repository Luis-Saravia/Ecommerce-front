import React from "react";
import { Image } from "../../index";
import company from "../../../assets/company.png";

interface IParamsProduct {
  price: number;
  stock: number;
  quantityProducts: number;
  imageProduct: string;
}

export function Product({
  price,
  stock,
  quantityProducts,
  imageProduct,
}: IParamsProduct) {
  return (
    <div
      className="
      rounded-3xl
      shadow-lg shadow-black bg-emerald-500 
      border-4
      overflow-hidden
      w-[155px]
      m-5"
    >
      <Image src={imageProduct} alt={imageProduct} />
      <ul className="p-4">
        <li>
          <strong>Precio:</strong> ${price}
        </li>
        <li>
          <strong>Stock:</strong> {stock}
        </li>
        <li>
          <strong>Productos:</strong> {quantityProducts}
        </li>
      </ul>
    </div>
  );
}
