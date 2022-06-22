class Libro{
    constructor(isbn, titulo, autor, nroPaginas){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.nroPaginas = nroPaginas;
    }
    set cambiarTitulo(tituloNuevo){
        this.titulo = tituloNuevo;
    }
    set cambiarIsbn(isbnNuevo){
        this.isbn= isbnNuevo;
    }
    set cambiarAutor(autorNuevo){
        this.autor = autorNuevo;
    }
    set cambiarNroPaginas(nroPaginasNuevo){
        this.nroPaginas = nroPaginasNuevo;
    }
    get mostrarIsbn(){
        return this.isbn;
    }
    get mostrarTitulo(){
        return this.titulo;
    }
    get mostrarAutor(){
        return this.autor;
    }
    get mostrarNroPaginas(){
        return parseInt(this.nroPaginas);
    }
    mostrarLibro(){
        return `<p>El libro ${this.mostrarTitulo}, con ISBN Nro. ${this.mostrarIsbn}, creado por el autor ${this.mostrarAutor}, tiene ${this.mostrarNroPaginas} paginas.</p>`;
    }
}

function compararLibros(libro1, libro2){
    if(libro1.mostrarNroPaginas > libro2.mostrarNroPaginas){
        return `<p>El libro ${libro.mostrarTitulo} tiene mas paginas</p>`;
    }else if (libro1.mostrarNroPaginas == libro2.mostrarNroPaginas){
        return `<p>El libro ${libro1.mostrarTitulo} y el libro ${libro2.mostrarTitulo}, tienen la misma cantida de paginas.</p>`
    }else{
        return `<p>El libro ${libro2.mostrarTitulo} tiene mas paginas</p>`;
    }
}


let theLordOfTheRings = new Libro(9788445003022,"El señor de los anillos","J.R.R. Tolkien",1392
);
let HarryPotter = new Libro(108478885196, "Harry Potter y el Prisionero de Azkaban", "Rowling, J.K.", 360);

document.write(theLordOfTheRings.mostrarLibro());
document.write(HarryPotter.mostrarLibro());
document.write(compararLibros(theLordOfTheRings, HarryPotter));