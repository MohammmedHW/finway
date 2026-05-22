import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AnimatedBackground } from '../ui/AnimatedBackground';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-primary/30 overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-grow pt-24 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
