import React, { useState } from "react";
import { Edit3, Camera, Save, X } from "lucide-react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Omnya",
    lastName: "Mohamed",
    headline: "A student passionate about learning design and user experience.",
    about: "UI UX Design",
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
    youtube: "https://www.youtube.com/@yourchannelname",
    facebook: "https://www.facebook.com/yourusername",
  });

  const [tempData, setTempData] = useState(formData);

  const handleInputChange = (field: any, value: any) => {
    setTempData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEdit = () => {
    setTempData(formData);
    setIsEditing(true);
  };

  const handleSave = () => {
    setFormData(tempData);
    setIsEditing(false);
    console.log("Profile saved:", tempData);
  };

  const handleCancel = () => {
    setTempData(formData);
    setIsEditing(false);
  };

  const renderViewMode = () => (
    <div className="p-6 space-y-8">
      {/* Profile Picture */}
      <div className="flex justify-center">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-semibold text-gray-600">
          O
        </div>
      </div>

      {/* Name */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          {formData.firstName} {formData.lastName}
        </h2>
      </div>

      {/* Headline */}
      <div>
        <h3 className="text-sm font-medium text-blue-600 mb-2">Headline</h3>
        <p className="text-gray-700 leading-relaxed">{formData.headline}</p>
      </div>

      {/* About */}
      <div>
        <h3 className="text-sm font-medium text-blue-600 mb-2">About</h3>
        <p className="text-gray-700">{formData.about}</p>
      </div>

      {/* Links Section */}
      <div>
        <h3 className="text-sm font-medium text-blue-600 mb-4">Links</h3>
        <div className="space-y-3">
          {formData.github && (
            <div>
              <span className="text-xs text-gray-500 block mb-1">Github</span>
              <a
                href={formData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm break-all"
              >
                {formData.github}
              </a>
            </div>
          )}

          {formData.linkedin && (
            <div>
              <span className="text-xs text-gray-500 block mb-1">LinkedIn</span>
              <a
                href={formData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm break-all"
              >
                {formData.linkedin}
              </a>
            </div>
          )}

          {formData.youtube && (
            <div>
              <span className="text-xs text-gray-500 block mb-1">Youtube</span>
              <a
                href={formData.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm break-all"
              >
                {formData.youtube}
              </a>
            </div>
          )}

          {formData.facebook && (
            <div>
              <span className="text-xs text-gray-500 block mb-1">Facebook</span>
              <a
                href={formData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm break-all"
              >
                {formData.facebook}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderEditMode = () => (
    <div className="p-6 space-y-8">
      {/* Profile Picture */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-semibold text-gray-600">
            O
          </div>
          <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Camera size={14} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-blue-600 mb-2">
            First Name
          </label>
          <input
            type="text"
            value={tempData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-600 mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={tempData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Headline */}
      <div>
        <label className="block text-sm font-medium text-blue-600 mb-2">
          Headline
        </label>
        <textarea
          value={tempData.headline}
          onChange={(e) => handleInputChange("headline", e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      {/* About */}
      <div>
        <label className="block text-sm font-medium text-blue-600 mb-2">
          About
        </label>
        <textarea
          value={tempData.about}
          onChange={(e) => handleInputChange("about", e.target.value)}
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Links Section */}
      <div>
        <h3 className="text-sm font-medium text-blue-600 mb-4">Links</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">
              Github (optional)
            </label>
            <input
              type="url"
              value={tempData.github}
              onChange={(e) => handleInputChange("github", e.target.value)}
              placeholder="https://github.com/yourusername"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">LinkedIn</label>
            <input
              type="url"
              value={tempData.linkedin}
              onChange={(e) => handleInputChange("linkedin", e.target.value)}
              placeholder="https://www.linkedin.com/in/yourusername"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Youtube</label>
            <input
              type="url"
              value={tempData.youtube}
              onChange={(e) => handleInputChange("youtube", e.target.value)}
              placeholder="https://www.youtube.com/@yourchannelname"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Facebook</label>
            <input
              type="url"
              value={tempData.facebook}
              onChange={(e) => handleInputChange("facebook", e.target.value)}
              placeholder="https://www.facebook.com/yourusername"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Edit3 size={20} className="text-gray-600" />
            <h1 className="text-xl font-semibold text-gray-900">
              {isEditing ? "Edit Profile" : "Profile"}
            </h1>
          </div>

          {!isEditing ? (
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium flex items-center gap-2"
            >
              <Edit3 size={16} />
              Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium flex items-center gap-2"
              >
                <X size={16} />
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors font-medium flex items-center gap-2"
              >
                <Save size={16} />
                Save
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        {isEditing ? renderEditMode() : renderViewMode()}
      </div>
    </div>
  );
}
