import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { drBlakeData } from "@/lib/data";

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-bl from-blue-50 via-white to-indigo-50 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.05),transparent_50%)]"></div>
      
      {/* Floating question marks */}
      <div className="absolute top-20 left-10 text-6xl text-indigo-200/30 animate-bounce">?</div>
      <div className="absolute top-40 right-20 text-4xl text-purple-200/20 animate-bounce delay-500">?</div>
      <div className="absolute bottom-20 left-20 text-5xl text-blue-200/25 animate-bounce delay-1000">?</div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
            Common Questions
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-slate-800 via-indigo-700 to-purple-600 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about therapy, sessions, and getting started
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* FAQ Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl transform rotate-1 opacity-5"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {drBlakeData.faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="group border-0 bg-gradient-to-r from-slate-50 to-indigo-50 rounded-2xl overflow-hidden hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 hover:shadow-lg"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:no-underline py-6 px-6 hover:text-indigo-600 transition-colors duration-300 group-hover:bg-white/50">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl transition-all duration-300">
                        {index + 1}
                      </div>
                      <span className="flex-1 pr-4">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 text-base leading-relaxed pb-6 px-6">
                    <div className="ml-14 relative">
                      <div className="absolute -left-6 top-0 w-0.5 h-full bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-indigo-100">
                        <p className="relative">
                          {item.answer}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000 group-hover:w-full"></span>
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif font-bold text-slate-800 mb-4">
                Still have questions?
              </h3>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                Don't hesitate to reach out. We're here to help you feel comfortable and informed about your therapeutic journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Send us a message</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-200 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-indigo-50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}