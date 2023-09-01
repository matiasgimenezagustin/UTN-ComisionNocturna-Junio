import React from 'react'
import { ColorCard, Eventos } from './Components'
import { colorCards } from './dataColors'

const App = () => {
  return (
    <div className='cardColorsList'>
      
      {
        colorCards.map(({likes: meGusta, colores, id, date}) =>(
          <ColorCard likes={meGusta} colores={colores} id={id} date={date} key={id}/>
        ) )
      }
    </div>
  )
}

export default App

/* Crear los componentes

FeaturedArticlesSection (no recibe nada, contiene toda la logica de los articulos)(Aqui crearias tu array de articulos)



ArticleList (recibe un array de articulos)

ArticleCard (recibe un title, id, content)

Recuerda que debes invocar tu componente FeauturedArticlesSection en el App para poder verlo

RECOMENDACIONES: 

Recuerda usar el id de cada articulo para la key prop

Recuerda desestructurar las propiedades que vas a usar en cada componente

*/
