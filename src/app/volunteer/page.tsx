"use client";

import type React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import bg from "@/assets/be-a-volunteers.jpg"

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  profession: string;
  otherProfession: string;
  volunteerActivities: string[];
  availability: string[];
  priorExperience: string;
  experienceDetails: string;
  volunteerReason: string;
  additionalSkills: string;
}

const volunteerActivities = [
  "Education Support",
  "Medical Camps",
  "Awareness Programs",
  "Fundraising",
  "Social Media",
];
const availabilityOptions = ["Weekdays", "Weekends", "Flexible"];
const experienceOptions = ["Yes", "No"];

export default function VolunteerForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    profession: "",
    otherProfession: "",
    volunteerActivities: [],
    availability: [],
    priorExperience: "",
    experienceDetails: "",
    volunteerReason: "",
    additionalSkills: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (
    field: "volunteerActivities" | "availability",
    value: string,
    checked: boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value),
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      priorExperience: value,
      experienceDetails: value === "No" ? "" : prev.experienceDetails,
    }));
  };

  const validateForm = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.dob ||
      !formData.profession
    ) {
      alert("Please fill all required fields.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Invalid email format.");
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Invalid phone number. Must be 10 digits.");
      return false;
    }
    if (formData.profession === "Other" && !formData.otherProfession) {
      alert("Please specify your profession.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const professionText =
        formData.profession === "Other"
          ? formData.otherProfession
          : formData.profession;

      const whatsappMessage = `Volunteer Application:\n\n*Full Name:* ${
        formData.fullName
      }\n*Email:* ${formData.email}\n*Phone:* ${
        formData.phone
      }\n*Date of Birth:* ${
        formData.dob
      }\n*Profession:* ${professionText}\n*Address:* ${
        formData.address
      }\n*Volunteer Activities:* ${
        formData.volunteerActivities.join(", ") || "None selected"
      }\n*Availability:* ${
        formData.availability.join(", ") || "None selected"
      }\n*Prior Experience:* ${
        formData.priorExperience
      }\n*Experience Details:* ${
        formData.experienceDetails || "N/A"
      }\n*Volunteer Reason:* ${
        formData.volunteerReason
      }\n*Additional Skills:* ${formData.additionalSkills || "N/A"}`;

      const whatsappURL = `https://wa.me/+919094099940?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappURL, "_blank");

      alert("Your volunteer application has been submitted successfully.");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        address: "",
        profession: "",
        otherProfession: "",
        volunteerActivities: [],
        availability: [],
        priorExperience: "",
        experienceDetails: "",
        volunteerReason: "",
        additionalSkills: "",
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover z-[-1]"
        priority
      />

      {/* Card Container */}
      <Card className="w-full max-w-3xl mx-auto shadow-lg rounded-lg bg-white mt-14 mb-8">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Join Our Volunteer Program
          </CardTitle>
          <CardDescription className="text-center">
            Thank you for your interest in volunteering with SSLF Charity Trust!
            Please fill out the form below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profession">Your Profession</Label>
                  <select
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={(e) => {
                      const selected = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        profession: selected,
                        otherProfession:
                          selected === "Other" ? prev.otherProfession : "",
                      }));
                    }}
                    className="w-full border rounded-md px-3 py-2 text-sm"
                    required
                  >
                    <option value="select">select</option>
                    <option value="Student">Student</option>
                    <option value="Employee">Employee</option>
                    <option value="Retired">Retired</option>
                    <option value="Self-employed">Self-employed</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {formData.profession === "Other" && (
                <div className="space-y-2">
                  <Label htmlFor="otherProfession">
                    Please specify your profession
                  </Label>
                  <Input
                    id="otherProfession"
                    name="otherProfession"
                    value={formData.otherProfession}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-3">
                <Label>Which activities would you like to volunteer for?</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {volunteerActivities.map((activity) => (
                    <div key={activity} className="flex items-center space-x-2">
                      <Checkbox
                        id={`activity-${activity}`}
                        checked={formData.volunteerActivities.includes(
                          activity
                        )}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange(
                            "volunteerActivities",
                            activity,
                            checked as boolean
                          )
                        }
                      />
                      <Label
                        htmlFor={`activity-${activity}`}
                        className="font-normal"
                      >
                        {activity}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Availability</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {availabilityOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={`availability-${option}`}
                        checked={formData.availability.includes(option)}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange(
                            "availability",
                            option,
                            checked as boolean
                          )
                        }
                      />
                      <Label
                        htmlFor={`availability-${option}`}
                        className="font-normal"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Do you have prior volunteering experience?</Label>
                <RadioGroup
                  value={formData.priorExperience}
                  onValueChange={handleRadioChange}
                >
                  {experienceOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={option}
                        id={`experience-${option}`}
                      />
                      <Label
                        htmlFor={`experience-${option}`}
                        className="font-normal"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {formData.priorExperience === "Yes" && (
                <div className="space-y-2">
                  <Label htmlFor="experienceDetails">
                    Please describe your volunteering experience
                  </Label>
                  <Textarea
                    id="experienceDetails"
                    name="experienceDetails"
                    value={formData.experienceDetails}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="volunteerReason">
                  Why do you want to volunteer?
                </Label>
                <Textarea
                  id="volunteerReason"
                  name="volunteerReason"
                  value={formData.volunteerReason}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalSkills">
                  Any additional skills or suggestions?
                </Label>
                <Textarea
                  id="additionalSkills"
                  name="additionalSkills"
                  value={formData.additionalSkills}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#0b0a45] hover:bg-gray-700"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
