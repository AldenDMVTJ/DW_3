//_____Desafio 2_______________________________

    // const apodos = ["Aldo","Alberto","Juan"]
    // const nuevosApodos = [...apodos, "Elden","Máni"]

    // nuevosApodos.map(apodo => console.log(apodo))



//_____Desafio 3_______________________________



document.getElementById("form").addEventListener("submit", (e)=>{

    e.preventDefault();

    let nombre      =   document.getElementById("nombre").value;
    let apellido    =   document.getElementById("apellido").value;
    let email       =   document.getElementById("email").value;
    let mensaje     =   document.getElementById("mensaje").value;

    const datos = {
        nombre,
        apellido,
        email,
        mensaje,
    }

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("datos").innerHTML = JSON.parse(data);
    })
        
})