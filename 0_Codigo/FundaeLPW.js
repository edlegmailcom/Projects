function prueba(){
    let contador=0; //Variable que puede cambiar
  /*  
    const PI=3.141516; //Constante cuyo valor no cambia
    let nombre = "Alice”; //string
    let edad = 30; //Number
    let persona = {nombre: "Alice", edad: 30 }; // Object

    let estudiante = true; //Boolean
    let indefinido; // Undefined
    let hobbies = null; // Null
    let numeros = [1, 2, 3, 4, 5]; // Array
    
    let suma = 3+5; // Aritmético
    let esMayor = edad > 18; // Comparación
    let esAdulto = esMayor && estudiante; // Lógico
    */return contador;
}
/*  
*/
    

    /*<script>*/
function sumar(sum1, sum2)
{
   let resultado;
   resultado = sum1 + sum2;
   return resultado;
}
function media() {
    let total=0, res, numDatos, item;
    numDatos = arguments.length;
    for (item = 0; item < numDatos; item++)
    {
    total += arguments[item];
    }
    res = total/numDatos;
    return res;
}
function muestraOculta_MF1442_3_Objetivos()
{ 
    dd = document.getElementById('MF1442_3_Objetivos') ;
    if (dd.style.visibility == 'visible'){
        document.getElementById('MF1442_3_Objetivos').style.visibility = 'hidden';
        document.getElementById('MF1442_3_Objetivos').hidden = true;
    }
    else if (dd.style.visibility == 'hidden')
     {document.getElementById('MF1442_3_Objetivos').style.visibility = 'visible';
     document.getElementById('MF1442_3_Objetivos').hidden = false;
     }
    /* let div = document.getElementById("MF1442_3_Objetivos");
  if (div.style.visibility = 'hidden') 
  {
      div.style.visibility = 'visible'
  }
  else 
  { 
      div.style.visibility = 'hidden';
  }
      */
}
/*   alert("4 + 10 = "+ sumar(4, 10) );*/
/*Mostrar resultado*/
function visible(elementId) {
    let div = document.getElementById(elementId);
    div.style.visibility = 'visible'
}

function oculto(elementId) {
    let div = document.getElementById(elementId);
    div.style.visibility = 'hidden';
}

/*</script>*/





/*
let 
const
var
Sensible a mayusculas
estilo camelCase

operadores básicos
Aritmeticos +, -, *, /, ++, --, % (Módulo, resto de una operacion)
Asignación  =, +=, -=
Comparacion ==, ===, !=, !==, <, >
Lógicos, &&, ||, !

5 * 10; // Expresión que se evalúa en 50
If (edad >18) {console.log(“Adulto”); } // Sentencia condicional


let frutas = [“manzana”, “banana”, “cereza” ];
console.log(frutas[0]); // Accede al primer elemento “manzana”
frutas.push(“naranja”); // Agrega “naranja” al final del array

if (condición1) { 
// Bloque de código que se ejecuta si la condición1 es verdadera 
} else if (condicion2) { 
// Bloque de código que se ejecuta si la condicion2 es verdadera 
} else { 
// Bloque de código si ninguna de las dos condiciones es verdadera 
} 
 
condición ? expresión1 : expresion2;
for (inicialización; condición; actualización) { 
// Código a ejecutar en cada iteración 
}
for (let i =1; i <= 5; i++) { 
console.log(i); 
} 
while (condición) { 
// Código a ejecutar mientras la condición sea verdadera 
}

let contador = 0; 
while (contador < 3) { 
console.log(“Hola!”); 
contador++; 
} 

do { 
// Código a ejecutar 
} while (condición);

let números = [1, 2, 3, 4, 5]; 
for (let i=0; i < números.length; i++ ) { 
if (numeros[i] === 3) { 
console.log(numero encontrado.”); 
break; // Sale del bucle for 
} 
}
for (let i = 1; i <= 5; i++) { 
if (i % 2 === 0) { 
continue; // Salta las iteraciones para los números pares 
} 
console.log(i) // Este código solo se ejecuta para números impares 
}

function saludar(nombre) {
console.log(“Hola, “+ nombre + “!”);
}
saludar(“Alice”); // Invocar la función


// Sentencia incondicional
if (edad > 18) {
console.log(“Adulto”);
} else {
console.log(“Menor de edad”);
}
// Bucle
for (let i = 0; i < números.length; i++) {
console.log(numeros[i]);
}

11 Accesibilidad:
// Esto es un comentario de una sola línea
/*
Esto es un comentario
de múltiples líneas
*/
/* let a = 5; let b =10; a = a + b; // Uso de punto y coma


Eventos del mouse
    click: se dispara cuando el usuario hace clic en un elemento.
    dblclick: ocurre cuando el usuario hace doble clic en un elemento.
    mouseover: se activa cuando el cursor del mouse se mueve sobre un elemento.
    mouseout: ocurre cuando el cursor del mouse sale del área de un elemento.
    mousedown: se dispara cuando el usuario presiona un botón del mouse sobre un elemento.
    mouseup: se activa cuando el usuario suelta un botón del mouse sobre un elemento.

Eventos del teclado
    keydown: se dispara cuando el usuario presiona una tecla.
    keyup: ocurre cuando el usuario suelta una tecla presionada.
    keypress: se activa cuando el usuario presiona una tecla que produce un carácter (obsoleto en muchos entornos).

Eventos de la interfaz
    load: se dispara cuando un objeto, como el documento (página web), ha sido completamente cargado.
    unload: ocurre antes de que el documento esté a punto de descargarse completamente.
    resize: se activa cuando se cambia el tamaño de la ventana del navegador.
    scroll: se dispara cuando se desplaza el documento o un elemento.    

Eventos del formulario
    submit: ocurre cuando se envía un formulario.
    change: se dispara cuando el valor de un elemento de formulario (como <input>, <select>) cambia.
    focus: se activa cuando un elemento recibe el foco.
    blur: ocurre cuando un elemento pierde el foco.

Eventos de toque (Touch Events)
    touchstart: se dispara cuando el usuario toca la pantalla.
    touchmove: ocurre cuando el usuario mueve el dedo por la pantalla.
    touchend: se activa cuando el usuario levanta el dedo de la pantalla.

Eventos de Drag & Drop
    dragstart: se dispara cuando el usuario comienza a arrastrar un elemento.
    drag: ocurre mientras el elemento está siendo arrastrado.
    dragend: se activa cuando el usuario suelta el elemento.

Eventos de transición y animación
    transitionend: se dispara cuando una transición CSS ha completado.
    animationstart: ocurre cuando comienza una animación CSS.
    animationend: se activa cuando una animación CSS termina.

const despedirse = function() { console.log(“Adios, mundo!”);};

function sumar(a, b) { // a y b son parámetros
 return a+b;
}
 let resultado = sumar(3, 5); //Los números 3 y 5 son argumentos
 <elemento onnombredelevento=”acción”>
<button onclick=”alert(iHola, mundo!')"»Haz clic en mí</button>
elemento. addEventListenez(tipoDeEvento, manejadorDeEvento, useCapture);

const boton = document. getElementtById( “miBoton');
boton.addEventListener('click', function() {
 alert(' ¡Botón clickeado!');
});
https://www.freecodecamp.org
https://www.codecademy.com/catalog/language/javascript
https://javascript.info
https://jsfiddle.net
https://javascript.info
https://www.w3schools.com/js/
https://developer.mozilla.org/es/docs/Web/JavaScript

*/