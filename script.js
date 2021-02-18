const poke_container = document.getElementById('poke-container')
const pokemon_count = 203
const colors = {
  fire:'#ff7e42',
  grass:'#defde0',
  electric:'#32d4f1',
  water:'#3498db',
  ground:'#f4e7da',
  rock: '#d5d5d4',
  fairy:'#fceaff',
  poison:'#98d7a5',
  bug:'#f8d5a3',
  dragon:'#97b3e6',
  psychic:'#eaeda1',
  flying:'#55adff',
  fighting:'#5e8fbd',
  normal:'#bbbbbb',
  ghost:'#bf97ff',
  dark:'#6b6b6b'
}

const main_types = Object.keys(colors)
console.log(main_types)

const fetchpokemons = async () => {
  for(let i = 1; i <= pokemon_count; i++){
    await getPokemon(i)
  }
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()
  createPokemonCard(data)
  
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon-card')

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const id = pokemon.id.toString().padStart(3, '0')

  const poke_types =  pokemon.types.map(type => type.type.name)

  const type = main_types.find(type => poke_types.indexOf(type) > -1)

 const type2 = type[0].toUpperCase() + type.slice(1)

  const color = colors[type]

  // pokemonEl.style.backgroundColor = color

  const pokemonInnerHTML = `
  <div class="pokemon">
      <div class="pokemon-front" style="background-color: rgb(141, 141, 141)">
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
        </div>
        <div class="info">
          <h2 class="number">${id}</h2>
        </div>
      </div>
      <div class="pokemon-back">
        <div class="img-container">
          <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
        </div>
        <div class="info">
          <h3 class="name">${name}</h3>
          <small class="type">Type:</small><br>
          <span style="background-color: ${color}">${type2}</span>
        </div>
      </div>
  </div>
  `

  pokemonEl.innerHTML = pokemonInnerHTML

  poke_container.appendChild(pokemonEl)

}


fetchpokemons()




