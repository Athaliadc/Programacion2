/* que nota necesito para ir a jurado*/ 

var promedio1 = parseFloat(prompt('Ingrese su promedio 1'));
var promedio2 = parseFloat(prompt('Ingrese su promedio 2'));
var promedio3 = parseFloat(prompt('Ingrese su promedio 3'));
var resultado = ((promedio1 + promedio2 + 2*promedio3)/4)*2;

var noJurado = (resultado - 12.5); 

if (resultado >= 12.5 ) {
    document.write('Pasa a jurado');
} else {
    document.write('Necesita' + " " + Math.abs(noJurado) + " " + 'para ir a Jurado');
}





/*if (resultado >= 12.5 ) {
    prompt ('Pasa a Jurado');
} else {
    prompt ('Nota insuficiente para ir a Jurado');
}
/*var promedio = (promedio1 + promedio2 + promedio3*2)/4;
var jurado = parseFloat(prompt('Ingrese nota jurado')); */




/*if (promedio >= 12.5 ){
    console.log('Aprobado con ' + promedio);
} else{
    console.log('Desaprobado con ' + promedio);
}*/