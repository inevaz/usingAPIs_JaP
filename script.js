document.getElementById('btnGato').addEventListener('click', imagenMichi); //agregar un evento al botón de gato
document.getElementById('btnPerro').addEventListener('click', imagenPerrito); // gregar un evento al botón de perro

function imagenMichi() { //funcion para obtener la imagen de un gato
    fetch('https://api.thecatapi.com/v1/images/search') //peticion a la API de gatos
        .then(response => response.json()) //convertir la respuesta a JSON
        .then(data => { //obtener la URL de la imagen y asignarla a la etiqueta img
            document.getElementById('animalImagen').src = data[0].url; //asignar la URL de la imagen a la etiqueta img
        })
        .catch(error => {
            console.error('Error petición michi:', error); //mostrar un mensaje de error por si sale mal la peticion
        });
}

function imagenPerrito() { //todo lo mismo que la funcion anterior pero para perros
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            document.getElementById('animalImagen').src = data[0].url;
        })
        .catch(error => {
            console.error('Error petición perrito:', error);
        });
}