import './App.css'
import Home from './pages/home'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Service from './pages/service'
// Libs
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route index path='/' element={< Home />} />

        <Route path='/signin' element={< SignIn />} />
        <Route path='/signup' element={< SignUp />} />
        <Route path='/service' element={< Service />} />

        <Route path='/error' element={< Home />} />
        {/* <Route path='/' element={< Home />} />
        <Route path='/' element={< Home />} /> */}
      </Routes>
    </>
  )
}

export default App
