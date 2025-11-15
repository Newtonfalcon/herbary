"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, Cog, Leaf } from "lucide-react";
import { navLinks } from "../utils/data";
import { motion } from "framer-motion";



export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  
  

  return (
    <header className="font-body text-amber-500 fixed top-0 left-0 w-full z-50 bg-green-950/20  backdrop-blur-xl shadow-sm">
      <nav className="text-white max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    
        
        <a href="/" className="text-2xl flex font-bold font-title bg-gradient-to-r from-yellow-900 to-slate-900 bg-clip-text text-transparent">
          <span className=" text-green-900 flex flex-row">Herbary <span><Leaf size={24}  className="animate-bounce"/></span></span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ id, label, href, Icon }) => (
            <li key={id}>
              <a
                href={href}
                className="flex items-center gap-2 text-white hover:text-yellow-700 transition"
              >
                <Icon size={18} />
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900 hover:text-yellow-700 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <motion.div className="md:hidden h-screen bg-[rgba(255,253,245,0.95)] shadow-md backdrop-blur-md" 
        animate={{ x: 0 }} initial={{ x: "-80%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <ul className="flex flex-col items-start  gap-4 py-6">
            {navLinks.map(({ id, label, href, Icon }) => (
              <li key={id} className="py-1">
                <a
                  href={href}
                  className="flex px-4 items-center gap-2 text-gray-800 hover:text-yellow-700 transition"
                  onClick={() => setOpen(false)}
                >
                  <Icon size={18} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
