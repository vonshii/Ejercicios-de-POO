class Rectangulo{
    constructor(ladox = 0, ladoy = 0){
        this.alto = ladoy;
        this.ancho = ladox;
    }
    set cambiarAltura(nuevaAltura){
        this.alto = nuevaAltura;
    }
    set cambiarAncho(nuevoAncho){
        this.ancho = nuevoAncho;
    }
    get anchoRectangulo(){
        return this.ancho;
    }
    get altoRectangulo(){
        return this.alto;
    }
    get area(){
        return this.alto*this.ancho;
    }
    get perimetro(){
        return 2*(this.alto+this.ancho);
    }
    detalle(){
        return `<p>El rectangulo tiene una altura de ${this.altoRectangulo} cm y un ancho de ${this.anchoRectangulo}cm </p></p>`
    }
}

document.write(`<h2>Primer rectangulo<h2>`);

let rectangulo1 = new Rectangulo(10, 9);

document.write(rectangulo1.detalle());
document.write(`El area del rectangulo es ${rectangulo1.area} y su perimetro es ${rectangulo1.perimetro}`);

document.write(`<h3>Modificar el rectagulo</h3>`);

rectangulo1.cambiarAltura = 15;
rectangulo1.cambiarAncho = 28;

document.write(rectangulo1.detalle());
document.write(`El area del rectangulo es ${rectangulo1.area} y su perimetro es ${rectangulo1.perimetro}`);

document.write(`<h2>PRimer rectangulo</h2>`);

let rectangulo2 = new Rectangulo(5, 15);
document.write(rectangulo2.detalle())

document.write(`El area del rectangulo es ${rectangulo2.area} y su perimetro es ${rectangulo2.perimetro}`);

document.write('<h3>Modificar el rectangulo</h3>');

rectangulo2.cambiarAltura=23;
rectangulo2.cambiarAncho=45;

document.write(rectangulo2.detalle());
document.write(`EL area del rectangulo es ${rectangulo2.area} y su perimetro es ${rectangulo2.perimetro}`);



