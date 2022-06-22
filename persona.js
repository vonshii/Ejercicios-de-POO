class Persona {
    constructor(nombre, edad, sexo, peso, altura, fechaNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = this.generarDNI();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.fechaNacimiento = fechaNacimiento;
    }

    detalleGeneracion(generacion, temporalidad, historia, rasgo) {
       return `<ul>
    <li>Generacion: ${generacion}</li>
    <li>Marco temporal: ${temporalidad}</li>
    <li>Circunstancia historia: ${historia}</li>
    <li>Rasgo caracteristico: ${rasgo}}</li>
</ul>`;
    }

    mostrarGeneracion() {
        if (this.fechaNacimiento >= 1930 && this.fechaNacimiento <= 1948) {
            return this.detalleGeneracion(
                'Silent Generation',
                '1930-1948',
                'Conflictos belicos',
                'Austeridad',
                );
        } else if (this.fechaNacimiento >= 1949 && this.fechaNacimiento <= 1968) {
            return this.detalleGeneracion(
                'Baby Boom',
                '1949-1968',
                'Paz y explosion demografica',
                "Ambicion"
                );
        } else if (this.fechaNacimiento >= 1969 && this.fechaNacimiento <= 1980) {
            return this.detalleGeneracion(
                'Generacion X',
                '1969- 1980',
                'Crisis del 73 y transicion espanola',
                "Obsecion por el Exito"
                );
        } else if (this.fechaNacimiento >= 1981 && this.fechaNacimiento <= 1993) {
            return this.detalleGeneracion(
                'Generacion Y (Millenials)',
                '1981 - 1993',
                "Frustracion"
                );
        } else if (this.fechaNacimiento >= 1994 && this.fechaNacimiento <= 2010) {
            return this.detalleGeneracion(
                'Generacion Z (centenials)',
                '1994 - 2010',
                'Expansion masiva de internet',
                "irreverencia"
                );
        } else if (this.fechaNacimiento >= 2011) {
            return this.detalleGeneracion(
                'Generacion Alfa',
                '2011 - Actualidad',
                'Nativos Digitales al 100%',
                "Predilectos"
                );
        } else {
            return '<p>No se posee datos para la fecha ingresada</p>';
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return true;
        } else {
            return false;
        }
    }

    mostrarDatos() {
        return `<ul>
        <li>Persona</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Genero: ${this.sexo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Año de nacimiento: ${this.fechaNacimiento}</li>
        </ul>`;
    }


    generarDNI() {
        return parseInt(Math.random() * 99999999);
    }
}

let nombre = prompt("Ingrese un nombre");
let edad = prompt("Ingrese una edad");
let genero = prompt("Ingrese un genero : H(hombre), M(Mujer)");
let peso = prompt("Ingrese un peso en kg");
let altura = prompt("Ingrese una altura cm");
let anioNac = prompt("Ingrese el año de nacimiento");
let personaNueva = new Persona(nombre, edad, genero, peso, altura, anioNac);

document.write(personaNueva.mostrarDatos());
document.write(
    `<p>La persona es mayor de edad: ${
    personaNueva.esMayorDeEdad ? "Si" : "No"
  }</p>`
);
document.write(personaNueva.mostrarGeneracion());