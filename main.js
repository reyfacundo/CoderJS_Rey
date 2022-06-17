alert("Adivina el color!");

let tryagain=true;

do {
    let useranswer = prompt("Ingrese un color").toLowerCase();
    if(useranswer==="azul"){
        alert("Felicitaciones! Adivinaste el color!");
        tryagain=false;
    }else{
        alert("Tu respuesta es incorrecta, inténtelo nuevamente");
    }
} while(tryagain);