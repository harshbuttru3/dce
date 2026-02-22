import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchNavigation } from '../services/api';
import { Menu, X, ChevronDown  } from 'lucide-react';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosHome } from "react-icons/io";

import { FaQuestionCircle, FaSearch } from "react-icons/fa";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { BiMessageSquareDetail } from "react-icons/bi"


const Header = () => {

   
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    // mobile view menu
    const [topheader,setTopheader] = useState(false);
const opentop = () => {
   setTopheader((prev) => !prev);

}   


    // useEffect(() => {
    //     fetchNavigation().then(setNavItems);
    // }, []);

    const toggleDropdown = (label) => {
        if (activeDropdown === label) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(label);
        }
    };

   const  StaticNavItems = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "About",
    children: [
      { label: "History", path: "/about/history" },
      { label: "Principal's Message", path: "/about/principalmessage" },
      { label: "Vision and Mission", path: "/about/visionmission" },
      { label: "Administration", path: "/about/administration" },
      { label: "Seat Approval & Affiliation", path: "/about/Seat" },

      { label: "Visit Us", path: "/about/visit" },
      { label: "Contact Us", path: "contact" }
    ]
  },
  {
    label: "Academics",
    children: [
      { label: "Admission", path: "/academics/Admission" },
      { label: "Academic Regulation", path: "/academics/Regulation" },
      { label: "Academic Calendar", path: "/academics/Calendar" },
     
      { label: "Attendance", path: "/academics/Attendance" },
      { label: "Syllabus", path: "/academics/Syllabus" },

      { label: "Notice", path: "/academics/Notice" }
    ]
  },
  {
    label: "Department",
    children: [
      {label:"Department", path:"/Department"},
      { label: "Civil Engineering", path: "civil" },
      { label: "Computer Science & Engineering", path: "cse" },
      { label: "CSE (Cyber Security)", path: "cyber" },
      { label: "Electrical & Electronic Engineering", path: "eee" },
      { label: "Mechanical Engineering", path: "mechanical" },
  
    ]
  },
  {
    label: "Facilities",
    children: [
    
      { label: "Computer Center", path: "Computercenter" },
      { label: "Central Library", path: "Centrallibrary" },
      { label: "Hostels", path: "Hostel" },
      { label: "Sports Facilities", path: "Sports" },

      { label: "Bank", path: "Bank" },

      { label: "Wi-Fi", path: "Wifi" }
    ]
  },
  {
    label: "T&P",
    children: [
      { label: "About Placement", path: "Aboutplacement" },
      { label: "Placement Brochure", path: "Brochure" },
      { label: "Placement List", path: "Placementlist" },
      { label: "GATE & CAT Qualified List", path: "Gatecat" },

    ]
  },
  {
    label: "Activities",
    children: [
      { label: "Awards and Accolades", path: "Award" },
      
      { label: "StartUp Cell", path: "Startup" },
      { label: "Internship", path: "Internship" },
      { label: "Hackathon", path: "Hackathon" },

    ]
  },
  {
    label: "Alumni",
    children: [
      { label: "About DCE-Alumni", path: "/Alumni/AboutDceAlumni" },
      { label: "Membership", path: "/Alumni/membership" },
      { label: "Alumni Media Galleries", path: "/Alumni/mediagallary" }
    ]
  },
  {
    label: "Approval",
    children: [
      { label: "AICTE", path: "/Approval/Aicte" },
      { label: "NIRF", path: "/Approval/Nirf" }
    ]
  },
  {
    label: "Login",
    children: [
      { label: "WebMail", path: "/webmail" },
      { label: "Admin Home Page", path: "/admin" },
      { label: "Faculty Login", path: "/faculty-login" },
      { label: "Student Login", path: "/student-login" }
    ]
  }
];

 const [navItems, setNavItems] = useState(StaticNavItems);



    return (
        <header className="bg-white shadow-md relative z-50">
            {/* header top menu start */}
            <div className='w-full bg-primary'>
            <div className="min-h-10 max-w-7xl mx-auto w-full flex justify-between items-center md:pl-7">

               
            <ul class="nav-list mx-10 hidden md:flex  font-semibold text-white text-sm  pl-7 ">
                    <li><a href = "/student">Students</a></li>
                    <li><a href = "/Facultystaff"><span className='whitespace-nowrap'>Faculty & staff</span></a></li>
                    <li><a href = "/Alumni">Alumni</a></li>
                    <li><a href="https://miitie.org/about">Mittie</a></li>
                    </ul>
            <button onClick={opentop} className="md:hidden text-white text-xl pl-5">
            {topheader ?   <X size={24} />: <Menu size={24} />}
            </button>
            <ul className="nav-list mx-10 flex  text-white text-sm items-center">
                      <li className='flex items-center gap-x-2'> <a href="mailto:dcedarbhanga@gmail.com" className='flex gap-x-2 items-center'><span><MdEmail color="white"/>
                      </span> <span className='hidden sm:flex'>DceDarbhanga@gmail.com</span></a></li>
                       <li className=' flex items-center gap-x-2'><a href="tel:+916262457584" className='flex gap-x-2 items-center'>
                        <span><IoCall color="white"/></span>  <span className='hidden sm:flex'>6262457584</span></a></li>
            </ul></div>
            </div>
            {/* mobile view navbar  */}
             {topheader && ( <div className="fixed inset-0 bg-black/30 z-30" onClick={() => setTopheader(false)}  /> )}
             <aside className={`absolute  right-0 top-10 left-0 min-h-10 w-full bg-primary text-white transform transition duration-300 ease-in-out 
             ${topheader ? "translate-x-0" : "-translate-x-full"} z-40  `} > 
             <ul className='nav-mobile absolute flex bg-primary gap-x-[px] md:gap-x-2 pl-0 sm:pl-5 text-sm mx-0 '>
                            <li><a href = "">Students</a></li>
                            <li><a href = ""><span className='whitespace-nowrap'>Faculty & staff</span></a></li>
                            <li><a href = "">ALumni</a></li>
                            <li><a href="">Meity</a></li>
             </ul> </aside>
   
            {/* header topmenu end */}
            

            
            {/* Logo Section */}
            
            <div className="container w-full  pt-4 flex items-center justify-between border-b border-gray-100">
                <Link to="/" className="flex items-center gap-4">
                    {/* Placeholder Logo */}
                    
                  <div className=" bg-gray-200  flex items-center justify-center text-primary font-bold text-xl">
                  <img src="https://i.imageupload.app/dd3b1dc01f02a2400117.png" alt="DceLogo" className='w-15 h-15 md:w-30 md:h-30 sm:w-20 sm:h-20'/>
                  </div>
                  <div>
                      <h1 className="Dce-text sm:text-2xl font-bold text-primary uppercase text-[14px]">Darbhanga College of Engineering</h1>
                      <p className="sm:text-sm text-blue-600 text-[10px]">(Under Dept. of Science, Technology & Technical Education, Govt. Of Bihar)</p>
                  </div>
                  </Link>
                  <div className='hlnk lg:flex gap-2 items-baseline hidden '>
            <div className="relative group inline-block">
            {/* Button */}
            <button className="flex items-center gap-1 text-[16px] font-bold text-sky-700 cursor-pointer">
                Important Link
            <span className="transition-transform duration-300 group-hover:rotate-180">
              <MdOutlineKeyboardArrowDown size={20} />
            </span>
            </button>

             {/* Dropdown */}
            <div className=" absolute left-0 mt-3 w-56  bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible
             transition-all duration-300 transform group-hover:-translate-y-1 z-50 ">
            <ul className="py-2 text-gray-700 divide-y divide-gray-200">
      
             <li>
                <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100">
                    <FaQuestionCircle className="text-sky-600" />
                        Inquiry Form
                </a>
               </li>

            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100">
              <HiClipboardDocumentList className="text-sky-600" />
              Open Grievance
            </a>
            </li>

             <li>
            <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100">
            <BiMessageSquareDetail className="text-sky-600" />
            Track Grievance
            </a>
            </li>

          <li>
          <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100">
          <BiMessageSquareDetail className="text-sky-600" />
          Feedback
        </a>
      </li>

      <li>
        <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100">
          <FaSearch className="text-sky-600" />
          Search Student
        </a>
      </li>

         </ul>
       </div>
     </div>    

                    <button className='lnk text-[16px] font-semibold text-gray-800 hover:underline'><a href="/image">gallery</a> </button>
                    <img src="./Tlogo.png" alt=""  className='h-20 hidden md:flex'/>
                   </div>
        
                     {/* Mobile Menu Button */}
                <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen((prev) => !prev)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            

            {/* Navigation */}
<nav
  className={`
    ${mobileMenuOpen ? 'block' : 'hidden'}
    lg:block
     top-0 z-50
    bg-primary lg:bg-white lg:border-b border-gray-200
  `}
>


      <div className="container">
        <ul className="flex flex-col lg:flex-row lg:items-center text-sm font-medium lg:flex-wrap">
          {navItems.map((item) => (
        <li
          key={item.label}
          className="relative group border-b lg:border-none border-gray-700"
        >
          {item.children ? (
            <>
              {/* Main Button */}
              <button
                onClick={() => toggleDropdown(item.label)}
                className="w-full lg:w-auto text-left flex items-center justify-between px-4 py-3 lg:py-4
                text-white  lg:text-gray-700  lg:hover:bg-gray-50  lg:text-[18px]
                transition-colors lg:overflow-hidde "
              >
                {item.label}

                {/* Arrow */}
                <ChevronDown
                  size={16}
                  className={`
                    ml-1 transition-transform duration-300
                    ${activeDropdown === item.label ? 'rotate-180' : ''}
                    lg:group-hover:rotate-180
                  `}
                /> 
              </button>

              {/* 🔽 DROPDOWN */}
              <ul
                className={`
                  ${activeDropdown === item.label ? 'block' : 'hidden'}
                 
                  lg:block lg:absolute lg:right-0 lg:left-0 lg:top-full lg:mt-4       
                  lg:w-50 lg:bg-white lg:shadow-lg lg:rounded
                  divide-y divide-gray-600 lg:divide-gray-300
                  
                  lg:opacity-0 lg:invisible
                  lg:group-hover:opacity-100 lg:group-hover:visible
                  lg:translate-y-0 lg:group-hover:-translate-y-4
                  
                  lg:transition-all lg:duration-300 lg:transform
                  
                  bg-gray-800 
                `}
              >
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      to={child.path}
                      className="block px-6 py-2 
                      text-gray-300 lg:text-gray-700
                      hover:bg-gray-700 lg:hover:bg-primary
                      lg:hover:text-white transition-colors  md:border-none border-b-2 "
                     
                    >
                      {child.label}
                    </Link>
                  </li>
          
                
                ))}
              </ul>
            </>
          ) : (
            <Link
              to={item.path}
              className="block px-4 py-3 lg:py-4
              text-white lg:text-gray-700
              hover:text-accent lg:hover:bg-gray-50
              transition-colors lg:text-[20px] "
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
</nav>

            <hr className='max-w-7xl w-full text-gray-400 mx-auto'/>
            {/* header btn */}
  

        </header>
    );
};

export default Header;
