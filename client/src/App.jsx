import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
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
import AdminResultSpreadsheet from './pages/AdminResultSpreadsheet';
import Login from './pages/Login';
import CoordinatorLogin from './pages/CoordinatorLogin';
import CoordinatorDashboard from './pages/CoordinatorDashboard'; // New Import
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
import SocietyPage from './pages/StudentLife/SocietyPage';
import BonafideForm from './pages/other/BonafideForm';
import ResultSearch from './pages/other/ResultSearch';
import Notice from './pages/Acedmics/Notice';
import ImportantLinksPage from './pages/other/ImportantLinksPage';

import DepartmentPage from './pages/Department/DepartmentPage';
import Cse from './pages/Department/Cse';
import Cyber from './pages/Department/Cyber';
import Civil from './pages/Department/Civil';
import Eee from './pages/Department/Eee';
import Fire from './pages/Department/Fire';
import Mech from './pages/Department/Mech';
import PowerSystem from './pages/Department/PowerSystem';

const Layout = ({ children }) => {
  const location = useLocation();
  const noLayoutPaths = ['/login', '/Admin', '/admin/results/spreadsheet', '/coordinator-login', '/coordinator/dashboard']; // Hide layout for coordinator dashboard
  const hideLayout = noLayoutPaths.includes(location.pathname);
  const isHomePageorotherpageimpo = location.pathname === '/' || hideLayout == true;

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Header />}
      <main className={`grow ${isHomePageorotherpageimpo ? '' : 'pt-10'}`}>{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/admin/results/spreadsheet" element={<AdminResultSpreadsheet />} />
          <Route path="/coordinator-login" element={<CoordinatorLogin />} />
          <Route path="/coordinator/dashboard" element={<CoordinatorDashboard />} />

          {/* Dynamic Department Route */}
          <Route path="/department/:slug" element={<DepartmentPage />} />
          <Route path = "/department/Cse" element={<Cse />} />
          <Route path = "/department/Cyber" element={<Cyber />} />
          <Route path = "/department/Civil" element={<Civil />} />
          <Route path = "/department/Eee" element={<Eee />} />
          <Route path = "/department/Fire" element={<Fire />} />
          <Route path = "/department/Mech" element={<Mech />} />
          <Route path = "/department/PowerSystem" element={<PowerSystem />} />
         

          <Route path="/holiday-calendar" element={<HolidayCalendar />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/academic-calendar" element={<Calender />} />
          <Route path="/rules" element={<Regulation />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/programmes/language-lab" element={<LanguageLab />} />
          <Route path="/programmes/c-dac" element={<CDac />} />
          <Route path="/student-fest" element={<StudentFest />} />
          <Route path="/student-society/kala-and-kalakar" element={<KalaKalakar />} />
          <Route path="/student-society/:id" element={<SocietyPage />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/important-link/bonafide" element={<BonafideForm />} />
          <Route path="/important-link/result" element={<ResultSearch />} />
          <Route path="/Acedmics/Notice" element={<Notice />} />
          <Route path="/important-links" element={<ImportantLinksPage />} />

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
