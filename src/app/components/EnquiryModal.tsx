"use client";
import React from "react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <div
        className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center text-[#025e68]">
          Enquire Now
        </h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Fill in your details and we’ll get back to you soon.
        </p>
        {/* Simple form */}
        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Handle form submission here
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#025e68]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#025e68]"
          />
          <textarea
            placeholder="Your Message"
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#025e68]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#025e68] text-[#ffdb58] font-semibold py-2 rounded-lg hover:bg-[#ffdb58] hover:text-[#025e68] transition-all duration-300 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
