import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName";
import dataPokemons from "./slices/dataPokemons";
import pokemonNames from "./slices/pokemonNames";

export default configureStore({
    reducer: {
        trainerName: trainerName,
        dataPokemons: dataPokemons,
        pokemonNames: pokemonNames,
    }
})