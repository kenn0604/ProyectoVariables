console.log("----- TIPOS DE VARIABLES -----");

console.log("Tipo number");
let numero;
numero = 42;
console.log("Este es el valor de numero:",numero);

console.log("Tipo string");
let texto;
texto = "soy Keny";
console.log(texto);

console.log("Tipo boolean");
let  esActivo;
esActivo = true;
console.log("Es activo:", esActivo);

console.log("Tipo array");
let lista;
lista = [1,2,3,4];
console.log("Lista:",lista);

console.log("Navegacion en un array");
let lista2;
lista2 = ["H","J","K"];
console.log("Personas:",lista2);

console.log("Este es el pirmer numero de la lista 1");
console.log(lista[0]);

console.log("Este es el ultimo numero de la lista 1");
console.log(lista[3]);

console.log("Este es un numero no definido de la lista 1");
console.log(lista[5]);

console.log("Tipo object");
let persona;
persona = {nombre:"Ana", edad:25, esReal: true,};
console.log(persona);

console.log("Forma de trabajar con un objeto");
let persona2;
let lista3;
lista3 = ["Masculino","Femenino"];
persona2 = {nombre:"Keny", edad:15, esReal: false, Genero:lista3[0]};
console.log(persona2);
