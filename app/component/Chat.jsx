"use client"
import React from "react";
import { MessageCircle } from "lucide-react";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/2347048556600?text=Hello, I need more enquiries about your products"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
    </a>
  );
}

export default WhatsAppFloat;