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

console.log("Ejercicio de los Carros");
let carros = [
    {
        marca: "Honda",
        tipo: "Deportivo",
        precio: 35000
    },
    {
        marca: "Toyota",
        tipo: "Pickup",
        precio: 60000
    },
    {
        marca: "Suzuki",
        tipo: "SUV",
        precio: 120000
    }
];

console.log("La suma de los precios es:",((carros[0].precio)+(carros[1].precio)+(carros[2].precio)));
console.log("Las marcas son:",((carros[0].marca)+" ║ "+(carros[1].marca)+" ║ "+(carros[2].marca)));
