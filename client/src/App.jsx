import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/Aboutus/About';
import History from './pages/Aboutus/History';
import Infrastructure from './pages/Aboutus/Infrastructure';
import Contact from './pages/Aboutus/Contact';
import Magazine from './pages/Magazine';
import Placements from './pages/T&P/Placements';
import AicteApproval from './pages/Approval/AicteApproval';
import NirfApproval from './pages/Approval/NirfApproval';
import BeuApproval from './pages/Approval/BeuApproval';
import Admin from './pages/Admin';
import Login from './pages/Login';
import CoordinatorLogin from './pages/CoordinatorLogin';
import HolidayCalendar from './pages/Acedmics/HolidayCalendar';
import Admission from './pages/Acedmics/Admission';
import Calender from './pages/Acedmics/Calender';
import Regulation from './pages/Acedmics/Regulation';
import FeeStructure from './pages/Acedmics/FeeStructure';
import LanguageLab from './pages/Programmes/LanguageLab';
import CDac from './pages/Programmes/CDac';
import StudentFest from './pages/StudentLife/StudentFest';
import KalaKalakar from './pages/StudentLife/KalaKalakar';
import Testimonials from './pages/StudentLife/Testimonials';

// Department Imports
import Cse from './pages/Department/Cse';
import Cyber from './pages/Department/Cyber';
import Civil from './pages/Department/Civil';
import Mech from './pages/Department/Mech';
import Eee from './pages/Department/Eee';
import Fire from './pages/Department/Fire';
import PowerSystem from './pages/Department/PowerSystem';

const Layout = ({ children }) => {
  const location = useLocation();
  const noLayoutPaths = ['/login', '/Admin', '/coordinator-login'];
  const hideLayout = noLayoutPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Header />}
      <main className="grow">{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/t-and-p" element={<Placements />} />
          <Route path="/approval/aicte" element={<AicteApproval />} />
          <Route path="/approval/nirf" element={<NirfApproval />} />
          <Route path="/approval/beu" element={<BeuApproval />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/coordinator-login" element={<CoordinatorLogin />} />

          {/* Department Routes */}
          <Route path="/department/cse" element={<Cse />} />
          <Route path="/department/cse-cyber-security" element={<Cyber />} />
          <Route path="/department/ce" element={<Civil />} />
          <Route path="/department/me" element={<Mech />} />
          <Route path="/department/eee" element={<Eee />} />
          <Route path="/department/fst" element={<Fire />} />
          <Route path="/department/ps" element={<PowerSystem />} />
          <Route path="/holiday-calendar" element={<HolidayCalendar />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/academic-calendar" element={<Calender />} />
          <Route path="/rules" element={<Regulation />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/programmes/language-lab" element={<LanguageLab />} />
          <Route path="/programmes/c-dac" element={<CDac />} />
          <Route path="/student-fest" element={<StudentFest />} />
          <Route path="/student-society/kala-and-kalakar" element={<KalaKalakar />} />
          <Route path="/testimonial" element={<Testimonials />} />

          {/* nested path for about  */}
          <Route path="/about" element={<About />}>
            <Route path="institute" element={<History />} />
            <Route path="infrastructure" element={<Infrastructure />} />
            <Route path="contact-us" element={<Contact />} />
          </Route>

          {/* Catch-all for undefined routes */}
          <Route path="*" element={
            <div className="flex items-center justify-center min-h-[50vh]">
              <h2 className="text-2xl font-semibold text-gray-400">Page under construction</h2>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
