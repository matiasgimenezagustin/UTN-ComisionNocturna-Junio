const contenedorHTML = document.getElementById('contenedor')

const mostrarRespuesta = () =>{
    if(lukeskywalker){
        contenedorHTML.innerHTML = `
            <div>
                <h2>${lukeskywalker.name}</h2>
            </div>
        `
    }
    else{
        contenedorHTML.innerHTML = '<span>Cargando</span>'
    }
}

let lukeskywalker = null

const funcionAsincronica = async () => {
    
    lukeskywalker = await fetch('https://swapi.dev/api/people/1/', {method: "GET"}).then((respuesta) => respuesta.json())
    
    mostrarRespuesta()
 

}
funcionAsincronica()
mostrarRespuesta()

let condicion = true

console.log(condicion ? 'soy verd =adero' : 'soy falso')


const btnShow = document.getElementById('btn-show')

const caja = document.querySelector('.box')


btnShow.addEventListener('click', ()=>{
    caja.classList.toggle('ocultar')
})


caja.setAttribute('id', 'idejemplo')
console.log(caja.getAttribute('class'))


const carrito = []

const products = [
    {
        nombre: 'Play 5',
        precio: 600030,
        id: 1
    },
    {
        nombre: 'Xbox X',
        precio: 500000,
        id: 2
    }
]

const productosHTML = document.getElementById('productos')


const renderizarProductos = () =>{
    products.forEach(product =>{
        productosHTML.innerHTML += `
        <div>
            ${product.nombre} 
            <button class='btn-comprar' id='btn-comprar-${product.id}'>comprar</button>
        </div>
        `
    })
   /*  const botonesComprar = document.getElementsByClassName('btn-comprar') */
    const botonesComprar = document.querySelectorAll('.btn-comprar') 

    botonesComprar.forEach(boton =>{
        boton.addEventListener('click', ()=>{ 
            let idProducto = boton.id.split('-').pop()
            const productToBuy = products.find((product) => product.id == idProducto)
            carrito.push(productToBuy)
            console.log(productToBuy)
        })
    })
    console.log(botonesComprar)
}



renderizarProductos()