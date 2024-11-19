import { MovieDataProvider } from './contextApi'
import './App.css'
import Home from './pages/Home/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Movies from './pages/Movies/Movies'
import MovieInfo from './pages/MovieInfo/MovieInfo'
import Subscribe from './pages/Subscription/Subscribe'
import Tvshows from './pages/Tvshows/Tvshows'
import Search from './pages/Search'

function App() {

  return (
    <MovieDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie" element={<Movies />}></Route>
          <Route path="/tv" element={<Tvshows />}></Route>
          <Route path="/:type/:id" element={<MovieInfo />}></Route>
          <Route path="/subscription" element={<Subscribe />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Router>
    </MovieDataProvider>
  )
}

export default App
