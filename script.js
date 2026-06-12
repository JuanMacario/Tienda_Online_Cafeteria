class Producto {
    #nombre;
    #precio;
    #categoria;
    #descripcion;
    #id;
    #subTotal;
    #cantidad;
    #imagen;

    constructor(nombre, precio, categoria, descripcion, id, imagen) {
        this.#nombre = nombre
        this.#precio = precio
        this.#categoria = categoria
        this.#descripcion = descripcion
        this.#id = id
        this.#subTotal = 0
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
        return this.#subTotal
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
        this.subtotal = value
    }

    set cantidad(value) {
        this.cantidad = value
    }



    aumentaCantidad() {
        this.cantidad += 1
        this.sumarSubtotal()
    }

    disminuirProducto() {
        this.cantidad = this.cantidad - 1
        this.sumarSubtotal()
    }

    sumarSubtotal() {
        this.subtotal = this.cantidad * this.precio
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

    sumarSubtotal() {
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
let generarId = () => {
    return Math.floor(Math.random() * 1000)
}

let cafeUno = new Producto("Café Americano", 12, "Bebida caliente", "Café negro tradicional", generarId(), '#')
let cafedos = new Producto("Café Latte", 18, "Bebida caliente", "Café con leche espumada", generarId(), '#')
let cafetre = new Producto("Frappe de Chocolate", 25, "Bebida fría", "Bebida fría con chocolate y crema", generarId(), '#')
let cafecuatro = new Producto("Smoothie de Fresa", 22, "Bebida fría", "Batido natural de fresa", generarId(), '#')
let cafecinco = new Producto("Muffin de Vainilla", 15, "Postre", "Pan dulce suave de vainilla", generarId(), '#')
let cafeseis = new Producto("Cheesecake", 28, "Postre", "Pastel frío de queso", generarId(), '#')
let cafesiete = new Producto("Sandwich de Pollo", 30, "Comida", "Sandwich con pollo y vegetales", generarId(), '#')
let cafeocho = new Producto("Bagel con Queso", 20, "Comida", "Bagel tostado con queso crema", generarId(), '#')

inventario.push(cafeUno, cafedos, cafetre, cafecuatro, cafecinco, cafeseis, cafesiete, cafeocho)

