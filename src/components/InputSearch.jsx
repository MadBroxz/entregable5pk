import { useDispatch, useSelector } from "react-redux"
import { setDataPokemons } from "../store/slices/dataPokemons"
import { useState } from "react"

const InputSearch = () => {
  const pokemonNames = useSelector((store) => store.pokemonNames)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    filterNames(e.target.name.value)
    setInputValue("")
  }

  function filterNames(value) {
    const filterNames = pokemonNames.filter((name) => {
      return name.name.toLowerCase().includes(value.toLowerCase())
    })
    dispatch(setDataPokemons(filterNames))
  }

  const [inputValue, setInputValue] = useState('')
  
  const handleInputchange = (event) => {
    const value = event.target.value.toLowerCase()
    setInputValue(value)
  }

  return (
    <form onSubmit={handleSubmit}
          className="z-50 w-[400px] h-[40px] rounded-md  flex justify-between shadow-[2px_2px_50px_0_rgba(55,71,79,0.2)] max-sm:w-auto">
      <input 
          value={inputValue} 
          onChange={handleInputchange}
          name="name" 
          className="bg-white rounded-xl px-4 w-full outline-none max-sm:w-[200px] " type="text" placeholder="Search your pokemon!" 
          autoComplete="off"/>
      <button 
          type="submit"
          className="w-[80px] ml-2 h-full bg-blue-900 rounded-lg text-white max-sm:w-[60px]">
        Search
      </button>
    </form>
  )
}
export default InputSearch