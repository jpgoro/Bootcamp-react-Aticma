function copiaArreglo(){
  var numeros = [1, 2, 3];
  var copiaNumeros = [];

    for (i = 0; i < numeros.length; i++) {
        (copiaNumeros[i] = numeros[i] + 1);
    }
    return copiaNumeros;
}