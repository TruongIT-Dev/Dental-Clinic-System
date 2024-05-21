import './App.css'

import Home from './pages/home'
import Service from './pages/service'
// Libs
import { Route, Routes } from 'react-router-dom'
import PageLayout from './pages'
import Appoinment from './pages/appoinment'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PageLayout />} >
          
          <Route index element={<Home />} />

          <Route path='/service' element={<Service />} />
          <Route path='#price' />
          <Route path='/appoinment' element={<Appoinment />} />
          
          
        </Route>
      </Routes>
    </>
  )
}

export default App
