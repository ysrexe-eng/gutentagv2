import React from 'react';

interface PlayerProps {
  src: string;
}

export const Player: React.FC<PlayerProps> = ({ src }) => {
  return (
    <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-neutral-800">
      <video
        className="w-full h-auto block"
        controls
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        <p className="p-4 text-red-500 text-center">
          Your browser is too old to play this shit.
        </p>
      </video>
    </div>
  );
};