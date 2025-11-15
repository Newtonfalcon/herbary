"use client"

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, MessageCircle, Leaf, CheckCircle, FacebookIcon, InstagramIcon } from 'lucide-react';

// GLOBAL CONTACT VARIABLES - UPDATE THESE WITH YOUR REAL DATA
const CONTACT_INFO = {
  whatsapp: '+2347048556600',
  phone: '+2347048556600',
  email: '',
  address: 'Lucklife office No. 3a, 3rd floor opposite St. Thomas Catholic church, Airport Road, Kano state, Nigeria',
  facebook: 'https://www.facebook.com/share/1AFyxAiZ48/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/__herbary?igsh=MTZzeTQwdGRteWl5bw%3D%3D&utm_source=qr',
  workingHours: 'Monday - Saturday: 9:00 AM - 6:00 PM',
  workingDays: 'Sunday: Closed'
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*New Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:*\n${formData.message}`
    );
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`, '_blank');
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/${CONTACT_INFO.whatsapp}`,
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Chat with us instantly'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: CONTACT_INFO.facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Follow our updates'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: CONTACT_INFO.instagram,
      color: 'bg-pink-600 hover:bg-pink-700',
      description: 'See our latest posts'
    },
   
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'WhatsApp',
      details: CONTACT_INFO.whatsapp,
      action: () => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank'),
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: FacebookIcon,
      title: 'Facebook',
      details: "visit our Facebook page",
      action: () => window.location.href = `https://www.facebook.com/share/1AFyxAiZ48/?mibextid=wwXIfr`,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: InstagramIcon,
      title: 'Instagram',
      details: "visit our instagram profile",
      action: () => window.location.href = CONTACT_INFO.instagram,
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600'
    },

    {
      icon: MapPin,
      title: 'Location',
      details: CONTACT_INFO.address,
      action: null,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: CONTACT_INFO.workingHours,
      subDetails: CONTACT_INFO.workingDays,
      action: null,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center mb-6">
              <Leaf className="w-12 h-12 mr-3" />
              <span className="text-2xl font-bold">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl md:text-2xl text-green-50">
              Have questions about our products or services? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  onClick={method.action}
                  className={`${method.action ? 'cursor-pointer' : ''} bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-500 group`}
                >
                  <div className={`${method.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${method.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {method.details}
                  </p>
                  {method.subDetails && (
                    <p className="text-gray-500 text-sm mt-1">
                      {method.subDetails}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Send Us a <span className="text-green-600">Message</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible
              </p>

              {isSubmitted && (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p className="text-green-800 font-medium">
                    Message sent successfully! We'll contact you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message via WhatsApp
                </button>
              </form>
            </div>

            {/* Social Media & Info */}
            <div className="space-y-8">
              {/* Social Media Links */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Connect With <span className="text-green-600">Us</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Follow us on social media for wellness tips, product updates, and special offers
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color} text-white rounded-xl p-6 transition-all duration-300 shadow-md hover:shadow-xl group`}
                      >
                        <Icon className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold text-lg mb-1">{social.name}</h3>
                        <p className="text-sm opacity-90">{social.description}</p>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-green-50 mb-6">
                  Our team is ready to help you with any questions or concerns you may have.
                </p>
                <button
                  onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank')}
                  className="w-full bg-white text-green-600 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp Now
                </button>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Office <span className="text-green-600">Hours</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <p className="text-gray-700">{CONTACT_INFO.workingHours}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <p className="text-gray-700">{CONTACT_INFO.workingDays}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Leaf className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't hesitate to reach out. We're here to support your wellness journey every step of the way!
          </p>
          <button
            onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank')}
            className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us on WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}