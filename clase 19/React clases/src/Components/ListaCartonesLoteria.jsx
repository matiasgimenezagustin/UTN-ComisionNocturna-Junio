import { useEffect, useState } from 'react'

const ListaCartonesLoteria = () => {

    const cartonesLoteria = [
        {
            nombre: 'Oro',
            precio: 3000,
            id: 1
        },
        {
            nombre: 'Plata',
            precio: 450,
            id: 2
        },
        {
            nombre: "Bronce",
            precio: 230,
            id: 3
        }
    ]

    const [cartonesSeleccionados, setCartonesSeleccionados] = useState([])
    const [searchString, setSearchString] =useState('')
    const [productosCaros, setProductosCaros] =  useState(false)
    const [listaProductos, setListaProductos] = useState(cartonesLoteria)

    const handleSelectCarton = ( id) =>{
        

        if(cartonesSeleccionados.find(carton => carton.id === id)){/* Verifico si ya esta el carton en mi carrito */

            setCartonesSeleccionados(cartonesSeleccionados.filter(carton => carton.id !== id))/* Eliminamos el carton seleccionado */

        }else{

            const cartonSeleccionado = cartonesLoteria.find((carton) => carton.id === id) /* Buscar el carton en la base de datos */
            setCartonesSeleccionados([...cartonesSeleccionados, cartonSeleccionado])
        }
        
    }
    const calcularTotal =() =>{
        let total = 0
        cartonesSeleccionados.forEach(carton =>{
            total = total + carton.precio
        })
        return total
    }

    const handleFilterProducto = (evento) =>{
        setSearchString(evento.target.value)

    }
    const handleCheckProductosCaros = () =>{
        setProductosCaros(!productosCaros)
    }

    useEffect(()=>{
        console.log('me ejecuto')
        if(productosCaros){
            setListaProductos(cartonesLoteria.filter(producto => producto.nombre.toLowerCase().includes(searchString.toLowerCase()) ).filter(producto => producto.precio >= 1000))
        }
        else{
            setListaProductos(cartonesLoteria.filter(producto => producto.nombre.toLowerCase().includes(searchString.toLowerCase()) ))
        }
        
    }, [productosCaros, searchString])

    return (
        <div>
            <div>
                <input type="text" placeholder='Busca tu producto' value={searchString} onChange={handleFilterProducto} />
                <label htmlFor="">Filtrar por precios mayores a $1000:</label>
                <input type='checkbox' checked={productosCaros} onChange={handleCheckProductosCaros} />
            </div>
            {
                listaProductos.map(({nombre, id, precio }) =>(
                    <CartonLoteria nombre={nombre} id={id} precio={precio} handleSelectCarton={handleSelectCarton} key={id}/>
                ))
            }
            <h3>Total: ${calcularTotal()}</h3>
        </div>
    )
}

export default ListaCartonesLoteria



const CartonLoteria = ({nombre, precio, id, handleSelectCarton}) =>{
    return (
        <div>
            <div>
                <h2>{nombre}</h2>
                <span>Precio: ${precio}</span>
            </div>
            <div>
                <input type="checkbox" name="" id="" onChange={() =>handleSelectCarton(id)} />
                
            </div>

        </div>
    )
}