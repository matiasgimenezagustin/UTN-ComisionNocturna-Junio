/* console.log(fetch('https://jsonplaceholder.typicode.com/todos/1', {method: "GET"})) */



const contenedorHTML = document.getElementById('contenedor')

const mostrarRespuesta = () =>{
    
}


const llamarAJSONplaceholder = async () =>{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1', {method: "GET"}).then((response) => response.json())
    console.log(respuesta)
}
const funcionAsincronica = async () => {
    
    const respuesta = await fetch('https://swapi.dev/api/people/1/', {method: "GET"}).then((respuesta) => respuesta.json())
    console.log(respuesta)
    console.log('hola desde async')
}

const llamarAlJson = async () =>{
    const respuesta = await fetch('./datos.json').then(res => res.json())
    console.log(respuesta)
}

funcionAsincronica()
llamarAJSONplaceholder()

llamarAlJson()
console.log('hola')



