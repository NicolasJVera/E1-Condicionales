// Ejercicio 1
/*
const n = prompt("Ingrese Numero")

function RecorrerParImpar(num) {

   for (let i = 0; i <= num; i++) {
       if (i % 2 == 0) {
           console.log(`el numero ${i} es par`);
   
       }
       else {
           console.log(`el numero ${i} es impar`);
       }
       
   }
   
}
resultado = RecorrerParImpar(n)
*/

// Ejercicio 2
/*
function numeroMayor(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} es mayor que ${num2}.`);

    } else if (num1 < num2) {
        console.log(`${num2} es mayor que ${num1}.`);
        
    } else {
        console.log(`${num1} y ${num2} son iguales.`);
    }
}

numeroMayor(5, 3);  
numeroMayor(2, 8);  
numeroMayor(4, 4);
*/

// Ejercicio 3
/*
function esMultplicoDeCinco (num) {
    if(num % 5 === 0) {
        console.log(`${num} es multplico de 5`)
    } else {
        console.log(`${num} no es multplico de 5`)
    }
}

esMultplicoDeCinco(10);
esMultplicoDeCinco(11);
esMultplicoDeCinco(25);
esMultplicoDeCinco(7);
*/

// Ejercicio 4
/*
function mostrarNumeros(num) {
    for (let i = 0; i <= num; i++) {
        console.log(i);
      }
}

mostrarNumeros(10);

console.log(`===============`);

mostrarNumeros(5);
*/

// Ejercicio 5
/*
function imprimirPRepetida(palabra, numero) {
    for (let i = 0; i < numero; i++) {
        console.log(palabra)
    }
}

imprimirPRepetida("Messi", 3);
imprimirPRepetida("Hola", 5);
*/


// Ejercicio 6
/*
const nombres = ["Joel", "Juan", "Pedro", "Javier"];

nombres.forEach((nombre) => {
       console.log(`Nombre: ${nombre}`);
     });
*/

// Ejercicio 7
/*
function imprimirArray() {

    for (let i = 1; i <= 10; i++) {
        if(i !== 4) {
        console.log(`Numero ${i}`)
        continue;
        }
    }
}

imprimirArray(10)
*/

// Ejercicio 8
/*
function multiplicarArrayPorNumero(arr, numero) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] * numero);
    }
}

let numeros = [1, 2, 3, 4];
let multiplicador = 2;
multiplicarArrayPorNumero(numeros, multiplicador);
*/