/* const arr = [ 2, 3, 2]

for(let i in arr){
    console.log(i)
} */

/* ARROW Fuction = funciones flecha ES6+ */

/* const sumar = ( a , b ) => {
    a++
    b++
    return a + b
}
 */
const sumar = (a, b) => a + b 

console.log(sumar(9, 2))
/* 
const saludar = (nombre) => alert(nombre) */



/* function suma(int1, int2){
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
}

function saludar(nombre) {
    return "Hola " + nombre
}
 */

/* const suma = (int1, int2) => int1 + int2;
const resta = (int1, int2) => int1 - int2;

const operacion = (op, a, b) => {
	if (op == "+") {
		return suma(a, b);
	} else if (op == "-") {
		return resta(a, b);
	} else {
		return null;
	}
};

const saludar = (nombre) => "Hola " + nombre; */


/* OBJETO LITERAL ES6+ */

let nombrePersona = 'lucas'
let apellidoPersona = 'Geraz'

const persona = {
    nombre: 'lucas',
    apellido: 'Geraz'
}

console.log(persona['nombre'], persona.apellido, persona.edad)
console.log(persona)

const partida = {
    jugadorA: {
        nombre: 'Pepe',
        puntos: 13,
        cartas: [ '1 espada', '5 de copas', '7 de basto']
    },
    jugadorB:{
        nombre: 'Homero',
        puntos: 29,
        cartas: [ 
            {
                nombre: '2 espada',
                palo: 'espada',
                numero: 2
            }, 
            {
                nombre: '4 de copas', 
                palo: 'copa',
                numero: 4
            },
            {
                nombre: '7 de oro',
                palo: 'oro',
                numero: 7
            }
        ]
    }
}

