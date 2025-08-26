
import Header from './component/Header'
import ProductionHouse from './component/ProductionHouse'
import Slider from './component/Slider'
import GenreMovieList from './component/GenreMovieList'
import './App.css'

function App() {
  

  return (
    <div className="w-full h-screen bg-black text-white">
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </div>
  )
}

export default App
