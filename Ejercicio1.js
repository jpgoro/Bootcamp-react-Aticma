function cantidadMayusculas(){
    var str = "EsTE Es Un TEST De contADor dE MAYUSCulaS";
    return(str.replace(/[^A-Z]/g, "").length);
}
