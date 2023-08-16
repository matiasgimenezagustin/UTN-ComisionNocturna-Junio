/* 
DOM = Document Object Model 
*/

/* for(let i = 1; i <= 1000; i++){
    console.log(i)
} */
setTimeout(() =>{
    console.log(document)
    const tituloHTML = document.getElementById('titulo')

    console.log(tituloHTML.innerText)
    tituloHTML.classList.add('claro')
    console.log(tituloHTML.classList)
}, 5000)

/* let decision = prompt('decidi entre claro y oscuro')
 */
/* tituloHTML.innerText = 'hola ' + nombre */

/* tituloHTML.style.backgroundColor = 'red' */

/* if(decision == 'claro'){
    tituloHTML.classList.add('claro')
}
else if (decision == 'oscuro'){
    tituloHTML.classList.add('oscuro')
} */



/* contenedorHTML.innerHTML = `
    <h2>${persona.nombre} ${persona.apellido}</h2>
    <span>Edad: ${persona.edad}</span>
    <br>
`
 */
const persona ={
    nombre:'pepe',
    apellido: 'suarez',
    edad: 30
}

const contenedorHTML = document.getElementById('contenedor') 
const personas = [persona, persona, persona]

for(const persona of personas){
    contenedorHTML.innerHTML = contenedorHTML.innerHTML + `
        <div>
            <h2>${persona.nombre} ${persona.apellido}</h2>
            <span>Edad: ${persona.edad}</span>
            <button>Comprar</button>
            <hr>
        </div>
    `
}

/* 
Crear el catalogo de productos con almenos 3 productos con las propiedades

nombre
precio
stock
descripcion

Mostrar en una carta de HTML (es a eleccion) por cada producto del catalogo (DEBEN TENER UN BOTON PARA COMPRAR)

*/