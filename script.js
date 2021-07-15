// Ejercicios de Local Storage 

/* 1. Formulario de contacto - Local Storage
Crear un formulario de contacto con los siguientes campos:
Nombre
Email
Mensaje
Guardar en Local Storage los datos de contacto enviados de cada usuario
Mostrar los datos de los contactos guardados en el DOM
Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave
*/


document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()

    //Aqui cogemos los valores de los input text
    let name = event.target.name.value
    let email = event.target.email.value
    let message = event.target.mensaje.value
    let borrador = event.target.borrador.value
    

    //Metemos los valores en un array
    let usuarios = [name,email,message]

    //Metemos el array en el localStorage
    localStorage.usuariosStorage = usuarios;

    localStorage.setItem(
        "usuariosStorage",
        JSON.stringify(usuarios)    
    )
    let titulo = ['User', 'Email' , 'Message']
        JSON.parse(localStorage.getItem("usuariosStorage")).map(data=>{
            let datos = document.createElement("p")
            datos.appendChild(document.createTextNode(`${data}`));
            document.getElementById('datos').appendChild(datos)
        })
        
    
   /*  document.querySelector('#boton1').addEventListener('click', (e) =>{
        localStorage.clear();   
        document.getElementById('parrafo').innerHTML = "" //Reseteamos el parrafo
    })

    document.querySelector('#boton2').addEventListener('click', (e) => {
        localStorage.removeItem(borrador);
        document.getElementById('parrafo').innerHTML = "" //Reseteamos el parrafo
        document.getElementById('parrafo').innerHTML += `${usuarios}:${localStorage.getItem(usuarios)} </br>` //Pintamos en el html
        
    })
*/


})





