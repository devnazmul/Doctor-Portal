import {
  Route, Routes
} from "react-router-dom";
import './App.css';
import Calendar from "./pages/Calendar";
import Layout from "./pages/Layout";
import Messages from './pages/Messages';
import Overview from './pages/Overview';
import PatientList from './pages/PatientList';
import PaymentInfo from './pages/PaymentInfo';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="patient-list" element={<PatientList />} />
        <Route path="overview" element={<Overview />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="messages" element={<Messages />} />
        <Route path="payment" element={<PaymentInfo />} />
        <Route path="settings" element={<Settings />} />
      </Route>
        
      </Routes>
    </div>
  );
}

export default App;
