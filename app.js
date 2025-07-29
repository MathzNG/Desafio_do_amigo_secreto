//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Variaveis de armazenamento.
let nome;
let listaNomes = [];

//Função para adicionar um amigo a lista e aparecer na tela.
function adicionarAmigo(){
    nome = document.querySelector('input').value;
    if(nome != ''){
    listaNomes.push(nome);
    document.getElementById('listaAmigos').innerHTML = listaNomes;
    limparCampos();
    }else{
        validarCampo();
        
    }
}

//Validação do campo
function validarCampo(){
    campo = document.querySelector('input').value;

    if(campo == ''){
      alert('Favor digitar um nome valido!!');
    }
}

//Função para o sorteio de amigo 
/*Math.floor corta as casas decimais, Math.random gera um numero aleatorio ex: 0,454894564684, 
listanome.length fala o limite da lista, no final o math.floor transforma o numero aleatorio em inteiro
e puxa da lista o nome baseado na sua posição da lista (0,1,2,3,etc).*/

    function sortearAmigo(){
        if(listaNomes.length > 0){
  let sorteado = listaNomes[Math.floor(Math.random() * listaNomes.length)];
  document.getElementById('resultado').innerHTML = sorteado; 
}else{
    alert('Favor adicionar nomes a lista de sorteio!!');
}
    }
//Função para limpar o campo
function limparCampos(){
    nome = document.querySelector('input');
    nome.value = '';
}