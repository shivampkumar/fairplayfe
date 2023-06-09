import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Demo from './pages/demo'
import NotFound from './pages/not_found'
import PatientDetails from './pages/patientDetails'
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/patient-details/:id" element={<PatientDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
