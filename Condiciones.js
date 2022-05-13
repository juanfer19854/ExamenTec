let salrod = 265;
let salextra = 350;
let horastra = 53;

let horasextra = horastra - 40;

if(horastra <= 40){
    console.log("El total a pagar por horas normales es : " + (horastra * salrod ));
}
else
{
    console.log("El total a pagar por horas normales es : " + (40 * salrod ));
    console.log("El total a pagar por horas Extra es : " + (horasextra * salextra ));
}
