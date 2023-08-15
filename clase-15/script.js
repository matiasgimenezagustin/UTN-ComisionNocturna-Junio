/* Javascript es un lenguaje basado en prototipos, que tiene soporte para programacion orientada a objetos */

/* Paradigmas de programacion */

/* PROGRAMACION FUNCIONAL */

/* PROGRAMACION ORIENTADA A OBJETOS */


/* ES5 */
/* Funcion Constructora */

/* objeto literal */
/* const objeto = {color: 'rojo', peso: 90} */

/* function Arma(danio, durabilidad, nombre, duenio){
    this.danio = danio
    this.durabilidad = durabilidad
    this.categoria = 'armamento'
    this.nombre = nombre
    this.duenio = duenio
}
const espada = new Arma(30, 100, 'espada de hierro', 'nadie')
const hacha = new Arma(40, 120, 'hecha de hierro', 'Martina')

console.log(hacha)
 */
/* ES6 */
/* Class */


class Persona{
    constructor(nombre, remuneracion, profesion){
        this.nombre = nombre
        this.remuneracion = remuneracion
        this.profesion = profesion
        this.dinero = 0
        this.trabajosActivos = []
    }
    presentarme(){
        console.log(`Hola, soy ${this.nombre}`)
    }
    cobrar(){
        this.dinero = this.dinero + this.remuneracion
        console.log('Ya cobre, ahora tengo $' +  this.dinero)
    }
    asignarTrabajo(trabajo){
        this.presentarme()
        this.trabajosActivos.push(trabajo)
        console.log('Ahora consegui el trabajo ' + trabajo)
    }
    obtenerTrabajosActivos (){
        return this.trabajosActivos
    }
}


const laureano = new Persona('Laureano', 301000, 'Junior web developer')
const bianca = new Persona('Bianca', 300000, 'Junior front end web developer')

laureano.presentarme()
laureano.cobrar()
laureano.cobrar()
bianca.presentarme()
bianca.asignarTrabajo('desarrollar una landing page')
console.log(laureano.obtenerTrabajosActivos())
console.log(laureano)
console.log(bianca)

/* 
const obtenerNumeroRandom = () =>{
    return Math.floor(Math.random() * ( 10 )) + 1;
}
 */

/* 
forEach, filter, map, find, findIndex, some, reduce, every, sort

Crear una clase llamada personaje que tenga las propiedades:

-nombre (param)
-vida = 100
-arma = null (si tuviera un arma es un objeto)
-armadura = (param)
-danioBase = (param)

Metodos:

danioTotal = danioRecibido - (armadura/10 + numeroRandom)
recibirAtaque(danio): recibira un daño al cual le restara la (decima parte de la armadura + un numero random) , y ese danioTotal sera el que le restaremos a la vida de nuestro personaje


calcularAtaque(): devolvera la suma de (danioBase / unNumeroRandom)  y el danio del arma (si es que tiene arma)

atacar(objetivo : objeto) recibira a un objeto Personaje al cual calculara un ataque y activara el metodo recibir ataque de el objetivo
Debera decir por consola el estado de la pelea:
Ejemplo: 'personaje1.nombre ataco a personaje2 inflingiendole 6 de daño y dejandolo con personaje2.vida restante'

asignarArma(arma: objeto) (el arma debe tener las propiedades nombre y danio) : asignara el arma recibida a la propiedad arma

Combate:

Declarar dos objetos de la clase personaje y una variable llamada turno (con el valor 'personaje' o 'enemigo')
asignaremos un arma a cada personaje (o almenos a 1)

Crear un bucle donde se combatira hasta que la vida del personaje1 o personaje2 sea menor o igual a 0 

Si algun personaje muere, al finalizar el bucle while se debera decir 'x personaje ha ganado'

RECOMENDACIONES
-Usar la variable turno para ordenar quien ataca

*/
/* persona1.asignarArma({nombre: 'Excalibur', danio: 230})
 */

const obtenerNumeroRandom = () =>{
    return Math.floor(Math.random() * ( 10 )) + 1;
}

class Personaje{
    constructor(nombre,armadura,danioBase){
        this.nombre = nombre
        this.vida = 100
        this.arma = null
        this.armadura = armadura
        this.danioBase = danioBase
    }
    recibirAtaque(danio){
        let danioTotal = danio - (this.armadura/10 + obtenerNumeroRandom())
        if(danioTotal > 0){
            this.vida = this.vida - danioTotal
        }
        console.log('Recibi ' + danioTotal + ' y quedo con ' + this.vida)
        
    }
}


/* const luchador = new Personaje('pepe', 20, 20)
const luchador2 = new Personaje('pepe', 20, 20)
let turno = 'enemigo'
luchador.recibirAtaque(80)

const danioTotal = danio - ((this.armadura/10) + obtenerNumeroRandom())
        if (danioTotal > 0){
            this.vida = this.vida - danioTotal
        }
        console.log(`recibi ${danioTotal} y quedo con ${this.vida} puntos de vida`) */



if(obtenerNumeroRandom()%2 == 0){
    turno = 'o'
}else{
    turno = 'x'
}

let vida = 10
let vida2 = 20

while(vida >= 0 && vida2 >= 0){
    if(turno == 'x'){
        console.log('es turno de x')
        vida = vida - 1
        turno = 'o'
    }
    else if (turno == 'o'){
        console.log('es turno de 0')
        vida2 = vida2 - 1
        turno = 'x'
    }
}

if(vida > 0){
    console.log('gano vida')
}
else if(vida2 > 0){
    console.log('gano vida 2')
}