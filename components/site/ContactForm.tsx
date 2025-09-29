'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useAppDispatch } from '@/store'
import { submitStart, submitSuccess } from '@/store/contactSlice'
import { Loader2 } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { z } from "zod"
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser' 

export default function ContactForm() {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const contactSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    phone: z.string().min(1, "Phone number is required"),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(1, "Message is required"),
  })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const parsed = contactSchema.safeParse(form)
    if (!parsed.success) {
      const fieldErrors: { [key: string]: string } = {}
      parsed.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message
      })
      setErrors(fieldErrors)
      return
    }

    setErrors({})
    setLoading(true)
    dispatch(submitStart())

    try {
      // Send Email using EmailJS
     const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        full_name: `${form.firstName} ${form.lastName}`, 
        email: form.email,
        company: form.company,
        phone: form.phone,
        service: form.service,
        message: form.message,
        time: new Date().toLocaleString(),
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )



      if (result.status === 200) {
        dispatch(submitSuccess(form))
        toast.success("Message sent successfully!")
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        })
      } else {
        toast.error("Failed to send message. Please try again.")
      }
    } catch (err) {
      console.error(err)
      toast.error("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-50">
      <form onSubmit={onSubmit} className="space-y-5">
        {/* Name fields */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label className="text-black">First Name *</Label>
            <Input
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className={`mt-1 rounded-sm bg-white border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} focus:ring-blue-200 outline-none focus:ring-1`}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <Label className="text-black">Last Name *</Label>
            <Input
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className={`mt-1 rounded-sm bg-white border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} focus:ring-blue-200 outline-none focus:ring-1`}
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <Label className="text-black">Email Address *</Label>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`mt-1 rounded-sm bg-white border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-blue-200 outline-none focus:ring-1`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Company + Phone */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label className="text-black">Company</Label>
            <Input
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="mt-1 rounded-sm bg-white border border-gray-200 focus:ring-blue-200 outline-none focus:ring-1"
            />
          </div>
          <div>
            <Label className="text-black">Phone Number *</Label>
            <Input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={`mt-1 rounded-sm bg-white border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:ring-blue-200 outline-none focus:ring-1`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Service */}
        <div>
          <Label className="text-black">Service Interest *</Label>
          <Select
            value={form.service}
            onValueChange={(value) => setForm({ ...form, service: value })}
          >
            <SelectTrigger className={`mt-1 rounded-sm bg-white border ${errors.service ? 'border-red-500' : 'border-gray-200'} focus:ring-blue-200 outline-none focus:ring-1`}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="it-asset-disposition">IT Asset Disposition</SelectItem>
              <SelectItem value="electronic-recycling">Electronic Recycling</SelectItem>
              <SelectItem value="data-destruction">Data Destruction</SelectItem>
              <SelectItem value="asset-recovery">Asset Recovery</SelectItem>
              <SelectItem value="consultation">Consultation</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
        </div>

        {/* Message */}
        <div>
          <Label className="text-black">Message *</Label>
          <Textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`mt-1 rounded-sm bg-white border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:ring-blue-200 outline-none focus:ring-1`}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          className="w-full rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 transition-colors flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading && <Loader2 className="animate-spin h-5 w-5" />}
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  )
}
