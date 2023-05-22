
class Cantante {

    static id = 1;

    constructor(nombre, edad, stream, genero, nacionalidad) {
        this.id = Cantante.id++;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.genero = genero;
        this.edad = edad;
        this.stream = stream;
    }
}

const cantante1 = new Cantante("Taylor Swift",  "33 años",   "1.340 millones de stream",  "Country-Pop",                "Pensilvania"    );
const cantante2 = new Cantante("Bad Bunny",     "29 años",   "1.310 millones de stream",  "trap latino-Reguetón",     "Puerto Rico"     );
const cantante3 = new Cantante("The Weeknd",    "33 años",   "1.190 millones de stream",     "R&B/soul",                   "Canadá"    );
const cantante4 = new Cantante("Drake",         "36 años",   "934 millones de stream",       "Hip hop-R&B-Pop",                     "Canadá"    );
const cantante5 = new Cantante("SZA ",          "33 años",   "772 millones de stream",       "R&B",                     "Estados Unicos"    );
const cantante6 = new Cantante("Rihanna ",      "33 años",   "717 millones de stream",       "Pop-R&B",                     "Barbados"    );

const cantantes = [
    cantante1,
    cantante2,
    cantante3,
    cantante4,
    cantante5,
    cantante6,
];


const renderizar = (cantantes) => {

    const body = document.getElementById("lista");

    cantantes.forEach(cantante => {

        const div = document.createElement("div");
        div.id = "div"
        div.innerHTML = `
            <h3>${cantante.id}. ${cantante.nombre}</h3>
            <p>Género: ${cantante.genero}</p>
            <p>Edad: ${cantante.edad}</p>
            <p>Stream: ${cantante.stream}</p>
            <p>Nacionalidad: ${cantante.nacionalidad}</p>
            `;
            
        const button = document.createElement("button");
            button.id = cantante.id;
            button.textContent = "Contratar";
            div.appendChild(button);
            body.appendChild(div);


    });

}

renderizar(cantantes);

const json = JSON.stringify(cantantes);
console.log(cantantes);
console.log(json);