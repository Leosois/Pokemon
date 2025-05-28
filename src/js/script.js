/* Quando clicar no pokemon da listatagem temos que esconder o cartão do 
pokemon abreto e mostrar o cartão correspondente ao que 
foi selecionado no clique para isso vamos usar os elementos:
1 - listagem
2 - cartão pokemon*/

const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsnCard = document.querySelectorAll('.pokemon-card')

listaSelecaoPokemon.forEach(pokemon =>{
    pokemon.addEventListener('click',() =>{
        //remover a class aberto só do cartão que esta aberto
        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('open')

        //vamos pegar o id do pokemon que esta na listagem 
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')

        // arrumando a cor da listagem
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
    
})
