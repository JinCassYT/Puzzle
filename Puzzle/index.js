function boraLa(){ 
    var numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    var numeroAleatorio2 = Math.floor(Math.random() * 6) + 1;
    document.getElementsByClassName('img1')[0].src = 'css/img/dice' + numeroAleatorio + '.png';
    document.getElementsByClassName('img2')[0].src = 'css/img/dice' + numeroAleatorio2 + '.png';

    if(numeroAleatorio > numeroAleatorio2){ 
        document.querySelector("h1").innerHTML = ("Jogador 1 Venceu🚀");

    }
    else if( numeroAleatorio < numeroAleatorio2){
        document.querySelector("h1").innerHTML = ("Jogador 2 Venceu🚀");

    }
    else{
        document.querySelector("h1").innerHTML = ("Empate Tecnico🤡");

    }
}

var button = document.querySelector("input");
button.addEventListener("click", boraLa);

