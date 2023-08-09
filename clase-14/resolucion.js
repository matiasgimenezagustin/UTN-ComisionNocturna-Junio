
/* 
1)Imprime los números del 1 al 10
2)Imprime los números pares del 2 al 20
3)Imprime los números impares del 1 al 19
4)Imprime los números del 10 al 1 en orden inverso
5)Imprime los números del 1 al 10, pero se detiene al llegar al 5
7)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre
8)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta
9)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b
10)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b
11)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null 
12)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola

13)Dado un array de números, escribir una función que calcule la suma de todos los números del array.
ejemplo: const numeros = [4,9,2,3]
14)
Dado un array de strings, escribir una función que devuelva la concatenación de todos los strings.
ej: const txt = ['dasdsa', 'asdsad']
15)
Dado un array de números, escribir una función que devuelva un array con todos los números mayores a 10.

16)
Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.
 */


/* 
5) 
*/
/* for(let x = 1; x < 10; x++){
    console.log(x)
    if (x==5){
        break
    }
} */
/* 9 */
/* function sumar (a, b){
    return a + b
}

let a = 2
let b = 2


console.log(sumar(a, b)) */


/* 7 */
/* DRY: dont repeat yourself */

/* function decirNombre(nombre){

    alert (`hola ${nombre}`)
}
decirNombre('juancito')
 */

/* 8 */

/* function saludar(nombre) {
    return "Hola " + nombre
}

alert(saludar('Damian'));
 */


/* 10 */


/* function sumar(a,b){
    return(a + b)
}
function restar(a,b){
    return(a - b)
}
let numeroA = prompt('escribe un numero')
let resultado = sumar(numeroA, 17)
console.log(resultado)
 */

/* 
Cola = Queue = FIFO = First In First Out
PILA = STACK = LIFO = Last in First Out
*/

/* 11 */

/* 
function suma(int1, int2){
    return int1+int2
  }
  
function resta(int1, int2){
    return int1-int2
}

function operacion( op,a ,b ){
    if (op =='+') { 

        return suma(a,b)
    }
    else if (op =='-') {

        return resta(a,b)
    }
    else {

        return null
    }
} */
/* 
let resultado = operacion('p',3,7)

if(resultado){
    alert('operacion(+,3,7): '+ resultado)  
}else{
    alert('Operacion no valida')
}
 */

/* function dummy (){
    return 'soy tonto'
} */


/* 12 */

/* function contarHasta(numero){
    for(let i = 0; i <= numero; i = i +1){
        console.log(i)
    }
}
contarHasta(3) */

/* 13 */

/* const array13 = [1, 2, 3, 4];
function sumatoria (numeros) {
    let acumulador = 0
    for (let numero of numeros) {

        acumulador = acumulador + numero
    }
    return acumulador
};
console.log(sumatoria(array13)); */

/* const palabras=["gabriel ", "luis ", "rosa ", "edilberto "]; */

/* function concatenar(palabras){

    let conjunto = ''
    for(let nombre of palabras){
        conjunto = conjunto + nombre;
    }
    return conjunto;
} */

/* console.log(palabras.join('-')) */

/* 15 */

/* const cadenaNumeros=[1, 2, 4, 10, 11, 14, 134, 2, 5, 9, 100];

function nMayores(cadenaNumeros){

    const numMayoresDiez = [];

    for(let n of cadenaNumeros){
        if(n >= 10){
            numMayoresDiez.push(n);
        }
    }

    return numMayoresDiez;

}

alert(`numeros mayores: ${nMayores(cadenaNumeros)}`); */

/* const cadenaNumeros=[2, 4, 6, 8, 10, 11, 2, 31, 31, 27, 44];

function suma(numeros){

    let resultado=0;

    for(let n of numeros){
        if(n % 2 == 0){
        
            resultado = resultado + n;
        }
    }

    return resultado;
}


alert(`suma de los numeros pares: ${suma(cadenaNumeros)}`); */