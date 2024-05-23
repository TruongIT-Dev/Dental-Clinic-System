import './App.css'

import Home from './pages/home'
import Service from './pages/service'
// Libs
import { Route, Routes } from 'react-router-dom'
import PageLayout from './pages'
import Appoinment from './pages/appoinment'
import Error from './pages/error'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PageLayout />} >

          <Route index path='/' element={<Home />} />

          <Route path='/dich-vu' element={<Service />} />
          <Route path='#gia' />
          <Route path='/dat-lich-hen' element={<Appoinment />} />

          <Route path='/error' element={<Error />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
