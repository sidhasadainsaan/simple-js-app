let pokemonRepository = (function () {

    let repository = [
        { name: 'Bulbasaur', height: '0.7', types: ['grass', 'water'] },
        { name: 'Pikachu', height: '0.4', types: ['electric'] },
        { name: 'Vulpix', height: '0.6', types: ['fire'] },
        { name: 'Ivysaur', height: '3.3', types: ['grass', 'poison'] },
        { name: 'Venusaur', height: '6.07', types: ['grass', 'poison'] },
        { name: 'Charmander', height: '2.00', types: ['fire'] },
        { name: 'Charmeleon', height: '3.07', types: ['fire'] },
        { name: 'Charizard', height: '5.07', types: ['fire', 'flying'] },
        { name: 'Squirtle', height: '1.08', types: ['water'] },
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
        console.log(`Name: ${pokemon.name}`);
        console.log(`Height: ${pokemon.height} meters`);
        console.log(`Type(s): ${pokemon.types.join(', ')}`);
        if (pokemon.height > 8) {
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

pokemonRepository.add({ name: 'Charmander', height: '0.6', types: ['fire'] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});

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

button.addEventListener('click', function () {
    showDetails(pokemon); 
});