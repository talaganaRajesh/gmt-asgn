'use client';

import Image from "next/image";
import { drBlakeData } from "@/lib/data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="pb-24 md:pb-32 bg-gradient-to-b from-blue-100 via-blue-200/10 to-white relative overflow-hidden"
    >
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.06),transparent_40%)]"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="bg-gradient-to-b from-blue-100/50 via-transparent to-transparent w-full h-32"></div>

      {/* Content Container */}
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
            Meet Your Therapist
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-slate-800 via-indigo-700 to-purple-600 bg-clip-text text-transparent mb-6">
            About Dr. Blake
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Doctor Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative group">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 p-2 ">
                <div className="w-full h-full rounded-full bg-white"></div>
              </div>
              <div className="absolute rotate-45 inset-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 p-2 ">
                <div className="w-full h-full rounded-full bg-white"></div>
              </div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={drBlakeData.headshot || "/placeholder.svg"}
                    alt={`Headshot of ${drBlakeData.name}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Floating credential badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg animate-bounce delay-500">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          </div>

          {/* Doctor Details */}
          <div className="lg:w-1/2 space-y-8">
            {/* Main content card */}
            <div className="relative group">
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl transform group-hover:-rotate-2 transition-transform duration-300">
                <div className="text-slate-700 text-lg leading-relaxed space-y-6">
                  <p className="text-xl font-medium text-slate-800 mb-6">
                    Welcome to a space of healing and growth
                  </p>
                  <p className="relative">
                    {drBlakeData.about}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-1000"></span>
                  </p>
                </div>
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Experience card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 transform -rotate-2 group-hover:-rotate-3 transition-transform duration-300 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Experience</h3>
                  </div>
                  <p className="text-slate-600 font-medium">{drBlakeData.experience}</p>
                </div>
              </div>

              {/* Location card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 transform rotate-2 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Location</h3>
                  </div>
                  <p className="text-slate-600 font-medium">{drBlakeData.location}</p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <a href="#contact">

            <div className="text-center mt-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <span>Ready to start your journey?</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 6s linear infinite;
        }
      `}</style>
    </section>
  );
}