"use client"

import React from 'react';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, ChevronRight, ChartBar, MessageCircleHeart } from 'lucide-react';

// GLOBAL FOOTER VARIABLES - UPDATE THESE WITH YOUR REAL DATA
const FOOTER_INFO = {
  companyName: 'Herbary',
  tagline: 'Discover the Power of Wellness',
  whatsapp: '+2347048556600',
  email: 'info@herbary.com',
  address: 'Lucklife office No. 3a, 3rd floor opposite St. Thomas Catholic church, Airport Road, Kano state, Nigeria',
  facebook: 'https://www.facebook.com/share/1AFyxAiZ48/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/__herbary?igsh=MTZzeTQwdGRteWl5bw%3D%3D&utm_source=qr',
  foundedYear: '2018'
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const productCategories = [
    { name: 'Herbal Blends', href: '#blends' },
    { name: 'Therapeutic Teas', href: '#teas' },
    { name: 'Wellness Formulas', href: '#formulas' },
    { name: 'Product Bundles', href: '#bundles' }
  ];

  const socialMedia = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/${FOOTER_INFO.whatsapp}`,
      color: 'hover:text-green-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: FOOTER_INFO.facebook,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: FOOTER_INFO.instagram,
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold">{FOOTER_INFO.companyName}</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {FOOTER_INFO.tagline}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">{FOOTER_INFO.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a 
                  href={`https://wa.me/${FOOTER_INFO.whatsapp}`}
                  className="text-gray-300 text-sm hover:text-green-400 transition-colors"
                >
                  {FOOTER_INFO.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircleHeart className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a 
                  href={`#`}
                  className="text-gray-300 text-sm hover:text-green-400 transition-colors"
                >
                  {FOOTER_INFO.whatsapp}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-green-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-green-400">Our Products</h4>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-green-400">Connect With Us</h4>
            <p className="text-gray-300 mb-6 text-sm">
              Follow us on social media for wellness tips and updates
            </p>
            <div className="flex gap-4">
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-800 p-3 rounded-full ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {FOOTER_INFO.companyName}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}