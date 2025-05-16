// Realizar una variable tipo Array que tenga 3 objetos
// El inge quiere saber las siguientes caracteristicas; nombre, edad, correo, activo y 3 habilidades(tienen que ser un array tambien)
// y eso es un objeto

console.log("Ejercicio con objetos");
let personas = [
    {
        nombre: "Carlos Pérez",
        edad: 28,
        correo: "carlos.perez@ejemplo.com",
        activo: true,
        habilidades: ["Sprint", "React", "Node.js"]
    },
    {
        nombre: "Ana Martínez",
        edad: 32,
        correo: "ana.martinez@ejemplo.com",
        activo: false,
        habilidades: ["Python", "Django", "SQL"]
    },
    {
        nombre: "Luis Gómez",
        edad: 24,
        correo: "luis.gomez@ejemplo.com",
        activo: true,
        habilidades: ["Java", "Spring Boot", "Docker"]
    }
];
console.log(personas);
console.log(personas[2]);

console.log("Ejercicio 2");
let juguetes = [
    {
        categoria: "peluches",
        tipo: "osito",
        cantidad: 50,
        size: ["small","large"]
    },
    {
        categoria: "Carritos",
        tipo: "Deportivo",
        cantidad: 10,
        velocidad: ["lento","rapido"]
    },
    {
        categoria: "juegos de mesa",
        tipo: "rompe cabezas",
        cantidad: 5,
        size: ["small","large"]
    },
];
console.log(juguetes);
