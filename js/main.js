const listaPokemon = document.getElementById('listaPokemon');
let URL = 'https://pokeapi.co/api/v2/pokemon/';

for (let i = 1; i <= 151; i++) {
  fetch(`${URL}${i}`)
    .then((response) => response.json())
    .then((data) => mostrarPokemon(data));
}

function mostrarPokemon(pokemon) {
  const div = document.createElement('div');
  div.classList.add('pokemon');
  div.innerHTML = `
    <p class="pokemon-id-back">#025</p>
    <div class="pokemon-imagen">
      <img
        src="${pokemon.sprites.other['official-artwork'].front_default}">
    </div>
    <div class="pokemon-info">
      <div class="nombre-contenedor">
        <p class="pokemon-id">#${pokemon.id}</p>
        <h2 class="pokemon-nombre">${pokemon.name}</h2>
      </div>
      <div class="pokemon-tipos">
        <p class="electric tipo">ELECTRIC</p>
        <p class="fighting tipo">FIGHTING</p>
      </div>
      <div class="pokemon-stats">
        <p class="stat">${pokemon.height}m</p>
        <p class="stat">${pokemon.weight}kg</p>
      </div>
    </div>
  `;
  listaPokemon.appendChild(div);
}
