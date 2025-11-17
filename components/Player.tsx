import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { Player } from 'video.js';

interface PlayerProps {
  src: string;
}

export const PlayerComponent: React.FC<PlayerProps> = ({ src }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video");
      videoElement.className = "video-js vjs-big-play-centered";
      containerRef.current?.appendChild(videoElement);

      const player = videojs(videoElement, {
        autoplay: true,
        controls: true,
        fluid: true,
        sources: [{ src, type: 'video/mp4' }],
      });
      playerRef.current = player;
    }

    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.src({ src, type: 'video/mp4' });
    }
  }, [src]);

  return (
    <div data-vjs-player>
      <div ref={containerRef} />
    </div>
  );
};
