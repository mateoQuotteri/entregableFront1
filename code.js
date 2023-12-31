/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];
const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let nuevoNombre = prompt("Ingresa tu nombre")
  datosPersona.nombre = nuevoNombre;

  let año = prompt("Ingresa el año donde naciste");
  año = parseInt(año); 
  let fecha = new Date();
  let nuevaEdad = fecha.getFullYear() - año;
  datosPersona.edad = nuevaEdad;

  let nuevaCiudad = prompt("Ingresa la ciudad en donde vives")
  datosPersona.ciudad = nuevaCiudad;


  let interes = confirm("¿Interes en JavaScript?")
  datosPersona.interesPorJs = (interes === true) ? "Si" : "No";


  return datosPersona
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").textContent = datosPersona.nombre;
  document.getElementById("edad").textContent = datosPersona.edad;
  document.getElementById("ciudad").textContent = datosPersona.ciudad;
  document.getElementById("javascript").textContent = datosPersona.interesPorJs;

}

let boolean = false;
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let lista = document.getElementById("fila");

  if (boolean === false) {
    
    for (let i = 0; i < 3; i++) {
      let caja = document.createElement("div")
    caja.classList.add("caja")
  
    let imagen = document.createElement("img")
    imagen.src = listado[i].imgUrl;
    imagen.alt=  listado[i].lenguajes;
  
    let p1 = document.createElement("p")
    p1.classList.add("lenguajes")
    p1.textContent = "Lenguaje: " +  listado[i].lenguajes
  
  
    let p2 = document.createElement("p")
    p2.classList.add("bimestre")
    p2.textContent = "Bimestre: " +  listado[i].bimestre
    
    
    caja.appendChild(imagen)
    caja.appendChild(p1)
    caja.appendChild(p2)
  
  
    lista.appendChild(caja)
    
    if (i === 2) {
      boolean = true
    }
    }
  }
 

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  document.getElementById("sitio").classList.toggle("dark")


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */


window.addEventListener("keypress", (e)=> {
  if (e.key == "f") {
    document.getElementById("sobre-mi").classList.remove("oculto")
  }
})

