"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, DollarSign, Calendar } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  donationAmount: string;
  customAmount: string;
  donationFrequency: string;
  purpose: string;
  comments: string;
}

export default function DonationForm() {
  const [customAmountVisible, setCustomAmountVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    donationAmount: "",
    customAmount: "",
    donationFrequency: "oneTime",
    purpose: "",
    comments: "",
  })

  const handleRadioChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (name === "donationAmount") setCustomAmountVisible(value === "custom")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (!formData.fullName || !formData.email || !formData.donationAmount) {
        toast.error("Please fill in all required fields.")
        return
      }

      if (formData.donationAmount === "custom" && (!formData.customAmount || Number(formData.customAmount) <= 0)) {
        toast.error("Please enter a valid custom donation amount.")
        return
      }

      toast.success("Thank you for your donation! Redirecting to payment page...")
    } catch (error) {
      toast.error("There was a problem processing your donation. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto py-4 sm:py-8 px-4">
      <Card className="border-0 shadow-2xl overflow-hidden">
        <CardHeader className="bg-[#0b0a46] text-white rounded-t-lg p-6 sm:p-8">
          <div className="flex items-center justify-center mb-3">
            <Heart className="h-8 w-8 mr-2 animate-pulse" />
          </div>
          <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Make a Donation</CardTitle>
          <CardDescription className="text-blue-100 text-center text-sm sm:text-base">
            Your generosity makes a difference
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 pt-6 px-4 sm:px-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Processing..." : "Complete Donation"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
