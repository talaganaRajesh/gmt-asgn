import Image from "next/image";
import { drBlakeData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-white via-white to-blue-50 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Professional Services
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-6">
            Services & Specialties
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive mental health support tailored to your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {drBlakeData.services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden border-0 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-serif text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-base leading-relaxed pt-0">
                <p className="relative">
                  {service.description}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-500"></span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Session Fees - Creative Design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-white rounded-3xl p-10 md:p-16 shadow-2xl transform -rotate-1">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-8">
                Session Investment
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Individual Sessions */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 shadow-lg">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-slate-800 mb-2">Individual</h4>
                      <p className="text-3xl font-bold text-blue-600 mb-2">
                        {drBlakeData.sessionFees.individual}
                      </p>
                      <p className="text-slate-600 text-sm">Per session</p>
                    </div>
                  </div>
                </div>

                {/* Couples Sessions */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 transform rotate-3 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-slate-800 mb-2">Couples</h4>
                      <p className="text-3xl font-bold text-purple-600 mb-2">
                        {drBlakeData.sessionFees.couples}
                      </p>
                      <p className="text-slate-600 text-sm">Per session</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                <p className="text-slate-700 text-lg font-medium mb-2">
                  ✨ Flexible Payment Options Available
                </p>
                <p className="text-slate-600">
                  Insurance accepted • Sliding scale considered • Initial consultation available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}