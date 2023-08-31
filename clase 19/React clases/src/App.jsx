import React from 'react'
import { Eventos } from './Components'

const App = () => {
  return (
    <div>
      <Eventos/>
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
