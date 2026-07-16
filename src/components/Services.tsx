"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const services = [
  {
    title: "Company Portal",
    description:
      "Complete web dashboard for managing your fleet, tickets, drivers, and finances. Access all features from any device.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    link: "https://dlm-cyan.vercel.app/company/login",
    features: [
      "Real-time dashboard",
      "Fleet management",
      "Ticket system",
      "Analytics & reports",
    ],
  },
  {
    title: "Public Tracking",
    description:
      "Shareable tracking pages for consignees to follow their shipments in real-time without logging in.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    link: "#",
    features: [
      "Real-time location",
      "Status updates",
      "ETA estimates",
      "No login required",
    ],
  },
];

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Our Platform
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Two Powerful{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Access DLM across multiple devices with our integrated platform
            designed for every role in your logistics chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 transition-all duration-300 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary rounded-2xl flex items-center justify-center text-primary group-hover:text-white transition-all duration-300 mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
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
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
              >
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
