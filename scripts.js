function verificacao(){

    let x = 0;
    const frase = document.querySelector(".rodape div");
    const adicionarClasse = document.querySelector(".rodape button");

    if(document.querySelector(".comida .escolhido")){
        x=x+1;
    }
    
    if(document.querySelector(".bebida .escolhido")){
        x=x+1;
    }
    
    if(document.querySelector(".sobremesa .escolhido")){
        x=x+1;
    }

    if(x==3){
        frase.innerHTML = "Fechar pedido";
        adicionarClasse.classList.add("habilitado");
    }

    else {
    frase.innerHTML = "Selecione os 3 itens para fechar o pedido";
    adicionarClasse.classList.remove("habilitado");   
    }


}


function selecionarComida(x){

    const selecionado = document.querySelector(".comida > .escolhido ");
    const checked = document.querySelector("x > .aparece ");

    if (selecionado !== null) {
        selecionado.classList.remove("escolhido");
        checked.classList.remove("aparece");
        checked.classList.add("check");
    }


    x.classList.add("escolhido");
    const aparecer = document.querySelector("x > .aparece ");
    aparecer.classList.add("aparece");
    aparecer.classList.remove("check");

    verificacao();
}

function selecionarBebida(x){

    const selecionado = document.querySelector(".bebida > .escolhido ");
    

    if (selecionado !== null) {
        selecionado.classList.remove("escolhido");
    }

    x.classList.add("escolhido");
    verificacao();
}

function selecionarSobremesa(x){

    const selecionado = document.querySelector(".sobremesa > .escolhido ");
    if (selecionado !== null) {
        selecionado.classList.remove("escolhido");
    }
    

    x.classList.add("escolhido");

    verificacao();
}




// function selecionarComida(x){
//     const apagar = document.querySelector(".comida .escolhido");
//     const esconder = document.querySelector("comida .escolhido > .check")

//     if (apagar){
//         apagar.classList.remove("escolhido");
//         esconder.classList.add("escondido");
//     }

//     const selecionadoC = document.querySelector(".comida > div:nth-child("+x+")");
//     const checked = document.querySelector(".comida > div:nth-child("+x+") > .escondido"); 
//     selecionadoC.classList.add("escolhido");
//     checked.classList.remove("escondido");
//     verificacao();
// }

// function selecionarBebida(x){
//     const apagar = document.querySelector(".bebida .escolhido");
//     if (apagar){
//         apagar.classList.remove("escolhido");
//     }

//     const selecionadoB = document.querySelector(".bebida > div:nth-child("+x+")");
//     selecionadoB.classList.add("escolhido");
//     verificacao();
// }

// function selecionarSobremesa(x){
//     const apagar = document.querySelector(".sobremesa .escolhido");
//     if (apagar){
//         apagar.classList.remove("escolhido");
//     }

//     const selecionadoS = document.querySelector(".sobremesa > div:nth-child("+x+")");
//     selecionadoS.classList.add("escolhido");
//     verificacao();
// }










