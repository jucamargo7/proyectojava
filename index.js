//Arreglo de productos
const productos = [
    {
        id: 1,
        nombre: "Brittany T",
        precio: 20000,
        imagen: "./ImagenesProyecto/Arete1.jpg",
    },
    {
        id: 2,
        nombre: "Brittany G",
        precio: 25000,
        imagen: "./ImagenesProyecto/Arete2.jpg",
    },
    {
        id: 3,
        nombre: "Brittany W",
        precio: 30000,
        imagen: "./ImagenesProyecto/Arete3.jpg",
    },
    {
        id: 4,
        nombre: "Brittany WS",
        precio: 15000,
        imagen: "./ImagenesProyecto/Anillo1.jpg",
    },
    {
        id: 5,
        nombre: "Brittany CH",
        precio: 18000,
        imagen: "./ImagenesProyecto/Anillo2.jpg",
    },
    {
        id: 6,
        nombre: "Brittany WW",
        precio: 17000,
        imagen: "./ImagenesProyecto/Anillo3.jpg",
    },
    {
        id: 7,
        nombre: "Brittany ASD",
        precio: 32000,
        imagen: "./ImagenesProyecto/Collar1.jpg",
    },
    {
        id: 8,
        nombre: "Brittany ZZA",
        precio: 45000,
        imagen: "./ImagenesProyecto/Collar2.jpg",
    },
    {
        id: 9,
        nombre: "Brittany SDK",
        precio: 44000,
        imagen: "./ImagenesProyecto/Collar3.jpg",
    },
    {
        id: 10,
        nombre: "Brittany SDK",
        precio: 44000,
        imagen: "./ImagenesProyecto/Collar3.jpg",
    },
    {
        id: 11,
        nombre: "Brittany SDK",
        precio: 44000,
        imagen: "./ImagenesProyecto/Collar3.jpg",
    },
    {
        id: 12,
        nombre: "Brittany SDK",
        precio: 44000,
        imagen: "./ImagenesProyecto/Collar3.jpg",
    },
    {
        id: 13,
        nombre: "Brittany SDK",
        precio: 44000,
        imagen: "./ImagenesProyecto/Collar3.jpg",
    },
];


let carrito =[]


//Funcionamiento con Json

// $.get('datos.json', (data) => {
//     data.forEach((prod) => {
//       let contenido = document.createElement('div');
//       contenido.innerHTML = `
//         <div class="col">
//           <div class="card">
//             <img src="${prod.imagen}" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${prod.nombre}</h5>
//               <p class="card-text">${prod.precio}</p>
//             </div>
//           </div>
//         </div>
//       `;
  
//       tarjeta.append(contenido);
  
//       let botonComprar = document.createElement('button');
//       botonComprar.className = 'botonComprar';
//       botonComprar.innerHTML = 'Agregar al carrito';
  
//       contenido.append(botonComprar);
  
//       botonComprar.addEventListener('click', () => {
//         carrito.push({
//           id: prod.id,
//           nombre: prod.nombre,
//           precio: prod.precio,
//         });
//         console.log(carrito);
//       });
//     });
//   });
  



//Creación de productos
let tarjeta= document.querySelector("#cardDesign")

productos.forEach((prod) =>{
    let contenido = document.createElement ('div')
    contenido.innerHTML =`
        <div class="col">
        <div class="card">
          <img src="${prod.imagen}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text">${prod.precio}</p>
          </div>
        </div>`
    
        tarjeta.append(contenido)
    
        let botonComprar =document.createElement ('button')
        botonComprar.className = "botonComprar"
        botonComprar.innerHTML = "Agregar al carrito";

        contenido.append(botonComprar)
     
        botonComprar.addEventListener("click", () =>{
            carrito.push({
                id: prod.id,
                nombre: prod.nombre,
                precio: prod.precio,
            });
            console.log(carrito)
            guardarCarrito();

        })
    }
)


//Local Storage

const guardarCarrito =() => {
localStorage.setItem("carrito", JSON.stringify (carrito));
};




//Funcionamiento carrito



let contendorModal =document.querySelector("#infoCarrito")
const verCarrito =document.getElementById("contenedorCarrito");



const carritoFunciona = () =>{
    contendorModal.innerHTML= "";
    carrito.forEach((prod)=>{
        const modalCuerpo = document.createElement('div');
        modalCuerpo.className= "containerCuerpo"
        modalCuerpo.innerHTML= `
            <div class="cartProduct">
            <div class="infoCartProduct">
            <span class="cantidadProductoCarrito">1</span>
            <p class="tituloProductoCarrito">${prod.nombre}</p>
            <span class="precioProductoCarrito">${prod.precio}</span>
            </div>
            </div> 
        ` ;
        contendorModal.append(modalCuerpo)

        let botonEliminar = document.createElement('span')
        botonEliminar.className= "iconoEquis"
        botonEliminar.innerText = `
        x
        `;
        modalCuerpo.append(botonEliminar)

        botonEliminar.addEventListener('click', eliminarDelCarrito);

    })
    
    const total = carrito.reduce((acc,el) => acc + el.precio, 0);

    const totalCompra = document.createElement('div');
    totalCompra.className = "cartTotal";
    totalCompra.innerHTML = `
                <h3>Total</h3>
                <span class="totalPagarCarrito">${total}</span>`;
    contendorModal.append(totalCompra)
}

verCarrito.addEventListener('click', carritoFunciona)

//Eliminar productos del carrito

const eliminarDelCarrito = ( )=>{
    const foundId = carrito.find ((prod) => prod.id);

    carrito = carrito.filter((filtroCarrito) =>{
        return filtroCarrito !== foundId;
    });

    carritoFunciona();
}










// verCarrito.addEventListener('click', () =>{
//         const modalCuerpo = document.createElement('div');
//         modalCuerpo.className= "containerCuerpo"
//         modalCuerpo.innerHTML= `
//             <div class="cartProduct">
//             <div class="infoCartProduct">
//             <span class="cantidadProductoCarrito"></span>
//             <p class="tituloProductoCarrito">CDEC</p>
//             <span class="precioProductoCarrito">DCEAEC</span>
//             </div>
//             <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="iconoEquis">
//             <path stroke-linecap="round" stroke-linejoin="round"
//                 d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636">
//             </path>
//             </svg>
//         </div> 
//         ` ;
//         contendorModal.append(modalCuerpo)
// })
 








// productos.forEach((prod) =>{
//     const {id, nombre, imagen, precio} = prod
//     tarjeta.innerHTML += `
//     <div class="col">
//     <div class="card">
//       <img src="${imagen}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${nombre}</h5>
//         <p class="card-text">${precio}</p>
//         <button onclick="agregarAlCarrito(${id})" >Agregar al carrito</button>
//       </div>
//     </div>`
// })









//Función para agregar al carrito en consola

// const carrito =[]
// function agregarAlCarrito(id){

// const item = productos.find((prod) => prod.id === id)
//     carrito.push(item);
//     console.log(carrito)    
// }









//




// Evento para ocultar el carrito
// const botonCarrito= document.querySelector("#contenedorCarrito")
// const contenedorInfoProducto = document.querySelector('.contenedorProducto')

// botonCarrito.addEventListener('click', () =>{
//     contenedorInfoProducto.classList.toggle('hiddenCart')
// })



// <div class="cartProduct">
//             <div class="infoCartProduct">
//             <span class="cantidadProductoCarrito">1</span>
//             <p class="tituloProductoCarrito">${prod.nombre}</p>
//             <span class="precioProductoCarrito">${prod.precio}</span>
//             </div>
            
//         </div> 



/* <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="iconoEquis">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636">
            </path>
            </svg> */