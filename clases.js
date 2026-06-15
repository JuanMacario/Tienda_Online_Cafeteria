export class Carrito {
    #productos;
    #total;
    #subTotalCarrito;

    constructor(productos) {
        this.#productos = productos
        this.#total = 0
        this.#subTotalCarrito = 0
    }

    get total() {
        return this.#total
    }

    get subTotalCarrito() {
        return this.#subTotalCarrito
    }

    set productos(value) {
        this.#productos = value
    }

    set total(value) {
        this.total = value
    }

    set subTotalCarrito(value) {
        this.subTotalCarrito = value
    }

    agregarCarrito(value) {
        this.#productos.push(value)
    }

    verCarrito() {
        return this.#productos
    }

    eliminar(value) {
        let indice = this.#productos.findIndex(item => item.id == value.getAttribute('data-id'))
        this.#productos.splice(indice, 1)
    }

    sumarSubtotalDos() {
        let suma = 0
        for (let item of this.#productos) {
            suma += item._subtotal
        }
        this.#subTotalCarrito = suma
        return suma
    }

    impuesto() {
        return this.#subTotalCarrito * 0.05
    }

    totalGeneral() {
        this.#total = this.#subTotalCarrito + this.impuesto()
    }

    restablecer() {
        this.#productos.forEach(item => {
            item.reiniciar()
        });

        this.productos = []
    }
}

export class Producto {
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

    verSubtotal() {
        return this._subtotal
    }

    aumentaCantidad() {
        this.#cantidad += 1
    }

    disminuirProducto() {
        this.#cantidad -= 1
    }

    sumarSubtotal() {
        this.subtotal = this.cantidad * this.precio
    }

    reiniciar() {
        this.#cantidad = 0
        this._subtotal = 0
    }
}
