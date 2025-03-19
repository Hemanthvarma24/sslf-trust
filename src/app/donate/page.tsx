"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import toast from "react-hot-toast";

export default function DonationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    address: "",
    email: "",
    phone: "",
    amount: "",
    paymentMethod: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Donation Inquiry:\n\n*Full Name:* ${formData.fullName}\n*Age:* ${formData.age}\n*Address:* ${formData.address}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Donation Amount:* ₹${formData.amount}\n*Payment Method:* ${formData.paymentMethod}\n*Message:* ${formData.message || "N/A"}`;

    const whatsappURL = `https://wa.me/+919094099940?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");

    // Show toast notification
    toast.success(`Thank you, ${formData.fullName}, for your generous donation of ₹${formData.amount}.`);

    // Optionally reset the form
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
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-22 pb-14">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">SSLF Charity Trust Donation</h2>
      <p className="text-gray-600 text-center mb-6">
        Your contribution can make a real difference in the lives of those in need.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <Input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <Textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} rows={3} required />
        <Input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <Input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <Input type="number" name="amount" placeholder="Donation Amount (₹)" value={formData.amount} onChange={handleChange} required />

        <Select onValueChange={handleSelectChange} value={formData.paymentMethod} required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Payment Method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="UPI">UPI</SelectItem>
            <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
            <SelectItem value="Credit/Debit Card">Credit/Debit Card</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>

        <Textarea name="message" placeholder="Comments/Message (Optional)" value={formData.message} onChange={handleChange} rows={3} />

        <Button type="submit" className="w-full bg-[#0b0a45] hover:bg-gray-400 text-white p-3 rounded-lg text-lg font-semibold transition">
          Donate Now
        </Button>
      </form>
    </div>
  );
}
