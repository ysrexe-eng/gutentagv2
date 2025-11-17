import React, { useEffect, useRef } from 'react';

declare const Plyr: any;

interface PlayerProps {
  src: string;
  title?: string;
}

export const PlayerComponent: React.FC<PlayerProps> = ({ src, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = new Plyr(videoRef.current, {
        title: title,
        autoplay: true,
        playsinline: true,
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
      });
    }
  }, [title]);

  return (
    <video
      ref={videoRef}
      className="w-full aspect-video"
      src={src}
      playsInline
      autoPlay
      controls
      title={title}
    ></video>
  );
};