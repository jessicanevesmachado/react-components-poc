import { useEffect, useState } from "react";
import type { Option } from "../components/auto-complete";
import type { Pokemon } from "../App";
import {setFirstLetterUpper} from '../util/index'


type PaginationPokemonProps = {
  page:number;
  maxByPage:number;
}


const usePokemon = ({page,maxByPage}:PaginationPokemonProps)=>{

    const [pokemonList, setPokemonList] = useState<Option[]>([])
    const URL = `https://pokeapi.co/api/v2/pokemon?offset=${page*maxByPage}&limit=${maxByPage}`;
    console.log({URL})

  useEffect(()=>{

    const searchPokemon = async()=>{
      const fetchPokemon = await fetch(URL);
      const pokemonList =  await fetchPokemon.json();

      const transform = pokemonList?.results.map((pokemon:Pokemon, index:number)=> ({
        id : index,
        value: setFirstLetterUpper(pokemon.name),
        imageUrl:""//pokemon.url
      }as Option))

      setPokemonList(transform);

    }

    searchPokemon();
  },[URL])
 

  return {pokemonList}
}

export {usePokemon}