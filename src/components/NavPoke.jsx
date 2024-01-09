import { useDispatch, useSelector } from "react-redux"
import InputSearch from "./InputSearch"
import useFetch from "../hooks/useFetch"
import { setDataPokemons } from "../store/slices/dataPokemons"


const NavPoke = () => {
  const {data:{ results = []}} = useFetch('https://pokeapi.co/api/v2/type/')
  
  const dispatch = useDispatch()
  const trainerName = useSelector((store) => store.trainerName)

  const handleOptions = async(e) => {
    let value = e.target.value
    
    try {
      if (value === "all") {
        const response =  await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1292")
        const data = await response.json()
        const newDataTypes = data.results
        dispatch(setDataPokemons(newDataTypes))
      }else{
      const response = await fetch("https://pokeapi.co/api/v2/type/" + value)
      const data = await response.json()
      const newDataTypes = data.pokemon.map((pok) => pok.pokemon)
      dispatch(setDataPokemons(newDataTypes))}
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className="h-[150px] w-full border-b-gray-700 border-b-8 bg-red-400 bg-contain bg-no-repeat flex justify-center items-center text-black max-lg:h-[230px]">
      <section className="relative w-[95%] max-w-[1920px] h-[90%] bg-red-400 rounded-xl shadow-[0_5px_50px_0_rgba(55,71,79,0.1)] flex gap-6 items-center justify-end px-6 py-2 max-lg:flex-col max-lg:gap-4">
        <img className="w-[250px] absolute top-[-20px] left-4 max-lg:w-[150px] max-lg:top-[-10px] max-lg:left-[calc(50%-75px)]" src="/images/logo.png" alt="" />
        <h2 className="w-[300px] text-white absolute bottom-2 left-12 text-lg font-medium max-lg:top-[60px] max-lg:text-center max-lg:left-0 max-lg:w-full">Welcome Trainer <span className="capitalize">{trainerName}</span>!</h2>
        <InputSearch/>
        <select onChange={handleOptions} className="scrollbar z-20 capitalize w-[200px] h-[40px] rounded-md flex justify-between shadow-[0_5px_50px_0_rgba(55,71,79,0.2)] border-[1px] border-[#eee] px-4 outline-none " name="" id="">
          <option className=" z-20 capitalize text-black " value="all">All</option>
          {results.map((type) => {
            return <option className="z-20 capitalize " key={type.name} value={type.name}>{type.name}</option>
          })}
        </select>
      </section>
    </nav>
  )
}
export default NavPoke