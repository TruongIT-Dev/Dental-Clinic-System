import './App.css'

// Libs
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import PageLayout from './pages'
import Catergory from './pages/catergories'
import Service from './pages/services'
import Appoinment from './pages/appoinment'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Error from './pages/error'
import Contact from './pages/contact'
import Schedule from './pages/schedule'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PageLayout />} >

          <Route index path='/' element={<Home />} />

          <Route path='/loai-hinh-dich-vu' element={<Catergory />} />
          <Route path='/dich-vu' element={<Service />} />
          <Route path='#gia' />
          <Route path='/dat-lich-hen' element={<Appoinment />} />
          <Route path='/lich-lam-viec' element={<Schedule />} />
          <Route path='/lien-he' element={<Contact />} />

          <Route path='/dang-nhap' element={<SignIn />} />
          <Route path='/dang-ky' element={<SignUp />} />


          <Route path='/error' element={<Error />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
