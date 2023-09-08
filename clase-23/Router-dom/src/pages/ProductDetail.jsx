import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const {id} = useParams()
  console.log(id)
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail