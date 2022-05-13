const matriz1 = ["3", "2", "1", "1", "2", "3", "2", "3", "1"];
const matriz2 = ["1", "1", "2", "2", "1", "1", "1", "2", "12"];

console.log("Matriz 1 ["  );
for (let i = 0; i< matriz1.length; i++){
    if (i == matriz1.length - 1) {
        console.log(matriz1[i]);
    }
    else
        {
            console.log(matriz1[i] + ",");
        }
}


console.log("Matriz 2 ["  );
for (let i = 0; i< matriz2.length; i++){
    if (i == matriz2.length - 1) {
        console.log(matriz2[i]);
    }
    else
    {
        console.log(matriz2[i] + ",");
    }
}

console.log("multiplicar matrices "  );
for (let i = 0; i< matriz2.length; i++){
    let mult = 0;
    mult = matriz2[i] * matriz1[i];
    console.log(matriz1[i] + "*" + matriz2[i] + "=" + mult);

}

console.log("suma matrices "  );
for (let i = 0; i< matriz2.length; i++){
    let suma = 0;
    suma += parseInt(matriz2[i]) + parseInt(matriz1[i]);
    console.log(matriz1[i] + "+" + matriz2[i] + "=" + suma);

}

