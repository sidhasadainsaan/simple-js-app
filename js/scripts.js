let pokemonRepository = (function () {

    let pokemonList = [
        { name: 'bulbasaur', height: '0.7', types: ['grass', 'water'] },
        { name: 'pikachu', height: '0.4', types: ['electric'] },
        { name: 'vulpix', height: '0.6', types: ['fire'] }
    ];


    const expectedKeys = ['name', 'height', 'types'];


    function getAll() {
        return pokemonList;
    }


    function add(pokemon) {
        if (typeof pokemon === 'object' &&
            Object.keys(pokemon).every(key => expectedKeys.includes(key)) &&
            expectedKeys.every(key => pokemon.hasOwnProperty(key))) {
            pokemonList.push(pokemon);
        } else {
            console.log('Invalid Pokémon data. Please provide an object with only "name", "height", and "types".');
        }
    }


    function findByName(name) {
        return pokemonList.filter(function (pokemon) {
            return pokemon.name.toLowerCase() === name.toLowerCase();
        });
    }


    return {
        getAll: getAll,
        add: add,
        findByName: findByName
    };
})();


pokemonRepository.getAll().forEach(function (pokemon) {
    console.log('name:', pokemon.name);
    console.log('height:', pokemon.height);
    console.log('types:', pokemon.types);
    document.write('<p>' + pokemon.name + ' | height: ' + pokemon.height + ' | types: ' + pokemon.types + '</p>');
    if (pokemon.height <= 0.5) {
        document.write('Wow that is tiny!!');
    }
});


pokemonRepository.add({ name: 'charmander', height: '0.6', types: ['fire'] });


let foundPokemon = pokemonRepository.findByName('pikachu');
console.log('Found Pokémon:', foundPokemon);


let missingPokemon = pokemonRepository.findByName('missingno');
console.log('Search result for non-existent Pokémon:', missingPokemon);


console.log(pokemonRepository.getAll());





