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

function selecionarComida(){
    const selecionadoC = document.querySelector(".comida div");
    selecionadoC.classList.add("escolhido");
    verificacao();
}

function selecionarBebida(){
    const selecionadoB = document.querySelector(".bebida div");
    selecionadoB.classList.add("escolhido");
    verificacao();
}

function selecionarSobremesa(){
    const selecionadoS = document.querySelector(".sobremesa div");
    selecionadoS.classList.add("escolhido");
    verificacao();
}








function fazerPedido() {


}

