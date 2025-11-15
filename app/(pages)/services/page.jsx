"use client"

import React from 'react';
import { Leaf, Droplets, Sparkles, Heart, Shield, Users, CheckCircle, Phone, Mail, Clock } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Leaf,
      title: "Premium Herbal Blends",
      description: "Carefully curated herbal combinations designed to support your wellness journey with nature's finest ingredients.",
      features: [
        "Custom blend formulations",
        "Organic and natural ingredients",
        "Traditional herbal wisdom",
        "Tested for purity and potency"
      ]
    },
    {
      icon: Droplets,
      title: "Therapeutic Teas",
      description: "Artisanal tea blends crafted for relaxation, energy, and overall vitality using traditional herbal wisdom.",
      features: [
        "Morning energy teas",
        "Evening relaxation blends",
        "Specialized wellness teas",
        "Loose leaf and tea bags"
      ]
    },
    {
      icon: Sparkles,
      title: "Custom Formulations",
      description: "Personalized herbal solutions tailored to your specific health and wellness needs.",
      features: [
        "One-on-one consultations",
        "Personalized blend creation",
        "Ongoing support and adjustments",
        "Private label options"
      ]
    },
    {
      icon: Heart,
      title: "Wellness Consultations",
      description: "Expert guidance on incorporating herbal remedies into your daily routine for optimal health benefits.",
      features: [
        "Professional wellness advisors",
        "Lifestyle integration plans",
        "Follow-up support sessions",
        "Holistic health assessments"
      ]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All products are carefully tested and sourced from trusted suppliers to ensure purity and potency.",
      features: [
        "Third-party lab testing",
        "Certified organic sources",
        "Quality control standards",
        "Transparent sourcing"
      ]
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join our wellness community for tips, recipes, and ongoing support on your natural health journey.",
      features: [
        "Wellness workshops",
        "Recipe sharing platform",
        "Monthly wellness tips",
        "Exclusive member benefits"
      ]
    }
  ];

  const handleContactUs = () => {
    const whatsappNumber = '+2347048556600';
    const message = encodeURIComponent('Hello Herbary! I would like to learn more about your services and how you can help with my wellness needs.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center mb-6">
              <Leaf className="w-12 h-12 mr-3" />
              <span className="text-2xl font-bold">Herbary Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover the Power of Wellness
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50">
              Premium herbal products and personalized wellness solutions for a healthier, more vibrant you
            </p>
            <button 
              onClick={handleContactUs}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Premium Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive wellness solutions designed to support your health journey at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-500 group"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-green-600">Herbary?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering excellence in every aspect of your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">100% natural and organic ingredients sourced from trusted suppliers</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Care</h3>
              <p className="text-gray-600">Professional wellness advisors dedicated to your health goals</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Join thousands of satisfied customers on their wellness journey</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Service</h3>
              <p className="text-gray-600">Quick response times and efficient delivery across Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Let our experts guide you to the perfect herbal solutions for your health needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleContactUs}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Contact Us on WhatsApp
            </button>
            <button 
              onClick={() => window.location.href = '#products'}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Leaf className="w-5 h-5" />
              View Our Products
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-600">We're here to answer your questions and support your wellness journey</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <Phone className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">WhatsApp</h4>
                <p className="text-gray-600">+234-7048556600</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <Mail className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-600">info@herbary.com</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Hours</h4>
                <p className="text-gray-600">Mon - Sat: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}