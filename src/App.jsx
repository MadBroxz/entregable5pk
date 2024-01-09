import { Route, Routes } from "react-router-dom"
import MainPokedex from "./components/MainPokedex"
import ProtectedRoutes from "./components/ProtectedRoutes"
import StartPage from "./components/StartPage"
import PagePokemonInfo from "./components/PagePokemonInfo"

function App() {

  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/pokedex" element={<MainPokedex />} />
        <Route path="/pokedex/:id" element={<PagePokemonInfo />} />
      </Route>
    </Routes>
  )
}

export default App