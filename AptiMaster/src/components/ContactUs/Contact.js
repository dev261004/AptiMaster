"use client";

import { useState } from "react";

export const Contact=() =>{
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 sec
  };

  return (
    <div className="container mx-auto px-6 py-10 min-h-screen bg-white">
      <h2 className="text-3xl font-bold text-black mb-6 text-center">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-black mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg w-full">
              Submit
            </button>
            {submitted && <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>}
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-black mb-4">Our Contact Details</h3>
          <p className="text-gray-700 mb-2"><strong>📍 Address:</strong> 123 AptiMaster Street, City, Country</p>
          <p className="text-gray-700 mb-2"><strong>📞 Phone:</strong> +123 456 7890</p>
          <p className="text-gray-700"><strong>✉️ Email:</strong> contact@aptimaster.com</p>
        </div>
      </div>
    </div>
  );
}
