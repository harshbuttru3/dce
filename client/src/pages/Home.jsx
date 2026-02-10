import React from 'react';
import HeroSlider from '../components/HeroSlider';
import NoticeBoard from '../components/NoticeBoard';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <HeroSlider />

            <div className="container py-10 grid md:grid-cols-3 gap-8">
                {/* Left Column: Principal's Message & News */}
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-white p-6 shadow-md rounded-lg border-t-4 border-primary">
                        <h3 className="text-2xl font-bold mb-6 text-primary border-b pb-2">Principal's Message</h3>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-40 h-48 bg-gray-200 rounded shrink-0 self-center md:self-start">
                                {/* Placeholder for Principal Image */}
                                <img src="https://via.placeholder.com/160x200?text=Principal" alt="Principal" className="w-full h-full object-cover rounded" />
                            </div>
                            <div className="space-y-4">
                                <p className="text-gray-600 leading-relaxed italic">
                                    "It gives me immense pleasure to welcome you to Darbhanga College of Engineering. We are committed to providing quality technical education and fostering an environment of innovation and research. Our goal is to shape future leaders who contribute to society and the nation."
                                </p>
                                <div>
                                    <p className="font-bold text-primary">Dr. Vikash Kumar</p>
                                    <p className="text-sm text-gray-500">Principal, DCE Darbhanga</p>
                                </div>
                                <button className="text-secondary text-sm font-semibold hover:underline">Read More &rarr;</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 shadow-md rounded-lg border-t-4 border-secondary">
                        <div className="flex justify-between items-center mb-4 border-b pb-2">
                            <h3 className="text-2xl font-bold text-primary">Latest News</h3>
                            <a href="#" className="text-sm text-secondary hover:underline">View Archive</a>
                        </div>
                        <ul className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <li key={i} className="group cursor-pointer">
                                    <div className="flex gap-4">
                                        <div className="shrink-0 w-16 h-16 bg-gray-100 rounded flex flex-col items-center justify-center border border-gray-200">
                                            <span className="text-xs font-bold text-gray-500">OCT</span>
                                            <span className="text-xl font-bold text-primary">12</span>
                                        </div>
                                        <div>
                                            <h4 className="text-primary font-semibold group-hover:text-secondary transition-colors">Notice regarding mid-semester examinations for B.Tech students.</h4>
                                            <p className="text-sm text-gray-500 mt-1">The examination schedule for 3rd and 5th semester has been released...</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column: Notice Board & Links */}
                <div className="space-y-8">
                    <NoticeBoard />

                    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                        <h4 className="font-bold text-lg mb-4 text-primary border-b pb-2">Important Links</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {['Anti-Ragging Affidavit', 'Student Grievance Redressal', 'AICTE Approval Letter', 'NPTEL Local Chapter', 'SBTE Bihar'].map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="block py-1 hover:text-secondary hover:translate-x-1 transition-transform flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-primary text-white p-5 rounded-lg shadow-md">
                        <h4 className="font-bold text-lg mb-2">Student Corner</h4>
                        <p className="text-sm text-gray-300 mb-4">Access student portal for results, attendance, and more.</p>
                        <button className="w-full bg-white text-primary font-bold py-2 rounded hover:bg-gray-100 transition-colors">
                            Login to Portal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
