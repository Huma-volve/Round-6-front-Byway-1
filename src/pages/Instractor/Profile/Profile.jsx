import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    headline: "",
    about: "",
    skills: [],
    workExperience: [{ jobTitle: "", company: "", start: "", end: "" }],
    links: {
      website: "",
      twitter: "",
      linkedin: "",
      youtube: "",
      facebook: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (skill) => {
    setFormData((prev) => {
      const skills = prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills };
    });
  };

  const handleWorkChange = (index, field, value) => {
    const updated = [...formData.workExperience];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, workExperience: updated }));
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        { jobTitle: "", company: "", start: "", end: "" },
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Personal Info */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-normal text-gray-700 mb-1">
            First Name
          </label>
          <input
            name="firstName"
            placeholder="Label"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-normal text-gray-700 mb-1">
            Last Name
          </label>
          <input
            name="lastName"
            placeholder="Label"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-normal text-gray-700 mb-1">
          Headline
        </label>
        <input
          name="headline"
          placeholder="Label"
          value={formData.headline}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-normal text-gray-700 mb-1">
          About
        </label>
        <textarea
          name="about"
          placeholder="Label"
          value={formData.about}
          onChange={handleChange}
          className="border p-2 rounded w-full h-24"
        />
      </div>

      {/* Skills */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Skills
        </label>
        <select className="border p-2 rounded mb-3">
          <option>please select</option>
          <option>Dart</option>
          <option>Flutter</option>
          <option>Github</option>
          <option>UI/UX Design</option>
        </select>

        {/* <div className="grid grid-cols-1  gap-2 border p-4 rounded w-75">
          {["Dart", "Flutter", "Git", "Github", "UI/UX Design"].map((skill) => (
            <label key={skill} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.skills.includes(skill)}
                onChange={() => handleSkillChange(skill)}
              />
              <span>{skill}</span>
            </label>
          ))}
        </div> */}
      </div>

      {/* Work Experience */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Work Experience
        </label>
        {formData.workExperience.map((exp, i) => (
          <div key={i} className="grid grid-cols-2 gap-4 mb-4">
            <input
              placeholder="Job Title"
              value={exp.jobTitle}
              onChange={(e) => handleWorkChange(i, "jobTitle", e.target.value)}
              className="border p-2 rounded"
            />
            <input
              placeholder="Company Name"
              value={exp.company}
              onChange={(e) => handleWorkChange(i, "company", e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="date"
              value={exp.start}
              onChange={(e) => handleWorkChange(i, "start", e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="date"
              value={exp.end}
              onChange={(e) => handleWorkChange(i, "end", e.target.value)}
              className="border p-2 rounded"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addExperience}
          className="text-blue-600 text-sm font-medium border px-3 py-1 rounded hover:bg-blue-50"
        >
          + Add another Experience
        </button>
      </div>

      {/* Links */}
      <div className="border rounded p-4">
        <h3 className="text-lg font-semibold mb-4">Links</h3>
        {Object.entries(formData.links).map(([key, value]) => (
          <div key={key} className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
              {key === "twitter" ? "X (Formerly twitter)" : key}
            </label>
            <input
              name={key}
              value={value}
              placeholder="Label"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  links: { ...prev.links, [key]: e.target.value },
                }))
              }
              className="border p-2 rounded w-full"
            />
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="flex ">
        <button
          type="submit"
          className="bg-green-600 text-white px-12 py-3 rounded text-lg font-semibold hover:bg-green-700 w-100"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Profile;
