"use client";

import { useState } from "react";

export default function CorporatePartnership() {
  type FormDataType = {
    companyName: string;
    companyAddress: string;
    contactPerson: string;
    designation: string;
    email: string;
    phone: string;
    contributionType: string[];
    donationAmount: string;
    donationMode: string;
    taxReceipt: string;
    additionalComments: string;
  };

  const [formData, setFormData] = useState<FormDataType>({
    companyName: "",
    companyAddress: "",
    contactPerson: "",
    designation: "",
    email: "",
    phone: "",
    contributionType: [],
    donationAmount: "",
    donationMode: "",
    taxReceipt: "",
    additionalComments: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox"
        ? checked
          ? [...(prev[name as keyof FormDataType] as string[]), value]
          : (prev[name as keyof FormDataType] as string[]).filter((v) => v !== value)
        : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center mt-18 pb-8 justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Corporate Partnership</h2>
        <p className="text-gray-600 text-center mb-6">
          Thank you for your interest in partnering with SSLF Charity Trust. Your support helps us drive impactful initiatives.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="companyName" placeholder="Company Name" required className="w-full p-3 border rounded-lg" onChange={handleChange} />
          <textarea name="companyAddress" placeholder="Company Address" required className="w-full p-3 border rounded-lg" onChange={handleChange}></textarea>
          <input type="text" name="contactPerson" placeholder="Contact Person Name" required className="w-full p-3 border rounded-lg" onChange={handleChange} />
          <input type="text" name="designation" placeholder="Designation" required className="w-full p-3 border rounded-lg" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 border rounded-lg" onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 border rounded-lg" onChange={handleChange} />

          <fieldset className="space-y-2">
            <legend className="font-semibold">How would your company like to contribute?</legend>
            {["Financial Donation", "Employee Volunteering Programs", "Sponsoring Medical Camps/Blood Donation Drives", "Scholarship & Education Support", "Awareness & Social Impact Programs", "Training & Skill Development Initiatives", "CSR Collaboration & Long-term Partnership"].map((option) => (
              <label key={option} className="block">
                <input type="checkbox" name="contributionType" value={option} onChange={handleChange} /> {option}
              </label>
            ))}
          </fieldset>

          <input type="number" name="donationAmount" placeholder="Preferred Donation Amount (if applicable)" className="w-full p-3 border rounded-lg" onChange={handleChange} />

          <fieldset className="space-y-2">
            <legend className="font-semibold">Preferred Mode of Donation</legend>
            {["Bank Transfer", "Cheque", "Online Payment", "Other"].map((option) => (
              <label key={option} className="block">
                <input type="radio" name="donationMode" value={option} onChange={handleChange} /> {option}
              </label>
            ))}
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="font-semibold">Would you like a tax-exemption receipt?</legend>
            {["Yes", "No"].map((option) => (
              <label key={option} className="block">
                <input type="radio" name="taxReceipt" value={option} onChange={handleChange} /> {option}
              </label>
            ))}
          </fieldset>

          <textarea name="additionalComments" placeholder="Additional Comments or Specific Interests" className="w-full p-3 border rounded-lg" onChange={handleChange}></textarea>

          <button type="submit" className="w-full bg-[#0b0a45] hover:bg-gray-400 text-white p-3 rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  );
}
