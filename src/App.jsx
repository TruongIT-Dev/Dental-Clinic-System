import './App.css'

// Libs
import { Route, Routes, Navigate } from 'react-router-dom'
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
import PatientDashboard from './pages/dashboard/PatientDashboard';
import PatientChangePassword from './pages/dashboard/PatientDashboard/PatientChangePassword';
import PatientInfo from './pages/dashboard/PatientDashboard/PatientInfo';
import PatientExamination from './pages/dashboard/PatientDashboard/PatientExamination';
import PatientTreatment from './pages/dashboard/PatientDashboard/PatientTreament';
import AdminDashboard from './pages/dashboard';
import Examination from './pages/dashboard/ScheduleManagement/Examination';
import MainDashboard from './pages/dashboard/home';
import CreateExamination from './pages/dashboard/ScheduleManagement/CreateExamination';
import Treatment from './pages/dashboard/ScheduleManagement/Treatment.';
import CreateTreatment from './pages/dashboard/ScheduleManagement/CreateTreatment';
import DentistManagement from './pages/dashboard/DentistManagement';
import AddNewDentist from './pages/dashboard/DentistManagement/AddNewDentist';
import ServiceManagement from './pages/dashboard/ServiceManagement';
import AddNewService from './pages/dashboard/ServiceManagement/AddNewService';
import RoomManagement from './pages/dashboard/RoomManagement';
import AddNewRoom from './pages/dashboard/RoomManagement/AddNewRoom';

function App() {
  const account = useSelector(state => state?.account);
  // const isRoleAdmin = useSelector(state => state?.account?.user?.user);
  const isAuthenticated = account.isAuthenticated;

  return (
    <>
      <Routes>
        <Route path='/' element={<PageLayout />}>

          <Route index element={<Home />} />
          <Route path='/loai-hinh-dich-vu' element={<Catergory />} />
          <Route path='/chi-tiet-dich-vu' element={<ServiceDetail />} />
          <Route path='/lich-lam-viec' element={<Schedule />} />
          <Route path='/lien-he' element={<Contact />} />

          {/* Đăng nhập - Đăng ký */}
          <Route path='/dang-nhap' element={<SignIn />} />
          <Route path='/dang-ky' element={<SignUp />} />


          {isAuthenticated ? (
            <>
              <Route path='/dat-lich-hen' element={<Appoinment />} />

              {/* Dashboard Patient */}
              <Route path='/patient' element={<PatientDashboard />}>
                <Route path='thong-tin-ca-nhan' element={<PatientInfo />} />
                <Route path='lich-kham' element={<PatientExamination />} />
                <Route path='lich-dieu-tri' element={<PatientTreatment />} />
                <Route path='doi-mat-khau' element={<PatientChangePassword />} />
              </Route>
            </>
          ) : (
            <Route path='*' element={<Navigate to="/error" />} />
          )}
          <Route path='/error' element={<Error />} />
          <Route path='*' element={<Navigate to="/error" />} />
        </Route>

        {isAuthenticated.role === 'admin' ? (
          <>
            {/* Dashboard Admin */}
            <Route path='/' element={<AdminDashboard />}>
              <Route index path='/dashboard' element={<MainDashboard />} />
              {/* Quản lý lịch khám điều trị */}
              <Route path='/quan-ly-lich-kham' element={<Examination />} />
              <Route path='/tao-lich-kham' element={<CreateExamination />} />
              <Route path='/quan-ly-lich-dieu-tri' element={<Treatment />} />
              <Route path='/tao-lich-dieu-tri' element={<CreateTreatment />} />

              {/* Quản lý Dentist */}
              <Route path='/quan-ly-nha-si' element={<DentistManagement />} />
              <Route path='/tao-nha-si' element={<AddNewDentist />} />

              {/* Quản lý Dịch vụ */}
              <Route path='/quan-ly-dich-vu' element={<ServiceManagement />} />
              <Route path='/tao-dich-vu' element={<AddNewService />} />

              {/* Quản lý Room */}
              <Route path='/quan-ly-phong-kham' element={<RoomManagement />} />
              <Route path='/tao-phong-kham' element={<AddNewRoom />} />
            </Route>
          </>
        ) : (
          <Route path='*' element={<Navigate to="/error" />} />
        )}
      </Routes>
    </>
    // <>
    //   <Routes>
    //     <Route path='/' element={<PageLayout />} >
    //       {/* Pages Guest && User */}
    //       <Route index path='/' element={<Home />} />
    //       <Route path='/loai-hinh-dich-vu' element={<Catergory />} />
    //       <Route path='/chi-tiet-dich-vu' element={<ServiceDetail />} />

    //       {/* Đặt lịch hẹn */}
    //       <Route path='/dat-lich-hen' element={<Appoinment />} />

    //       <Route path='/lich-lam-viec' element={<Schedule />} />
    //       <Route path='/lien-he' element={<Contact />} />


    //       {/* Đăng ký && Đăng nhập */}
    //       <Route path='/dang-nhap' element={<SignIn />} />
    //       <Route path='/dang-ky' element={<SignUp />} />

    //       {/* Dashboard Patient */}
    //       <Route path='/patient' element={<PatientDashboard />}>
    //         <Route path='thong-tin-ca-nhan' element={<PatientInfo />} />
    //         <Route path='lich-kham' element={<PatientExamination />} />
    //         <Route path='lich-dieu-tri' element={<PatientTreatment />} />
    //         <Route path='doi-mat-khau' element={<PatientChangePassword />} />
    //       </Route>


    //       {/* Error Page */}
    //       <Route path='/error' element={<Error />} />
    //     </Route>


    //     {/* Dashboard Admin */}
    //     <Route path='/' element={<AdminDashboard />}>
    //       <Route index path='/dashboard' element={<MainDashboard />} />
    //       {/* Quản lý lịch khám điều trị */}
    //       <Route path='/quan-ly-lich-kham' element={<Examination />} />
    //       <Route path='/tao-lich-kham' element={<CreateExamination />} />
    //       <Route path='/quan-ly-lich-dieu-tri' element={<Treatment />} />
    //       <Route path='/tao-lich-dieu-tri' element={<CreateTreatment />} />

    //       {/* Quản lý Dentist */}
    //       <Route path='/quan-ly-nha-si' element={<DentistManagement />} />
    //       <Route path='/tao-nha-si' element={<AddNewDentist />} />

    //       {/* Quản lý Dịch vụ */}
    //       <Route path='/quan-ly-dich-vu' element={<ServiceManagement />} />
    //       <Route path='/tao-dich-vu' element={<AddNewService />} />

    //       {/* Quản lý Room */}
    //       <Route path='/quan-ly-phong-kham' element={<RoomManagement />} />
    //       <Route path='/tao-phong-kham' element={<AddNewRoom />} />
    //     </Route>
    //   </Routes>
    // </>

  );

}

export default App
