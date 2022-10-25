class Usuario {
    constructor(nombre = '', apellido = '') {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = [];
        this.libros = [];
    }
    getFullName() {
        return `El usario tiene el nombre: ${this.nombre === '' ? 'No identificado' : this.nombre} ${this.apellido === '' ? '' : this.apellido}`;
    }
    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(nombreLibro = '', autor = '') {
        this.libros.push({ nombreLibro, autor });
    }
    getBookNames() {
        return this.libros.map(libro => libro.nombreLibro);
    }
}

const juan = new Usuario('Juan', 'Isa');

console.log(juan.getFullName());
juan.addMascota('Oreo');
juan.addMascota('Popi');
console.log(juan.countMascotas());
juan.addBook('El almohadón de plumas', 'Cualquiera');
juan.addBook('Cuentos de la selva', 'Cualquiera');
console.log(juan.getBookNames());

const usuarioRandom = new Usuario();

console.log(usuarioRandom.getFullName());