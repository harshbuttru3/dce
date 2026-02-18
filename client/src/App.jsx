import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GenericPage from './pages/GenericPage';
import Contact from './pages/Aboutus/Contact';
import Departments from './pages/Departments';
import About from './pages/Aboutus/About';
import Admin from './pages/Admin';
import History from './pages/Aboutus/History';
import PrincipalMessage from './pages/Aboutus/PrincipalMessage';
import VissionMessage from './pages/Aboutus/VissionMessage';
import Administration from './pages/Aboutus/Administration';
import Seat from './pages/Aboutus/Seat';
import Visit from './pages/Aboutus/Visit';
import Acedmics from './pages/Acedmics/Acedmics';
import Admission from './pages/Acedmics/Admission';
import Attendence from './pages/Acedmics/Attendence';
import { Calendar } from 'lucide-react';
import Calender from './pages/Acedmics/Calender';
import Regulation from './pages/Acedmics/Regulation';
import Notice from './pages/Acedmics/Notice';
import Syllabus from './pages/Acedmics/Syllabus';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Department" element={<Departments />} />
            {/* nested path for about  */}
            <Route path="/About" element={<About />}>
              <Route path="PrincipalMessage" element={<PrincipalMessage />} />
              <Route path="visionmission" element={<VissionMessage />} />
              <Route path="administration" element={<Administration />} />
              <Route path="Seat" element={<Seat />} />
              <Route path="visit" element={<Visit />}></Route>


              <Route path="history" element={<History />} /></Route>
            {/* nested path for Acedmics */}
            <Route path="/Acedmics" element={<Acedmics />}>
              <Route path="Admission" element={<Admission />} />
              <Route path="Attendence" element={<Attendence />} />
              <Route path="Calender" element={<Calender />} />
              <Route path="Notice" element={<Notice />} />
              <Route path="Regulation" element={<Regulation />} />
              <Route path="Syllabus" element={<Syllabus />} />
            </Route>

            {/* Protected Admin Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/Admin" element={<Admin />} />
            </Route>

            <Route path="/login" element={<Login />} />
            {/* Catch-all for other generic pages */}
            <Route path="/image" element={<Gallery />} />
            <Route path="*" element={<GenericPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
