import React, {useContext, createContext, useState} from 'react'
import { products } from '../productsDB'

const GlobalContext = createContext()

const GlobalContextProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const handleAddProduct = (id) =>{
    const productFound = products.find(prod => Number(prod.id) === Number(id))
    const isInCart = cart.find(producto => producto.id == id)
    if(isInCart){
      setCart(
        cart.map((producto) =>{
          if(producto.id === id){
            producto.quantity++
          }
          return producto
        })
      )

    }
    else{
      setCart([...cart, {...productFound, quantity: 1}])
    }
    
  }
  console.log(cart)
  return (
    <GlobalContext.Provider value={{ handleAddProduct}}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalContextProvider