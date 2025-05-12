import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthProvider } from '../context/AuthContext';
import { PlaygroundProvider } from '../context/PlaygroundContext';

const Layout: React.FC = () => {
  return (
    <AuthProvider>
      <PlaygroundProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      </PlaygroundProvider>
    </AuthProvider>
  );
};

export default Layout;