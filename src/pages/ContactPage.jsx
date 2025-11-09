import React, { useState } from 'react'
import decorativePattern from '../assets/contact/decorativePattern.png'
import { toast, ToastContainer } from 'react-toastify';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message || formData.phone.length < 10) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // 2. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Replace with your actual API endpoint
      const url = "https://vernanbackend.ezlab.in/api/contact-us/"
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen w-full relative flex flex-col md:flex-row justify-center items-center p-4 sm:p-6 lg:p-12 pt-20 lg:pt-12">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
      {/* Decorative Pattern - Bottom Left */}
      <div
        className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80  pointer-events-none"
        style={{
          backgroundImage: `url(${decorativePattern})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',

          transform: 'rotate(180deg)'

        }}
      />

      {/* Decorative Pattern - Top Right (Rotated) */}
      <div
        className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 pointer-events-none z-70"
        style={{
          backgroundImage: `url(${decorativePattern})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom left'

        }}
      />

      {/* Left Column - Text Content */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start gap-6 p-4 sm:p-6 lg:pr-12 z-10 mb-8 lg:mb-0">
        <div className="max-w-xl w-full">
          <p className="text-sm sm:text-base lg:text-lg mb-4" style={{ fontFamily: "Instrument Sans" }}>
            Whether you have an idea, a question, or simply want to explore how V can work together, V're just a message away.
          </p>
          <p className="text-sm sm:text-base lg:text-lg mb-4" style={{ fontFamily: "Instrument Sans" }}>
            Let's catch up over coffee.
          </p>
          <p className="text-sm sm:text-base lg:text-lg font-medium" style={{ fontFamily: "Instrument Sans" }}>
            Great stories always begin with a good conversation
          </p>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-6 p-4 sm:p-6 lg:pl-12 z-10">
        <div className="w-full max-w-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-4 text-center" style={{ fontFamily: "Island Moments" }}>
            Join the Story
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 text-center" style={{ fontFamily: "Instrument Sans" }}>
            Ready to bring your vision to life? Let's talk
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name*"
                required
                className="w-full px-4 py-3 bg-white/80 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15D2B] transition-all"
                style={{ fontFamily: "Instrument Sans" }}
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email*"
                required
                className="w-full px-4 py-3 bg-white/80 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15D2B] transition-all"
                style={{ fontFamily: "Instrument Sans" }}
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 bg-white/80 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15D2B] transition-all"
                style={{ fontFamily: "Instrument Sans" }}
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message*"
                required
                rows="6"
                className="w-full px-4 py-3 bg-white/80 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15D2B] transition-all resize-none"
                style={{ fontFamily: "Instrument Sans" }}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#F15D2B] text-white px-8 sm:px-12 py-2.5 sm:py-3 rounded-full hover:bg-[#D54D1F] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-base sm:text-lg"
                style={{ fontFamily: "Instrument Sans" }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <p className="text-green-600 text-center" style={{ fontFamily: "Instrument Sans" }}>
                Form Submitted
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="text-red-600 text-center" style={{ fontFamily: "Instrument Sans" }}>
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          <div className="mt-6 sm:mt-8 flex justify-center items-center gap-3 sm:gap-6 text-[#F15D2B] flex-wrap">
            <a
              href="mailto:vernita@varnanfilms.co.in"
              className="hover:underline text-xs sm:text-sm lg:text-base break-all"
              style={{ fontFamily: "Instrument Sans" }}
            >
              vernita@varnanfilms.co.in
            </a>
            <span className="text-gray-400 hidden sm:inline">|</span>
            <a
              href="tel:+919873684567"
              className="hover:underline text-xs sm:text-sm lg:text-base"
              style={{ fontFamily: "Instrument Sans" }}
            >
              +91 98736 84567
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage