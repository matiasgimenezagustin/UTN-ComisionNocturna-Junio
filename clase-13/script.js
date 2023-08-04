const alumnos = ['pepe', 'laureano', 'bianca', 'pepe']



//metodos de arrays

//push: agrega un elemento al final del array y devuelve el nuevo lenght

/* console.log('Ahora tengo: ' + alumnos.push('cosme') + ' alumnos') */


//pop: elimina el ultimo elemento de un array y lo devuelve

/* console.log('Eliminamos a ' + alumnos.pop() + ' de la cursada') */


//unshift: agrega un elemento al inicio del array y devuelve el nuevo lenght

/* alumnos.unshift('Gustavo', 'pepe') */

//shift: elimina el primer elemento de un array y lo devuelve

/* alumnos.shift()
 */

//indexOf/lastIndexOf(empieza desde atras hacia adelante): devuelve el indice de un elemento
/* let posicionDePepe = alumnos.lastIndexOf('Messi')
console.log(posicionDePepe) */


//splice: recibe 3 parametros
/* recibe la posicion a eliminar, cuantos quiero eliminar y quien quiero agregar en esa posicion y devuelve a los elementos eliminados */
/* let posicionDeLaureano = alumnos.indexOf('laureano')

console.log(alumnos.splice(posicionDeLaureano, 2, 'pepe', 'cosme'))

console.log(alumnos) */


/* for(let i = 0; i < alumnos.length; i = i + 1){
    let alumno = alumnos[i]
    console.log(alumno)
}

for(let alumno of alumnos){
    console.log(alumno)
} */

/* for(let alumno of alumnos){
    if(alumno[0] === 'p'){
        console.log(alumno + ' empieza con la letra p')
    }else{
        console.log(alumno + ' no empieza con la letra p')
    }
    
} */


/* const textos = ["hola como estas todo bien?", "no me siento bien", "que mal"] */

/* recorrer el array de textos y decir segun corresponda

"el mensaje {tanto} es corto" entre 1 y 8 caracteres
"el mensaje {tanto} es mediano" entre 9 y 18
"el mensaje {tanto} es largo"  mas de 18

*/


/* const textos = ["hola como estas, todo bien?", "no me siento bien", "que mal"]

for(let texto of textos){

    if(texto.length > 18){

        console.log(`${texto} - el mensaje es largo`)
    }
    else if(texto.length > 9){

        console.log(`${texto} - el mensaje es mediano`)
    }
    else{
        console.log(`${texto} - el mensaje es corto`)
    }
    
} */
/* 
const textos = ["hola como estas todo bien?", "no me siento bien", "que mal"]

for (let texto of textos) {
    if(texto.length >= 1 && texto.length <= 8){
        console.log("El mensaje " + texto + " es muy corto");
    }
    else if(texto.length >= 9 && texto.length <= 18){
        console.log("El mensaje " + texto + " es mediano");
    } 
    else if(texto.length >= 18){
        console.log("El mensaje " + texto + " es mediano");
    } 
}
 */

/* 
let operacion = 'plus'
let a = 5
let b = 5
switch(operacion){
    case '-' :
        console.log(`El resultado de ${a} - ${b} es ${a - b}`)
        break
    case '+':
    case 'sumar':
    case 'plus':
        console.log(`El resultado de ${a} + ${b} es ${a + b}`)
        break
    default:
        console.log("Error: operacion no valida")
}
 */
//Declaracion
/* function saludar (){
    console.log('holaa ' )

}

function calcularIva(x){
    return x * 0.21
}  */

//Invocar, llamar, ejecutar
/* console.log('el iva de mi producto es $' + calcularIva(100)) */

//Referenciando
/* calcularIva */
/* const boton = document.getElementById('boton')
boton.onclick = saludar */

/* 
f(x) = 2x + 1
f(x = 2) = 2 . 2 + 1 = 5
f(x = 3) = 2 . 3 + 1 = 7

*/