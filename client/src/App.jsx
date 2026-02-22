import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GenericPage from './pages/GenericPage';
import Contact from './pages/Aboutus/Contact';
import Departments from './pages/Department/Departments';
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
import { Calendar, Library } from 'lucide-react';
import Calender from './pages/Acedmics/Calender';
import Regulation from './pages/Acedmics/Regulation';
import Notice from './pages/Acedmics/Notice';
import Syllabus from './pages/Acedmics/Syllabus';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Gallery from './pages/Gallery';
import Civil from './pages/Department/Civil';
import Cyber from './pages/Department/Cyber';
import Cse from './pages/Department/Cse';
import Eee from './pages/Department/Eee';
import Mech from './pages/Department/Mech';
import Computercenter from './pages/Facilities/Computercenter';
import Bank from './pages/Facilities/Bank';
import Hostel from './pages/Facilities/Hostel';
import Wifi from './pages/Facilities/Wifi';
import Sports from './pages/Facilities/Sports';
import Centrallibrary from './pages/Facilities/Library';
import Aboutplacement from './pages/T&P/Aboutplacement';
import Brochure from './pages/T&P/Brochure';
import Gatecat from './pages/T&P/Gatecat';
import Placementlist from './pages/T&P/Placementlist';
import Award from './pages/Activites/Award';
import Hackathon from './pages/Activites/Hackathon';
import Internship from './pages/Activites/Internship';
import Startup from './pages/Activites/Startup';
import Alumni from './pages/Alumni/Alumni';
import AboutDceAlumni from './pages/Alumni/AboutDceAlumni';
import Mediagallary from './pages/Alumni/mediagallary';
import Membership from './pages/Alumni/Membership';
import Approval from './pages/Aprroval/Approval';
import Aicte from './pages/Aprroval/Aicte';
import Nirf from './pages/Aprroval/Nirf';
import Students from './pages/Students';
import Facultystaff from './Facultystaff';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/*  path for department */}
            <Route path="/Department" element={<Departments />} />
              <Route path="cse" element={<Cse />} />
              <Route path="civil" element={<Civil />} />
              <Route path="cyber" element={<Cyber />} />
              <Route path="eee" element={<Eee />} />
              <Route path="mechanical" element={<Mech />} />
            
          

            


            {/* nested path for about  */}
            <Route path="/About" element={<About />}>
              <Route path="PrincipalMessage" element={<PrincipalMessage />} />
              <Route path="visionmission" element={<VissionMessage />} />
              <Route path="administration" element={<Administration />} />
              <Route path="Seat" element={<Seat />} />
              <Route path="visit" element={<Visit />}></Route>
              <Route path="history" element={<History />} /></Route>
            {/* nested path for Acedmics */}
            <Route path="/academics" element={<Acedmics />}>
              <Route path="Admission" element={<Admission />} />
              <Route path="Attendance" element={<Attendence />} />
              <Route path="Calender" element={<Calender />} />
              <Route path="Notice" element={<Notice />} />
              <Route path="Regulation" element={<Regulation />} />
              <Route path="Syllabus" element={<Syllabus />} />
            </Route>
            {/* path for facilites */}
            <Route path="/Computercenter"  element={< Computercenter/> } />
            <Route path="/Bank"  element={<Bank/> } />
              <Route path="/Hostel"  element={<Hostel/> } />
                <Route path="/Centrallibrary"  element={<Centrallibrary/> } />
                  <Route path="/Sports"  element={<Sports/> } />
                    <Route path="/Wifi"  element={<Wifi/> } />
            {/*  path for T&P */}
            <Route path="/Aboutplacement" element={<Aboutplacement />}></Route>
            <Route path="/Brochure" element={<Brochure />}></Route>
            <Route path="/Gatecat" element={<Gatecat />}></Route>
            <Route path="/Placementlist" element={<Placementlist />}></Route>
            {/* path for Activites */}
            <Route path="/Award" element={<Award />}></Route>
            <Route path="/Hackathon" element={<Hackathon />}></Route>
            <Route path='/Internship' element={<Internship />}></Route>
            <Route path="/Startup" element={<Startup />}></Route>
            {/* nested path for alumni */}
            <Route path="/Alumni" element={<Alumni />} >
            <Route path="AboutDceAlumni"  element={<AboutDceAlumni /> } />
            <Route path='mediagallary' element={<Mediagallary />} />
            <Route path='membership' element={<Membership />} /></Route>
            {/* nested path for approval  */}
            <Route path="/Approval" element={<Approval />} >
            <Route path="Aicte" element={<Aicte />}></Route>
            <Route path="Nirf" element={ <Nirf />}></Route>
            

          
            
            </Route>
            {/* heading bar */}
            <Route path="/student" element={<Students/>}></Route>
            <Route path="/Facultystaff" element={<Facultystaff />} />

           
            

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
