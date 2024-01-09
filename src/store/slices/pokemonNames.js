import { createSlice } from "@reduxjs/toolkit";

const pokemonNamesSlice = createSlice({
    name: "pokemonNames",
    initialState: [],
    reducers:{
        setPokemonNames: (state, action) => {
            const newNames = action.payload
            return newNames
        },
    }

})


export const { setPokemonNames } = pokemonNamesSlice.actions

export default pokemonNamesSlice.reducer