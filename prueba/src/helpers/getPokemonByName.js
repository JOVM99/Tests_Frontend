export const getPokemonByName = (pokemons, name='') => {
    if (name==null ){
      name=''
    }
    name = name.toLocaleLowerCase().trim();
    if(name.length === 0) return [...pokemons];
    return pokemons.filter( pokemon => pokemon.name.toLocaleLowerCase().includes(name));
}