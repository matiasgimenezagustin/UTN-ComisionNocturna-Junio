
if(nombre === 'pepe'){

    console.log('Es pepe')
}
else if(nombre === 'lucas'){

    console.log('es lucas')
}
else{

    console.log('No es pepe ni lucas')
} */

//falsie: '', 0, NaN, null, false, undefined
/* let valor = 0

if(valor){

    console.log('es verdadero')
}
else{

    console.log('es falso')
} */



//Operadores Logicos

/* let nombre = 'timmy'
let dinero = 101

if(nombre === 'timmy' || dinero > 100){
    console.log('te dejo pasar')
}
else{
    console.log('no te dejo pasar')
} */

/* if(nombre === 'timmy' && dinero > 100){
    console.log('te dejo pasar')
}
else{
    console.log('no te dejo pasar')
} */


/* 
OR ||
true true = true
true false = true
false false = false

AND &&
true true = true
true false = false
false false = false

NOT
!false = true
!true = false
*/
/* let nombre = prompt('dame un nombre')
if(!isNaN(nombre)){
    console.log("ERROR: ME ESCRIBIO UN NUMERO")
}
 */
//funciones nativas 

/* 
alert()
console.log()
prompt()
isNaN()
Number()
String()
Boolean()

*/


//PALABRAS RESERVADAS

/* 
true 
false
typeof
let
var 
const
if
else
*/

/* FUNCIONAMIENTO INTERNO DE LA ESTRICTA IGUALDAD */
/* let x = 20

console.log(x == 20 && typeof x == 'number') */



/* 
var let = false

let hola = 'pepe' */

//template string
let nombre = 'lucas'
let apellido = 'saf'
let edad = 90
console.log(`Yo me llamo $ '' "" ${nombre} ${apellido} 
y mi edad es ${edad}`)

console.log('hola\nchau')