let pokemonRepository = (function () {

    let repository = [
        { name: 'bulbasaur', height: '0.7', types: ['grass', 'water'] },
        { name: 'pikachu', height: '0.4', types: ['electric'] },
        { name: 'vulpix', height: '0.6', types: ['fire'] },
    ];

    function add(pokemon) {
                    repository.push(pokemon);
    }

    function getAll() {
        return repository;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
    }

    function showDetails(pokemon) {
        let name = pokemon[0];
        let  details = pokemon[1];
        console.log('Name: ${name}');
        console.log(`Height: ${details.height} meters`);
		console.log(`Weight: ${details.weight} kg`);
		console.log(`Type(s): ${details.type.join(', ')}`);
		if (details.height > 8) {
			console.log("Wow, that's big!");
		}
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
    }
})();


pokemonRepository.add({ name: 'charmander', height: '0.6', types: ['fire'] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});









