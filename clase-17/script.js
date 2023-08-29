const btnAlertar = document.getElementById('botonAlertar')
const btnMostrar = document.getElementById('botonMostrarMensaje')

const handleClickAlert = () =>{
    alert('hola')
}
const sensor = () =>{
    console.log('Se paso por encima de este elemento')
    console.log('Soy otra funcion al pepe')
}
const sensorSalida = () => {
    console.log('Se salio del elemento')
}
btnAlertar.onclick = handleClickAlert

btnMostrar.onclick = () => {
    console.log('Hola')
}

const btnCorrecto = document.getElementById('buttonCorrecto')

btnCorrecto.addEventListener('click', (evento) => {
    console.log(evento)
    alert('HOla')
})  


const cajaHTML = document.querySelector('.caja')

const activarSensor = (evento) =>{
    console.log(new Date())
    console.log(evento)
    if(evento.type === 'mouseover'){
        console.log('Se esta pasando por encima del sensor')
       
    }
    else if(evento.type === 'mouseout'){
        console.log('Se esta saliendo del sensor')
    }
}


cajaHTML.addEventListener('mouseover', activarSensor)
cajaHTML.addEventListener('mouseout', activarSensor)





let contador = 1

const btnIncrementar = document.querySelector('.btnIncrementar')
const btnDecrementar = document.querySelector('.btnDecrementar')
const contadorHTML = document.querySelector('#contador')
const msjError =  document.querySelector('.msjError')
btnIncrementar.addEventListener('click', () =>{
    if(contador < 10){
        contadorHTML.innerText = ++contador
        msjError.innerText = ''
    }else{
        msjError.innerText = 'NO PUEDES INCREMENTAR MAS DE 10'
    }
})

btnDecrementar.addEventListener('click', ()=>{
    if(contador > 1){
        contadorHTML.innerText =  --contador
        msjError.innerText =  ''
    }else{
        msjError.innerText = 'NO PUEDES CONTAR MENOS DE 1'
    }
})

/* 
Si el contador esta en 1 no debera bajar a menos de 1 (osea se queda igual)
Si el contador esta en 10 no debera incrementar a mas de 10 (tambien se queda igual)
*/



/* 
Si el usuario da click en decrementar y el valor es 1 entonces escribir aldado en rojo (dentro de un span ) NO PUEDES CONTAR MENOS DE 1

Si el usuario da click en incrementar y el valor es 10 entonces escribir aldado en rojo, NO PUEDES INCREMENTAR MAS DE 10

Si cualquiera de los mensajes se mostro PERO, se incremento o decremento (dependiendo del error) debera dejar de mostrarse
*/



const mensajeHTML = document.getElementById('mensaje')


const btnVer = document.getElementById('btnVer')

btnVer.addEventListener('click', () =>{
    mensajeHTML.classList.toggle('ocultar')
})

/* 
Crear un parrafo con un lorem, luego crear un boton, cuando le demos click al boton el parrafo se debera ocultar y al darle click otra vez se debera mostrar
*/


/* 

MOSTRAR Y OCULTAR RECOMENDADOS

Crear un array de objetos con usuarios donde cada usuario tenga las propiedaes:

-Nombre
-Nickname
-Descripcion

A parir de este array de objetos generar una carta por cada usuario con la sig forma

<div>
    <h2>Nombre</h2>
    <h3>Nick</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi error dicta nostrum atque dolor consequuntur? Praesentium nesciunt quae fugiat fugit repellendus sequi unde eligendi mollitia. Cumque quaerat aut eum repellat.</p>
</div>

TODOS LAS PERSONAS SE DEBERAN RENDERIZAR EN UN DIV CONTENEDOR

crear un boton que diga <button>Ocultar recomendados</button>
Al darle click el boton ocultara los recomendados y su texto cambiara a <button>Mostrar recomendados</button>
Al darle click otra vez mostrara los recomendados y volvera a cambiar el texto (asi por cada vez que vayamos ocultando y mostrando)


----------------------------------------------------------------------------------

*/