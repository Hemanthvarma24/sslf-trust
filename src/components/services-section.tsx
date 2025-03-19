"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import volunteer from "@/assets/BeApart/IMG-20250311-WA0093.jpg";
import donate from "@/assets/BeApart/storyt02.jpeg";
import corporate from "@/assets/BeApart/IMG-20250311-WA0112.jpg";
import education from "@/assets/BeApart/IMG-20250311-WA0116.jpg";
import { X } from "lucide-react";

// Define types for our data structure
interface Field {
  name: string;
  label: string;
  type: string;
  options?: string[];
  required?: boolean;
  conditional?: { field: string; value: string };
}

interface Service {
  name: string;
  image: any; // using any for the imported image type
  title: string;
  description: string;
  fields: Field[];
}

interface FormDataType {
  [key: string]: string | string[] | boolean;
}

const services: Service[] = [
  {
    name: "BE A VOLUNTEER",
    image: volunteer,
    title: "Join Our Volunteer Program",
    description:
      "Thank you for your interest in volunteering with SSLF Charity Trust! Please fill out the form below to join our mission of creating a positive impact in the community.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      { name: "dob", label: "Date of Birth", type: "date", required: true },
      { name: "address", label: "Address", type: "textarea", required: true },
      {
        name: "volunteerActivities",
        label: "Which activities would you like to volunteer for?",
        type: "checkbox",
        options: [
          "Education Support (Scholarship & Mentoring)",
          "Medical Camps & Blood Donation Drives",
          "Awareness Programs",
          "Training & Skill Development Programs",
          "Fundraising & Event Management",
          "Social Media & Promotions",
        ],
        required: true,
      },
      {
        name: "availability",
        label: "Availability",
        type: "checkbox",
        options: ["Weekdays", "Weekends", "Flexible"],
        required: true,
      },
      {
        name: "priorExperience",
        label: "Do you have any prior volunteering experience?",
        type: "radio",
        options: ["Yes", "No"],
        required: true,
      },
      {
        name: "experienceDetails",
        label: "If Yes, please describe",
        type: "textarea",
        conditional: { field: "priorExperience", value: "Yes" },
      },
      {
        name: "volunteerReason",
        label: "Why do you want to volunteer with SSLF Charity Trust?",
        type: "textarea",
        required: true,
      },
      {
        name: "additionalSkills",
        label: "Any additional skills or suggestions you'd like to share?",
        type: "textarea",
      },
      // {
      //   name: "consent",
      //   label: "I agree to abide by the guidelines of SSLF Charity Trust.",
      //   type: "checkbox",
      //   required: true,
      // },
    ],
  },
  {
    name: "DONATE",
    image: donate,
    title: "Support Our Cause",
    description:
      "Your contribution can make a real difference in the lives of those in need. SSLF Charity Trust works tirelessly to provide services to uplift communities. Every donation, big or small, helps us bring hope and create a better future.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "age", label: "Age", type: "number", required: true },
      { name: "address", label: "Address", type: "textarea", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      {
        name: "amount",
        label: "Donation Amount",
        type: "number",
        required: true,
      },
      {
        name: "paymentMethod",
        label: "Payment Method",
        type: "radio",
        options: ["UPI", "Bank Transfer", "Credit/Debit Card", "Other"],
        required: true,
      },
      {
        name: "message",
        label: "Comments/Message (Optional)",
        type: "textarea",
      },
    ],
  },
  {
    name: "CORPORATE",
    image: corporate,
    title: "Corporate Partnership",
    description:
      "Thank you for your interest in partnering with SSLF Charity Trust. Your organization's support will help us drive impactful initiatives in education, healthcare, skill development, and community welfare.",
    fields: [
      {
        name: "companyName",
        label: "Company Name",
        type: "text",
        required: true,
      },
      {
        name: "companyAddress",
        label: "Company Address",
        type: "textarea",
        required: true,
      },
      {
        name: "contactPerson",
        label: "Contact Person Name",
        type: "text",
        required: true,
      },
      {
        name: "designation",
        label: "Designation",
        type: "text",
        required: true,
      },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      {
        name: "contributionType",
        label: "How would your company like to contribute?",
        type: "checkbox",
        options: [
          "Financial Donation",
          "Employee Volunteering Programs",
          "Sponsoring Medical Camps/Blood Donation Drives",
          "Scholarship & Education Support",
          "Awareness & Social Impact Programs",
          "Training & Skill Development Initiatives",
          "CSR Collaboration & Long-term Partnership",
        ],
        required: true,
      },
      {
        name: "donationAmount",
        label: "Preferred Donation Amount (if applicable)",
        type: "number",
      },
      {
        name: "donationMode",
        label: "Preferred Mode of Donation",
        type: "radio",
        options: ["Bank Transfer", "Cheque", "Online Payment", "Other"],
        required: true,
      },
      {
        name: "taxReceipt",
        label: "Would you like a tax-exemption receipt?",
        type: "radio",
        options: ["Yes", "No"],
        required: true,
      },
      {
        name: "additionalComments",
        label: "Additional Comments or Specific Interests",
        type: "textarea",
      },
      // {
      //   name: "consent",
      //   label:
      //     "I confirm that the details provided above are accurate and that our company is willing to collaborate with SSLF Charity Trust in making a positive impact.",
      //   type: "checkbox",
      //   required: true,
      // },
    ],
  },
  {
    name: "EDUCATION",
    image: education,
    title: "Educational Institution Collaboration",
    description:
      "SSLF Charity Trust is committed to supporting education through scholarships, training programs, and awareness initiatives. We invite educational institutions to collaborate with us in empowering students and creating meaningful change.",
    fields: [
      {
        name: "institutionName",
        label: "Institution Name",
        type: "text",
        required: true,
      },
      {
        name: "institutionType",
        label: "Institution Type",
        type: "radio",
        options: [
          "School",
          "College",
          "University",
          "Training Institute",
          "Other",
        ],
        required: true,
      },
      {
        name: "institutionAddress",
        label: "Institution Address",
        type: "textarea",
        required: true,
      },
      {
        name: "contactPerson",
        label: "Contact Person Name",
        type: "text",
        required: true,
      },
      {
        name: "designation",
        label: "Designation",
        type: "text",
        required: true,
      },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      {
        name: "collaborationTypes",
        label:
          "How would your institution like to collaborate with SSLF Charity Trust?",
        type: "checkbox",
        options: [
          "Student Scholarships & Financial Aid",
          "Educational Awareness Programs (Health, Hygiene, Career, etc.)",
          "Skill Development & Training Programs",
          "Volunteering & Community Service for Students",
          "Internship & Career Support Initiatives",
          "Organizing Blood Donation & Medical Camps",
        ],
        required: true,
      },
      {
        name: "hostEvents",
        label:
          "Would your institution be willing to host SSLF Charity Trust events/programs?",
        type: "radio",
        options: ["Yes", "No", "Maybe"],
        required: true,
      },
      {
        name: "additionalComments",
        label: "Additional Comments or Specific Interests",
        type: "textarea",
      },
      // {
      //   name: "consent",
      //   label:
      //     "I confirm that the details provided above are accurate and that our institution is interested in collaborating with SSLF Charity Trust.",
      //   type: "checkbox",
      //   required: true,
      // },
    ],
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormDataType>({});
  const [checkboxData, setCheckboxData] = useState<Record<string, string[]>>(
    {}
  );

  const openForm = (index: number) => {
    setActiveIndex(index);
    // Initialize form data for this service
    const initialData: FormDataType = {};
    const initialCheckboxData: Record<string, string[]> = {};

    services[index].fields.forEach((field) => {
      if (field.type === "checkbox" && field.options) {
        initialCheckboxData[field.name] = [];
      } else if (field.type === "select" && field.options) {
        initialData[field.name] = field.options[0];
      } else {
        initialData[field.name] = "";
      }
    });

    setFormData(initialData);
    setCheckboxData(initialCheckboxData);
  };

  const closeForm = () => {
    setActiveIndex(null);
    setFormData({});
    setCheckboxData({});
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    setCheckboxData((prev) => {
      const updatedValues = [...(prev[name] || [])];

      if (checked) {
        updatedValues.push(value);
      } else {
        const index = updatedValues.indexOf(value);
        if (index !== -1) {
          updatedValues.splice(index, 1);
        }
      }

      return {
        ...prev,
        [name]: updatedValues,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Combine regular form data with checkbox data
    const completeFormData = {
      ...formData,
      ...checkboxData,
    };

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", completeFormData);
    alert("Thank you for your submission! We'll be in touch soon.");
    closeForm();
  };

  // Check if a conditional field should be shown
  const shouldShowField = (field: Field): boolean => {
    if (!field.conditional) return true;

    const { field: condField, value } = field.conditional;
    return formData[condField] === value;
  };

  // Render form input based on field type
  const renderFormField = (field: Field) => {
    if (!shouldShowField(field)) return null;

    switch (field.type) {
      case "select":
        return (
          <select
            name={field.name}
            id={field.name}
            value={(formData[field.name] as string) || ""}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0b0a46]"
            required={field.required}
          >
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            name={field.name}
            id={field.name}
            value={(formData[field.name] as string) || ""}
            onChange={handleInputChange}
            rows={3}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0b0a46]"
            required={field.required}
          ></textarea>
        );
      case "checkbox":
        // Special handling for consent field
        if (field.name === "consent") {
          return (
            <div className="flex items-center">
              <input
                type="checkbox"
                name={field.name}
                id={field.name}
                checked={!!formData[field.name]}
                onChange={(e) =>
                  setFormData({ ...formData, [field.name]: e.target.checked })
                }
                className="mr-2"
                required={field.required}
              />
              <label htmlFor={field.name} className="text-sm text-gray-700">
                {field.label}
              </label>
            </div>
          );
        } else if (field.options) {
          // For checkboxes with options
          return (
            <div className="space-y-2">
              {field.options.map((option) => (
                <div key={option} className="flex items-start">
                  <input
                    type="checkbox"
                    id={`${field.name}-${option}`}
                    name={field.name}
                    value={option}
                    checked={(checkboxData[field.name] || []).includes(option)}
                    onChange={handleCheckboxChange}
                    className="mt-1 mr-2"
                    required={
                      field.required &&
                      (checkboxData[field.name] || []).length === 0
                    }
                  />
                  <label
                    htmlFor={`${field.name}-${option}`}
                    className="text-sm text-gray-700"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          );
        }
        return null;
      case "radio":
        return field.options ? (
          <div className="space-y-2">
            {field.options.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  id={`${field.name}-${option}`}
                  name={field.name}
                  value={option}
                  checked={formData[field.name] === option}
                  onChange={handleInputChange}
                  className="mr-2"
                  required={field.required}
                />
                <label
                  htmlFor={`${field.name}-${option}`}
                  className="text-sm text-gray-700"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        ) : null;
      default:
        return (
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            value={(formData[field.name] as string) || ""}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0b0a46]"
            required={field.required}
          />
        );
    }
  };

  return (
    <section className="py-16 bg-white text-center relative">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-3xl font-bold mb-2 text-[#0b0a46] tracking-wide">
          BE A PART WITH US
        </h2>
        {/* <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
          Be a part of SSLF Charity Trust and contribute to transforming lives
          through education, healthcare, and community welfare. Your
          support whether through volunteering, donations, or partnerships helps
          provide scholarships, medical aid, skill development, and social
          awareness programs to those in need. Together, we can create
          opportunities, empower individuals, and build a more inclusive
          society. Join us in making a lasting impact and bringing hope to
          underprivileged communities!
        </p> */}

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
              onClick={() => openForm(index)}
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-red-700 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Text with hover effect */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-lg font-bold tracking-wide">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal form overlay */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-2 sm:p-4 overflow-hidden">
          <div
            className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close button */}
            <div className="sticky top-0 z-10 bg-[#0b0a46] text-white p-4 flex justify-between items-center">
              <h3 className="text-xl font-bold">
                {services[activeIndex].title}
              </h3>
              <button
                onClick={closeForm}
                className="text-white hover:text-gray-200 focus:outline-none"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Scrollable content area */}
            <div className="overflow-y-auto flex-grow">
              {/* Two-column layout for desktop, single column for mobile */}
              <div className="flex flex-col md:flex-row w-full">
                {/* Left column - Heading and content */}
                <div className="p-4 sm:p-6 md:w-1/2 bg-gray-50">
                  <p className="text-gray-600 mb-6">
                    {services[activeIndex].description}
                  </p>
                </div>

                {/* Right column - Form */}
                <div className="p-4 sm:p-6 md:w-1/2">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {services[activeIndex].fields.map(
                      (field) =>
                        shouldShowField(field) && (
                          <div key={field.name} className="mb-4">
                            <label
                              htmlFor={field.name}
                              className="block text-sm font-medium text-gray-700 mb-1 text-left"
                            >
                              {field.label}{" "}
                              {field.required && (
                                <span className="text-red-500">*</span>
                              )}
                            </label>
                            {renderFormField(field)}
                          </div>
                        )
                    )}

                    <div className="pt-4 pb-6 sticky bottom-0 bg-white border-t mt-6">
                      <button
                        type="submit"
                        className="w-full bg-[#0b0a46] hover:bg-[#1a1970] text-white font-bold py-3 px-4 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0b0a46]"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
