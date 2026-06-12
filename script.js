class Cafe {
    #nombre;
    #precio;
    #categoria;
    #descripcion;

    constructor(nombre, precio, categoria, descripcion) {
        this.#nombre = nombre
        this.#precio = precio
        this.#categoria = categoria
        this.#descripcion = descripcion
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
}