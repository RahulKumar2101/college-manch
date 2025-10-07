import React from "react";
import Card, { CardProps } from "./Card";

export interface GridCardProps {
  videos: CardProps[];
}

const GridCard: React.FC<GridCardProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {videos.map((video, idx) => (
        <Card key={idx} {...video} />
      ))}
    </div>
  );
};

export default GridCard;
