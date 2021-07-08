const JSONURL = './carrousel.json'
const JSONURLSECOND = './productos.json'
let save = document.getElementById("save")
let mostrarCarrito = document.getElementById("comprasCarrito")
let DOMcarrito = document.getElementsByClassName("list-shop")
const mostrarCarritoVisibleOut = document.querySelectorAll("#comprasCarritoVisible")
const mostrarCarritoVisibleLogged = document.querySelectorAll("#comprasCarrito")

//--> END CARGAR PRODUCTOS SHOP

//-->CARGAR PREMIUM CARROUSEL
const cargaCarrousel = () => {
    $.get(`${JSONURL}`, (respuesta, estado) => {
        if (estado === "success") {
            for (let i = 0; i < respuesta.length; i++) {
                if (i < 4) {
                    $('#primerCarrousel').append(`<div class="col-3 float-left">
                                                        <button id="${respuesta[i].id}" data-bs-toggle="modal" data-bs-target="#exampleModal"><img class="img-fluid" src="${respuesta[i].src}"></button>
                                                        </div>`)
                } else {
                    $('#segundoCarrousel').append(`<div class="col-3 float-left">
                    <button id="${respuesta[i].id}" data-bs-toggle="modal" data-bs-target="#exampleModal"><img class="img-fluid" src="${respuesta[i].src}"></button>
                    </div>`)
                }
            }
            $.get(`${JSONURLSECOND}`, (respuesta2, estado2) => {
                if (estado2 === "success") {
                    element1.addEventListener("click", () => {
                        let nombreModal = document.getElementsByClassName("Descripcion");
                        let precioModal = document.getElementsByClassName("precio");
                        let precioModalVista = document.getElementsByClassName("vistaPrecio");
                        let ImagenModal = document.getElementsByClassName("imagenModal");
                        nombreModal[0].textContent = respuesta2[0].nombre;
                        precioModalVista[0].textContent = "💲" + respuesta2[0].precio + "ARS";
                        precioModal[0].textContent = respuesta2[0].precio;
                        ImagenModal[0].src = respuesta2[0].source;
                    })
                    element2.addEventListener("click", () => {
                        let nombreModal = document.getElementsByClassName("Descripcion");
                        let precioModal = document.getElementsByClassName("precio");
                        let precioModalVista = document.getElementsByClassName("vistaPrecio");
                        let ImagenModal = document.getElementsByClassName("imagenModal");
                        let save = document.getElementsByClassName("save")
                        nombreModal[0].textContent = respuesta2[1].nombre;
                        precioModalVista[0].textContent = "💲" + respuesta2[1].precio + "ARS";
                        precioModal[0].textContent = respuesta2[1].precio;
                        ImagenModal[0].src = respuesta2[1].source;
                    })
                    element3.addEventListener("click", () => {
                        let nombreModal = document.getElementsByClassName("Descripcion");
                        let precioModal = document.getElementsByClassName("precio");
                        let precioModalVista = document.getElementsByClassName("vistaPrecio");
                        let ImagenModal = document.getElementsByClassName("imagenModal");
                        let save = document.getElementsByClassName("save")
                        nombreModal[0].textContent = respuesta2[2].nombre;
                        precioModalVista[0].textContent = "💲" + respuesta2[2].precio + "ARS";
                        precioModal[0].textContent = respuesta2[2].precio;
                        ImagenModal[0].src = respuesta2[2].source;
                    })
                    element4.addEventListener("click", () => {
                        let nombreModal = document.getElementsByClassName("Descripcion");
                        let precioModal = document.getElementsByClassName("precio");
                        let precioModalVista = document.getElementsByClassName("vistaPrecio");
                        let ImagenModal = document.getElementsByClassName("imagenModal");
                        let save = document.getElementsByClassName("save")
                        nombreModal[0].textContent = respuesta2[3].nombre;
                        precioModalVista[0].textContent = "💲" + respuesta2[3].precio + "ARS";
                        precioModal[0].textContent = respuesta2[3].precio;
                        ImagenModal[0].src = respuesta2[3].source;
                    })
                    element5.addEventListener("click", () => {
                        let nombreModal = document.getElementsByClassName("Descripcion");
                        let precioModal = document.getElementsByClassName("precio");
                        let precioModalVista = document.getElementsByClassName("vistaPrecio");
                        let ImagenModal = document.getElementsByClassName("imagenModal");
                        let save = document.getElementsByClassName("save")
                        nombreModal[0].textContent = respuesta2[4].nombre;
                        precioModalVista[0].textContent = "💲" + respuesta2[4].precio + "ARS";
                        precioModal[0].textContent = respuesta2[4].precio;
                        ImagenModal[0].src = respuesta2[4].source;
                    })
                    element6.addEventListener("click", () => {
                        let nombreModal = document.getElementsByClassName("Descripcion");
                        let precioModal = document.getElementsByClassName("precio");
                        let precioModalVista = document.getElementsByClassName("vistaPrecio");
                        let ImagenModal = document.getElementsByClassName("imagenModal");
                        let save = document.getElementsByClassName("save")
                        nombreModal[0].textContent = respuesta2[5].nombre;
                        precioModalVista[0].textContent = "💲" + respuesta2[5].precio + "ARS";
                        precioModal[0].textContent = respuesta2[5].precio;
                        ImagenModal[0].src = respuesta2[5].source;
                    })
                    element7.addEventListener("click", () => {
                        let nombreModal = document.getElementsByClassName("Descripcion");
                        let precioModal = document.getElementsByClassName("precio");
                        let precioModalVista = document.getElementsByClassName("vistaPrecio");
                        let ImagenModal = document.getElementsByClassName("imagenModal");
                        let save = document.getElementsByClassName("save")
                        nombreModal[0].textContent = respuesta2[6].nombre;
                        precioModalVista[0].textContent = "💲" + respuesta2[6].precio + "ARS";
                        precioModal[0].textContent = respuesta2[6].precio;
                        ImagenModal[0].src = respuesta2[6].source;
                    })
                    element8.addEventListener("click", () => {
                        let nombreModal = document.getElementsByClassName("Descripcion");
                        let precioModal = document.getElementsByClassName("precio");
                        let precioModalVista = document.getElementsByClassName("vistaPrecio");
                        let ImagenModal = document.getElementsByClassName("imagenModal");
                        let save = document.getElementsByClassName("save")
                        nombreModal[0].textContent = respuesta2[7].nombre;
                        precioModalVista[0].textContent = "💲" + respuesta2[7].precio + "ARS";
                        precioModal[0].textContent = respuesta2[7].precio;
                        ImagenModal[0].src = respuesta2[7].source;
                    })
                }
            })

            save.addEventListener("click", guardarStorage)
        }

    })
}
cargaCarrousel();

mostrarCarrito.addEventListener("click", mostrarCarro)


//END CARGAR PREMIUM CARROUSEL-->

$('.containerButton_Message').prepend(
    '<button class="btn btn-primary sizzingButton" id="buttonContact" type="button" data-bs-toggle="modal" data-bs-target="#modalContact">Ingresa aqui para contactarnos</button>'
)
$('#buttonContact').fadeIn(6000);

$('.display-3').animate({
    fontSize: "10pt"
}, 4000).animate({
    opacity: "0"
}, 1000);

$("#sendMessage").click((e) => {
    swal("Mensaje enviado!", "Te responderemos en la brevedad", "success");
})
$("#cancelar").click((e) => {
    swal({
            title: "Estas seguro de cancelar?",
            text: "Una vez cancelado el mensaje no se guardara ni enviara",
            icon: "warning",
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Mensaje cancelado con exito.", {
                    icon: "success",
                });
            }
        });
})
//END CONTACT ZONE --->






