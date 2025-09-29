"use client";

import React, { useEffect, useRef, useState } from "react";
import { certificationsData } from "./certificationsData"; 
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const TimeLine: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress for the line
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - containerTop) / (containerHeight + windowHeight)
        )
      );
      setLineHeight(scrollProgress * containerHeight);

      // Check which item is currently in view
      itemRefs.current.forEach((item, index) => {
        if (item) {
          const itemTop = item.getBoundingClientRect().top;
          const itemHeight = item.getBoundingClientRect().height;

          // Item is considered active when it's in the central part of the viewport
          if (itemTop <= windowHeight * 0.6 && itemTop + itemHeight >= windowHeight * 0.4) {
            setActiveIndex(index);
          }
        }
      });
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center container mx-auto py-12">
      {/* Animated Timeline Line */}
      <div className="absolute hidden md:block left-[20%] lg:left-1/4 top-0 bottom-0 w-0.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="w-0.5 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full transition-all duration-300 ease-out"
          style={{ height: `${lineHeight}px` }}
        />
      </div>

      {/* Timeline Nodes */}
      <div className="absolute hidden md:block left-[20%] lg:left-1/4 top-0 bottom-0">
        {certificationsData.map((_, index) => (
          <div
            key={index}
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
            style={{
              top: `${(index / (certificationsData.length - 1)) * 100}%`,
            }}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                index <= activeIndex
                  ? "bg-blue-500 border-blue-500 scale-125 shadow-lg"
                  : "bg-white border-gray-300"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Certifications */}
      {certificationsData.map((cert, index) => (
        <div
          key={index}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          className={`flex flex-col md:flex-row md:items-center md:gap-16 lg:gap-24 xl:gap-32 mb-16 relative w-full transition-all duration-500 ${
            index === activeIndex
              ? "opacity-100 transform translate-x-0"
              : index < activeIndex
              ? "opacity-70 transform translate-x-2"
              : "opacity-40 transform -translate-x-2"
          }`}
        >
          {/* Left side - Certification Title */}
          <div className="w-full md:w-1/4 flex md:justify-end pr-0 md:pr-6 relative z-10 mb-6 md:mb-0">
            <div className="flex flex-col items-center md:items-end">
              <div
                className={`bg-white text-black border text-sm font-semibold px-4 py-3 rounded-lg shadow-lg w-24 text-center transition-all duration-300 ${
                  index === activeIndex
                    ? "border-blue-500 shadow-blue-200 scale-105"
                    : "border-gray-200"
                }`}
              >
                {cert.header.split(" ").map((line, idx) => (
                  <span key={idx} className="block leading-tight">
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Center - Content */}
          <div
            className={`bg-white px-6 py-4 rounded-lg md:p-6 w-full md:w-3/4 lg:w-2/4 md:pl-8 flex items-center border shadow-sm transition-all duration-300 ${
              index === activeIndex
                ? "border-blue-200 shadow-lg shadow-blue-100"
                : "border-gray-100"
            }`}
          >
            <div className="grid grid-cols-1 gap-3">
              <p className="text-lg md:text-xl font-bold text-gray-800">{cert.title}</p>
              <p className="text-gray-700 text-base leading-relaxed">{cert.description}</p>
              
              {/* Display Key Points */}
              <ul className="list-disc pl-5 mb-4 text-gray-600 text-sm">
                {cert.keyPoints.map((point, index) => (
                  <li key={index} className="mb-2">
                    <strong>{point.short_header}:</strong> {point.short_info}
                  </li>
                ))}
              </ul>

              <div>
                <p className="text-base font-bold text-gray-800 mb-4">{cert.company}</p>
                <p className="flex items-center gap-2 text-sm font-semibold text-blue-700 mb-2">
                  <ShieldCheck className="h-4 w-4" />
                  Valid From: {cert.validFrom}
                </p>
                <p className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                  <ShieldCheck className="h-4 w-4" />
                  Valid Until: {cert.validUntil}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mt-4">{cert.company_description}</p>
              </div>
            </div>
          </div>

          {/* Right side - Image with Dialog */}
          <div
            className={`mt-6 mx-2 md:mt-0 flex justify-center md:justify-start transition-all duration-300 ${
              index === activeIndex ? "scale-105" : "scale-95"
            }`}
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer group">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    className="rounded-lg border shadow-md w-full sm:w-[300px] md:w-[350px] lg:w-[400px] transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden">
                <div className="relative">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold">{cert.title}</h3>
                    <p className="text-white/90">{cert.company}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
