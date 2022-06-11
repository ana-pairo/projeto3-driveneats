let nomeComida;
let nomeBebida;
let nomeSobremesa;
let valorComida;
let valorBebida;
let valorSobremesa;

function selecionarComida(x){
    const selecionado = document.querySelector(".comida > .escolhido");
    const checked = document.querySelector(".comida > div > .aparece");
    if (selecionado) {
        selecionado.classList.remove("escolhido");
        checked.classList.remove("aparece");
        checked.classList.add("check");
    }
    x.classList.add("escolhido");
    const aparecer = x.querySelector(".check");
    aparecer.classList.add("aparece");
    aparecer.classList.remove("check");
    nomeComida = x.querySelector(".nome").innerHTML;
    valorComidaString = x.querySelector(".valor").innerHTML;
    valorComida = Number(x.querySelector(".valor").innerHTML.replace(",","."));
    verificacao();
}
function selecionarBebida(x){
    const selecionado = document.querySelector(".bebida > .escolhido");
    const checked = document.querySelector(".bebida > div > .aparece");
    if (selecionado) {
        selecionado.classList.remove("escolhido");
        checked.classList.remove("aparece");
        checked.classList.add("check");
    }
    x.classList.add("escolhido");
    const aparecer = x.querySelector(".check");
    aparecer.classList.add("aparece");
    aparecer.classList.remove("check");
    nomeBebida = x.querySelector(".nome").innerHTML;
    valorBebidaString = x.querySelector(".valor").innerHTML
    valorBebida = Number(x.querySelector(".valor").innerHTML.replace(",","."));    
    verificacao();
}
function selecionarSobremesa(x){
    const selecionado = document.querySelector(".sobremesa > .escolhido");
    const checked = document.querySelector(".sobremesa > div > .aparece");
    if (selecionado) {
        selecionado.classList.remove("escolhido");
        checked.classList.remove("aparece");
        checked.classList.add("check");
    }
    x.classList.add("escolhido");
    const aparecer = x.querySelector(".check");
    aparecer.classList.add("aparece");
    aparecer.classList.remove("check");
    nomeSobremesa = x.querySelector(".nome").innerHTML;
    valorSobremesaString = x.querySelector(".valor").innerHTML;
    valorSobremesa = Number(x.querySelector(".valor").innerHTML.replace(",","."));
    
    
    
    verificacao();
}

function verificacao() {

    const adicionarClasse = document.querySelector(".rodape button");
    const mudarBotao = document.querySelector(".rodape div");

    if(document.querySelector(".comida .escolhido") && document.querySelector(".bebida .escolhido") && document.querySelector(".sobremesa .escolhido")) {

        adicionarClasse.classList.add("habilitado");
        mudarBotao.classList.add("maior");
        mudarBotao.innerHTML= "Fechar pedido";
        return true;
    }
    else {
        mudarBotao.innerHTML = "Selecione os 3 itens para fechar o pedido";
        adicionarClasse.classList.remove("habilitado");
        return false;
    }

}

function fazerPedido(){

    if (document.querySelector(".comida .escolhido") && document.querySelector(".bebida .escolhido") && document.querySelector(".sobremesa .escolhido")){
                
        document.querySelector("body").classList.add("travado");
        document.querySelector(".segundaTela").classList.remove("invisivel");
        
        document.querySelector(".pratoEscolhido div:nth-child(1)").innerHTML= nomeComida;
        document.querySelector(".pratoEscolhido div:nth-child(2)").innerHTML=valorComidaString;

        document.querySelector(".bebidaEscolhida div:nth-child(1)").innerHTML= nomeBebida;
        document.querySelector(".bebidaEscolhida div:nth-child(2)").innerHTML=valorBebidaString;

        document.querySelector(".sobremesaEscolhida div:nth-child(1)").innerHTML= nomeSobremesa;
        document.querySelector(".sobremesaEscolhida div:nth-child(2)").innerHTML=valorSobremesaString;

        let calculo = (valorComida+valorBebida+valorSobremesa);
        let casasDecimais = calculo.toFixed(2);
        let formato = casasDecimais.replace(".",",");

        document.querySelector(".valorPedido div:nth-child(2)").innerHTML=`R$ ${formato}`;
    }
}


function cancelarPedido(){
        document.querySelector(".travado").classList.remove("travado");
        document.querySelector(".segundaTela").classList.add("invisivel");

}

function mandarPedido(){

    let calculo = (valorComida+valorBebida+valorSobremesa);
    let casasDecimais = calculo.toFixed(2);
    let formato = casasDecimais.replace(".",",");

    let nomeCliente = prompt ("Qual o seu nome?");

    while(isNaN(nomeCliente)==false) {

        nomeCliente = prompt ("Por favor, digite um nome válido");

    }

    const enderecoCliente = prompt (`Olá, ${nomeCliente}, qual seu endereço?`);

    let minhaString = `Olá, gostaria de fazer o pedido: \n- Prato: ${nomeComida}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: R$ ${casasDecimais}\n \nNome: ${nomeCliente} \nEndereço: ${enderecoCliente}`;
    const descricao = encodeURIComponent(minhaString);
    

    window.open(`https://wa.me/5521991871506?text=${descricao}`);
}

function voltar(z){
    let elementoTeste= z.parentElement.parentElement;
    elementoTeste.scrollLeft=0;
}


















