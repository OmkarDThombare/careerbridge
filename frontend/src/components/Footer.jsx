import React from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-extrabold text-[#0F172A]">
              Career<span className="text-[#4F46E5]">Bridge</span>
            </h2>
            <p className="text-sm text-[#475569] mt-1">
              © 2026 CareerBridge. All rights reserved.
            </p>
          </div>

          {/* Middle Section */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#475569]">
            <a href="#" className="hover:text-[#4F46E5] transition">Home</a>
            <a href="#" className="hover:text-[#4F46E5] transition">Jobs</a>
            <a href="#" className="hover:text-[#4F46E5] transition">Companies</a>
            <a href="#" className="hover:text-[#4F46E5] transition">Contact</a>
          </div>

          {/* Right Section */}
          <div className="flex gap-4">
            <a href="#" className="text-[#475569] hover:text-[#4F46E5] transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-[#475569] hover:text-[#4F46E5] transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-[#475569] hover:text-[#4F46E5] transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-[#475569] hover:text-[#4F46E5] transition">
              <Github size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
