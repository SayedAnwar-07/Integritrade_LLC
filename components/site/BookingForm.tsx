'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '../ui/button'
import { Loader2 } from "lucide-react"
import toast from 'react-hot-toast'
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select"

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  address: string
  city: string
  preferredDate: string
  message: string
}

export default function BookingForm() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    address: '',
    city: '',
    preferredDate: '',
    message: ''
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid'
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    if (!form.service) newErrors.service = 'Service is required'
    if (!form.address.trim()) newErrors.address = 'Address is required'
    if (!form.city.trim()) newErrors.city = 'City is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!validateForm()) return

  setLoading(true)
  setSubmitStatus('idle')

  try {
    emailjs.init(process.env.NEXT_PUBLIC_BOOKING_EMAILJS_PUBLIC_KEY!)

    const templateParams = {
      reply_to: form.email,
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      service: form.service,
      address: form.address,
      city: form.city,
      message: form.message,
      time: new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_BOOKING_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_BOOKING_EMAILJS_TEMPLATE_ID!,
      templateParams
    )

    if (result.status === 200) {
      toast.success("Message sent successfully!")
      setSubmitStatus('success')
      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        address: '',
        city: '',
        preferredDate: '',
        message: ''
      })
    } else {
      setSubmitStatus('error')
    }
  } catch (error) {
    toast.error("Failed to send message. Please try again.")
    setSubmitStatus('error')
  } finally {
    setLoading(false)
  }
}


  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className={`mt-1 w-full rounded-sm bg-white border focus:ring-blue-200 outline-none focus:ring-1 p-2 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="mt-1 w-full rounded-sm bg-white border focus:ring-blue-200 outline-none focus:ring-1 p-2 border-gray-300"
            placeholder="Your Company Inc."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className={`mt-1 w-full rounded-sm bg-white border focus:ring-blue-200 outline-none focus:ring-1 p-2 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className={`mt-1 w-full rounded-sm bg-white border focus:ring-blue-200 outline-none focus:ring-1 p-2 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="(555) 123-4567"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Address Information */}
        <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Full Address *
            </label>
            <input
            type="text"
            id="address"  
            name="address"
            required
            value={form.address}
            onChange={handleChange}
            className={`mt-1 w-full rounded-sm bg-white border focus:ring-blue-200 outline-none focus:ring-1 p-2 ${
                errors.address ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="123 Main Street, Apt 4B"
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={form.city}
            onChange={handleChange}
            className={`mt-1 w-full rounded-sm bg-white border focus:ring-blue-200 outline-none focus:ring-1 p-2 ${
              errors.city ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Los Angeles"
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>
        
      </div>

      {/* Service Selection */}
      <div>
        <Label className="text-black">Service Interest *</Label>
        <Select
          value={form.service}
          onValueChange={(value) => {
            setForm((prev) => ({ ...prev, service: value }))
            if (errors.service) {
              setErrors((prev) => ({ ...prev, service: '' }))
            }
          }}
        >
          <SelectTrigger
            className={`mt-1 w-full rounded-sm bg-white border ${
              errors.service ? 'border-red-500' : 'border-gray-300'
            } focus:ring-blue-200 outline-none focus:ring-1`}
          >
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="basic-electronic-recycling">Basic Electronic Recycling</SelectItem>
            <SelectItem value="serialized-itad-data-destruction-services">Serialized ITAD / Data Destruction Services (Includes Basic Electronic Recycling)</SelectItem>
            <SelectItem value="data-destruction">Data Destruction</SelectItem>
            <SelectItem value="other">Others</SelectItem>
          </SelectContent>
        </Select>
        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
      </div>
      {/* Additional Information */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 mt-1 rounded-sm bg-white focus:ring-blue-200 outline-none focus:ring-1 p-2"
          placeholder="Please provide any additional details about your ITAD needs, specific requirements, or questions..."
        />
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full rounded-sm btn-bg btn-hover-bg text-white font-semibold py-2 transition-colors flex items-center justify-center gap-2"
      >
        {loading && <Loader2 className="animate-spin h-5 w-5" />}
        {loading ? "Sending..." : "Get Free Quote"}
      </Button>

      
    </form>
  )
}
