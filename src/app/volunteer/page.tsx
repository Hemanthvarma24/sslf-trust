"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  volunteerActivities: string[];
  availability: string[];
  priorExperience: string;
  experienceDetails: string;
  volunteerReason: string;
  additionalSkills: string;
}

export default function VolunteerForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    volunteerActivities: [],
    availability: [],
    priorExperience: "",
    experienceDetails: "",
    volunteerReason: "",
    additionalSkills: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      const checked = e.target.checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...(prev[name as keyof FormData] as string[]), value]
          : (prev[name as keyof FormData] as string[]).filter((v) => v !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex mt-18 pb-12 items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Join Our Volunteer Program</h2>
        <p className="text-gray-600 text-center mb-6">
          Thank you for your interest in volunteering with SSLF Charity Trust! Please fill out the form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="fullName" placeholder="Full Name" required className="w-full p-3 border rounded-lg" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 border rounded-lg" onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 border rounded-lg" onChange={handleChange} />
          <input type="date" name="dob" required className="w-full p-3 border rounded-lg" onChange={handleChange} />
          <textarea name="address" placeholder="Address" required className="w-full p-3 border rounded-lg" onChange={handleChange}></textarea>

          <fieldset className="space-y-2">
            <legend className="font-semibold">Which activities would you like to volunteer for?</legend>
            {["Education Support (Scholarship & Mentoring)", "Medical Camps & Blood Donation Drives", "Awareness Programs", "Training & Skill Development Programs", "Fundraising & Event Management", "Social Media & Promotions"].map((activity) => (
              <label key={activity} className="block">
                <input type="checkbox" name="volunteerActivities" value={activity} onChange={handleChange} /> {activity}
              </label>
            ))}
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="font-semibold">Availability</legend>
            {["Weekdays", "Weekends", "Flexible"].map((option) => (
              <label key={option} className="block">
                <input type="checkbox" name="availability" value={option} onChange={handleChange} /> {option}
              </label>
            ))}
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="font-semibold">Do you have prior volunteering experience?</legend>
            {["Yes", "No"].map((option) => (
              <label key={option} className="block">
                <input type="radio" name="priorExperience" value={option} onChange={handleChange} /> {option}
              </label>
            ))}
          </fieldset>

          {formData.priorExperience === "Yes" && (
            <textarea name="experienceDetails" placeholder="If Yes, please describe" className="w-full p-3 border rounded-lg" onChange={handleChange}></textarea>
          )}

          <textarea name="volunteerReason" placeholder="Why do you want to volunteer?" required className="w-full p-3 border rounded-lg" onChange={handleChange}></textarea>
          <textarea name="additionalSkills" placeholder="Any additional skills or suggestions?" className="w-full p-3 border rounded-lg" onChange={handleChange}></textarea>

          <button type="submit" className="w-full bg-[#0b0a45] hover:bg-gray-400 text-white p-3 rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  );
}
