// const nombre = [
//     "jose",
//     "das",
//     "asdom"
// ]

// function print (arr){
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);

//     }
// }


//_____________________________________________________________

// const nombres = [
//     "jose",
//     "das",
//     "asdom"
// ]

// let nombre = prompt("Ingrese un nombre")

// nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)

// console.log(nombre);

// let index = nombre.indexOf(nombre);

// if (index !== -1) {
//     console.log("El elemento se encuentra en el array");
// }else{
//     console.log("El elemento no se encuentra en el array");
// }




//____________________________________________________________

// const nombres = [
//     "jose",
//     "das",
//     "asdom"
// ]

// function mostrarNombre(arr){
//     let nombre = `Digite el numero correspondiente`
//     nombre += `al nombre`

//     arr.forEach( (e , index) => {

//         let nombre = `Digite el numero correspondiente`
//         nombre += (index +1) + "" + e + "\n";
//     });

//     return nombre
// }

// const pregunta = d;




//------------------------------------------------------------------------








var gatos = [
    {
        color: 'azul',
        nombre: 'gru',
        edad: 2
    },
    {
        color: 'rojo',
        nombre: 'Zeus',
        edad: 5
    },
    {
        color: 'Naranja',
        nombre: 'Coby',
        edad: 37
    },
];

var dobleEdad = gatos.map(doblar)
console.log(dobleEdad)

function doblar(gato){
    return gato.edad * 2;
}