import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Dashboard from './components/layouts/dashboard';
import FacePage from './components/backendpages/facePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/featured" element={<Dashboard/>} />
         <Route path="/face" element={<FacePage />} />
       
      

</Routes>

    
    </Router>
  );
}

export default App;