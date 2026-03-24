

export const departmentData = {
    cse: {
        name: "Computer Science & Engineering",
        tagline: "Building future software innovators.",
        intake: 60,
        heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
        description: [
            "The Department of Computer Science & Engineering at DCE Darbhanga was established in 2008 with a vision to produce world-class software engineers and researchers. The department provides a robust academic environment that fosters innovation and technical excellence.",
            "Our curriculum covers a wide spectrum of computing, from foundational algorithms and data structures to cutting-edge fields like Artificial Intelligence, Machine Learning, and Cloud Computing. We emphasize both theoretical depth and practical proficiency."
        ],
        highlights: [
            { label: "Laboratory Units", value: "8+", icon: "FaFlask" },
            { label: "Smart Classrooms", value: "4", icon: "FaBuilding" },
            { label: "Publication Year", value: "2024", icon: "FaChartLine" }
        ],
        programs: [
            { name: "B.Tech Computer Science & Engineering", intake: 60, duration: "4 Years", eligibility: "Passed 10+2 with Physics, Maths & Chemistry (as per BEU norms)" }
        ],
        hod: {
            name: "Mr. Ajeet Kumar Gupta",

            designation: "Professor & HOD",
            qualification: "PHD (NIT Patna), M.Tech (CSE)",
            image: "/Ajit.jpg",
            message: "The CSE department is dedicated to providing students with the skills and knowledge to lead the technological revolution. Join us in shaping the digital future.",
            email: "ajeetkgupta12@gmail.com"
        },
        faculty: [
            { name: "Mr. Ajeet Kumar Gupta", designation: "Professor", specialization: " Ai & Machine Learning", image: "/Ajit.jpg" },
            { name: "Mrs. Shweta kumari", designation: "Asst. Professor", specialization: "Machine Learning", image: "/Shweta.jpg" },
            { name: "Mrs Pooja", designation: "Asst. Professor", specialization: "Operating System", image: "/pooja.jpg" },
            { name: "Mr. Vivekanand Jha", designation: "Professor", specialization: " Ai & Machine Learning", image: "" },
            { name: "Mr. Aditya Ray", designation: "Asst. Professor", specialization: "Machine Learning", image: "/Aditya.jpg" },
            { name: "MRS. Vandna kumari", designation: "Asst. Professor", specialization: "Cloud Computing", image: "" }
        ],
        labs: [
            { name: "Programming Lab", description: "Equipped with high-performance systems for C, C++, and Java programming.", icon: "", tools: ["VS Code", "GCC", "JDK 21"] },
            { name: "Networking Lab", description: "Modern networking hardware and simulation tools for hands-on experience.", icon: "", tools: ["Cisco Packet Tracer", "Wireshark"] }
        ],
        placements: {
            highestPackage: "18 LPA",
            averagePackage: "5.5 LPA"
        },
        recruiters: [
            { logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
            { logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/TATA_Consultancy_Services_Logo.svg" },
            { logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Wipro_Logo.svg" }
        ],
        achievements: [
            { title: "Smart India Hackathon Winner", student: "Team Alpha (CSE 4th Year)", year: "2023" },
            { title: "Google Summer of Code Select", student: "Aryan Raj", year: "2024" }
        ],
        faqs: [
            { question: "What are the career prospects after CSE?", answer: "Students find opportunities in Software Development, AI/ML Research, System Administration, and Data Science." },
            { question: "Are there any research facilities?", answer: "Yes, we have a dediated R&D lab for IoT and Machine Learning projects." }
        ],
        activities: [
            { title: "Tech Fest 'Abhyudaya'", description: "Annual technical festival featuring coding marathons and robot wars.", icon: "" },
            { title: "Code-A-Thon", description: "Bi-monthly competitive programming event.", icon: "" }
        ]
    },
    cyber: {
        name: "Computer Science & Engineering (Cyber Security)",
        tagline: "Securing the digital frontier.",
        intake: 60,
        heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
        description: [
            "The specialization in Cyber Security is designed to address the growing global demand for professionals who can protect complex information systems from cyber-attacks.",
            "The program provides deep insights into cryptography, ethical hacking, digital forensics, and network security policies."
        ],
       
        highlights: [
            { label: "Security Labs", value: "3", icon: "FaShieldAlt" },
            { label: "Specialized Tools", value: "15+", icon: "FaTools" }
        ],
        programs: [
            { name: "B.Tech CSE (Cyber Security)", intake: 60, duration: "4 Years", eligibility: "Passed 10+2 with PCM" }
        ],
        hod: {
            name: "Mr. Ajeet Kumar Gupta",
            designation: "Head of Specialization",
            qualification: "PHD (NIT Patna), M.Tech (CSE)",
            image: "/Ajit.jpg",
            message: "Information is the new currency, and its security is our paramount mission.",
            email: "ajeetkgupta12@gmail.com"
        },
        faculty: [
          
            { name: "Mr. Ajeet Kumar Gupta", designation: "Professor", specialization: " Ai & Machine Learning", image: "/Ajit.jpg" },
            { name: "Mrs. Shweta kumari", designation: "Asst. Professor", specialization: "Machine Learning", image: "/Shweta.jpg" },
            { name: "Mrs Pooja", designation: "Asst. Professor", specialization: "Operating System", image: "/pooja.jpg" },
            { name: "Mr. Vivekanand Jha", designation: "Professor", specialization: " Ai & Machine Learning", image: "" },
            { name: "Mr. Aditya Ray", designation: "Asst. Professor", specialization: "Machine Learning", image: "/Aditya.jpg" },
            { name: "MRS. Vandna kumari", designation: "Asst. Professor", specialization: "Cloud Computing", image: "" }
        ],
        labs: [
            { name: "Ethical Hacking Lab", description: "Controlled environment for vulnerability assessment and penetration testing.", icon: "", tools: ["Kali Linux", "Metasploit", "Nmap"] }
        ],
        placements: {
            highestPackage: "15 LPA",
            averagePackage: "6.2 LPA"
        },
        recruiters: [
            { logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
            { logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Cisco_logo.svg" }
        ],
        achievements: [
            { title: "Kavach Hackathon Finalist", student: "Security Squad", year: "2023" }
        ],
        faqs: [
            { question: "Is Cyber Security a different branch?", answer: "It is a specialized branch of CSE focusing on defense against cyber threats." }
        ],
        activities: [
            { title: "Tech Fest 'Abhyudaya'", description: "Annual technical festival featuring coding marathons and robot wars.", icon: "" },
            { title: "Code-A-Thon", description: "Bi-monthly competitive programming event.", icon: "" },
            { title: "Capture The Flag (CTF)", description: "Regular security competitions for students to test their hacking skills.", icon: "" }
        ]
    },
    civil: {
        name: "Civil Engineering",
        tagline: "Building the foundations of tomorrow.",
        intake: 60,
        heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop",
        description: [
            "Civil Engineering is the oldest and broadest of the engineering disciplines. At DCE Darbhanga, we blend traditional engineering principles with modern computational tools.",
            "Our students learn to design, construct, and manage infrastructures including buildings, bridges, and water supply systems."
        ],
        highlights: [
            { label: "Heavy Labs", value: "6", icon: "FaHardHat" },
            { label: "Field Surveying", value: "100+ Hrs", icon: "FaBuilding" }
        ],
        programs: [
            { name: "B.Tech Civil Engineering", intake: 60, duration: "4 Years", eligibility: "10+2 PCM" }
        ],
        hod: {
            name: "Mr. Shyam Sundar Choudhary",
            designation: "Professor & HOD",
            qualification: "Phd",
            image: "/Shyamsundar.jpg",
            message: "Build it strong, build it to last. We train engineers with integrity and technical prowess.",
            email: "shyams_choudhary@rediffmail.com"
        },
        faculty: [
            { name: "Mr. Shyam Sundar Choudhary", designation: " Professor | HOD", specialization: "Masters in structural engineering", image: "/Shyamsundar.jpg" },
            { name: "Mr. RAVI RANJAN KUMAR", designation: "Asst. Professor", specialization: "Masters in structural engineering", image: "/Raviranjan.jpg" },
            { name: "Mr. Ishant Kumar", designation: "Asst. Professor", specialization: "Masters in structural engineering", image: "/Ishant.jpg" },
            { name: "Dr. Ishwar Chandra Thakur", designation: "Asst. Professor", specialization: "Masters in structural engineering", image: "/Ishwarchandra.jpg" },
        ],
        
        labs: [
            { name: "Structural Lab", description: "Testing the strength and durability of construction materials.", icon: "", tools: ["UTM Machine", "Concrete Mixer"] }
        ],
        placements: {
            highestPackage: "10 LPA",
            averagePackage: "4.8 LPA"
        },
        recruiters: [
            { logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/L%26T_Logo.svg" }
        ],
        achievements: [
            { title: "Best Design Award", student: "Structural Team", year: "2023" }
        ],
        faqs: [
            { question: "What software do we learn?", answer: "Students are trained in AutoCAD, STAAD.Pro, and Revit." }
        ],
        activities: [
            { title: "Tech Fest 'Abhyudaya'", description: "Annual technical festival featuring coding marathons and robot wars.", icon: "" },
            { title: "Code-A-Thon", description: "Bi-monthly competitive programming event.", icon: "" },
            { title: "Bridge Design Workshop", description: "Hands-on model making for truss bridges.", icon: "" }
        ]
    },
    mechanical: {
        name: "Mechanical Engineering",
        tagline: "Driving the engine of innovation.",
        intake: 60,
        heroImage: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2000&auto=format&fit=crop",
        description: [
            "The Mechanical Engineering department provides a strong foundation in thermal, design, and manufacturing sciences.",
            "We emphasize sustainable energy, robotics, and advanced manufacturing technologies."
        ],
        highlights: [
            { label: "Workshop Area", value: "12,000 sq.ft", icon: "FaTools" },
            { label: "Robotics Unit", value: "Active", icon: "FaBolt" }
        ],
        programs: [
            { name: "B.Tech Mechanical Engineering", intake: 60, duration: "4 Years", eligibility: "10+2 PCM" }
        ],
        hod: {
            name: "Dr. Md Asjad Mokhtar",
            designation: "Professor & HOD",
            qualification: "Ph.D (2018), Deptt. of Mech. Engg., IIT Delhi",
            image: "/Asjad.jpg",
            message: "Mechanical Engineering is the evergreen branch of engineering. We focus on innovation and precision.",
            email: "drasjadmokhtar@gmail.com"
        },
        faculty: [
            { name: "Prof. Chandan Kumar", designation: "Professor", specialization: "Manufacturing", image: "/chandan-sir.jpeg" },
            { name: "Dr. Md Asjad Mokhtar", designation: "Professor | HOD", specialization: "Thermal Engineering", image: "/Asjad.jpg" },
            { name: "Mr. Ankit Kumar", designation: "Asst. Professor", specialization: "Fault Diagnosis, Condition Monitoring", image: "/Ankit.jpg" },
            { name: "Mr. Vinayak Jha", designation: "Asst. Professor", specialization: "Design of Machine Elements", image: "/Vinayak.jpeg" },
            { name: "Mr. Javed Akhtar", designation: "Asst. Professor", specialization: "Fluid Mechanics", image: "/javed.jpeg" },
            { name: "Mr. Shravan Kumar Gupta", designation: "Asst. Professor", specialization: "Manufacturing Technology", image: "/Shravan.jpeg" },
            { name: "Mohammad Alimullah Anwar", designation: "Asst. Professor", specialization: "Manufacturing Technology", image: "/Allimulah.jpg" },
            { name: "Mr. Vishal Kumar", designation: "Asst. Professor", specialization: "Manufacturing Technology", image: "/Vishal.jpg" },
            { name: "Dr. Shashi Bhushan", designation: "Asst. Professor", specialization: "Manufacturing Technology", image: "" },
         

        ],
        labs: [
            { name: "Thermal Engineering Lab", description: "Study of heat transfer and internal combustion engines.", icon: "", tools: ["Diesel Engines", "Heat Exchangers"] }
        ],
        placements: {
            highestPackage: "12 LPA",
            averagePackage: "5.0 LPA"
        },
        recruiters: [
            { logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Maruti_Suzuki_logo.png" }
        ],
        achievements: [
            { title: "BAJA SAE Finalist", student: "Team Mechanix", year: "2024" }
        ],
        faqs: [
            { question: "Is robotics part of the course?", answer: "Yes, elective subjects and student clubs focus heavily on robotics and automation." }
        ],
        activities: [
            { title: "Tech Fest 'Abhyudaya'", description: "Annual technical festival featuring coding marathons and robot wars.", icon: "" },
            { title: "Code-A-Thon", description: "Bi-monthly competitive programming event.", icon: "" },
            { title: "Engine Assembly Workshop", description: "Practical session on IC engine disassembly.", icon: "" }
        ]
    },
    eee: {
        name: "Electrical & Electronics Engineering",
        tagline: "Empowering the future with energy.",
        intake: 60,
        heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000&auto=format&fit=crop",
        description: [
            "The EEE department focuses on power systems, electronics, and control systems.",
            "We prepare students for careers in the power sector, semiconductor industry, and automation."
        ],
        highlights: [
            { label: "Power Labs", value: "5", icon: "FaBolt" },
            { label: "Research Focus", value: "Smart Grids", icon: "FaAtom" }
        ],
        programs: [
            { name: "B.Tech Electrical & Electronics Engineering", intake: 60, duration: "4 Years", eligibility: "10+2 PCM" }
        ],
        hod: {
            name: "Dr. Anamika",
            designation: "Professor & HOD",
            qualification: "Ph.D. (Power Electronics)",
            image: "/Anamika.jpeg",
            message: "EEE is about understanding the flow of energy that powers civilizations.",
            email: "dr.anamika.dce@gmail.com"

        },
        faculty: [
            { name: "Dr. Anamika", designation: " Professor", specialization: "Control Systems", image: "/Anamika.jpeg" },
            { name: "Dr. Tarique Rashid", designation: "Assoc. Professor", specialization: "Control Systems", image: "" },
            { name: "Mr. Prabhat Kumar", designation: "Assoc. Professor", specialization: "Power System, Electrical Machines", image: "/Prabhat.jpeg" },
            { name: "Mr.Nitish Kumar", designation: "Assoc. Professor", specialization: "Basic Electronics, Digital Electronics, Microprocessor,VLSI, Control System", image: "/Nitish.png" },
            { name: "Md. Mazharul Haque", designation: "Assoc. Professor", specialization: "Network Theory, Universal Human Values, Electrical Machines, Power Electronics", image: "/Mazaharul.jpeg" },
            { name: "Mr. Mayank Kumar Singh", designation: "Assoc. Professor", specialization: "Power system", image: "/Mayank.jpg" },
            { name: "Mr. Ajit Kumar Upadhiya", designation: "Assoc. Professor", specialization: "Control Systems", image: "" },
           
        ],
        labs: [
            { name: "Power Electronics Lab", description: "Designing and testing power converter circuits.", icon: "", tools: ["DSO", "MOSFET Modules"] }
        ],
        placements: {
            highestPackage: "14 LPA",
            averagePackage: "5.8 LPA"
        },
        recruiters: [
            { logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/ABB_logo.svg" }
        ],
        achievements: [
            { title: "State Merit Award", student: "Vikas Kumar", year: "2023" }
        ],
        faqs: [
            { question: "What is the difference between EE and EEE?", answer: "EEE combines the study of power systems (EE) with electronic circuitry and communication (ECE)." }
        ],
        activities: [
            { title: "Tech Fest 'Abhyudaya'", description: "Annual technical festival featuring coding marathons and robot wars.", icon: "" },
            { title: "Code-A-Thon", description: "Bi-monthly competitive programming event.", icon: "" },
            { title: "Solar Energy Seminar", description: "Industry expert talk on renewable energy integration.", icon: "" }
        ]
    },
    fire: {
        name: "Fire Technology & Safety",
        tagline: "Protecting lives through engineered safety.",
        intake: 30,
        heroImage: "https://images.unsplash.com/photo-1542353436-312f02c162df?q=80&w=2000&auto=format&fit=crop",
        description: [
            "Fire Technology & Safety is a specialized branch focused on prevention, detection, and suppression of fire hazards.",
            "The program combines engineering principles with emergency response management."
        ],
        highlights: [
            { label: "Specialized Branch", value: "Unique", icon: "FaFireExtinguisher" },
            { label: "Safety Drill", value: "Weekly", icon: "FaHardHat" }
        ],
        programs: [
            { name: "B.Tech Fire Technology & Safety", intake: 30, duration: "4 Years", eligibility: "10+2 PCM" }
        ],
        hod: {
            name: "Dr. S. K. Singh",
            designation: "In-charge HOD",
            qualification: "M.Tech (Safety Engineering)",
            image: "",
            message: "Safety is not an accident; it's a result of engineered precautions.",
            email: "hod.fire@dcedarbhanga.ac.in"
        },
        faculty: [
            { name: "Mr. J. Pathak", designation: "Asst. Professor", specialization: "Fire Dynamics", image: "" }
        ],
        labs: [
            { name: "Chemical Safety Lab", description: "Analyzing fire behavior of different chemicals.", icon: "", tools: ["Flash Point Tester", "Smoke Detectors"] }
        ],
        placements: {
            highestPackage: "12 LPA",
            averagePackage: "6.0 LPA"
        },
        recruiters: [
            { logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/ONGC_Logo.png" }
        ],
        achievements: [
            { title: "National Safety Award", student: "Dept Group", year: "2023" }
        ],
        faqs: [
            { question: "Is this a physically demanding branch?", answer: "It involves field training and safety drills along with academic rigor." }
        ],
        activities: [
            { title: "Tech Fest 'Abhyudaya'", description: "Annual technical festival featuring coding marathons and robot wars.", icon: "" },
            { title: "Code-A-Thon", description: "Bi-monthly competitive programming event.", icon: "" },
            { title: "Mock Drill Exercise", description: "Full-scale campus-wide fire safety simulation.", icon: "" }
        ]
    },
    power_system: {
        name: "M.Tech Power System",
        tagline: "Advanced research in energy engineering.",
        intake: 30,
        heroImage: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=2000&auto=format&fit=crop",
        description: [
            "The M.Tech in Power Systems is a postgraduate program focusing on advanced topics in power generation, transmission, and distribution.",
            "We emphasize research in smart grids, renewable energy, and power system stability."
        ],
        highlights: [
            { label: "Postgrad Research", value: "Focus", icon: "FaGraduationCap" },
            { label: "Seminars", value: "Monthly", icon: "FaBookOpen" }
        ],
        programs: [
            { name: "M.Tech Power System", intake: 30, duration: "2 Years", eligibility: "GATE qualified / B.Tech in EE/EEE" }
        ],
        hod: {
            name: "Dr. D. Jha",
            designation: "Head of PG Studies",
            qualification: "Ph.D. (IIT Roorkee)",
            image: "",
            message: "Masters-level research is where we solve real-world energy crises.",
            email: "pg.hod@dcedarbhanga.ac.in"
        },
        faculty: [
            { name: "Dr. S. Verma", designation: "Professor", specialization: "Smart Grids", image: "" }
        ],
        labs: [
            { name: "Advanced Power System Lab", description: "Postgraduate research on load flow analysis and transients.", icon: "", tools: ["MATLAB/Simulink", "MiPower"] }
        ],
        placements: {
            highestPackage: "16 LPA",
            averagePackage: "7.5 LPA"
        },
        recruiters: [
            { logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Power_Grid_Corporation_logo.png" }
        ],
        achievements: [
            { title: "Best Paper Award", student: "Rahul Mittal", year: "2024" }
        ],
        faqs: [
            { question: "Can I join after B.Tech from another college?", answer: "Yes, based on GATE score and university counseling." }
        ],
        activities: [
            { title: "Tech Fest 'Abhyudaya'", description: "Annual technical festival featuring coding marathons and robot wars.", icon: "" },
            { title: "Code-A-Thon", description: "Bi-monthly competitive programming event.", icon: "" },
            { title: "IEEE PG Seminar", description: "Presentation of ongoing research by PG students.", icon: "" }
        ]
    }
};
