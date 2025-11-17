import React from 'react';
import { PlayerComponent } from './components/Player';
import { VIDEO_SRC, APP_TITLE } from './constants';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-black p-4 sm:p-8">
      <div className="w-full max-w-4xl flex flex-col gap-8">
        <header className="w-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white lowercase select-none">
            {APP_TITLE}
          </h1>
        </header>

        <section className="w-full">
          <PlayerComponent src={VIDEO_SRC} />
        </section>
      </div>
    </main>
  );
};

export default App;