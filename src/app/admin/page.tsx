"use client";
import React, { useState, useEffect } from "react";

// --- Interfaces (Kept as is) ---
interface Video {
  id: number;
  title: string;
  description: string;
  channel: string;
  baseViews: number;
  postDate: string;
  duration: string;
  thumbnail: string;
  embedCode: string;
  categories: string[];
  youtubeLink: string;
  instagramLink: string;
}

interface ShortVideo {
  id: string;
  thumbnail: string;
  embedCode: string;
}

// --- InputField Component (Updated Text Color) ---
interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}

const InputField = ({
  label,
  id,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: InputFieldProps) => (
  <div className="space-y-1">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      // ===> KEY CHANGE HERE: Added text-gray-900 <===
      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out placeholder-gray-500 text-gray-900"
    />
  </div>
);

// --- AdminPage Component ---
const AdminPage = () => {
  const [videoType, setVideoType] = useState("long");
  const [videos, setVideos] = useState<Video[]>([]);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [newVideo, setNewVideo] = useState({
    title: "",
    description: "",
    channel: "College Manch",
    baseViews: 0,
    postDate: "",
    duration: "",
    thumbnail: "",
    embedCode: "",
    categories: "",
    youtubeLink: "",
    instagramLink: "",
  });

  const [newShortVideo, setNewShortVideo] = useState<ShortVideo>({
    id: "",
    thumbnail: "",
    embedCode: "",
  });

  // --- Fetch Videos Effect ---
  useEffect(() => {
    const fetchVideos = async () => {
      if (videoType !== "long") {
        setVideos([]);
        return;
      }
      
      setLoadingVideos(true);
      try {
        // NOTE: This API endpoint must exist and return an array of Video objects.
        const res = await fetch("/api/videos");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setVideos(data);
      } catch (err) {
        console.error("Error fetching videos:", err);
      } finally {
        setLoadingVideos(false);
      }
    };

    fetchVideos();
  }, [videoType]);

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVideoType(e.target.value);
  };

  // Helper to ensure baseViews is treated as a number
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewVideo((prev) => ({ 
      ...prev, 
      [name]: name === 'baseViews' ? (parseInt(value) || 0) : value 
    }));
  };

  const handleShortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewShortVideo((prev) => ({ ...prev, [name]: value }));
  };

  // Helper function to reset the long video form
  const resetLongForm = () => {
    setNewVideo({
      title: "",
      description: "",
      channel: "College Manch",
      baseViews: 0,
      postDate: "",
      duration: "",
      thumbnail: "",
      embedCode: "",
      categories: "",
      youtubeLink: "",
      instagramLink: "",
    });
  };

  // Helper function to reset the short video form
  const resetShortForm = () => {
    setNewShortVideo({
      id: "",
      thumbnail: "",
      embedCode: "",
    });
  };

  // --------------------------------------------
  // Long Video Submit
  // --------------------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...newVideo,
      // Convert date string to ISO format for backend
      postDate: newVideo.postDate ? new Date(newVideo.postDate).toISOString() : new Date().toISOString(),
      // Split categories string into an array, clean it up
      categories: newVideo.categories
        .split(",")
        .map((cat) => cat.trim())
        .filter((c) => c.length > 0),
    };

    try {
      const res = await fetch("/api/longvideo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save long video");

      alert("Long Video Added Successfully!");
      resetLongForm();

      // refresh list
      const listRes = await fetch("/api/videos");
      setVideos(await listRes.json());
    } catch (error) {
      console.error(error);
      alert("Error saving long video");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --------------------------------------------
  // Short Video Submit
  // --------------------------------------------
  const handleShortSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/shortvideo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newShortVideo),
      });

      if (!res.ok) throw new Error("Failed to save short video");

      alert("Short Video Added Successfully!");
      resetShortForm();
    } catch (error) {
      console.error(error);
      alert("Error saving short video");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with improved styling */}
      <header className="bg-gray-800 shadow-md p-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            🎥 Content Admin Panel
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Add New Content Card */}
        <section className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl mb-10 border-t-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
            🚀 Add New Content
          </h2>

          {/* Type Selector */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg border">
            <label className="block text-sm font-semibold text-gray-700">
              Select Content Type:
              <select
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out bg-white text-gray-900" // Added text-gray-900
                value={videoType}
                onChange={handleTypeChange}
              >
                <option value="long">Long Video</option>
                <option value="short">Short Video (Reel/YouTube Short)</option>
              </select>
            </label>
          </div>

          {/* ------------------------------------------------------- */}
          {/* LONG VIDEO FORM */}
          {/* ------------------------------------------------------- */}
          {videoType === "long" && (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
            >
              {/* Form Fields */}
              <InputField
                label="Title *"
                id="title"
                name="title"
                value={newVideo.title}
                onChange={handleChange}
                required
              />

              <InputField
                label="Channel"
                id="channel"
                name="channel"
                value={newVideo.channel}
                onChange={handleChange}
                required
              />

              <div className="md:col-span-2 space-y-1">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={newVideo.description}
                  onChange={handleChange}
                  // ===> KEY CHANGE HERE: Added text-gray-900 <===
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-900"
                  rows={4}
                ></textarea>
              </div>

              <InputField
                label="Base Views"
                type="number"
                id="baseViews"
                name="baseViews"
                value={newVideo.baseViews}
                onChange={handleChange}
              />
  
              <InputField
                label="Post Date"
                type="date"
                id="postDate"
                name="postDate"
                value={newVideo.postDate}
                onChange={handleChange}
              />

              <InputField
                label="Duration (e.g., 10:30)"
                id="duration"
                name="duration"
                value={newVideo.duration}
                onChange={handleChange}
              />

              <InputField
                label="Thumbnail URL *"
                id="thumbnail"
                name="thumbnail"
                value={newVideo.thumbnail}
                onChange={handleChange}
                required
              />

              <InputField
                label="Embed Code *"
                id="embedCode"
                name="embedCode"
                value={newVideo.embedCode}
                onChange={handleChange}
                required
              />

              <InputField
                label="YouTube Link"
                id="youtubeLink"
                name="youtubeLink"
                value={newVideo.youtubeLink}
                onChange={handleChange}
              />

              <InputField
                label="Instagram Link"
                id="instagramLink"
                name="instagramLink"
                value={newVideo.instagramLink}
                onChange={handleChange}
              />

              <div className="md:col-span-2 space-y-1">
                <label htmlFor="categories" className="block text-sm font-medium text-gray-700">Categories (comma separated)</label>
                <input
                  id="categories"
                  type="text"
                  name="categories"
                  value={newVideo.categories}
                  onChange={handleChange}
                  
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150  placeholder-gray-500 text-gray-900"
                  placeholder="e.g., career, technology, interview"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg disabled:bg-blue-400 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? "Adding Video..." : "➕ Add Long Video"}
              </button>
            </form>
          )}

          {/* ------------------------------------------------------- */}
          {/* SHORT VIDEO FORM */}
          {/* ------------------------------------------------------- */}
          {videoType === "short" && (
            <form
              onSubmit={handleShortSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
            >
              {/* Use a different style for a subtle visual separation */}
              <div className="md:col-span-2 p-4 mb-4 bg-teal-50 border-l-4 border-teal-500 rounded-md">
                <p className="text-sm text-teal-800">Use this form to add short video content like Reels or YouTube Shorts.</p>
              </div>

              <InputField
                label="ID (Unique Identifier) *"
                id="id"
                name="id"
                value={newShortVideo.id}
                onChange={handleShortChange}
                required
              />

              <InputField
                label="Thumbnail URL *"
                id="thumbnail"
                name="thumbnail"
                value={newShortVideo.thumbnail}
                onChange={handleShortChange}
                required
              />

              <div className="md:col-span-2 space-y-1">
                <label htmlFor="shortEmbedCode" className="block text-sm font-medium text-gray-700">Embed Code *</label>
                <input
                  id="shortEmbedCode"
                  type="text"
                  name="embedCode"
                  value={newShortVideo.embedCode}
                  onChange={handleShortChange}
                  // ===> KEY CHANGE HERE: Added text-gray-900 <===
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out placeholder-gray-500 text-gray-900"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="md:col-span-2 bg-teal-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-teal-700 transition duration-300 ease-in-out shadow-lg disabled:bg-teal-400 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? "Adding Short..." : "➕ Add Short Video"}
              </button>
            </form>
          )}
        </section>

        {/* ------------------------------------------------------- */}
        {/* LIST OF LONG VIDEOS (Improved Table UI) */}
        {/* ------------------------------------------------------- */}
        {videoType === "long" && (
          <section className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
              📋 Existing Long Videos
            </h2>

            {loadingVideos ? (
              <div className="text-center py-10 text-gray-500">
                <p>Loading videos...</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {videos.length > 0 ? (
                      videos.map((v) => (
                        <tr key={v.id} className="hover:bg-blue-50 transition duration-150">
                          <td className="py-3 px-4 text-sm font-medium text-gray-900 max-w-xs truncate">{v.title}</td>
                          <td className="py-3 px-4 text-sm text-gray-500">{v.channel}</td>
                          <td className="py-3 px-4 text-sm text-gray-500">{v.baseViews.toLocaleString()}</td>
                          <td className="py-3 px-4 text-sm text-gray-500">
                            {new Date(v.postDate).toLocaleDateString()}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="py-6 text-center text-gray-500 text-sm">
                          No long videos found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminPage;