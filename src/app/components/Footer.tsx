"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiSend } from 'react-icons/fi';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-teal-900 text-white">
      {/* Contact CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-white/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Find Us */}
          <div className="flex items-start gap-4">
            <FiMapPin className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-semibold mb-2">Find us</h4>
              <p className="text-base">B 15, Second floor, Sector 2, Noida 201301</p>
            </div>
          </div>

          {/* Call Us */}
          <div className="flex items-start gap-4">
            <FiPhone className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-semibold mb-2">Call us</h4>
              <p className="text-base">+91-8336889553</p>
              <p className="text-base">+91-9008525443</p>
            </div>
          </div>

          {/* Mail Us */}
          <div className="flex items-start gap-4">
            <FiMail className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-semibold mb-2">Mail us</h4>
              <p className="text-base">hi@edukyu.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="mb-6">
              <Image src="https://edukyu.com/assets/img/edukyu-logo.png" alt="Edukyu Logo" width={130} height={40} className="object-contain" />
            </div>
            <p className="text-sm leading-relaxed">
              Edukyu, your trusted partner for Online education. We are a premier aggregator platform, bringing together a diverse range of specialized online courses from renowned Indian universities.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-8 relative pb-4">
              Useful Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400"></span>
            </h3>
            <ul className="space-y-3">
              {['About us', 'Our Team', 'Partner with Us', 'Refer and Earn', 'Blogs', 'Contact Us'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-yellow-400 transition text-base flex items-center group">
                    <span className="mr-2 text-lg">›</span>
                    <span className="group-hover:text-yellow-400">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Online Courses */}
          <div>
            <h3 className="text-xl font-semibold mb-8 relative pb-4">
              Online Courses
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400"></span>
            </h3>
            <ul className="space-y-3">
              {[
                'Masters in Business Administration',
                'Bachelors in Business Administration',
                'Marketing Management (MBA)',
                'Human Resource Management (MBA)',
                'Financial Management (MBA)'
              ].map((course, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-yellow-400 transition text-base flex items-center group">
                    <span className="mr-2 text-lg">›</span>
                    <span className="group-hover:text-yellow-400">{course}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-semibold mb-8 relative pb-4">
              Locations
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400"></span>
            </h3>
            <ul className="space-y-3 text-base">
              <li>Noida</li>
              <li>Bangalore</li>
              <li>Kolkata</li>
              <li>Lucknow</li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block pb-4">
              Subscribe
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400"></span>
            </h3>
            <p className="text-base mt-6">
              Don&apos;t miss out on our latest updates! Enter your email to subscribe.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-stretch mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 px-4 py-3 text-teal-900 outline-none text-base border border-teal-700"
              />
              <button className="bg-yellow-400 hover:bg-yellow-300 px-6 border border-yellow-400 transition flex items-center justify-center">
                <FiSend className="w-5 h-5 text-teal-900 rotate-45" />
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Edukyu/"
                className="w-8 h-8 bg-slate-950 hover:bg-blue-600 flex items-center justify-center transition"
              >
                <FiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/EduKyuPvtLtd"
                className="w-8 h-8 bg-slate-950 hover:bg-sky-500 flex items-center justify-center transition"
              >
                <FiTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/edukyuofficial/"
                className="w-8 h-8 bg-slate-950 hover:bg-pink-600 flex items-center justify-center transition"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/edukyu"
                className="w-8 h-8 bg-slate-950 hover:bg-blue-700 flex items-center justify-center transition"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://in.pinterest.com/EduKyuofficial/"
                className="w-8 h-8 bg-slate-950 hover:bg-red-600 flex items-center justify-center transition text-white text-base font-bold"
              >
                P
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm mb-2">
            By continuing past this page, you agree to our{' '}
            <a href="#" className="text-yellow-400 hover:text-yellow-300">
              Terms of Service
            </a>
            ,{' '}
            <a href="#" className="text-yellow-400 hover:text-yellow-300">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="text-yellow-400 hover:text-yellow-300">
              Refund Policy
            </a>
            .
          </p>
          <p className="text-sm">
            © 2025 - <strong>Edukyu Private Limited.</strong> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}