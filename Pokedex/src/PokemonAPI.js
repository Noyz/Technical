// Get Pokemon From Database
export function getPokemonFromDataBase (text) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + text.id
    return fetch(url)
      .then(res => res.json())
      .then((data) => {
        return data;
      })
      .catch(err => console.log(err));
}

        // getPokemonFromDataBase(idPokemon).then(data => this.props.navigation.navigate('PokemonDetails', { pokemon: data }));


export function getPokemonFromDataBaseForAll (text) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + text
    return fetch(url)
      .then(res => res.json())
      .then((data) => {
        return data;
      })
      .catch(err => console.log(err));
}