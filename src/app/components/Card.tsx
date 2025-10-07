import React, { useState } from "react";
import EnquiryModal from "./EnquiryModal";

export interface CardProps {
  title: string;
  description: string;
  thumbnail: string;
  youtubeLink: string;
  channel: string;
  duration: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  thumbnail,
  youtubeLink,
  channel,
  duration,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Thumbnail Section */}
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {/* Duration Overlay */}
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {duration}
        </span>
      </div>
      {/* Card Body */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Yellow Tag */}

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2">
          {title}
        </h3>
        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        {/* Channel Info */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span>{channel}</span>
          <span>{duration}</span>
        </div>
        {/* Bottom Actions */}
        <div className="mt-auto flex justify-between items-center">
          {/* YouTube Link */}
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-700 transition-colors"
            title="Watch on YouTube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M23.498 6.186a2.993 2.993 0 0 0-2.108-2.12C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.39.566a2.993 2.993 0 0 0-2.108 2.12A31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .502 5.814 2.993 2.993 0 0 0 2.108 2.12C4.8 20.5 12 20.5 12 20.5s7.2 0 9.39-.566a2.993 2.993 0 0 0 2.108-2.12A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.502-5.814zM9.75 15.02V8.98l6.27 3.02-6.27 3.02z" />
            </svg>
          </a>
          {/* Enquire Now Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              openModal();
            }}
            className="bg-[#025e68] text-[#ffdb58] font-semibold text-sm px-4 py-2 rounded-lg border-2 border-transparent hover:bg-[#ffdb58] hover:text-[#025e68] hover:border-[#025e68] transition-all cursor-pointer duration-300"
          >
            Enquire Now
          </button>
        </div>
      </div>
      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Card;
