"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "500+", label: "Active Companies" },
  { value: "10K+", label: "Deliveries Completed" },
  { value: "50+", label: "Cities Covered" },
  { value: "99.9%", label: "Platform Uptime" },
];

const benefits = [
  "Real-time fleet visibility across Nigeria",
  "Automated ticket assignment and routing",
  "Digital proof of delivery with photos",
  "Comprehensive driver management",
  "Instant notifications and alerts",
  "Multi-branch support with role-based access",
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                About DLM
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transforming Logistics{" "}
                <span className="gradient-text">Across Nigeria</span>
              </h2>
              <p className="text-lg text-gray-600">
                Da Logistics Manager (DLM) is a comprehensive logistics
                management platform designed to help companies streamline
                their operations, from fleet management to last-mile delivery.
              </p>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3 ${
                    isVisible ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Stats */}
          <div
            className={`space-y-8 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center ${
                    isVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">
                &quot;DLM has transformed how we manage our fleet operations.
                The real-time tracking and automated ticket system has
                increased our efficiency by 40%. Highly recommended!&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">AO</span>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Adebayo Ogunlesi
                  </p>
                  <p className="text-sm text-gray-400">
                    Operations Director, ACME Haulage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
