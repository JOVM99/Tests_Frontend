/* Pokemon count by letter */

export const getNamebyLetter = (pokemons) => {
  let counter = {};
  const pokemonsByLetter = [];
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (const l of letters) {
    counter[l] = 0;
  }

  for (const p of pokemons) {
    const first = p.name.charAt(0).toLowerCase();
    if (letters.includes(first)) {
      counter[first]++;
    }
  }
  for (const l in counter) {
    pokemonsByLetter.push({ id: l, count: counter[l] });
  }

  return pokemonsByLetter;
};
