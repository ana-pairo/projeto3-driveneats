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

function redirecionar(){

    if (document.querySelector(".comida .escolhido") && document.querySelector(".bebida .escolhido") && document.querySelector(".sobremesa .escolhido")){
                
        document.querySelector("body").classList.add("travado");
        document.querySelector(".segundaTela").classList.remove("invisivel");        

    }
}


// function verificacao(){    
        


//     if(document.querySelector(".comida .escolhido") && document.querySelector(".bebida .escolhido") && document.querySelector(".sobremesa .escolhido")){
        
//         const adicionarClasse = document.querySelector(".rodape button");
//         let conta= (valorComida+valorBebida+valorSobremesa);
//         let valorTotal = conta.toFixed(2);       
        
//         let minhaString = `Olá, gostaria de fazer o pedido: \n- Prato: ${nomeComida}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: R$ ${valorTotal}\n`;
//         const links = encodeURIComponent(minhaString);

//         adicionarClasse.innerHTML = `<a href='https://wa.me/5524992588128?text=${links}'><div>Fechar pedido</div></a>`;
//         document.querySelector(".rodape > button a").classList.add("fazerPedido");
//         adicionarClasse.classList.add("habilitado");
//     }
    
//     else {
//         document.querySelector(".rodape div").innerHTML = "Selecione os 3 itens para fechar o pedido";
//     adicionarClasse.classList.remove("habilitado");
//     }
// }

















