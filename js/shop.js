const JSONURLPRODUCTS = '../productosShop.json'
let save = document.getElementById("save")
let mostrarCarrito = document.getElementById("comprasCarrito")
let DOMcarrito = document.getElementsByClassName("list-shop")
const mostrarCarritoVisibleOut = document.querySelectorAll("#comprasCarritoVisible")
const mostrarCarritoVisibleLogged = document.querySelectorAll("#comprasCarrito")
//-->CARGAR PRODUCTOS SHOP
const cargaProductos = () => {
    $.get(`${JSONURLPRODUCTS}`, (respuesta, estado) => {
        if (estado === "success") {
            for (let i = 0; i < respuesta.length; i++) {
                if (i < 8) {
                    $('#primerCuadrante').append(`<div class="card" id="cardID" style="width: 18rem;">
                    <div class="card-body cardStyle-Shop">
                        <img src="${respuesta[i].source}" class="card-title" alt="cardProduct" data-aos="fade-left">    
                        <p class="card-text" data-aos="fade-left">
                            “${respuesta[i].nombre}"
                            💲${respuesta[i].precio}ARS    
                        </p>                        
                        <button class="btn btn-primary" id=${respuesta[i].id} data-bs-toggle="modal" data-bs-target="#buyConfirm">Comprar</a>
                    </div>
                </div>`)
                } else if (i >= 8 && i < 16) {
                    $('#segundoCuadrante').append(`<div class="card" id="cardID" style="width: 18rem;">
                    <div class="card-body cardStyle-Shop">
                        <img src="${respuesta[i].source}" class="card-title" alt="cardProduct"
                            data-aos="fade-left">

                        <p class="card-text" data-aos="fade-left">
                            “${respuesta[i].nombre}"<br>
                            💲${respuesta[i].precio}ARS

                        </p>
                        <br><br>
                        <button class="btn btn-primary" id=${respuesta[i].id} data-bs-toggle="modal"
                            data-bs-target="#buyConfirm">Comprar</a>
                    </div>
                </div>`)

                } else if (i >= 16 && i < 24) {
                    $('#tercerCuadrante').append(`<div class="card" id="cardID" style="width: 18rem;">
                    <div class="card-body cardStyle-Shop">
                        <img src="${respuesta[i].source}" class="card-title" alt="cardProduct"
                            data-aos="fade-left">

                        <p class="card-text" data-aos="fade-left">
                            “${respuesta[i].nombre}"<br>
                            💲${respuesta[i].precio}ARS

                        </p>
                        <br><br>
                        <button class="btn btn-primary" data-bs-toggle="modal" id=${respuesta[i].id}
                            data-bs-target="#buyConfirm">Comprar</a>
                    </div>
                </div>`)
                } else if (i >= 24 && i < 32) {
                    $('#cuartoCuadrante').append(`<div class="card" id="cardID" style="width: 18rem;">
                    <div class="card-body cardStyle-Shop">
                        <img src="${respuesta[i].source}" class="card-title" alt="cardProduct"
                            data-aos="fade-left">

                        <p class="card-text" data-aos="fade-left">
                            “${respuesta[i].nombre}"<br>
                            💲${respuesta[i].precio}ARS

                        </p>
                        <br><br>
                        <button class="btn btn-primary" data-bs-toggle="modal" id=${respuesta[i].id}
                            data-bs-target="#buyConfirm">Comprar</a>
                    </div>
                </div>`)
                }

            }
            elementproduct1.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[0].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[0].precio + "ARS";
                precioModal[0].textContent = respuesta[0].precio;
                ImagenModal[0].src = respuesta[0].source;
            })
            elementproduct2.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[1].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[1].precio + "ARS";
                precioModal[0].textContent = respuesta[1].precio;
                ImagenModal[0].src = respuesta[1].source;
            })
            elementproduct3.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[2].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[2].precio + "ARS";
                precioModal[0].textContent = respuesta[2].precio;
                ImagenModal[0].src = respuesta[2].source;
            })
            elementproduct4.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[3].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[3].precio + "ARS";
                precioModal[0].textContent = respuesta[3].precio;
                ImagenModal[0].src = respuesta[3].source;
            })
            elementproduct5.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[4].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[4].precio + "ARS";
                precioModal[0].textContent = respuesta[4].precio;
                ImagenModal[0].src = respuesta[4].source;
            })
            elementproduct6.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[5].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[5].precio + "ARS";
                precioModal[0].textContent = respuesta[5].precio;
                ImagenModal[0].src = respuesta[5].source;
            })
            elementproduct7.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[6].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[6].precio + "ARS";
                precioModal[0].textContent = respuesta[6].precio;
                ImagenModal[0].src = respuesta[6].source;
            })
            elementproduct8.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[7].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[7].precio + "ARS";
                precioModal[0].textContent = respuesta[7].precio;
                ImagenModal[0].src = respuesta[7].source;
            })
            elementproduct9.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[8].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[8].precio + "ARS";
                precioModal[0].textContent = respuesta[8].precio;
                ImagenModal[0].src = respuesta[8].source;
            })
            elementproduct10.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[9].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[9].precio + "ARS";
                precioModal[0].textContent = respuesta[9].precio;
                ImagenModal[0].src = respuesta[9].source;
            })
            elementproduct11.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[10].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[10].precio + "ARS";
                precioModal[0].textContent = respuesta[10].precio;
                ImagenModal[0].src = respuesta[10].source;
            })
            elementproduct12.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[11].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[11].precio + "ARS";
                precioModal[0].textContent = respuesta[11].precio;
                ImagenModal[0].src = respuesta[11].source;
            })
            elementproduct13.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[12].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[12].precio + "ARS";
                precioModal[0].textContent = respuesta[12].precio;
                ImagenModal[0].src = respuesta[12].source;
            })
            elementproduct14.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[13].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[13].precio + "ARS";
                precioModal[0].textContent = respuesta[13].precio;
                ImagenModal[0].src = respuesta[13].source;
            })
            elementproduct15.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[14].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[14].precio + "ARS";
                precioModal[0].textContent = respuesta[14].precio;
                ImagenModal[0].src = respuesta[14].source;
            })
            elementproduct16.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[15].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[15].precio + "ARS";
                precioModal[0].textContent = respuesta[15].precio;
                ImagenModal[0].src = respuesta[15].source;
            })
            elementproduct17.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[16].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[16].precio + "ARS";
                precioModal[0].textContent = respuesta[16].precio;
                ImagenModal[0].src = respuesta[16].source;
            })
            elementproduct18.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[17].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[17].precio + "ARS";
                precioModal[0].textContent = respuesta[17].precio;
                ImagenModal[0].src = respuesta[17].source;
            })
            elementproduct19.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[18].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[18].precio + "ARS";
                precioModal[0].textContent = respuesta[18].precio;
                ImagenModal[0].src = respuesta[18].source;
            })
            elementproduct20.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[19].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[19].precio + "ARS";
                precioModal[0].textContent = respuesta[19].precio;
                ImagenModal[0].src = respuesta[19].source;
            })
            elementproduct21.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[20].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[20].precio + "ARS";
                precioModal[0].textContent = respuesta[20].precio;
                ImagenModal[0].src = respuesta[20].source;
            })
            elementproduct22.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[21].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[21].precio + "ARS";
                precioModal[0].textContent = respuesta[21].precio;
                ImagenModal[0].src = respuesta[21].source;
            })
            elementproduct23.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[22].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[22].precio + "ARS";
                precioModal[0].textContent = respuesta[22].precio;
                ImagenModal[0].src = respuesta[22].source;
            })
            elementproduct24.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[23].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[23].precio + "ARS";
                precioModal[0].textContent = respuesta[23].precio;
                ImagenModal[0].src = respuesta[23].source;
            })
            elementproduct25.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[24].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[24].precio + "ARS";
                precioModal[0].textContent = respuesta[24].precio;
                ImagenModal[0].src = respuesta[24].source;
            })
            elementproduct26.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[25].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[25].precio + "ARS";
                precioModal[0].textContent = respuesta[25].precio;
                ImagenModal[0].src = respuesta[25].source;
            })
            elementproduct27.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[26].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[26].precio + "ARS";
                precioModal[0].textContent = respuesta[26].precio;
                ImagenModal[0].src = respuesta[26].source;
            })
            elementproduct28.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[27].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[27].precio + "ARS";
                precioModal[0].textContent = respuesta[27].precio;
                ImagenModal[0].src = respuesta[27].source;
            })
            elementproduct29.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[28].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[28].precio + "ARS";
                precioModal[0].textContent = respuesta[28].precio;
                ImagenModal[0].src = respuesta[28].source;
            })
            elementproduct30.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[29].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[29].precio + "ARS";
                precioModal[0].textContent = respuesta[29].precio;
                ImagenModal[0].src = respuesta[29].source;
            })
            elementproduct31.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[30].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[30].precio + "ARS";
                precioModal[0].textContent = respuesta[30].precio;
                ImagenModal[0].src = respuesta[30].source;
            })
            elementproduct32.addEventListener("click", () => {
                let nombreModal = document.getElementsByClassName("Descripcion");
                let precioModal = document.getElementsByClassName("precio");
                let precioModalVista = document.getElementsByClassName("vistaPrecio");
                let ImagenModal = document.getElementsByClassName("imagenModal");
                nombreModal[0].textContent = respuesta[31].nombre;
                precioModalVista[0].textContent = "💲" + respuesta[31].precio + "ARS";
                precioModal[0].textContent = respuesta[31].precio;
                ImagenModal[0].src = respuesta[31].source;
            })
            save.addEventListener("click", guardarStorage)
        }
    })
}
cargaProductos();
mostrarCarrito.addEventListener("click", mostrarCarro)