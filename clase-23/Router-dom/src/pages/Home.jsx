import React from 'react'
import { products } from '../productsDB'
import { Link } from 'react-router-dom'

const Home = () => {
    
  return (
    <div>

        <h1>Bienvenido a Apple Store</h1>
        <div>
            {
                products.map(({categoria, nombre, id, precio}) =>(
                    <Card categoria={categoria} nombre={nombre} id={id} precio={precio} key={id}/>
                ))
            }
        </div>
    </div>
  )
}

export default Home


import React from 'react'

const Card = ({categoria, nombre, precio, id}) => {
    return (
        <div>
            <h3>{categoria}</h3>
            <h2>{nombre}</h2>
            <span>${precio}</span>
            <Link to={'/detail/' + id }>Ver detalle</Link>
        </div>
    )
}

export {Card} 