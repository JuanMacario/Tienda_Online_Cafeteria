class Producto {
    #nombre;
    #precio;
    #categoria;
    #descripcion;
    #id;
    #cantidad;
    #imagen;

    constructor(nombre, precio, categoria, descripcion, id, imagen) {
        this.#nombre = nombre
        this.#precio = precio
        this.#categoria = categoria
        this.#descripcion = descripcion
        this.#id = id
        this.#cantidad = 0
        this.#imagen = imagen
    }

    get nombre() {
        return this.#nombre
    }

    get precio() {
        return this.#precio
    }

    get categoria() {
        return this.#categoria
    }

    get descripcion() {
        return this.#descripcion
    }

    get id() {
        return this.#id
    }

    get subtotal() {
        return this._subTotal
    }

    get cantidad() {
        return this.#cantidad
    }

    get imagen() {
        return this.#imagen
    }
    set imagen(value) {
        this.imagen = value
    }

    set nombre(value) {
        this.nombre = value
    }

    set precio(value) {
        this.precio = value
    }

    set categoria(value) {
        this.categoria = value
    }

    set descripcion(value) {
        this.descripcion = value
    }

    set id(value) {
        this.id = value
    }

    set subtotal(value) {
        this._subtotal = value
    }

    aumentaCantidad() {
        this.#cantidad += 1
    }

    disminuirProducto() {
        this.#cantidad -= 1
    }

    sumarSubtotal() {
        let suma = this.cantidad * this.precio
        this.subtotal = suma
    }
}

class Carrito {
    #productos;
    #total;
    #subTotalCarrito;

    constructor(productos) {
        this.#productos = productos
        this.#total = 0
        this.#subTotalCarrito = 0
    }

    get productos() {
        return this.#productos
    }

    get total() {
        return this.#total
    }

    get subTotalCarrito() {
        return this.#subTotalCarrito
    }

    set productos(value) {
        this.productos = value
    }

    set total(value) {
        this.total = value
    }

    set subTotalCarrito(value) {
        this.subTotalCarrito = value
    }

    eliminar(value) {
        let indice = this.productos.findIndex(item => item.id == value.getAttribute('data-id'))
        carrito.splice(indice, 1)
    }

    sumarSubtotalDos() {
        let suma;
        for (let item of this.productos) {
            suma += item.subtotal
        }
        return suma
    }

    impuesto() {
        let impuesto;
        impuesto = this.sumarSubtotal() * 0.05
        return impuesto
    }
}

//Crear los Cafes
let inventario = []
let carrito = []
let busquedaCarrito = []
let generarId = () => {
    return Math.floor(Math.random() * 10000)
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

visualMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        let busqueda = inventario.find(item => item.id == event.target.getAttribute('data-id'))
        busqueda.aumentaCantidad()

        if (!busquedaCarrito.includes(busqueda.id)) {
            busquedaCarrito.push(busqueda.id)
            objetoCarrito.productos = objetoCarrito
            carrito.push(busqueda)
        }
        dibujarCarrito(carrito)
        busqueda.sumarSubtotal()
    }

    if (carrito.length == 1) {
        botonFinalizarCompra.disabled = false
    } else {
        botonFinalizarCompra.disabled = true
    }
})

visualCarrito.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        let busqueda = inventario.find(item => item.id == event.target.getAttribute('data-id'))
        if (event.target.classList.contains('aumentar')) {

            busqueda.aumentaCantidad()
        } else if (event.target.classList.contains('reducir')) {
            if (busqueda.cantidad != 1) {
                busqueda.disminuirProducto()
            }
        } else if (event.target.classList.contains('borrar')) {
            objetoCarrito.eliminar(event.target)
        }
        dibujarCarrito(carrito)

        if (carrito.length == 1) {
            botonFinalizarCompra.disabled = false
        } else {
            botonFinalizarCompra.disabled = true
        }
    }
})

botonFinalizarCompra.addEventListener('click', () => {
    visualMenu.classList.add('d-none')
    visualPago.classList.remove('d-none')
    // generalCarrito.classList.remove('show')

})


//filtros
filtrosEleccion.addEventListener('change', (event) => {

})

dibujarProductos(inventario)
