//BUCLES



//Principio DRY: DON'T REPEAT YOURSELF

//FOR

//  ACCION : alert('hola')
//  CUENTAS VECES QUERES REPETIR: 5

/* for(let i = 1; i <= 10; i = i + 1){
    console.log('hola')
    console.log('El iterador vale: ' + i)
}
console.log('se termino el bucle')
 */

/* Solicita al usuario 3 precios y saca el iva de esos precios y luego muestra por consola: el iva de $x es $y */

/* for(let i = 1; i <= 3; i = i + 1){ 
    let precio = prompt("Ingrese el precio de un producto")
    let precioIva = precio * 0.21 
    console.log(`El iva de ${precio} es de ${precioIva}`)
} */

//while

//BUCLE DE TIPO CONDICIONAL

/* let contrasena = 'cosmefulanito'
let contrasenaSolicitada = prompt('ingrese la contraseña:')
let intentos = 1
while(contrasena !== contrasenaSolicitada ){
    alert('Contraseña equivocada')
    contrasenaSolicitada = prompt('ingrese la contraseña:')
    intentos = intentos + 1
    if(intentos === 5){
        alert('Se hicieron muchos intentos, pruebe mas tarde')
        break
    }
}
alert('Contraseña ingresada con exito') */


/* METODOS DE STRING */

//toLowerCase pasar un string a minuscula, toUpperCase pasar un string a mayuscula

/* let string = 'Jorge va al baño por las noches'
 */
/* console.log(string[0]) */

/* for(let i = 0; i < 2 ; i = i + 1){
    console.log(string[i])
    console.log('la variable i vale: ' + i )
} */

/* let contadorA = 0
for(let i = 0; i < string.length; i = i + 1){
    if(string[i] === 'a'){
        contadorA = contadorA + 1
    }
}
console.log("La cantidad de a en el string es: " + contadorA) */
/* Solo mostrar por consola los 2 primeros caracteres de mi string */
/* Verificar cuantas veces se repite el caracter a en el string */

/* console.log(string.toLowerCase()) */

//includes
/* console.log(string.includes('bomba'))
if(string.includes('bomba')){
    console.log('Mensaje problematico')
}else{
    console.log('Aprobado')
} */

//replace, replaceAll

/* console.log(string.replace('todos', 'todas'))

console.log(string.replaceAll('-', ' ')) */


/* let string = 'Jorge va Al baño por las noches'
let cantidadA = 0
for (let i=0; i < string.length; i = i + 1 ){
    if (string[i].toLowerCase() == 'a'){
        cantidadA = cantidadA +1
    }
}
alert(`La cantidad de letras a es: ${cantidadA}`) */

//FOR OF
/* let string = 'pepe'


for(let caracter of string ){
    console.log(caracter)
} */

/* const nombre = 'pepe'

if(true){
    const nombre = 'juan'

    if(true){
        nombre = 'lucas'
        console.log(nombre)
    }
    console.log(nombre)
}
console.log(nombre) */

/* ARRAY, matrices, listas, vector, arreglo */

const listaDeAlumnos = ['Lau', 'Gus', 'Damian', 'Bianca', 'Luca', 'Luis']

const listaDeNotas = [1, 10, 2, -3]

const diasQueGane = [true, false, true]

const mix = [1, 'Gonza', true, [[], []]]

const posicionesTicTacToe = [
    ['', 'X', 'X'],
    ['O', 'X', 'O'],
    ['', '', '']
]

console.log(listaDeAlumnos[10])

listaDeAlumnos[0] = 'Laureano'

listaDeAlumnos[6] = 'pepe'