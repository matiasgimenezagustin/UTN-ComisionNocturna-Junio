import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../productsDB'
import { Error404 } from '../components'
import { useGlobalContext } from '../context/GlobalContextProvider'

const ProductDetail = () => {
  /* const {id} = useParams()  desestrucutramos al id, forma alt mejor*/
  const rute = useParams() 
  const productFound = products.find((product) => product.id === Number(rute.id) )
  const {handleAddProduct} = useGlobalContext()
  
  return (
    <div>
      {
        productFound 
        ?
        <>
          <h2>{productFound.nombre}</h2>
          <img src={productFound.img}/>
          <span>Precio: ${productFound.precio}</span>
          <button onClick={() => handleAddProduct(productFound.id)}>Añadir al carrito</button>
        </>
        :
        <Error404 mensaje={'El producto buscado no existe'} />
      }
      
    </div>
  )
}

export default ProductDetail