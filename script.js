class Cafe {
    #nombre;
    #precio;
    #categoria;
    #descripcion;
    #id;
    #subTotal;
    #cantidad;

    constructor(nombre, precio, categoria, descripcion, id) {
        this.#nombre = nombre
        this.#precio = precio
        this.#categoria = categoria
        this.#descripcion = descripcion
        this.#id = id
        this.#subTotal = 0
        this.#cantidad = 0
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

    get productos(value) {
        this.productos = value
    }

    get total(value) {
        this.total = value
    }

    get subTotalCarrito(value) {
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