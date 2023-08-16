const products = [
    {
        nombre: 'TV Samsung 43"',
        marca: 'samsung',
        precio: 700000,
        id: 1
    },
    {
        nombre: 'TV LG 30"',
        marca: 'LG',
        precio: 500000,
        id: 2
    },
    {
        nombre: 'TV Noblex 45"',
        marca: 'Noblex',
        precio: 400000,
        id: 3
    },
    {
        nombre: 'TV Samsung 8K 90"',
        marca: 'samsung',
        precio: 2000000,
        id: 4
    },
]

const tvSamnsung = products.filter((tv) => {
    console.log(tv)
    return tv.precio < 900000
})

console.log(tvSamnsung)


const precios = products.map((tv) =>{
    return tv.precio
})

console.log(precios)

const productosConIva = products.map((tv) =>{
    tv.precio = tv.precio * 1.21
    return tv
})

console.log(productosConIva)

products.forEach((tv, index) =>{
    console.log(tv)
})