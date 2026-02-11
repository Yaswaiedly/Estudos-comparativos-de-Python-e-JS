const jogos = ['The Last Of Us', 'Mario', 'Angry Birds'];
function add_jogos (jogo_nome){
    jogos.push (jogo_nome)
    return jogo_nome
}
fetch()
const remove_game = (jogo_nome) =>{
    jogos.splice (jogo_nome, '-')
}

const novo_jogo = add_jogo ('horizon zero down');
console.log(novo_jogo)

