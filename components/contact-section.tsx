"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { drBlakeData } from "@/lib/data";
import { Mail, Phone, MapPin, Clock, Heart, Linkedin, Twitter, Facebook } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  phone: z.string().min(1, { message: "Phone number is required." }).regex(/^([0-9]{3})?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/, {
    message: "Invalid phone number format.",
  }),
  email: z.string().min(1, { message: "Email is required." }).email({ message: "Invalid email address." }),
  message: z.string().min(1, { message: "Please tell us what brings you here." }),
  preferredTime: z.string().min(1, { message: "Preferred time to reach you is required." }),
  agreeToContact: z.boolean().refine(val => val === true, {
    message: "You must agree to be contacted.",
  }),
});

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      preferredTime: "",
      agreeToContact: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    alert("Thank you for your message! Dr. Blake will be in touch shortly.");
    form.reset();
  }

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ready to take the next step? Let's connect and discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50">
                <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 transition-all hover:shadow-lg hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">Phone</p>
                      <p className="text-slate-600">{drBlakeData.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 transition-all hover:shadow-lg hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">Email</p>
                      <p className="text-slate-600">{drBlakeData.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 transition-all hover:shadow-lg hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">Location</p>
                      <p className="text-slate-600">{drBlakeData.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100 transition-all hover:shadow-lg hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">Office Hours</p>
                      <p className="text-slate-600">In-person: {drBlakeData.officeHours.inPerson}</p>
                      <p className="text-slate-600">Virtual: {drBlakeData.officeHours.virtual}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Name" 
                              {...field} 
                              className="h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl transition-all"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium">Phone</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(123) 456-7890" 
                              {...field} 
                              className="h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl transition-all"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your@example.com" 
                            {...field} 
                            className="h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="preferredTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Preferred time to reach you</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., Weekday afternoons" 
                            {...field} 
                            className="h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">What brings you here?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your needs..." 
                            className="min-h-[120px] border-slate-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl transition-all resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="agreeToContact"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-slate-700">
                            I agree to be contacted by Dr. Serena Blake.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
       <footer className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Dr. Serena Blake
              </h3>
              <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                Providing exceptional care and personalized treatment to help you achieve optimal health and wellness.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center hover:from-gray-700 hover:to-gray-800 transition-all transform hover:scale-110">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center hover:from-gray-600 hover:to-gray-700 transition-all transform hover:scale-110">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:from-gray-800 hover:to-gray-900 transition-all transform hover:scale-110">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-gray-800 transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a></li>
                <li><a href="#appointments" className="text-gray-600 hover:text-gray-800 transition-colors">Appointments</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Contact</h4>
              <div className="space-y-2">
                <p className="text-gray-600 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {drBlakeData.contact.phone}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {drBlakeData.contact.email}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {drBlakeData.location}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Dr. Serena Blake. All rights reserved.
            </p>
            <a
            href="https://talaganarajesh.vercel.app/"
            target="blank"
             className="text-gray-500 text-sm mt-2 md:mt-0 flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-red-400" /> by Rajesh
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}