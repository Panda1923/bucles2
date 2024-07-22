//point 1//
//let numero = prompt("Ingrese un número:");
//numero = parseInt(numero);
//for (let i = 1; i <= 10; i++) {
//    console.log(`${numero} x ${i} = ${numero * i}`);
//}

//point 2

/*let suma = 8;
let numero;
do {
    numero = parseInt(prompt("Ingresa un número (0 para terminar):"));
    if (numero !== 0) {
        suma += numero;
    }
} while (numero !== 0);
console.log("La suma total es: " + suma);*/

//point 3

/*const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let numeroIngresado;
    let intentos = 0;
    do {
        numeroIngresado = parseInt(prompt("Adivina el número entre (1-100):"));
        intentos++;
        if (numeroIngresado < numeroSecreto) {
            console.log("Más alto");
        } else if (numeroIngresado > numeroSecreto) {
            console.log("Más bajo");
        }
    } while (numeroIngresado !== numeroSecreto);
    console.log(`Felicitaciones! Adivinaste el número en ${intentos} intentos.`);*/

    //point4

    /*function esPrimo(numero) {
        if (numero <= 1) return false;
        if (numero === 2) return true;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    }
    let numero = parseInt(prompt("Ingrese un número"));
    if (esPrimo(numero)) {
        console.log(numero + " es un número primo");
    } else {
        console.log(numero + " no es un número primo");
    }*/

        //point5//

            /*const numero = parseInt(prompt("Ingrese un número:"));
            console.log(`Divisores de ${numero}:`);
            for (let i = 1; i <= numero; i++) {
                if (numero % i === 0) {
                    console.log(i);
                }
            }*/
    
        //point6//

        /*let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        for (let i = 0; i < array.length; i++) {
            console.log("Elemento en la posición " + i + ": " + array[i]);
        }*/

        //point7//

        /*let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 520];

        for (let i = 0; i < array.length; i++) {
            console.log("El doble de " + array[i] + " es " + (array[i] * 2));
        }*/

        //point8//

       /* let familia = [
            { nombre: "Jonathan", edad: 41, parentesco: "Padre", ocupacion: "Ingeniero" },
            { nombre: "Jenny", edad: 45, parentesco: "Madre", ocupacion: "Doctora" },
            { nombre: "Juan", edad: 10, parentesco: "Hijo", ocupacion: "Estudiante" },
            { nombre: "Maria", edad: 42, parentesco: "Hija", ocupacion: "Estudiante" },
            { nombre: "Monica", edad: 65, parentesco: "Abuela", ocupacion: "casa" }
        ];
        
        for (let i = 0; i < familia.length; i++) {
            let persona = familia[i];
            console.log(`hi, mi nombre es ${persona.nombre}, tengo ${persona.edad} años, soy el/la ${persona.parentesco} y trabajo como ${persona.ocupacion}.`);
        }*/

            //point9//

           /* let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ,11 ,12 ,13];

            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 !== 0) {
                    console.log(array[i] + " es impar.");
                }
            }*/
           //point10//
/*let sumaPares = 0;
let sumaImpares = 0;
let numero;
do {
    numero = parseInt(prompt("Ingresa un número (0 para terminar):"), 10);
    if (numero !== 0) {
        if (numero % 2 === 0) {
            sumaPares += numero;
        } else {
            sumaImpares += numero;
        }
    }
} while (numero !== 0);
console.log("La suma de los números pares es: " + sumaPares);
console.log("La suma de los números impares es: " + sumaImpares);*/

//point11//

/*let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12];
let max = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log("El número más grande es: " + max);*/

//point12//

/*let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
}
console.log("El número más pequeño es: " + min);*/

//point13//

/*let jugador1 = prompt("Ingresa el nombre del Jugador 1:");
let jugador2 = prompt("Ingresa el nombre del Jugador 2:");
let mano1, mano2;

do {
    mano1 = prompt(jugador1 + ", elige piedra, papel o tijeras:");
    mano2 = prompt(jugador2 + ", elige piedra, papel o tijeras:");

    if (mano1 === mano2) {
        console.log("Empate, jueguen otra vez.");
    } else if (
        (mano1 === "piedra" && mano2 === "tijeras") ||
        (mano1 === "papel" && mano2 === "piedra") ||
        (mano1 === "tijeras" && mano2 === "papel")
    ) {
        console.log(jugador1 + " gana!");
        break;
    } else {
        console.log(jugador2 + " gana!");
        break;
    }
} while (true);*/
  
//point14//

/*let n = 5;
for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
}*/

//point15//

/*let n = 5;
for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i));
}*/


let array = [10, 3, 5, 2, 8, 6, 7, 1, 9, 4];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log("Array ordenado: " + array);