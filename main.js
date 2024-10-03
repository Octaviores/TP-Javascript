//INTRODUCCIÓN A JAVASCRIPT

//Ejercicio 1: Proyecto hecho.

//Ejercicio 2
let a = 3;
let  b = 4;
let c = a+b;

console.log("La suma de a y b es: " + c);
console.log("------------------------------------");

//Ejercicio 3
let nombre = prompt("Por favor, ingresa tu nombre:");

console.log("¡Hola, " + nombre + "! Bienvenido a mi proyecto inicial de Javascript");
console.log("------------------------------------");





//OPERADORES LÓGICOS Y CONDICIONALES

//Ejercicio 1:
let d = 1;
let e = 3;
let f = 2;

if (d>e && d>f){
      console.log("El mayor de los tres números es d = " + d);

}
if (f>e && f>d){
    console.log("El mayor de los tres números es f = " + f);
} 

if (e>f && e>d){
    console.log("El mayor de los tres números es e = " + e);
} 

// Otra forma, probablemente más complicada de leer que la anterior.
if (d>e){
    if(d>f){
        console.log("El mayor de los tres números es d2 = " + d);
    }
    console.log("El mayor de los tres números es f2 = " + f);
} else {
    if (e>f){
        console.log("El mayor de los tres números es e2 = " + e);
    } else{
        console.log("El mayor de los tres números es f2 = " + f);
    }
    
}
console.log("------------------------------------");

//Ejercicio 2
let num = prompt("Por favor, ingrese un número para revelar si es par o impar:");

num = Number(num);

if (num % 2 === 0){
    console.log("El número elegido es par");
} else {
    console.log("El número elegido es impar");
}
console.log("------------------------------------");





//OPERADORES DE ASIGNACIÓN DY BUCLES

//Ejercicio 1
let flag = 10;

while (flag > 0){
    console.log(flag);
    flag--;
}
console.log("------------------------------------");


//Ejercicio 2
let num2;
do{
    num2 = prompt("Por favor, ingrese un número mayor a 100");

    num2 = Number(num2);
    

} while (num2 <= 100 || isNaN(num2));
console.log("Bien hecho, haz ingresado un número mayor a 100: " + num2);
console.log("------------------------------------");




//FUNCIONES DE JAVASCRIPT

//Ejercicio 1
const esPar = (numero) => {
    if (numero % 2 == 0){
        return true;
    } else{
        return false;
    }
}
let nume = 4;
console.log("el número " + nume + ", es par?: " + esPar(nume));
console.log("------------------------------------");

//Ejercicio 2:
const convertirCelsiusAFahrenheit = (C)=> {
    return C * 1.8 + 32
   
}
let grado = 30
let F = convertirCelsiusAFahrenheit(grado)
console.log(grado + "°C son equivalentes a " + F + "°F")
console.log("------------------------------------");





//OBJETOS EN JAVASCRIPT

//Ejercicio 1
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Buenos Aires",

    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
};

console.log("Persona Inicial: ", persona);

persona.cambiarCiudad("Rosario");

console.log("Persona Modificada:", persona);
console.log("------------------------------------");

//Ejercicio 2
let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 1967,

    esAntiguo: function() {
        let añoActual = new Date().getFullYear();
        let antigüedad = añoActual - this.año;

        if (antigüedad > 10) {
            console.log("El libro '" + this.titulo + "' es antiguo.");
        } else {
            console.log("El libro '" + this.titulo + "' es reciente.");
        }
    }
};

libro.esAntiguo();
console.log("------------------------------------");




//ARRAYS

//Ejercicio 1
let arrayI = [1,2,3,4,5,6,7,8,9,10];
let arrayF = [];
for (let i = 0; i<arrayI.length; i++){
    arrayF.push(arrayI[i]*2)
}
console.log("Array original:", arrayI);
console.log("Array multiplicado por 2:", arrayF);
console.log("------------------------------------");

//Ejercicio 2
let pares = [];

for (let i = 0; i <20; i++){
    if (i % 2 == 0){
        pares.push(i);
    }
}
console.log("Array Pares:", pares);





//INTRODUCCIÓN AL DOM


//Ejercicio 1
const button = document.getElementById("button");
const divP = document.querySelectorAll("#parrafo p");

const Estilo =  () => {
    divP.forEach(p =>{
        p.classList.add("blueText");
    });
    
}

button.addEventListener("click", () =>{
    Estilo();
})

//Ejercicio2
const button2 = document.getElementById("button2");


button2.addEventListener("click", () =>{
    const texto = document.getElementById("text").value;
    alert("Ha ingresado el mensaje: " + texto);
})





//EVENTOS EN DOM

//Ejercicio 1
const lista = document.getElementById("Lista");

const items = lista.getElementsByTagName("li");  //Obtengo cada elemento de la lista

/*
No puedo usar forEach, ya que se puede utilizar directamente con arreglos, 
y en este caso, getElementsByTagName devuelve un objeto de tipo
HTMLCollection, que no tiene el método forEach
*/
for (let item of items) {
    item.addEventListener("click", () => {
        console.log(item.textContent); // Muestra el texto del elemento en la consola
    });
}

//Ejercicio 2
const Input2 = document.getElementById("campoTexto");
const deshabilitarBtn = document.getElementById("botonDeshabilitar");
const habilitarBtn = document.getElementById("botonHabilitar");

// Deshabilitar el input
deshabilitarBtn.addEventListener("click", () => {
    Input2.disabled = true; 
});

// Habilitar el input
habilitarBtn.addEventListener("click", () => {
    Input2.disabled = false; 
});





//LOCALSTORAGE

//Ejercicio 1
const botonGuardar = document.getElementById("GuardarCo");
const mostrarcorreo = document.getElementById("correoGuardado");
const btnEliminar = document.getElementById("EliminarCo");

const setInput = () =>{
    const correo = document.getElementById("InputCorreo").value;

    localStorage.setItem("mail", correo,);
}

const persistencia = () =>{
    const salida = localStorage.getItem("mail");
    if (salida){
        mostrarcorreo.textContent = salida
    } else {
        mostrarcorreo.textContent = "El correo ya no existe"
    }
}

btnEliminar.addEventListener("click", () => {
    localStorage.removeItem("mail"); 
    mostrarcorreo.textContent = ""; 
});

botonGuardar.addEventListener("click", () =>{
    setInput();
    persistencia();
});


window.onload = persistencia;