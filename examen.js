var nombre = prompt("Ingrese su nombre:");
var respuesta1 = prompt("1. ¿Cuánta agua hay en la Tierra?\nA. Alrededor de un 41% de la superficie terrestre es agua.\nB. Alrededor de un 51% de la superficie terrestre es agua\nC. Alrededor de un 71% de la superficie terrestre es agua");
var respuesta2 = prompt("2-¿Qué océano es el más grande?\nA. El Pacífico\nB. El Atlántico\nC. El Índico")
var respuesta3 = prompt("3. ¿Cuánto mide la parte más profunda de los Océanos?\nA. 11 Km\nB. 23 Km\nC. 31 Km")

var parseInt,puntaje = 0;


if (respuesta1 == "C"){
    var puntaje = puntaje + 25;
}
if (respuesta2 == "A"){
    var puntaje = puntaje + 25;
}
if (respuesta3 == "A"){
    var puntaje = puntaje + 25;
}
if(puntaje <= 50){
    document.write(nombre + " Puedes hacerlo mejor, haz hecho: " + puntaje + " puntos!");

}else{
    document.write(nombre + " Lo has hecho bien, haz hecho: " + puntaje + " puntos!");
}