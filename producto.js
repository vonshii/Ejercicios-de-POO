class Producto {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    get mostrarCodigo(){
        return this.codigo;
    }
    mostrarNombre(){
        return this.codigo;
    }
    mostrarPrecio(){
        return this.precio;
    }
    set modificarCodigo(nuevoCodigo){
        this.codigo = nuevoCodigo;
    }
    set modificarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
    set modificarPrecio(nuevoPrecio){
        this.precio = nuevoPrecio
    }
    mostrarDetalle(){
        return document.write(`<ul>
        <li>Codigo: ${this.codigo}</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: ${this.precio}</li>
        </ul>`)
    }
}

let Productos = [];

let leche = new Producto("LS245", "leche de almendras silk", 400);
let chocolate = new Producto("AB213", "Block 300gr", 350);
let galleta = new Producto("GS223", "granix sin sal", 160);

Productos.push(leche);
Productos.push(chocolate);
Productos.push(galleta);

for (let i = 0; i < Productos.length; i++) {
    Productos[i].mostrarDetalle();
    
}