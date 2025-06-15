import React from 'react'
import Image from "next/image";
import { Product } from '@/models/product';
import Link from 'next/link';

const Index = ({ products }: { products: Product[] }) => {
  return (

    <table className="w-full">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Proveedor</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>


        {
          products.map(product =>

            <tr key={product.id}>
              <td>
                {product.name}
              </td>
              <td>
                {product.stock}
              </td>
              <td>
                {product.price}
              </td>
              <td>
                {product.provider}
              </td>
              <td>
                <div className="flex justify-center gap-5">
                  <Link href={`products/${product.id}`}>
                    <Image
                      aria-hidden
                      src="/002-edit.png"
                      alt="Globe icon"
                      width={24}
                      height={24}
                    />
                  </Link>

                  
                </div>
              </td>

            </tr>
          )
        }
      </tbody>
    </table>



  )
}

export default Index