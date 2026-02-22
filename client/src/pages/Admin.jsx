import React, { useState, useEffect } from "react";
import axios from "axios";
import { Trash2, FileText, Image as ImageIcon, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(""); // Added date state
  const [file, setFile] = useState(null);

  // Image Gallery State
  const [images, setImages] = useState([]);
  const [imageTitle, setImageTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const API_URL = "http://localhost:5000/api/notices";
  const IMAGE_API_URL = "http://localhost:5000/api/images";
  const LINK_API_URL = "http://localhost:5000/api/important-links";

  // Important Links State
  const [links, setLinks] = useState([]);
  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  // Messages State
  const [messages, setMessages] = useState([]);

  // Get token from localStorage
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = userInfo?.token;

  const MESSAGE_API_URL = "http://localhost:5000/api/messages";

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
    if (activeTab === "notifications") {
      fetchNotices();
    }
    if (activeTab === "images") {
      fetchImages();
    }
    if (activeTab === "links") {
      fetchLinks();
    }
    if (activeTab === "messages") {
      fetchMessages();
    }
  }, [activeTab, navigate, userInfo]); // Added userInfo to dependency array

  const fetchMessages = async () => {
    try {
      const response = await axios.get(MESSAGE_API_URL, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const fetchNotices = async () => {
    try {
      const response = await axios.get(API_URL);
      setNotices(response.data);
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get(IMAGE_API_URL);
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const fetchLinks = async () => {
    try {
      const response = await axios.get(LINK_API_URL);
      setLinks(response.data);
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title || !description || !file || !date) { // Check for date
      setMessage("Please fill all fields and select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", date); // Append date
    formData.append("file", file);

    setLoading(true);
    setMessage("");

    try {
      await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        },
      });
      setMessage("Notice uploaded successfully!");
      setTitle("");
      setDescription("");
      setDate(""); // Reset date
      setFile(null);
      fetchNotices(); // Refresh list
    } catch (error) {
      console.error("Error uploading notice:", error);
      setMessage("Failed to upload notice. " + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async () => {
    if (!imageFile) {
      setMessage("Please select an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", imageTitle);
    formData.append("file", imageFile);

    setLoading(true);
    setMessage("");

    try {
      await axios.post(IMAGE_API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        },
      });
      setMessage("Image uploaded successfully!");
      setImageTitle("");
      setImageFile(null);
      fetchImages(); // Refresh image list
    } catch (error) {
      console.error("Error uploading image:", error);
      setMessage("Failed to upload image. " + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this notice?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotices(notices.filter((n) => n._id !== id));
    } catch (error) {
      console.error("Error deleting notice:", error);
    }
  };

  const handleLinkUpload = async (e) => {
    e.preventDefault();
    if (!linkTitle || !linkUrl) {
      setMessage("Please enter title and URL.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await axios.post(LINK_API_URL, { title: linkTitle, url: linkUrl }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("Link added successfully!");
      setLinkTitle("");
      setLinkUrl("");
      fetchLinks();
    } catch (error) {
      console.error("Error adding link:", error);
      setMessage("Failed to add link.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteLink = async (id) => {
    if (!window.confirm("Delete this link?")) return;
    try {
      await axios.delete(`${LINK_API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLinks(links.filter(l => l._id !== id));
    } catch (error) {
      console.error("Error deleting link:", error);
    }
  };

  const handleDeleteImage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;
    try {
      await axios.delete(`${IMAGE_API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setImages(images.filter((img) => img._id !== id));
      setMessage("Image deleted successfully!");
    } catch (error) {
      console.error("Error deleting image:", error);
      setMessage("Failed to delete image. " + (error.response?.data?.message || error.message));
    }
  };

  const handleDeleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await axios.delete(`${MESSAGE_API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessages(messages.filter(m => m._id !== id));
      setMessage("Message deleted successfully!");
    } catch (error) {
      console.error("Error deleting message:", error);
      setMessage("Failed to delete message.");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5 fixed h-full transition-all duration-300">
        <h2 className="text-2xl font-bold mb-6 text-center border-b border-gray-700 pb-4">Admin Panel</h2>

        <ul className="space-y-4">
          <li onClick={() => setActiveTab("dashboard")} className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${activeTab === 'dashboard' ? 'bg-amber-500 text-white' : 'hover:bg-gray-800 hover:text-amber-400'}`}>Dashboard</li>
          <li onClick={() => setActiveTab("images")} className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${activeTab === 'images' ? 'bg-amber-500 text-white' : 'hover:bg-gray-800 hover:text-amber-400'}`}>Manage Images</li>
          <li onClick={() => setActiveTab("links")} className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${activeTab === 'links' ? 'bg-amber-500 text-white' : 'hover:bg-gray-800 hover:text-amber-400'}`}>Important Links</li>
          <li onClick={() => setActiveTab("notifications")} className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${activeTab === 'notifications' ? 'bg-amber-500 text-white' : 'hover:bg-gray-800 hover:text-amber-400'}`}>Notices / News</li>
          <li onClick={() => setActiveTab("messages")} className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${activeTab === 'messages' ? 'bg-amber-500 text-white' : 'hover:bg-gray-800 hover:text-amber-400'}`}>Messages</li>
        </ul>
      </div>

      {/* Main Section */}
      <div className="flex-1 ml-64">
        {/* Navbar */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md sticky top-0 z-10">
          <h1 className="text-xl font-semibold text-gray-800">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h1>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
              <span>Admin</span>
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-md py-2 border border-gray-100 z-50">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-700">Profile</li>
                  <li
                    onClick={() => {
                      localStorage.removeItem('userInfo');
                      navigate('/login');
                    }}
                    className="px-4 py-2 hover:bg-red-50 cursor-pointer text-red-500"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8">
          {activeTab === "dashboard" && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h2>
              <p className="text-gray-600">Select an option from the sidebar to manage website content.</p>
            </div>
          )}

          {activeTab === "images" && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Add / Change Image</h2>
              {message && <p className={`mb-4 p-2 rounded ${message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{message}</p>}

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Image Title (Optional)"
                  value={imageTitle}
                  onChange={(e) => setImageTitle(e.target.value)}
                  className="w-full mb-3 p-2 border border-gray-300 rounded"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                  className="mb-3 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
                />
                <button
                  onClick={handleImageUpload}
                  disabled={loading}
                  className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 transition"
                >
                  {loading ? "Uploading..." : "Upload Image"}
                </button>
              </div>

              <h3 className="text-md font-semibold mb-3">Existing Gallery Images</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img) => (
                  <div key={img._id} className="relative group">
                    <img src={img.imageUrl} alt={img.title} className="w-full h-32 object-cover rounded shadow" />
                    <button
                      onClick={() => handleDeleteImage(img._id)}
                      className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                    {img.title && <p className="text-xs mt-1 text-gray-600 truncate">{img.title}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "links" && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Manage Important Links</h2>
              {message && <p className={`mb-4 p-2 rounded ${message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{message}</p>}

              <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <input
                  type="text"
                  placeholder="Link Title (e.g. Exam Schedule)"
                  value={linkTitle}
                  onChange={(e) => setLinkTitle(e.target.value)}
                  className="w-full mb-3 p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="URL (e.g. https://google.com or /files/schedule.pdf)"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  className="w-full mb-3 p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={handleLinkUpload}
                  disabled={loading}
                  className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 transition"
                >
                  {loading ? "Adding..." : "Add Link"}
                </button>
              </div>

              <h3 className="text-md font-semibold mb-3">Existing Links</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link._id} className="flex justify-between items-center bg-gray-50 p-3 rounded border">
                    <div>
                      <p className="font-medium text-gray-800">{link.title}</p>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">{link.url}</a>
                    </div>
                    <button
                      onClick={() => handleDeleteLink(link._id)}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-full"
                    >
                      <Trash2 size={18} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-8">
              {/* Upload Form */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Notice</h2>
                {message && <p className={`mb-4 p-2 rounded ${message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{message}</p>}
                <form onSubmit={handleUpload} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter notice title"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter detailed description"
                      rows="3"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Attachment (PDF/Image)</label>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100 cursor-pointer"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition font-medium ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading ? "Uploading..." : "Publish Notice"}
                  </button>
                </form>
              </div>

              {/* Notices List */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Existing Notices</h2>
                {notices.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No notices found.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50 text-gray-700 border-b">
                          <th className="p-3 font-medium">Date</th>
                          <th className="p-3 font-medium">Title</th>
                          <th className="p-3 font-medium">Description</th>
                          <th className="p-3 font-medium">File</th>
                          <th className="p-3 font-medium">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {notices.map((notice) => (
                          <tr key={notice._id} className="border-b hover:bg-gray-50 transition">
                            <td className="p-3 text-sm text-gray-500">
                              {notice.date || new Date(notice.createdAt).toLocaleDateString()}
                            </td>
                            <td className="p-3 font-medium text-gray-800">{notice.title}</td>
                            <td className="p-3 text-gray-600 max-w-xs truncate">{notice.description}</td>
                            <td className="p-3">
                              <a
                                href={notice.fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-600 hover:underline flex items-center gap-1"
                              >
                                {notice.fileType.includes("pdf") ? <FileText size={16} /> : <ImageIcon size={16} />}
                                View
                              </a>
                            </td>
                            <td className="p-3">
                              <button
                                onClick={() => handleDelete(notice._id)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition"
                                title="Delete"
                              >
                                <Trash2 size={18} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "messages" && (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Messages</h2>
              {message && <p className={`mb-4 p-2 rounded ${message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{message}</p>}

              {messages.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No messages found.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 text-gray-700 border-b">
                        <th className="p-3 font-medium">Date</th>
                        <th className="p-3 font-medium">From</th>
                        <th className="p-3 font-medium">Subject</th>
                        <th className="p-3 font-medium">Message</th>
                        <th className="p-3 font-medium text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {messages.map((msg) => (
                        <tr key={msg._id} className="border-b hover:bg-gray-50 transition">
                          <td className="p-3 text-sm text-gray-500">
                            {new Date(msg.createdAt).toLocaleDateString()}
                          </td>
                          <td className="p-3">
                            <div className="font-medium text-gray-800">{msg.name}</div>
                            <div className="text-xs text-gray-500">{msg.email}</div>
                          </td>
                          <td className="p-3 text-gray-800 font-medium">{msg.subject}</td>
                          <td className="p-3 text-gray-600 max-w-xs break-words">{msg.message}</td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => handleDeleteMessage(msg._id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition"
                              title="Delete Message"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
