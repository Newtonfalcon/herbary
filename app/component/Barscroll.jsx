"use client";
import { Megaphone, TrendingUp } from "lucide-react";

const texts = [
  "Herbary PROMO NOW LIVE",
  "NEW WELLNESS PRODUCTS AVAILABLE",
  "MASSIVE DISCOUNTS THIS WEEK",
  "SHOP PREMIUM SUPPLEMENTS TODAY",
  "FAST DELIVERY NATIONWIDE",
  "ORIGINAL  PRODUCTS ONLY",
  "HEALTH IS WEALTH INVEST WISELY",
  "TOP SELLING PACKAGE UPDATED",
  "CHECK OUR NEW PRICE LIST",
  "QUALITY YOU CAN TRUST"
];

export default function Ticker() {
  // Triple the content for seamless infinite scroll
  const repeatedTexts = [...texts, ...texts, ...texts];
  
  return (
    <div className="w-full bg-green-600/5 text-green-400 border-y-2 border-green-400 py-2 overflow-hidden relative">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .ticker-animate {
          animation: scroll 5s linear infinite;
        }
        
        .ticker-animate:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="ticker-animate flex whitespace-nowrap">
        {repeatedTexts.map((item, i) => (
          <span 
            key={i} 
            className="inline-flex items-center mx-5 font-bold text-lg flex-shrink-0"
          >
            <Megaphone className="w-5 h-5 mr-2 text-green-400" />
            {item}
            <TrendingUp className="w-5 h-5 ml-2 text-green-400" />
            <span className="mx-2">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}