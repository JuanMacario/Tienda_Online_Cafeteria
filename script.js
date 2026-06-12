class Cafe {
    #nombre;
    #precio;
    #categoria;
    #descripcion;
    #id;

    constructor(nombre, precio, categoria, descripcion, id) {
        this.#nombre = nombre
        this.#precio = precio
        this.#categoria = categoria
        this.#descripcion = descripcion
        this.#id = id
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
}

class Pedido {
    #id;
    #nombre;
    #unitario;
    #subTotal;
    #cantidad;

    constructor(id, nombre, unitario, subtotal, cantidad) {
        this.#id = id
        this.#nombre = nombre
        this.#unitario = unitario
        this.#subTotal = subtotal
        this.#cantidad = cantidad
    }

    set id() {
        return this.#id
    }

    set nombre() {
        return this.#nombre
    }

    set unitario() {
        return this.#unitario
    }

    set subtotal() {
        return this.#subTotal
    }

    set cantidad() {
        return this.#cantidad
    }

    get id(value) {
        this.id = value
    }

    get nombre(value) {
        this.nombre = value
    }

    get unitario(value) {
        this.unitario = value
    }

    get subtotal(value) {
        this.subtotal = value
    }

    get cantidad(value) {
        this.cantidad = value
    }

    aumentaCantidad() {
        this.cantidad += 1
    }

    disminuirProducto() {
        this.cantidad = this.cantidad - 1
    }

    sumarSubtotal() {
        this.subtotal = this.cantidad * this.unitario
    }
}