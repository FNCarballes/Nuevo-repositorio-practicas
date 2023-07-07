//Desestructuracion de datos
import {
	barcelona,
	roma,
	paris,
	londres
} from './ciudades.js' //Porque esta en una misma carpeta el ./

//Obtener los elementos del DOM Document object model
let enlaces = document.querySelectorAll("a")
let tituloElemento = document.getElementById("titulo")
let subTituloElemento = document.getElementById("subtitulo")
let parrafoElemento = document.getElementById("parrafo")
let precioElemento = document.getElementById("precio")
console.log(enlaces);

enlaces.forEach(function(enlace) {
	enlace.addEventListener('click', function() {
		//Remover la clase active de todos los enlaces
		enlaces.forEach(function(enlace) {
			enlace.classList.remove('active')
		});
		//Agregar la clase 'active' al enlace actual
		this.classList.add('active') //This se refiere al elemento que estamos trabajando en el bucle, seria enlace
		//AGREGAR ACTIVE AL QUE CORRESPONDA//

		
		let contenido = obtenerContenido(this.textContent)
		
		tituloElemento.innerHTML = contenido.titulo
		subTituloElemento.innerHTML = contenido.subtitulo
		parrafoElemento.innerHTML = contenido.parrafo
	});
});

//FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE ciudades.js
function obtenerContenido(enlace) {
	let contenido = {
		"Barcelona": barcelona,
		"Roma": roma,
		"París": paris,
		"Londres": londres
	};
	return contenido[enlace];

}