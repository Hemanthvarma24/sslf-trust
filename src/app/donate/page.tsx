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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  fullName: string;
  age: string;
  address: string;
  email: string;
  phone: string;
  amount: string;
  paymentMethod: string;
  message: string;
}

export default function DonationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    age: "",
    address: "",
    email: "",
    phone: "",
    amount: "",
    paymentMethod: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }));
  };

  const validateForm = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.amount
    ) {
      alert("Please fill all required fields.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Invalid email format.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Format the message for WhatsApp
      const whatsappMessage = `Donation Inquiry:\n\n*Full Name:* ${
        formData.fullName
      }\n*Age:* ${formData.age || "N/A"}\n*Address:* ${
        formData.address || "N/A"
      }\n*Email:* ${formData.email}\n*Phone:* ${
        formData.phone
      }\n*Donation Amount:* ₹${formData.amount}\n*Payment Method:* ${
        formData.paymentMethod || "Not specified"
      }\n*Message:* ${formData.message || "N/A"}`;

      // Create the WhatsApp URL with the message
      const whatsappURL = `https://wa.me/+919094099940?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      // Open WhatsApp in a new tab
      window.open(whatsappURL, "_blank");

      // Show success alert
      alert(
        `Thank you, ${formData.fullName}, for your generous donation of ₹${formData.amount}.`
      );

      // Reset the form
      setFormData({
        fullName: "",
        age: "",
        address: "",
        email: "",
        phone: "",
        amount: "",
        paymentMethod: "",
        message: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center mt-8 p-6 py-16">
      <Card className="w-full max-w-2xl shadow-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            SSLF Charity Trust Donation
          </CardTitle>
          <CardDescription className="text-center">
            Your contribution can make a real difference in the lives of those
            in need.
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
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Donation Amount (₹)</Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="paymentMethod">Payment Method</Label>
                  <Select
                    value={formData.paymentMethod}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger id="paymentMethod">
                      <SelectValue placeholder="Select Payment Method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UPI">UPI</SelectItem>
                      <SelectItem value="Bank Transfer">
                        Bank Transfer
                      </SelectItem>
                      <SelectItem value="Credit/Debit Card">
                        Credit/Debit Card
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Comments/Message (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#0b0a45] hover:bg-gray-700"
            >
              Donate Now
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
