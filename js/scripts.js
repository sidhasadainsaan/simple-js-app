let pokemonList = [
    {name: 'bulbasaur', height: '0.7', types: ['grass', 'water']},
    {name: 'pikachu', height: '0.4', types: ['electric']},
    {name: 'vulpix', height: '0.6', types: ['fire']}
];

for (let i = 0; i < pokemonList.length; i++) {
    let pokemon =pokemonList[i];
    console.log('name:', pokemon.name);
    console.log('height:', pokemon.height);
    console.log('types:', pokemon.types);
    document.write('<p>' + pokemon.name + ' | height: ' + pokemon.height + ' | types: ' + pokemon.types + '</p>');
    if (pokemon.height <= 0.5) {
        document.write('Wow that is tiny!!');
    }
}