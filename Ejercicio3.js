function cargarArreglo() {
    var numeros = [];
    var aleatorio = prompt("Ingresa cantidad de numeros al azar");
  
    for (i = 0; i < aleatorio; i++) {
        var num = Math.random();
        numeros.push(num);
    }
    return numeros;

}