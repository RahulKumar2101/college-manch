import React, { useState } from "react";
import Card, { CardProps } from "./Card";

export interface GridCardProps {
  videos: (CardProps & { embedCode: string })[];
}

const GridCard: React.FC<GridCardProps> = ({ videos }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, idx) => (
          <div key={idx}>
            <div onClick={() => setOpenIdx(idx)} className="cursor-pointer">
              <Card {...video} />
            </div>
            {openIdx === idx && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-2" onClick={() => setOpenIdx(null)}>
                <div
                  className="bg-white rounded-lg shadow-lg w-full max-w-4xl md:max-w-5xl relative"
                  style={{ maxHeight: '90vh', overflowY: 'auto' }}
                  onClick={e => e.stopPropagation()}
                >
                  <button className="absolute top-2 right-2 text-2xl font-bold text-gray-700 hover:text-black z-10" onClick={() => setOpenIdx(null)}>&times;</button>
                  <div className="w-full aspect-video bg-black">
                    <iframe
                      src={video.embedCode}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full min-h-[200px] max-h-[70vh] rounded-b-lg"
                      style={{ minHeight: 200, height: '40vw', maxHeight: '70vh' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{video.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default GridCard;
