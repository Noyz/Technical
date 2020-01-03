// Get Pokemon From Database
export function getPokemonFromDataBase (text) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + text
    return fetch(url)
      .then(res => res.json())
      .then((data) => {
        return data;
      })
      .catch(err => console.log(err));
}

export function getPokemonImgFromDataBase (text) {
  const url = 'https://pokeapi.co/api/v2/pokemon/' + text
  return fetch(url)
    .then(res => res.json())
    .then((data) => {
      return data;
    })
    .catch(err => console.log(err));
}


export function getPokemonFromDataBaseForAll (text) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + text
    return fetch(url)
      .then(res => res.json())
      .then((data) => {
        return data;
      })
      .catch(err => console.log(err));
}

export function getPokemonNameFromDataBaseForAll () {
  const url = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=649'
  return fetch(url)
    .then(res => res.json())
    .then((data) => {
      return data.results;
    })
    .catch(err => console.log(err));
}