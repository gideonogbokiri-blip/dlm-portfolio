"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse-slow delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 ${
              isVisible
                ? "animate-slide-in-left"
                : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Trusted by 500+ Companies
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Smart{" "}
              <span className="gradient-text">Logistics</span>{" "}
              Management Platform
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              Streamline your fleet operations, track deliveries in real-time,
              and manage tickets with our comprehensive logistics solution.
              From dispatch to delivery, we&apos;ve got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="http://192.168.0.120:3000/company/register"
                className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30 text-center"
              >
                Get Started
              </Link>
              <Link
                href="#features"
                className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-all duration-300 text-center"
              >
                Explore Features
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-500">Active Companies</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-500">Deliveries Made</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-gray-900">99.9%</p>
                <p className="text-sm text-gray-500">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div
            className={`relative ${
              isVisible
                ? "animate-slide-in-right"
                : "opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Dashboard Overview
                    </h3>
                    <p className="text-xs text-gray-500">Real-time metrics</p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary/10 rounded-xl p-4">
                    <p className="text-2xl font-bold text-primary">14</p>
                    <p className="text-xs text-gray-600">Active Tickets</p>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4">
                    <p className="text-2xl font-bold text-gray-700">62</p>
                    <p className="text-xs text-gray-600">Completed (7d)</p>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4">
                    <p className="text-2xl font-bold text-gray-700">71%</p>
                    <p className="text-xs text-gray-600">Fleet Utilization</p>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-4">
                    <p className="text-2xl font-bold text-primary">94%</p>
                    <p className="text-xs text-gray-600">On-Time Delivery</p>
                  </div>
                </div>

                {/* Mini Chart */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-end gap-1 h-20">
                    {[40, 65, 45, 80, 55, 70, 90, 75, 60, 85, 50, 95].map(
                      (height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-primary/20 rounded-t"
                          style={{ height: `${height}%` }}
                        >
                          <div
                            className="w-full bg-primary rounded-t"
                            style={{ height: "70%" }}
                          />
                        </div>
                      )
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Tickets Over Time
                  </p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-gray-700"
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
                  <div>
                    <p className="text-xs font-semibold text-gray-900">
                      Delivered
                    </p>
                    <p className="text-[10px] text-gray-500">
                      TCK-0014
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100 animate-float delay-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
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
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">
                      In Transit
                    </p>
                    <p className="text-[10px] text-gray-500">
                      12 vehicles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
