import { addProduct, mockProducts } from '@/data/mockProducts';
import { Product } from '@/models/product';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Index = () => {


  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(
    () => {


      if (id === 'created') {

        setProduct({
          id: mockProducts.length + 1,
          name: '',
          price: 0,
          stock: 0,
          provider: '',
          threshold: 0
        })
      } else {
        const prod = mockProducts.find((p) => p.id === Number(id));
        if (prod) setProduct(prod);

      }

    }, [id]
  );

  if (!product) return <div className="p-6">Cargando...</div>;


  return (
    <div className='flex items-center justify-center'>
      <form className='flex flex-col  gap-5 w-10/12'>
        <h2 className='text-center'>{product.id !== 0 ? 'Editar' : 'Crear'} Producto</h2>

        <div className="flex flex-col">
          <label >Nombre</label>
          <input type="text" id="name" name="name" disabled={id !== 'created'}
            value={product?.name} onChange={(e) => {
              setProduct({ ...product, name: e.target.value })
            }} />
        </div>

         <div className="flex flex-col">
          <label >Precio ($)</label>
          <input type="text" id="price" name="price" disabled={id !== 'created'}
            value={product?.price} onChange={(e) => {
              setProduct({ ...product, price: +e.target.value })
            }} />
        </div>

        <div className="flex flex-col">
          <label >Cantidad</label>
          <input type="text" id="amount" name="amount"
            value={product?.stock} onChange={(e) => {
              setProduct({ ...product, stock: +e.target.value })
            }} />
        </div>

        <div className="flex flex-col">
          <label >Proveedor</label>
          <input type="text" id="provider" name="provider" disabled={id !== 'created'}
            value={product?.provider} onChange={(e) => {
              setProduct({ ...product, provider: e.target.value })
            }} />
        </div>

        <div className="flex flex-col">
          <label >Umbral de stock</label>
          <input type="text" id="threshold" name="threshold"
            value={product?.threshold} onChange={(e) => {
              setProduct({ ...product, threshold: +e.target.value })
            }} />
        </div>

        <button className='btn-primary' type="submit" onClick={
          e => {

            e.preventDefault();
          
            if (id === 'created') {
              addProduct(product);
                 alert('Produto creado');

            } else {
              const prod = mockProducts.find((p) => p.id === Number(id));
              if (prod) {

                prod.name = product.name;
                prod.stock = product.stock;
                prod.price = product.price;
                prod.provider = product.provider;
                prod.threshold = product.threshold;
                 alert('Produto actualizado');

              }
            }

            router.push('/products');
          }


        }>
          Guardar
        </button>

      </form>
    </div>

  )
}

export default Index