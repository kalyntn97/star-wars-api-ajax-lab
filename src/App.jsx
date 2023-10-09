//npm modules
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
//pages
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'
//components
import Nav from './components/Nav/Nav'
//css`

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/starships' element={<StarshipList />} />
        <Route path='/starships/:starshipId' element={<StarshipDetails />}/>
      </Routes>
    </>
  )
}

export default App
