import { Producto } from './clases.js'
import { Carrito } from "./clases.js";

//Crear los Cafes
let inventario = []
let carrito = []
let idCarrito = []
let generarId = () => {
    return Math.floor(10 + Math.random() * 90) + Date.now().toString().slice(-6);
}

let cafeUno = new Producto("Café Americano", 12, "Bebida caliente", "Café negro tradicional", generarId(), '#')
let cafedos = new Producto("Café Latte", 18, "Bebida caliente", "Café con leche espumada", generarId(), '#')
let cafetre = new Producto("Frappe de Chocolate", 25, "Bebida fría", "Bebida fría con chocolate y crema", generarId(), '#')
let cafecuatro = new Producto("Smoothie de Fresa", 22, "Bebida fría", "Batido natural de fresa", generarId(), '#')
let cafecinco = new Producto("Muffin de Vainilla", 15, "Postre", "Pan dulce suave de vainilla", generarId(), '#')
let cafeseis = new Producto("Cheesecake", 28, "Postre", "Pastel frío de queso", generarId(), '#')
let cafesiete = new Producto("Sandwich de Pollo", 30, "Comida", "Sandwich con pollo y vegetales", generarId(), '#')
let cafeocho = new Producto("Bagel con Queso", 20, "Comida", "Bagel tostado con queso crema", generarId(), '#')

let objetoCarrito = new Carrito(carrito)

inventario.push(cafeUno, cafedos, cafetre, cafecuatro, cafecinco, cafeseis, cafesiete, cafeocho)

//seccionFiltros
const filtrosEleccion = document.querySelector('#selector-categoria')
const filtrosInput = document.querySelector('#input-buscador')

//Espacios visuales de la pagina
const visualMenu = document.querySelector('#contenedor-productos')
const visualCarrito = document.querySelector('#cuerpo-carrito')
const generalCarrito = document.querySelector('#carrito-sidebar')
const visualPago = document.querySelector('#vista-pago')
const visualTotal = document.querySelector('#subtotal-carrito')

const espaciosubtotal = document.querySelector('#espacio-subtotal')
const espacioimpuesto = document.querySelector('#espacio-impuesto')
const espacioTotal = document.querySelector('#total-final')

//botones
const botonFinalizarCompra = document.querySelector('#boton-proceder-pago')


function dibujarProductos(inventario) {
    visualMenu.innerHTML = ''
    let moldeHTML = ''

    for (let item of inventario) {
        moldeHTML += `
                <div class="col-md-6 col-lg-4">
                    <div class="card tarjeta-producto shadow-sm">
                        <img src="${item.imagen}" alt="imagenProducto"
                            class="img-producto" alt="Croissant">
                        <div class="card-body">
                            <h5 class="card-title">${item.nombre}</h5>
                            <p class="card-text text-muted mb-0 small"> <strong> Categoria: </strong> ${item.categoria}</p>
                            <p class="card-text text-muted small"> <strong> Descripcion: </strong>     ${item.descripcion}</p>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <span class="fs-4 fw-bold">Q ${item.precio}.00</span>
                                <button class="btn btn-anadir btn-agregar" data-id="${item.id}">
                                    Añadir <i class="fa-solid fa-plus ms-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
    }

    visualMenu.innerHTML = moldeHTML
}

function dibujarCarrito(carrito) {
    visualCarrito.innerHTML = ''
    let moldeHTML = ''

    for (let item of carrito) {
        moldeHTML += `
                <div class="item-carrito d-flex align-items-center justify-content-between" data-id="${item.id}">
                    <div>
                        <h6 class="mb-0">${item.nombre}</h6>
                        <small class="text-muted">Q ${item.precio}.00 x ${item.cantidad}</small>
                    </div>
                    <div class="controles-cantidad">
                        <button class="btn btn-sm btn-reducir reducir" data-id="${item.id}">-</button>
                        <span class="fw-bold">${item.cantidad}</span>
                        <button class="btn btn-sm btn-aumentar aumentar" data-id="${item.id}">+</button>
                    </div>
                    <button class="btn btn-sm text-danger btn-borrar borrar" data-id="${item.id}">Eliminar</button>
                </div>
        `
    }

    visualCarrito.innerHTML = moldeHTML
}

function aplicaFiltros(inventario, eleccion) {
    let filtros = inventario.filter(item => item)
}

function dibujarEspacioPago() {
    espaciosubtotal.textContent = `Q ${objetoCarrito.subTotalCarrito}.00`
    espacioimpuesto.textContent = `Q ${objetoCarrito.impuesto()}`
    espacioTotal.textContent = `Q ${objetoCarrito.total}`
}

visualMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        let busqueda = inventario.find(item => item.id == event.target.getAttribute('data-id'))
        busqueda.aumentaCantidad()

        if (!idCarrito.includes(busqueda.id)) {
            objetoCarrito.agregarCarrito(busqueda)
            idCarrito.push(busqueda.id)
        }
        dibujarCarrito(objetoCarrito.verCarrito())
        busqueda.sumarSubtotal()
        visualTotal.textContent = `Q. ${objetoCarrito.sumarSubtotalDos()} .00`
    }

    if (carrito.length > 0) {
        botonFinalizarCompra.disabled = false
        dibujarEspacioPago()
    } else {
        botonFinalizarCompra.disabled = true
        visualMenu.classList.remove('d-none')
        visualPago.classList.add('d-none')
    }
})

visualCarrito.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        let busqueda = inventario.find(item => item.id == event.target.getAttribute('data-id'))

        if (event.target.classList.contains('aumentar')) {
            busqueda.aumentaCantidad()
            busqueda.sumarSubtotal()
        } else if (event.target.classList.contains('reducir')) {
            if (busqueda.cantidad != 1) {
                busqueda.disminuirProducto()
                busqueda.sumarSubtotal()
            }
        } else if (event.target.classList.contains('borrar')) {
            objetoCarrito.eliminar(event.target)
            let indice = idCarrito.findIndex(item => item.id == event.target.getAttribute('data-id'))
            idCarrito.splice(indice, 1)
            busqueda.cantidad = 0
            busqueda.subtotal = 0
        }
        dibujarCarrito(objetoCarrito.verCarrito())
        visualTotal.textContent = `Q. ${objetoCarrito.sumarSubtotalDos()} .00`
        if (idCarrito.length > 0) {
            botonFinalizarCompra.disabled = false
            dibujarEspacioPago()
        } else {
            botonFinalizarCompra.disabled = true
            visualMenu.classList.remove('d-none')
            visualPago.classList.add('d-none')
        }
    }
})

botonFinalizarCompra.addEventListener('click', () => {
    visualMenu.classList.add('d-none')
    visualPago.classList.remove('d-none')
    dibujarEspacioPago()
    // generalCarrito.classList.remove('show')
})


//filtros
filtrosEleccion.addEventListener('change', (event) => {
    if (event.target.value != 'todos') {
        let busqueda = inventario.filter(item => item.categoria.toLowerCase() == event.target.value.toLowerCase())
        dibujarProductos(busqueda)
    } else {
        dibujarProductos(inventario)
    }
})

filtrosInput.addEventListener('input', (event) => {
    let buscador = inventario.filter(item => item.nombre.toLowerCase().includes(event.target.value.toLowerCase()))
    buscador = inventario.filter(item => item.descripcion.toLowerCase().includes(event.target.value.toLowerCase()))
    dibujarProductos(buscador)
})

dibujarProductos(inventario)
