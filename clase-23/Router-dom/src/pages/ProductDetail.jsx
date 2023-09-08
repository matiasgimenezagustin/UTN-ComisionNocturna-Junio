import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../productsDB'
import { Error404 } from '../components'

const ProductDetail = () => {
  /* const {id} = useParams()  desestrucutramos al id, forma alt mejor*/
  const rute = useParams() 
  const productFound = products.find((product) => product.id === Number(rute.id) )
  return (
    <div>
      {
        productFound 
        ?
        <>
          <h2>{productFound.nombre}</h2>
          <span>Precio: ${productFound.precio}</span>
        </>
        :
        <Error404 mensaje={'El producto buscado no existe'} />
      }
      
    </div>
  )
}

export default ProductDetail