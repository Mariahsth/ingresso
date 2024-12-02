function comprar(){
    //Identificando o item comprado
    let escolha=document.getElementById('tipo-ingresso').value;
    //Identificando a quantidade comprada
    let quantidade=document.getElementById('qtd').value;
    //Relacionando ao item quantidade disponivel
    if (escolha=='pista'){
        comprarPista(quantidade);
    } if (escolha=='inferior'){
        comprarInferior(quantidade);
    } 
    if (escolha=='superior') {
        comprarSuperior(quantidade);
    }
}

function comprarPista(quantidade){
    itemDisponivelPista=document.getElementById('qtd-pista').innerHTML;
    let restantePista=parseInt(itemDisponivelPista);
    restantePista-=quantidade;
    if (restantePista<0){alert('Quantidade indisponível');}
    else{
        document.getElementById('qtd-pista').textContent = restantePista;
    }
}

function comprarInferior(quantidade){
    itemDisponivelInferior=document.getElementById('qtd-inferior').innerHTML;
    let restanteInferior=parseInt(itemDisponivelInferior);
    restanteInferior-=quantidade;
    if(restanteInferior<0){alert('Quantidade indisponível');}
    else{document.getElementById('qtd-inferior').textContent = restanteInferior;}
}

function comprarSuperior(quantidade){
    itemDisponivelSuperior=document.getElementById('qtd-superior').innerHTML;
    let restanteSuperior=parseInt(itemDisponivelSuperior);
    restanteSuperior-=quantidade;
    if (restanteSuperior<0) {alert('Quantidade indisponível')}
    else {document.getElementById('qtd-superior').textContent = restanteSuperior;}
}