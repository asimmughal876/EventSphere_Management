import logo from './logo.svg';
import './App.css';
import Index from './User/component/Index';
import Aboutus from './User/component/Aboutus';
import Layout from './User/component/Layout';
import Shedule from './User/component/Shedule';
import Contact from './User/component/Contact';
import ForgotPassword from './User/component/ForgotPassword';
import CodeVerification from './User/component/CodeVerification';
import ResetPassword from './User/component/ResetPassword';
import UserProfile from './User/component/UserProfile';
import { Signup } from './User/component/Signup';
import { Login } from './User/component/Login';
import DashboardCards from './Admin/Components/DashboardCards';
import AddExpo from './Admin/Pages/Addexpo';
import Table from './Admin/Pages/Table';
import AddCompany from './Admin/Pages/Addcompany';
import Booth from './Admin/Pages/Booth';
import CompanyList from './Admin/Pages/Companylist';
import Exhibitorlist from './Admin/Pages/Exhibitorlist';
import LayoutAdmin from './Admin/Components/LayoutAdmin';
import { jwtDecode } from 'jwt-decode';
import Getbooth from './Admin/Pages/Getbooth';
import Assigbooth from './Admin/Pages/Assigbooth';
import Getboothrequest from './Admin/Pages/Getboothrequest';
import AddSpeaker from './Admin/Pages/AddSpeaker';
import AddExpoSchedule from './Admin/Pages/AddExpoSchedule';
import Editexpo from './Admin/Pages/Edtiexpo';
import Register from './User/component/Register';
import ExpoShedule from './User/component/ExpoShedule';
import GetExpoShedule from './Admin/Pages/GetExpoShedule';
import UpdateExpoSchedule from './Admin/Pages/UpdateExpoSchedule';
import GetTotalAttendees from './Admin/Pages/GetTotalAttendees';
import ExhiExpo from './Admin/Pages/ExhiExpo';
import GetboothUser from './User/component/GetboothUser';
import Message from './Admin/Pages/Message';
import UserMessage from './User/component/UserMessage';
import ExhiMessage from './Admin/Components/ExhiMessage';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" replace />;
  try {
    const decoded = jwtDecode(token);
    if (allowedRoles.length > 0 && !allowedRoles.includes(decoded.role)) {
      return <Navigate to="/" replace />;
    }
    return children;
  } catch {
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }
};

const protectedRoute = (Component, LayoutComponent = Layout, roles = []) => (
  <ProtectedRoute allowedRoles={roles}>
    <LayoutComponent>
      <Component />
    </LayoutComponent>
  </ProtectedRoute>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Only public routes */}
        <Route path="/" element={<Layout><Index /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/signup" element={<Layout><Signup /></Layout>} />
        <Route path="/forgot-password" element={<Layout><ForgotPassword /></Layout>} />
        <Route path="/code-verification" element={<Layout><CodeVerification /></Layout>} />
        <Route path="/reset-password" element={<Layout><ResetPassword /></Layout>} />
        <Route path="/about-us" element={<Layout><Aboutus /></Layout>} />
        <Route path="/schedule" element={<Layout><Shedule /></Layout>} />
        <Route path="/Getbooth/:expo_id" element={<Layout><GetboothUser /></Layout>} />
        <Route path="/ExpoShedule/:expo_id" element={<Layout><ExpoShedule /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/userMessage" element={<Layout><UserMessage /></Layout>} />

        {/* All other routes are protected */}
        <Route path="/userprofile" element={protectedRoute(UserProfile)} />

        <Route path="/admin" element={protectedRoute(DashboardCards, LayoutAdmin, [1, 2])} />
        <Route path="/addexpo" element={protectedRoute(AddExpo, LayoutAdmin, [1])} />
        <Route path="/getexpo" element={protectedRoute(Table, LayoutAdmin, [1])} />
        <Route path="/booth" element={protectedRoute(Booth, LayoutAdmin, [1])} />
        <Route path="/expos/:expoId/add-booth" element={protectedRoute(Booth, LayoutAdmin, [1])} />
        <Route path="/expos/:expoId/get-booth" element={protectedRoute(Getbooth, LayoutAdmin, [1])} />
        <Route path="/expos/:expoId/:booth_id/assign-booth" element={protectedRoute(Assigbooth, LayoutAdmin, [1])} />
        <Route path="/Exhibitorlist" element={protectedRoute(Exhibitorlist, LayoutAdmin, [1])} />
        <Route path="/getExpoShedule" element={protectedRoute(GetExpoShedule, LayoutAdmin, [1])} />
        <Route path="/addSpeaker" element={protectedRoute(AddSpeaker, LayoutAdmin, [1])} />
        <Route path="/AddExpoSchedule" element={protectedRoute(AddExpoSchedule, LayoutAdmin, [1])} />
        <Route path="/Editexpo" element={protectedRoute(Editexpo, LayoutAdmin, [1])} />
        <Route path="/updateExpoSchedule/:id" element={protectedRoute(UpdateExpoSchedule, LayoutAdmin, [1])} />
        <Route path="/GetTotalAttendees" element={protectedRoute(GetTotalAttendees, LayoutAdmin, [1])} />
        <Route path="/message" element={protectedRoute(Message, LayoutAdmin, [1, 2])} />
        <Route path="/ExhiMessage" element={protectedRoute(ExhiMessage, LayoutAdmin, [1])} />
        <Route path="/addcompany/:expo_id" element={protectedRoute(AddCompany, LayoutAdmin, [2])} />
        <Route path="/companylist" element={protectedRoute(CompanyList, LayoutAdmin, [2])} />
        <Route path="/getboothrequest" element={protectedRoute(Getboothrequest, LayoutAdmin, [2])} />
        <Route path="/ExhiExpo" element={protectedRoute(ExhiExpo, LayoutAdmin, [2])} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
