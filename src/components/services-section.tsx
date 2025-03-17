"use client";

import { useState } from "react";
import Image from "next/image";
import volunteer from "@/assets/BeApart/IMG-20250311-WA0093.jpg";
import donate from "@/assets/BeApart/IMG-20250311-WA0095.jpg";
import corporate from "@/assets/BeApart/IMG-20250311-WA0112.jpg";
import education from "@/assets/BeApart/IMG-20250311-WA0116.jpg";

// Define types for our data structure
interface Field {
  name: string;
  label: string;
  type: string;
  options?: string[];
}

interface Service {
  name: string;
  image: any; // using any for the imported image type
  title: string;
  description: string;
  fields: Field[];
}

interface FormDataType {
  [key: string]: string;
}

const services: Service[] = [
  { 
    name: "BE A VOLUNTEER", 
    image: volunteer,
    title: "Join Our Volunteer Program",
    description: "Make a difference in your community by volunteering with us. We offer various volunteering opportunities that match your skills and interests.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text" },
      { name: "email", label: "Email Address", type: "email" },
      { name: "phone", label: "Phone Number", type: "tel" },
      { name: "availability", label: "Availability", type: "select", options: ["Weekdays", "Weekends", "Both"] },
      { name: "skills", label: "Skills & Interests", type: "textarea" }
    ]
  },
  { 
    name: "DONATE", 
    image: donate,
    title: "Support Our Cause",
    description: "Your generous donations help us continue our work and make a lasting impact. Every contribution counts, no matter how small.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text" },
      { name: "email", label: "Email Address", type: "email" },
      { name: "amount", label: "Donation Amount", type: "number" },
      { name: "frequency", label: "Frequency", type: "select", options: ["One-time", "Monthly", "Quarterly", "Annually"] },
      { name: "message", label: "Message (Optional)", type: "textarea" }
    ]
  },
  { 
    name: "CORPORATE", 
    image: corporate,
    title: "Corporate Partnership",
    description: "Partner with us to fulfill your corporate social responsibility goals while making a positive impact on society.",
    fields: [
      { name: "companyName", label: "Company Name", type: "text" },
      { name: "contactPerson", label: "Contact Person", type: "text" },
      { name: "email", label: "Email Address", type: "email" },
      { name: "phone", label: "Phone Number", type: "tel" },
      { name: "partnershipType", label: "Partnership Interest", type: "select", options: ["Sponsorship", "Employee Volunteering", "Matching Gifts", "In-kind Donations", "Other"] },
      { name: "message", label: "Additional Information", type: "textarea" }
    ]
  },
  { 
    name: "EDUCATION", 
    image: education,
    title: "Educational Programs",
    description: "Join our educational initiatives designed to empower individuals with knowledge and skills for a better future.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text" },
      { name: "email", label: "Email Address", type: "email" },
      { name: "phone", label: "Phone Number", type: "tel" },
      { name: "programInterest", label: "Program Interest", type: "select", options: ["Skill Development", "Digital Literacy", "Financial Education", "Environmental Awareness", "Other"] },
      { name: "message", label: "Questions or Comments", type: "textarea" }
    ]
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormDataType>({});

  const openForm = (index: number) => {
    setActiveIndex(index);
    // Initialize form data for this service
    const initialData: FormDataType = {};
    services[index].fields.forEach(field => {
      initialData[field.name] = field.type === 'select' && field.options ? field.options[0] : '';
    });
    setFormData(initialData);
  };

  const closeForm = () => {
    setActiveIndex(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your submission! We'll be in touch soon.");
    closeForm();
  };

  // Render form input based on field type
  const renderFormField = (field: Field) => {
    switch(field.type) {
      case 'select':
        return (
          <select
            name={field.name}
            id={field.name}
            value={formData[field.name] || ''}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0b0a46]"
            required
          >
            {field.options?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            name={field.name}
            id={field.name}
            value={formData[field.name] || ''}
            onChange={handleInputChange}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0b0a46]"
            required={field.name !== 'message'}
          ></textarea>
        );
      default:
        return (
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            value={formData[field.name] || ''}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0b0a46]"
            required
          />
        );
    }
  };

  return (
    <section className="py-16 bg-white text-center relative">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-3xl font-bold mb-2 text-[#0b0a46] tracking-wide">BE A PART WITH US</h2>
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, vitae mattis vehicula scelerisque suscipit donec, tortor duis
          phasellus vivamus wisi placerat, pellentesque augue leo. Orci nullam, nonummy nam sed, sapien
          temporibus ac ac, velit ante volutpat enim <span className="font-bold text-[#0b0a46]">We Help 22,4780 People</span>
        </p>
        
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-2">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openForm(index)}
            >
              <Image
                src={service.image}
                alt={service.name}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-red-700 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Text with hover effect */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-lg font-bold tracking-wide">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal form overlay */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-90vh overflow-y-auto relative">
            {/* Close button - now positioned inside the main card at top right */}
            <button 
              onClick={closeForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Two-column layout for desktop, single column for mobile */}
            <div className="flex flex-col md:flex-row w-full">
              {/* Left column - Heading and content */}
              <div className="p-6 md:w-1/2 bg-gray-50 rounded-l-lg">
                <h3 className="text-2xl font-bold text-[#0b0a46] mb-4">{services[activeIndex].title}</h3>
                <p className="text-gray-600">{services[activeIndex].description}</p>
                
                {/* Optional: Add some visual elements or bullet points */}
                <div className="mt-6">
                  <h4 className="font-semibold text-[#0b0a46] mb-2">Why Join Us?</h4>
                  <ul className="list-disc pl-5 text-left text-gray-600">
                    <li className="mb-1">Make a real difference in your community</li>
                    <li className="mb-1">Join a network of passionate individuals</li>
                    <li className="mb-1">Develop new skills and experiences</li>
                    <li>Be part of meaningful social change</li>
                  </ul>
                </div>
                
                {/* Optional: Add an image or icon */}
                <div className="mt-6 flex justify-center">
                  <div className="w-20 h-20 bg-[#0b0a46] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {services[activeIndex].name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Right column - Form */}
              <div className="p-6 md:w-1/2">
                <form onSubmit={handleSubmit} className="pt-4">
                  {services[activeIndex].fields.map(field => (
                    <div key={field.name} className="mb-4">
                      <label 
                        htmlFor={field.name}
                        className="block text-sm font-medium text-gray-700 mb-1 text-left"
                      >
                        {field.label}
                      </label>
                      {renderFormField(field)}
                    </div>
                  ))}
                  
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full bg-[#0b0a46] hover:bg-gray-400 text-white font-bold py-2 px-4 rounded transition duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}