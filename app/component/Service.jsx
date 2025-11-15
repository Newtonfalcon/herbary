"use client"
import React from 'react';
import { Leaf, Droplets, Sparkles, Heart, Shield, Users } from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      icon: Leaf,
      title: "Premium Herbal Blends",
      description: "Carefully curated herbal combinations designed to support your wellness journey with nature's finest ingredients."
    },
    {
      icon: Droplets,
      title: "Therapeutic Teas",
      description: "Artisanal tea blends crafted for relaxation, energy, and overall vitality using traditional herbal wisdom."
    },
    {
      icon: Sparkles,
      title: "Custom Formulations",
      description: "Personalized herbal solutions tailored to your specific health and wellness needs."
    },
    {
      icon: Heart,
      title: "Wellness Consultations",
      description: "Expert guidance on incorporating herbal remedies into your daily routine for optimal health benefits."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All products are carefully tested and sourced from trusted suppliers to ensure purity and potency."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join our wellness community for tips, recipes, and ongoing support on your natural health journey."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-100">
      <div className="container mx-auto px-4 max-w-7xl ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Premium Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the power of wellness with Herbary's expertly crafted herbal blends and comprehensive wellness solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500 group"
              >
                <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div 
         className="mt-16 text-center ">
          <Link href="/products" className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Explore Our Products
          </Link>
        </div>
      </div>
    </section>
  );
}