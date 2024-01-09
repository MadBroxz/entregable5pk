import { Link } from "react-router-dom";
import useDominantColor from "../hooks/useDominantColor";
import useFetch from "../hooks/useFetch";
import ShowTypePokemon from "../utils/ShowTypes";
import Loader from "./Loader";

const PokeCard = ({ pokemon }) => {
  const urlPokemon = pokemon.url
  const { data, loading: load} = useFetch(urlPokemon);
  const { dominantColor, darkerColor, lighterColor, loading } = useDominantColor(data?.sprites?.other["dream_world"].front_default || data?.sprites?.other["official-artwork"].front_default || data?.sprites?.front_default);

  return (
    <>
      {load || loading ? (<Loader />) : 
      (
        <div className="rounded-xl">
      <Link to={`/pokedex/${data.id}`} className="relative w-[261px] h-[383px] rounded-xl border-[6px] flex flex-col justify-end" style={{ background:`radial-gradient(circle at 50% 37%, ${lighterColor} 5px, ${darkerColor})`, borderColor: dominantColor, color: darkerColor }}>
        <img className="absolute top-0 left-[calc(50%-80px)] w-[160px]" src={data.sprites?.other["official-artwork"].front_default} alt="img"/>
        <section className={"bg-white w-full h-[66%] flex flex-col items-center pt-6 rounded-b-lg justify-between"}>
          <div className="w-full flex flex-col items-center">
            <h4 className="text-[25px] font-medium capitalize text-center">{data.name}</h4>
            <h5 className="text-[14px] capitalize">{ShowTypePokemon(data.types)}</h5>
            <p className="text-[10px] opacity-95">Types</p>
          </div>
          <section className="w-full h-[50%] flex justify-between px-8 py-1">
            <div className="h-full flex flex-col gap-4">
              <div className="text-center">
                <p className="text-[10px] opacity-90">HP</p>
                <p className="font-semibold">{data.stats[0]?.base_stat}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] opacity-90">DEFENSE</p>
                <p className="font-semibold">{data.stats[2]?.base_stat}</p>
              </div>
            </div>
            <div className="h-full flex flex-col gap-4">
              <div className="text-center">
                <p className="text-[10px] opacity-90">ATTACK</p>
                <p className="font-semibold">{data.stats[1]?.base_stat}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] opacity-90">SPEED</p>
                <p className="font-semibold">{data.stats[5]?.base_stat}</p>
              </div>
            </div>
          </section>
        </section>
      </Link>
      </div>)}
    </>
  );
};
export default PokeCard;
