/* 

JS es un lenguaje case sentive 

*/
/* Tipos de datos (primitivos): */
//-Strings
'hola'
'que tal'
'212'
'true'

//-number
12
-3
9.5
Infinity
NaN 

//-booleans
true 
false

//-undefined
undefined

//-null
null


//Comparadores Devuelven boolean

/* == : es igual*/
9 == '9'

/* != : diferencia */
true != true

/* === : es estrictamente igual */

9 === '9'

/* !== : Es estrictamente distinto de */
5 !== '5'

/* 
10 > 3
10 < 3
10 <= 10
10 >= 10 
*/

/* var nombre  */


/* Operadores aritmeticos */

//SI HAY STRING
//concatenar devuelve SIEMPRE string
//+

//SI NO HAY STRING
//suma devuelven SIEMPRE numeros
//+


//-, *, /, % devuelven SIEMPRE numeros

/* 
1 + prompt('decime tu edad')
'114'
*/

/* 
1 + Number(prompt('decime tu edad'))
81
*/

'hola ' === 'hola'  //false
8 - 4 // number y 4
NaN == NaN //boolean false
NaN - Infinity //number -Infinity
null == 0 //boolean false
' ' == 0 //bolean true
20 + '' //string '20'
20 - 0 //number 20
20 - ' ' //number 20 AVERIGUAR
5 * '2' //number 10

/* VARIABLES */


/* 
var NO SE USA
var se puede reasignar
var tiene hoisting
var se puede redeclarar
var si no se inicializa implicitamente vale undefined

let ESTA SE USA 
let si no se inicializa implicitamente vale undefined
let NO tiene hoisting
let se puede reasignar 
let NO puede redeclarar

const (por ahora la ignoramos)
const NO se puede inicializar implicitamente
const NO tiene hoisting
const NO se puede reasignar 
const NO puede redeclarar
*/
/* let nombre = Number(prompt('ingrese su nombre'))
