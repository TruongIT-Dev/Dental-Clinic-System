import './App.css'

// Libs
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux';

import Home from './pages/home'
import PageLayout from './pages'
import Catergory from './pages/catergories'
import Appoinment from './pages/appoinment'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Error from './pages/error'
import Contact from './pages/contact'
import Schedule from './pages/schedule'
import ServiceDetail from './pages/services'
// import AdminDashBoard from './pages/dashboard/admin';
// import UnAuthorizated from './pages/unauthorizated';
import PatientDashboard from './pages/dashboard/patient';
import ChangePassword from './pages/dashboard/patient/ChangePassword';
import PatientInfo from './pages/dashboard/patient/PatientInfo';
import Examination from './pages/dashboard/patient/Examination';
import Treatment from './pages/dashboard/patient/Treament';

function App() {
  const account = useSelector(state => state?.account);
  const isRoleAdmin = useSelector(state => state?.account?.user?.user);
  const isAuthenticated = account.isAuthenticated;

  return (
    <>
      <Routes>
        <Route path='/' element={<PageLayout />} >
          {/* Pages Guest */}
          <Route index path='/' element={<Home />} />
          <Route path='/loai-hinh-dich-vu' element={<Catergory />} />
          <Route path='/chi-tiet-dich-vu' element={<ServiceDetail />} />
          <Route path='/dat-lich-hen' element={<Appoinment />} />
          <Route path='/lich-lam-viec' element={<Schedule />} />
          <Route path='/lien-he' element={<Contact />} />

          {/* Đăng ký && Đăng nhập */}
          <Route path='/dang-nhap' element={<SignIn />} />
          <Route path='/dang-ky' element={<SignUp />} />

          {/* Patient Dashboard */}
          <Route path='/patient' element={<PatientDashboard />} >
            <Route index path='/patient/thong-tin-ca-nhan' element={<PatientInfo />} />
            <Route path='/patient/lich-kham' element={<Examination />} />
            <Route path='/patient/lich-dieu-tri' element={<Treatment />} />
            <Route path='/patient/doi-mat-khau' element={<ChangePassword />} />
          </Route>

          {/* Error Page */}
          <Route path='/error' element={<Error />} />
        </Route>

        {/* Dashboard Admin && Dentist */}
        {/* {(isAuthenticated === true && isRoleAdmin.role === 'admin') ?
          <Route path='/admin' element={<AdminDashBoard />} />
          :
          <Route path='/admin' element={<UnAuthorizated />} />
        } */}
      </Routes>
    </>
  )
}

export default App
