"use client";
import React, { useEffect, useState } from "react";
import type { CardProps } from "../components/Card";
import GridCardModal from "../components/GridCardModal";
import ShortsSlider from "../components/ShortsSlider";

export default function LongVideos() {
  const [videos, setVideos] = useState<(CardProps & { embedCode: string; categories?: string[] })[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("all");

  const categories = [
    { key: "all", label: "All" },
    { key: "university-reviews", label: "University Reviews" },
    { key: "program-guides", label: "Program Guides" },
    { key: "online-education", label: "Online Education" },
    { key: "career-advice", label: "Career Advice" },
  ];

  useEffect(() => {
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredVideos = (selected === "all"
    ? videos
    : videos.filter((v) => v.categories && v.categories.includes(selected)))
    .filter((v) => v.title && v.description && v.thumbnail && v.youtubeLink && v.channel && v.duration && v.embedCode);

  // Split videos for layout
  const videosPerRow = 4; // adjust for your grid
  const firstRows = filteredVideos.slice(0, videosPerRow * 2);
  const remainingVideos = filteredVideos.slice(videosPerRow * 2);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest College Reviews & Guides</h1>
      <p className="text-center text-gray-600 mb-6">Dive into comprehensive videos covering campus life, courses, and career opportunities to make informed decisions.</p>
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`px-6 py-2 rounded-full font-medium transition-colors focus:outline-none ${selected === cat.key ? "bg-black text-white" : "bg-gray-100 text-gray-800"}`}
            onClick={() => setSelected(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      {loading ? (
        <div className="text-center text-lg">Loading...</div>
      ) : (
        <>
          {/* First two rows of videos */}
          <GridCardModal videos={firstRows} />
          {/* Shorts slider section */}
          <ShortsSlider />
          {/* Remaining videos below shorts */}
          {remainingVideos.length > 0 && <GridCardModal videos={remainingVideos} />}
        </>
      )}
    </div>
  );
}
