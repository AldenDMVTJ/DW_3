let nombre = "javascript"; // String o cadena de texto
let numero = 10; // Number
let booleano = true; // Boolean

console.log("hola");
console.log(nombre);

//______________________________________________________________


// f(x) = x + 1

// Entrada
let n1 = parseInt( prompt("Ingrese un número")); //pI: convertir texto en número

// Proceso
n1 = n1 + 1

// Salida
console.log(n1)


//______________________________________________________________

// Concatenación


let nombre1 = prompt("Ingrese su nombre");
let apellido1 = prompt("Ingrese su apellido");
let edad = Number(prompt("Ingrese su edad"));

// concatenación
let r = nombre1 + apellido1

// Template String o plantillas literales
let r2 = `${nombre1} ${apellido1} tiene ${edad + 10} años`

console.log(r);
console.log(r2);

//______________________________________________________________

// Constante
const PI = 3.1414;
console.log(PI);


// *no se puede volver a cambiar una constante*

PI = 4;
console.log(PI);


//______________________________________________________________

// Condicionales


let nota = Number(prompt("Ingrese su nota"))

if (nota >= 7 && nota <= 10){
    // Ejecucion de codigo
    console.log("Aprobado");

}else if (nota >= 1 && nota <= 6){
    // Ejecución de codigo
    console.log("Reprobado");

}else {
    // Ejecución de codigo
    console.log("Nota no valida");
}


//______________________________________________________________

// Bucle

for(let i = 0; i < 10; i=i+1){ 
    console.log(i);
}
//i=i+1 == i++


//-----------------------------


const n2 = Number(prompt("Ingrese el número..."));

for (let i = 0; i <= 12; i++) {
    
    let multi = n2 * 1;
    
    console.log(`
        ${n2} x ${i} = ${multi} 
    `);
}


//-----------------------------


const n3 = Number(prompt("Ingrese el número..."));

let m = document.getElementById("mul");

m.innerHTML = "";

for (let i = 0; i <= 12; i++) {
    
    let multi = n3 * 1;
    
    m.innerHTML += `
        ${n3} x ${i} = ${multi} 
    `;
}



//______________________________________________________________

// Arrays

// Indices     0  1  2  3
const array = [1, 2, 3, 4];// Valores
const nombres = ["juan","Pedro", "Maria","Jose"]
const mixto = ["juan", true, 2.5]

console.log(array[3]);
console.log(nombres[3]);


//______________________________________________________________

//objetos
const messi = {
    nombre: "Leo",
    apellido: "Messi",
    altura: "Altura"
}

//______________________________________________________________

// Arrays de objetos

const productos = [
    {
        nombre: "pantalon",
        precio: 100
    },
    {
        nombre: "camisa",
        precio: 50
    },
    {
        nombre: "Zapatos",
        precio: 200
    }
]

console.log(productos[2].nombre);










//-----------------------------

//Clases
class Cantante {
    // Variable id de la Clase
    static id = 0


    constructor(nombre , discografia, genero){

        //         Aumentar el id
        this.id = Cantante.id++;
        this.nombre = nombre;
        this.discografia = discografia;
        this.genero = genero;
    }
}

const cantante1 = new Cantante("Juan","Discografia","Genero");
const cantante2 = new Cantante("Pedro","Discografia","Genero");
const cantante3 = new Cantante("Brad","Discografia","Genero");
const cantante4 = new Cantante("Mario","Discografia","Genero");
const cantante5 = new Cantante("Nacho","Discografia","Genero");
// Clases: generame 6 cantantes mas
const cantante6 = new Cantante("");
const cantante7 = new Cantante("");

const cantantes = [
    cantante1,
    cantante2,
    cantante3,
    cantante4,
    cantante5,
];

// renderizar en el html

const renderizar = (cantantes) => {
    
    let lista = document.getElementById("lista");

    lista.innerHTML= ""

    cantantes.forEach( (cantante) => {
        
        lista.innerHTML += `
        <li>${cantante.nombre}</li>
        <li>${cantante.genero}</li>
        `;

        // Crear un boton poe cada cantante
        let boton = document.createElement("button");
        boton.innerHTML = cantante.id;

        lista.appendChild(boton);

    });
}

renderizar(cantantes);