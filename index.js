const productos = [
    {nombre: "Brittany T",precio: 20000,},
    {nombre: "Brittany G",precio: 25000,},
    {nombre: "Brittany W",precio: 30000,},
    {nombre: "Brittany WS",precio: 15000,},
    {nombre: "Brittany CH",precio: 18000,},
    {nombre: "Brittany WW",precio: 17000,},
    {nombre: "Brittany ASD",precio: 32000,},
    {nombre: "Brittany ZZA",precio: 45000,},
    {nombre: "Brittany SDK",precio: 44000,},
];

let carrito= [];

let seleccion= prompt("¿Desea comprar alguno de nuestros productos? si/no")

while (seleccion != "si" && seleccion != "no"){
    alert ("Por favor ingresar si o no")
    seleccion =prompt("Nuevamente te preguntamos ¿Desea comprar alguno de nuestros productos? si/no");
}

if (seleccion == "si") {
    alert("A continuación encontrará nuestra lista de productos, digite el nombre del producto que desea")
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$");
        alert(todoslosProductos.join(" - "));
} else if (seleccion == "no"){
    alert("Gracias por tu visita a nuestra tienda virtual");
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if (producto == "Brittany T" || producto == "Brittany G" || producto == "Brittany W" || producto == "Brittany WS" || producto == "Brittany CH" || producto == "Brittany WW" ||producto == "Brittany ASD" ||producto == "Brittany ZZA" ||producto == "Brittany SDK"){
        switch(producto){
            case "Brittany T":
                precio = 20000;
                break;
            case "Brittany G":
                precio = 25000;
                break;
            case "Brittany W":
                precio = 30000;
                break;
            case "Brittany WS":
                precio = 15000;
                break;
            case "Brittany CH":
                precio = 18000;
                break;
            case "Brittany WW":
                precio = 17000;
                break;
            case "Brittany ASD":
                precio = 32000;
                break;
            case "Brittany ZZA":
                precio = 45000;
                break;
            case "Brittany SDK":
                precio = 44000;
                break;
        }
    let unidades= parseInt(prompt("¿Cuántas unidades quieres llevar?"));
    
    carrito.push({producto,unidades,precio})
    console.log(carrito)
    } else{
        alert("No tenemos ese producto")
    }
    seleccion= prompt("¿Quieres seguir comprando?")

    while(seleccion == "no"){
        alert=("Gracias por tu compra")
        let carritoFinal= carrito.map(
            (carritoF) => carritoF.producto + " " + carritoF.unidades + " " + carritoF.unidades * carritoF.precio);
        console.log(carritoFinal)
        break;
    }

}
const totalCompra = carrito.reduce ((acc,el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar es: ${totalCompra}`)









// carrito.forEach((carritoFinal) => {
//     console.log(`producto:${carritoFinal.producto}, unidades:${carritoFinal,unidades}, total por producto:${carritoFinal.unidades * carritoFinal.precio}`)
// })




// let mensaje = "";
// function mostrarProductos(){
//     for (let index = 0; index < productos.length; index++) {
//         const producto = productos[index];
//         mensaje+= `Nombre:${producto.nombre} Precio:$${producto.precio} Ref: ${index}`
//     }
//     return mensaje;
// }


// const carrito= [];
// function agregarCarrito(producto){
//     carrito.push(producto)
// }

// let seguirComprando= "si";

// while (seguirComprando.toLocaleLowerCase() != "no") {
//     let productosSeleccionados = +prompt(mostrarProductos())
//     agregarCarrito()
//     seguirComprando=prompt("Desea seguir comprando (si/no)")
// }


 



