import React, { useState } from "react";

const Admin = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

        <ul className="space-y-4">
          <li onClick={() => setActiveTab("dashboard")} className="cursor-pointer hover:text-amber-400">Dashboard</li>
          <li onClick={() => setActiveTab("images")} className="cursor-pointer hover:text-amber-400">Manage Images</li>
          <li onClick={() => setActiveTab("slider")} className="cursor-pointer hover:text-amber-400">Manage Slider</li>
          <li onClick={() => setActiveTab("notifications")} className="cursor-pointer hover:text-amber-400">Notifications</li>
        </ul>
      </div>

      {/* Main Section */}
      <div className="flex-1">

        {/* Navbar */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="bg-gray-200 px-4 py-2 rounded-md"
            >
              Admin
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">

          {activeTab === "dashboard" && (
            <div className="text-lg font-semibold">Welcome to Admin Panel</div>
          )}

          {activeTab === "images" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Add / Change Image</h2>
              <input type="file" className="mb-3" />
              <button className="bg-amber-500 text-white px-4 py-2 rounded-md">
                Upload Image
              </button>
            </div>
          )}

          {activeTab === "slider" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Manage Image Slider</h2>
              <input type="file" multiple className="mb-3" />
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                Add to Slider
              </button>
            </div>
          )}

          {activeTab === "notifications" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Add Notification</h2>
              <input
                type="text"
                placeholder="Enter notification"
                className="border p-2 w-full mb-3"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Add Notification
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Admin;
