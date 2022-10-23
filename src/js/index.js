/* 

OBJETIVO: - quando clicarmos na aba, temos que monstrar o conteudo da
aba que foi clicada e esconder o conteúdo da aba anterior, vamos 
quebrar esse código em vários pedaços.

*/ 

// 1. pegar elementos que representam as abas no HTML.

const abas = document.querySelectorAll(".aba"); // querySelectorALL= selecionando elementos específicos de todos os que tem dentro do docuemnto.


// 2. dar um jeito de identificar o clique no elemento da aba.

abas.forEach(aba => {
    aba.addEventListener("click", function() {
        
        if(aba.classList.contains("selecionado")){
            return; //realiza parada do código e RETORNA para leitura do código sem utilizar o restante da função.
        }
      
        selecionarAba(aba) //criando função pra deixar mais flúido.
        mostrarAba(aba)

    });

});

function selecionarAba(aba){ //criando função
    // 3. quando o usuário clicar, desmarcar a aba selecionada.
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // 4. marcar a aba clicada como selecionada.
    aba.classList.add("selecionado");
    
}

function mostrarAba(aba){ //criando outra função
    //5. esconder o conteúdo anterior.
    const informacoesAbas = document.querySelector(".informacao.selecionado"); //buscou elementos com nome INFORMACAO e SELECIONADO na classe.
    informacoesAbas.classList.remove("selecionado"); //remove parte do nome da classe para retirar propriedades.

    //6. mostrar o conteúdo da aba selecionada.
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`; //cria uma STRING na forma "informacao-minhas-redes".
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba); //busquei um elemento pelo id correspondente à variável que criei na linha acima.
    informacaoASerMostrada.classList.add("selecionado");//adiciona o nome retirado da classe na linha 41.
}

//FUNÇÕES PARA SLIDE DO MENU
function openNav(){
    document.getElementById('myNav').style.width = "30%";
}

function closeNav(){
    document.getElementById('myNav').style.width = "0%";
}