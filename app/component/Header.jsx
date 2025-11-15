"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { carouselData } from "../utils/data";
import {motion} from "framer-motion"

function Header() {
  const themeColors = [
    { bg: "bg-green-500 hover:bg-yellow-700", txt: "text-white" },
    { bg: "bg-green-700 hover:bg-slate-900", txt: "text-white" },
    { bg: "bg-green-800 hover:bg-blue-700", txt: "text-white" },
    { bg: "bg-green-950 hover:bg-emerald-700", txt: "text-white" },
  ];

  const [index, setIndex] = useState(0);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  // Smooth & professional animation
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
    });
    tl.fromTo(
      imgRef.current,
      { x: 100, scale: 0.9, autoAlpha: 0 },
      { x: 0, scale: 1, autoAlpha: 1 }
    ).fromTo(
      textRef.current,
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1 },
      "-=0.6"
    );
    return () => tl.kill();
  }, [index]);

  // Auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="overflow-x-hidden font-body flex flex-row justify-between bg-[url('/.png')] bg-green-100/50 inset-0 bg-center bg-cover h-90 w-full md:h-[75vh] md:px-16 md:py-10 lg:h-[80vh] lg:max-w-[1400px] lg:mx-auto lg:px-20 lg:py-16 xl:px-24 xl:py-20 transition-all duration-700">
    
      <div
        ref={textRef}
        className="w-52 h-full px-4 gap-y-2 flex flex-col justify-between py-10 
                   md:w-1/2 md:gap-y-4 md:px-10 md:py-20 md:justify-center
                   lg:gap-y-6 lg:px-12 lg:py-24 xl:gap-y-8 xl:px-16"
      >
        <h2 className="text-xl md:text-4xl text-green-900 w-full gap-2 font-semibold leading-snug md:leading-tight lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight">
          {carouselData[index].title}
        </h2>

        <h2 className="text-xl md:text-4xl text-slate-700 gap-2 font-light leading-snug md:leading-tight lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight text-[14px]">
          {carouselData[index].description}
        </h2>
        <p className="font-extralight text-sm md:text-base text-gray-800 md:max-w-lg md:leading-relaxed lg:text-lg lg:max-w-xl lg:leading-loose xl:text-xl xl:max-w-2xl">
          {carouselData[index].text}
        </p>
        <button
          className={`p-2 rounded-2xl mt-4 text-center align-middle text-lg px-8 
                      shadow-md transform transition-all duration-500 ease-in-out 
                      hover:scale-105 hover:shadow-xl md:px-10 lg:px-12 lg:py-3 lg:text-xl lg:rounded-3xl xl:px-14 xl:py-4 ${themeColors[index].bg} ${themeColors[index].txt}`}
        >
          <a
  href="https://wa.me/2347048556600?text=Hello%20Herbary,%20I%27m%20interested%20in%20purchasing%20your%20product%20."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block "
>
  Buy
</a>

        </button>
      </div>

      {/* Image Section */}
      <div className="h-full flex flex-col items-center justify-center align-middle text-center md:w-1/2 md:items-end md:justify-center md:pr-8 lg:pr-12 xl:pr-16">
       
       
        <img
          ref={imgRef}
          src={carouselData[index].image}
          alt={carouselData[index].title}
          className="w-80 h-auto -mt-10 md:w-[250px] md:mt-0 md:drop-shadow-xl md:rounded-lg md:transition-transform md:duration-700 md:ease-in-out md:hover:scale-105 lg:w-[400px] lg:drop-shadow-2xl lg:rounded-2xl xl:w-[450px]"
        />

            {carouselData[index].img && (
          <motion.img
          animate={{ x: [100, 0], scale: [0.9, 1], opacity: [0, 1] }}
          
            src={carouselData[index].img}
            alt={carouselData[index].title}
            className="w-80 h-auto -mt-10 md:w-[250px] md:mt-0 md:drop-shadow-xl md:rounded-lg md:transition-transform md:duration-700 md:ease-in-out md:hover:scale-105 lg:w-[400px] lg:drop-shadow-2xl lg:rounded-2xl xl:w-[450px]"
          />
        )}

      </div>
      
    </div>
  );
}

export default Header;