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
import bg from "@/assets/Corporate Partnership.jpg"

type ContributionType =
  | "Financial Donation"
  | "Employee Volunteering Programs"
  | "Sponsoring Medical Camps/Blood Donation Drives"
  | "Scholarship & Education Support"
  | "Awareness & Social Impact Programs"
  | "Training & Skill Development Initiatives"
  | "CSR Collaboration & Long-term Partnership"

type DonationMode = "Bank Transfer" | "Cheque" | "Online Payment" | "Other"
type TaxReceipt = "Yes" | "No"

interface FormDataType {
  companyName: string
  companyAddress: string
  contactPerson: string
  designation: string
  email: string
  phone: string
  contributionType: ContributionType[]
  donationAmount: string
  donationMode: DonationMode | ""
  taxReceipt: TaxReceipt | ""
  additionalComments: string
}

const contributionOptions: ContributionType[] = [
  "Financial Donation",
  "Employee Volunteering Programs",
  "Sponsoring Medical Camps/Blood Donation Drives",
  "Scholarship & Education Support",
  "Awareness & Social Impact Programs",
  "Training & Skill Development Initiatives",
  "CSR Collaboration & Long-term Partnership",
]

const donationModeOptions: DonationMode[] = ["Bank Transfer", "Cheque", "Online Payment", "Other"]
const taxReceiptOptions: TaxReceipt[] = ["Yes", "No"]

export default function CorporatePartnership() {
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
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (value: ContributionType, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      contributionType: checked
        ? [...prev.contributionType, value]
        : prev.contributionType.filter((item) => item !== value),
    }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone) {
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
      const whatsappMessage = `Corporate Partnership Inquiry:\n\n*Company Name:* ${formData.companyName}\n*Company Address:* ${formData.companyAddress}\n*Contact Person:* ${formData.contactPerson}\n*Designation:* ${formData.designation}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Contribution Type:* ${formData.contributionType.join(", ") || "None selected"}\n*Donation Amount:* ${formData.donationAmount || "N/A"}\n*Donation Mode:* ${formData.donationMode || "N/A"}\n*Tax Receipt:* ${formData.taxReceipt || "N/A"}\n*Additional Comments:* ${formData.additionalComments || "N/A"}`

      const whatsappURL = `https://wa.me/+919094099940?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappURL, "_blank")

      alert("Your partnership request has been submitted successfully.")

      // Reset form
      setFormData({
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
          <CardTitle className="text-2xl font-bold text-center">Corporate Partnership</CardTitle>
          <CardDescription className="text-center">
            Thank you for your interest in partnering with SSLF Charity Trust. Your support helps us drive impactful
            initiatives.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyAddress">Company Address</Label>
                <Textarea
                  id="companyAddress"
                  name="companyAddress"
                  value={formData.companyAddress}
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
                <Label>How would your company like to contribute?</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {contributionOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={`contribution-${option}`}
                        checked={formData.contributionType.includes(option)}
                        onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                      />
                      <Label htmlFor={`contribution-${option}`} className="font-normal">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="donationAmount">Preferred Donation Amount (if applicable)</Label>
                <Input
                  id="donationAmount"
                  name="donationAmount"
                  type="number"
                  value={formData.donationAmount}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-3">
                <Label>Preferred Mode of Donation</Label>
                <RadioGroup
                  value={formData.donationMode}
                  onValueChange={(value) => handleRadioChange("donationMode", value)}
                >
                  {donationModeOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`donationMode-${option}`} />
                      <Label htmlFor={`donationMode-${option}`} className="font-normal">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>Would you like a tax-exemption receipt?</Label>
                <RadioGroup
                  value={formData.taxReceipt}
                  onValueChange={(value) => handleRadioChange("taxReceipt", value)}
                >
                  {taxReceiptOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`taxReceipt-${option}`} />
                      <Label htmlFor={`taxReceipt-${option}`} className="font-normal">
                        {option}
                      </Label>
                    </div>
                  ))}
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

