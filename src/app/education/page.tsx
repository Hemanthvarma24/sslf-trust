"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import bg from "@/assets/educations.jpg"

interface FormData {
  institutionName: string
  institutionType: string
  institutionAddress: string
  contactPerson: string
  designation: string
  email: string
  phone: string
  collaborationTypes: string[]
  hostEvents: string
  additionalComments: string
}

const institutionTypes = ["School", "College", "University", "Training Institute", "Other"]
const hostEventOptions = ["Yes", "No", "Maybe"]
const collaborationOptions = [
  "Student Scholarships & Financial Aid",
  "Educational Awareness Programs (Health, Hygiene, Career, etc.)",
  "Skill Development & Training Programs",
  "Volunteering & Community Service for Students",
  "Internship & Career Support Initiatives",
  "Organizing Blood Donation & Medical Camps",
]

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
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      collaborationTypes: checked
        ? [...prev.collaborationTypes, value]
        : prev.collaborationTypes.filter((item) => item !== value),
    }))
  }

  const handleRadioChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const validateForm = () => {
    if (
      !formData.institutionName ||
      !formData.institutionType ||
      !formData.contactPerson ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill all required fields.")
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Invalid email format.")
      return false
    }
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      const whatsappMessage = `Educational Collaboration Inquiry:\n\n*Institution Name:* ${formData.institutionName}\n*Institution Type:* ${formData.institutionType}\n*Institution Address:* ${formData.institutionAddress}\n*Contact Person:* ${formData.contactPerson}\n*Designation:* ${formData.designation}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n\n*Collaboration Interests:*\n${formData.collaborationTypes.join(", ") || "N/A"}\n\n*Willing to Host Events:* ${formData.hostEvents}\n\n*Additional Comments:* ${formData.additionalComments || "N/A"}`

      const whatsappURL = `https://wa.me/+919094099940?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappURL, "_blank")

      alert("Your form has been submitted successfully.")

      setFormData({
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
      })
    }
  }

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
          <CardTitle className="text-2xl font-bold text-center">Educational Institution Collaboration</CardTitle>
          <CardDescription className="text-center">
            SSLF Charity Trust is committed to supporting education through scholarships, training programs, and
            awareness initiatives. We invite educational institutions to collaborate with us in empowering students and
            creating meaningful change.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="institutionName">Institution Name</Label>
                <Input
                  id="institutionName"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-3">
                <Label>Institution Type</Label>
                <RadioGroup
                  value={formData.institutionType}
                  onValueChange={(value) => handleRadioChange("institutionType", value)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {institutionTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <RadioGroupItem value={type} id={`type-${type}`} />
                        <Label htmlFor={`type-${type}`} className="font-normal">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="institutionAddress">Institution Address</Label>
                <Textarea
                  id="institutionAddress"
                  name="institutionAddress"
                  value={formData.institutionAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactPerson">Contact Person</Label>
                  <Input
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="designation">Designation</Label>
                  <Input
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    required
                  />
                </div>
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

              <div className="space-y-3">
                <Label>How would your institution like to collaborate with SSLF Charity Trust?</Label>
                <div className="grid grid-cols-1 gap-2">
                  {collaborationOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={`collab-${option}`}
                        checked={formData.collaborationTypes.includes(option)}
                        onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                      />
                      <Label htmlFor={`collab-${option}`} className="font-normal">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Would your institution be willing to host SSLF Charity Trust events/programs?</Label>
                <RadioGroup
                  value={formData.hostEvents}
                  onValueChange={(value) => handleRadioChange("hostEvents", value)}
                >
                  <div className="grid grid-cols-3 gap-2">
                    {hostEventOptions.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`host-${option}`} />
                        <Label htmlFor={`host-${option}`} className="font-normal">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalComments">Additional Comments or Specific Interests</Label>
                <Textarea
                  id="additionalComments"
                  name="additionalComments"
                  value={formData.additionalComments}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#0b0a45] hover:bg-gray-700">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

