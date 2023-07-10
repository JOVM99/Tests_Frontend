/*Hook to load api information */

import { useEffect, useState } from "react";
import { getPokemonByName } from "../helpers/getPokemonbyName";

export const useApi = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemons2, setPokemons2] = useState([]);
  const [pokemonsDetails, setPokemonsDetails] = useState([]);
  const [rowSelectionModel, setRowSelectionModel] = useState();
  const [value, setValue] = useState("");

  useEffect(() => {
    getPokemons();
  }, []);
  const getPokemons = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
    const resp = await fetch(url);
    const data = await resp.json();
    const r = data.results;
    const p = [];
    for (let d = 0; d < 1281; d++) {
      p.push({ id: 1 + d, name: r[d].name });
    }
    setPokemons(p);
    setPokemons2(p);
  };

  const getPokemonDetails = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();
    setPokemonsDetails(data);
    // console.log(pokemonsDetails)
  };

  useEffect(() => {
    setPokemons2(getPokemonByName(pokemons, value));
  }, [pokemons, value]);

  const handleChange = (newRowSelectionModel) => {
    setRowSelectionModel(newRowSelectionModel[0]);
    if (newRowSelectionModel[0] !== undefined) {
      getPokemonDetails(newRowSelectionModel[0]);
    }
  };
  return {
    ...pokemons,
    pokemons,
    pokemons2,
    rowSelectionModel,
    value,
    pokemonsDetails,
    setValue,
    handleChange,
  };
};
