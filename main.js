/*A declaração const indica que se trata de uma variável que não será alterada
 em nenhuma instância do código.Isso significa que serão sempre quatro botões.
 Vamos declarar a variável const botoes, e atribuir a ela um comando que busca tudo
 que existe a classe botão.Queremos todas as informações relacionadas à classe, 
 por isso utilizaremos o querySelectorAll(), cujo interior dos parênteses receberá um
 .botao entre aspas, assim como nomeamos uma classe.*/
 
const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    }
}