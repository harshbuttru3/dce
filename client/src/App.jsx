import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load all page components for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/Aboutus/About'));
const History = lazy(() => import('./pages/Aboutus/History'));
const Infrastructure = lazy(() => import('./pages/Aboutus/Infrastructure'));
const Contact = lazy(() => import('./pages/Aboutus/Contact'));
const Magazine = lazy(() => import('./pages/Magazine'));
const Placements = lazy(() => import('./pages/T&P/Placements'));
const AicteApproval = lazy(() => import('./pages/Approval/AicteApproval'));
const NirfApproval = lazy(() => import('./pages/Approval/NirfApproval'));
const BeuApproval = lazy(() => import('./pages/Approval/BeuApproval'));
const Admin = lazy(() => import('./pages/Admin'));
const AdminResultSpreadsheet = lazy(() => import('./pages/AdminResultSpreadsheet'));
const Login = lazy(() => import('./pages/Login'));
const CoordinatorLogin = lazy(() => import('./pages/CoordinatorLogin'));
const CoordinatorDashboard = lazy(() => import('./pages/CoordinatorDashboard'));
const HolidayCalendar = lazy(() => import('./pages/Acedmics/HolidayCalendar'));
const Admission = lazy(() => import('./pages/Acedmics/Admission'));
const Calender = lazy(() => import('./pages/Acedmics/Calender'));
const Regulation = lazy(() => import('./pages/Acedmics/Regulation'));
const FeeStructure = lazy(() => import('./pages/Acedmics/FeeStructure'));
const LanguageLab = lazy(() => import('./pages/Programmes/LanguageLab'));
const CDac = lazy(() => import('./pages/Programmes/CDac'));
const StudentFest = lazy(() => import('./pages/StudentLife/StudentFest'));
const KalaKalakar = lazy(() => import('./pages/StudentLife/KalaKalakar'));
const Testimonials = lazy(() => import('./pages/StudentLife/Testimonials'));
const SocietyPage = lazy(() => import('./pages/StudentLife/SocietyPage'));
const BonafideForm = lazy(() => import('./pages/other/BonafideForm'));
const ResultSearch = lazy(() => import('./pages/other/ResultSearch'));
const Notice = lazy(() => import('./pages/Acedmics/Notice'));
const ImportantLinksPage = lazy(() => import('./pages/other/ImportantLinksPage'));

const DepartmentPage = lazy(() => import('./pages/Department/DepartmentPage'));
const Cse = lazy(() => import('./pages/Department/Cse'));
const Cyber = lazy(() => import('./pages/Department/Cyber'));
const Civil = lazy(() => import('./pages/Department/Civil'));
const Eee = lazy(() => import('./pages/Department/Eee'));
const Fire = lazy(() => import('./pages/Department/Fire'));
const Mech = lazy(() => import('./pages/Department/Mech'));
const PowerSystem = lazy(() => import('./pages/Department/PowerSystem'));

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
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-12 h-12 border-4 border-[#133b5c] border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
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
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
