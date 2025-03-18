"use client";

import { useState } from "react";

interface FormData {
  institutionName: string;
  institutionType: string;
  institutionAddress: string;
  contactPerson: string;
  designation: string;
  email: string;
  phone: string;
  collaborationTypes: string[];
  hostEvents: string;
  additionalComments: string;
}

export default function EducationCollaboration() {
  const [formData, setFormData] = useState<FormData>({
    institutionName: "",
    institutionType: "",
    institutionAddress: "",
    contactPerson: "",
    designation: "",
    email: "",
    phone: "",
    collaborationTypes: [],
    hostEvents: "",
    additionalComments: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
  
    // Handle checkbox inputs separately by checking if the input is a checkbox
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      const checked = e.target.checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...(prev[name as keyof FormData] as string[]), value]
          : (prev[name as keyof FormData] as string[]).filter((v) => v !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center mt-18 pb-8 justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-center mb-6">
          Educational Institution Collaboration
        </h2>
        <p className="text-gray-600 text-center mb-6">
          SSLF Charity Trust is committed to supporting education through scholarships, training
          programs, and awareness initiatives. We invite educational institutions to collaborate
          with us in empowering students and creating meaningful change. Please fill out the form
          below to explore partnership opportunities.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="institutionName"
            placeholder="Institution Name"
            required
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          />

          <fieldset className="space-y-2">
            <legend className="font-semibold">Institution Type</legend>
            {["School", "College", "University", "Training Institute", "Other"].map((option) => (
              <label key={option} className="block">
                <input
                  type="radio"
                  name="institutionType"
                  value={option}
                  onChange={handleChange}
                />{" "}
                {option}
              </label>
            ))}
          </fieldset>

          <textarea
            name="institutionAddress"
            placeholder="Institution Address"
            required
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="contactPerson"
            placeholder="Contact Person Name"
            required
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          />
          <input
            type="text"
            name="designation"
            placeholder="Designation"
            required
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          />

          <fieldset className="space-y-2">
            <legend className="font-semibold">
              How would your institution like to collaborate with SSLF Charity Trust?
            </legend>
            {[
              "Student Scholarships & Financial Aid",
              "Educational Awareness Programs (Health, Hygiene, Career, etc.)",
              "Skill Development & Training Programs",
              "Volunteering & Community Service for Students",
              "Internship & Career Support Initiatives",
              "Organizing Blood Donation & Medical Camps",
            ].map((option) => (
              <label key={option} className="block">
                <input
                  type="checkbox"
                  name="collaborationTypes"
                  value={option}
                  onChange={handleChange}
                />{" "}
                {option}
              </label>
            ))}
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="font-semibold">
              Would your institution be willing to host SSLF Charity Trust events/programs?
            </legend>
            {["Yes", "No", "Maybe"].map((option) => (
              <label key={option} className="block">
                <input type="radio" name="hostEvents" value={option} onChange={handleChange} />{" "}
                {option}
              </label>
            ))}
          </fieldset>

          <textarea
            name="additionalComments"
            placeholder="Additional Comments or Specific Interests"
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#0b0a45] hover:bg-gray-400 text-white p-3 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}