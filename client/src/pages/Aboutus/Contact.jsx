import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us. We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container">
                <h2 className="text-3xl font-bold text-primary mb-8 border-b pb-4">Contact Us</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-primary mb-4">Get in Touch</h3>
                            <div className="space-y-4 text-gray-600">
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-secondary mt-1" />
                                    <p>Mabbi, PO - Lal Sahpur,<br /> Darbhanga - 846005,<br /> Bihar, India</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="text-secondary" />
                                    <p>06272-255255</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="text-secondary" />
                                    <p>dcedarbhanga@gmail.com</p>
                                </div>
                            </div>
                        </div>

                      <div className="w-full rounded-lg overflow-hidden">
  <div className="relative w-full h-0 pb-[56.25%]"> 
    {/* 16:9 Aspect Ratio */}
    <iframe
      title="Darbhanga College of Engineering Location"
      src="https://www.google.com/maps?q=Darbhanga+College+of+Engineering,+Darbhanga&output=embed"
      className="absolute top-0 left-0 w-full h-full border-0"
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
</div>

</div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-primary mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                                    value={formData.subject}
                                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    rows="4"
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white font-bold py-2 rounded hover:bg-opacity-90 transition-opacity">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
