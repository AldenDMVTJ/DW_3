const nomb = "german"
const disco = "hola"
const gen = "adios"


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
const cantante5 = new Cantante((nomb),(disco),(gen));
// Clases: generame 6 cantantes mas
const cantante6 = new Cantante({},{},{});
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
        <h4>${cantante.nombre}</h4>
        <br>
        <p>${cantante.genero}</p>
        `;

        // Crear un boton poe cada cantante
        // let boton = document.createElement("button");
        // boton.innerHTML = cantante.id;

        // lista.appendChild(boton);

    });
}

renderizar(cantantes);