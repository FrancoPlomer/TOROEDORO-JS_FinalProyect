// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDkLAi8lrlD5_DqHxksEjpnEeiIaskduEQ",
    authDomain: "toroedoro-da5ad.firebaseapp.com",
    projectId: "toroedoro-da5ad",
    storageBucket: "toroedoro-da5ad.appspot.com",
    messagingSenderId: "520050276403",
    appId: "1:520050276403:web:7e81fcbd6851504e804b46"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const fs = firebase.firestore();
let mostrarCarritoOffline = document.getElementById("comprasCarritoVisible")
$('#limpiarCarrito').click(() => {
    swal("Deseas limpiar el carrito?", {
            buttons: {
                cancel: "No",
                limpiar: true,
            },
        })
        .then((value) => {
            switch (value) {

                case "limpiar":
                    $('.list-shop').empty();
                    localStorage.clear();
                    swal("carrito limpiado");
                    break;
                default:
                    swal("Cancelaste limpiar tu carrito");
            }
        });

})
$('#confirmarCarrito').click(() => {
    swal("Deseas confirmar tu compra?", {
        buttons: {
            cancel: "No",
            confirmar: true,
        },
    })
    .then((value) => {
        switch (value) {

            case "confirmar":
                $('.list-shop').empty();
                localStorage.clear();
                swal("compra confirmada");
                break;
            default:
                swal("No se confirmo la compra");
        }
    });
})

function guardarStorage() {
    swal("Estas seguro que deseas agregar este producto a tu carrito?", {
            buttons: {
                cancel: "No",
                Agregar: true,
            },
        })
        .then((value) => {
            switch (value) {

                case "Agregar":
                    let imagenModal = document.getElementsByClassName("imagenModal");
                    let nombreModal = document.getElementsByClassName("Descripcion");
                    let precioModal = document.getElementsByClassName("precio");
                    let precioLista = parseInt(precioModal[0].textContent);
                    let dato = localStorage.getItem(nombreModal[0].textContent);
                    if (dato === null) {
                        let safeDatos = {
                            imagen: imagenModal[0].src,
                            nombre: nombreModal[0].textContent,
                            precio: precioLista,
                            cantidad: 1
                        }
                        localStorage.setItem(nombreModal[0].textContent, JSON.stringify(safeDatos))
                    } else {
                        let objeto = JSON.parse(dato)
                        objeto.cantidad += 1;
                        objeto.precio = precioLista * objeto.cantidad;
                        localStorage.setItem(nombreModal[0].textContent, JSON.stringify(objeto))
                    }
                    swal("Agregaste el producto con exito!");
                    alertify.success('Se agrego ' + nombreModal[0].textContent + ' con exito al carrito');
                    break;
                default:
                    swal("No se agrego al carrito!");
            }
        });
}

function mostrarCarro() {
    let precioTotal = 0;
    $('.list-shop').empty();
    auth.onAuthStateChanged(user => {
        if (user) {
            for (let i = 0; i <= localStorage.length; i++) {
                let dato = JSON.parse(localStorage.getItem(localStorage.key(i)))
                $('.list-shop').append(`<hr><li><img src="${dato.imagen}" style="heigth:100px; width:100px;"></li>
                <li class="textShop"><h6 id="textShopTittle">${dato.nombre}</h6>💲${dato.precio}<br>x${dato.cantidad}</li><hr>`)
                precioTotal += dato.precio;
                if (i == localStorage.length - 1) {
                    $('.list-shop').append(`<li>Total:💲${precioTotal}</li>`)
                }
            }
        }
    })
}


//Firebase --->

mostrarCarritoOffline.addEventListener("click", () => {
    swal("Para ver tu carrito debes estar logueado", {
        icon: "warning",
    });
})

const loggedOut = document.querySelectorAll('.logged-out')
const loggedin = document.querySelectorAll('.logged-in')
let flagFB = false;
auth.onAuthStateChanged(user => {
    //Si user existe quiere decir que el usuario esta logueado
    loginCheck(user);
})
const loginCheck = user => {
    if (user) {
        console.log("entro")
        loggedin.forEach(link => link.style.display = 'block');
        loggedOut.forEach(link => link.style.display = 'none');
        mostrarCarritoVisibleOut.forEach(link => link.style.display = 'none');
        mostrarCarritoVisibleLogged.forEach(link => link.style.display = 'block');
    } else {
        console.log("entro2")
        loggedOut.forEach(link => link.style.display = 'block');
        loggedin.forEach(link => link.style.display = 'none');
        mostrarCarritoVisibleOut.forEach(link => link.style.display = 'block');
        mostrarCarritoVisibleLogged.forEach(link => link.style.display = 'none');
    }
}


//signUp
const signUpForm = document.querySelector("#signup-form");


signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector("#signup-email").value;

    const password = document.querySelector("#signup-password").value;

    auth
        .createUserWithEmailAndPassword(email, password)
        .then(useCredential => {
            //clear form
            swal("Te registraste con exito", {
                icon: "success",
            });
            signUpForm.reset();

        })
        .catch(err => {
            swal(err.code, {
                icon: "warning",
            });
        })
});

//signIn
const siginForm = document.querySelector("#signin-form")

siginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.querySelector("#signin-email").value;

    const password = document.querySelector("#signin-password").value;

    auth
        .signInWithEmailAndPassword(email, password)
        .then(useCredential => {
            swal("Bienvenido", {
                icon: "success",
            });
            siginForm.reset();
        })
        .catch(err => {
            swal(err.code, {
                icon: "warning",
            });
        })


});

//FACEBOOK LOGIN

const facebookLogin = document.querySelector("#facebookLogin")
facebookLogin.addEventListener("click", e => {
    e.preventDefault();
    const provider = new firebase.auth.FacebookAuthProvider();
    auth
        .signInWithPopup(provider)
        .then(result => {
            console.log("facebook sign in")
        })
        .catch(err => {
            swal(err.code, {
                icon: "warning",
            });
        })
})

//GOOGLE LOGIN
const googleLogin = document.querySelector("#googleLogin")
googleLogin.addEventListener("click", e => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
        .signInWithPopup(provider)
        //si todo salio bien entonces...
        .then(result => {
            swal("Bienvenido", {
                icon: "success",
            });
        })
        //si ocurrio un error
        .catch(err => {
            swal(err.code, {
                icon: "warning",
            });
        })
})

//logOut
const logOut = document.querySelector("#logout");

logOut.addEventListener("click", e => {
    e.preventDefault();
    auth.signOut().then(() => {
        swal("Deslogueado con exito", {
            icon: "success",
        });
    })
});