import { createSlice } from "@reduxjs/toolkit";

const dataPokemonsSlice = createSlice({
    name: "dataPokemons",
    initialState: [],
    reducers:{
        setDataPokemons: (state, action) => {
            const newDataPokemons = action.payload
            return newDataPokemons
        }
    }
})


export const { setDataPokemons } = dataPokemonsSlice.actions

export default dataPokemonsSlice.reducer