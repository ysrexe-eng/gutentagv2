import React from 'react';

interface PlayerProps {
  src: string;
  title?: string;
}

export const PlayerComponent: React.FC<PlayerProps> = ({ src, title }) => {
  return (
    <media-player
      class="w-full aspect-video"
      src={src}
      playsinline
      autoplay
      controls
      title={title}
    >
      <media-provider></media-provider>
      <media-video-layout></media-video-layout>
    </media-player>
  );
};
