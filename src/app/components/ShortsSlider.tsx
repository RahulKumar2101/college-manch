import React, { useEffect, useState } from "react";

interface ShortVideo {
  id: string;
  title?: string;
  views?: string;
  thumbnail: string;
  embedCode: string;
}

const ShortsSlider: React.FC = () => {
  const [shorts, setShorts] = useState<ShortVideo[]>([]);
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/short-videos")
      .then((res) => res.json())
      .then((data) => {
        setShorts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-lg">Loading shorts...</div>;

  return (
    <div className="w-full py-6">
      <h2 className="text-xl font-bold mb-4 text-center">Quick Reels: Insights in Seconds</h2>
      <div className="flex gap-4 overflow-x-auto pb-2" style={{scrollSnapType: 'x mandatory'}}>
        {shorts.map((short, idx) => (
          <div
            key={short.id}
            className="min-w-[180px] max-w-[220px] flex-shrink-0 rounded-lg bg-white shadow-md overflow-hidden flex flex-col items-center"
            style={{scrollSnapAlign: 'start'}}
          >
            {playingIdx === idx ? (
              <div className="w-full aspect-[9/16] bg-black flex items-center justify-center">
                <iframe
                  key={short.id + '-' + playingIdx}
                  src={short.embedCode + '?autoplay=1'}
                  title={short.title || `Short ${short.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              </div>
            ) : (
              <button type="button" className="relative w-full aspect-[9/16] cursor-pointer p-0 border-0 bg-transparent" onClick={() => setPlayingIdx(idx)}>
                <img src={short.thumbnail} alt={short.title || `Short ${short.id}`} className="w-full h-full object-cover rounded-lg" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="rgba(0,0,0,0.4)" />
                    <polygon points="25,20 45,30 25,40" fill="#fff" />
                  </svg>
                </span>
              </button>
            )}
            {short.title && <div className="mt-2 text-sm font-medium line-clamp-2 text-center px-2">{short.title}</div>}
            {short.views && <div className="text-xs text-gray-500 mb-2">{short.views} views</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortsSlider;
