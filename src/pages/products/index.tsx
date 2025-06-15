import InventoryTable from '@/components/organism/InventoryTable'
import { mockProducts } from '@/data/mockProducts'
import { Product } from '@/models/product'
import { useRouter } from 'next/router'
import React from 'react'


const Index = () => {

   const router = useRouter();

  const products: Product[] = mockProducts;

  return (
    <div className="flex flex-col  items-center gap-10">
        <h1>Inventario</h1>
        <button className="w-full btn-primary" onClick={
                  e => {
        
                    e.preventDefault();
                 
                    router.push('/products/created');
                  }
        
        
                }>
          Agregar Producto
        </button>
        <InventoryTable products={products}  />
    </div>
  )
}

export default Index