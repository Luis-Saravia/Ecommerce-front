import React from "react";
import { Image } from '../../index';
import company from '../../../assets/company.png';

export function Product({  }) {
  return (
    <div 
      className='
      rounded-3xl
      shadow-lg shadow-black bg-emerald-500 
      border-4
      overflow-hidden
      w-[155px]
      m-5'
    >
      <Image
        src={company}
        alt={company}
      />
      <ul
        className='p-4'
      >
        <li>
          <strong>Precio:</strong> $500
        </li>
        <li>
          <strong>Stock:</strong> 50
        </li>
        <li>
          <strong>Productos:</strong> 3
        </li>
      </ul>
    </div>
  );
}
