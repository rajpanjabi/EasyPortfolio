// app/layout.tsx
"use client";
import React, { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/globals.scss';


interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main> 
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;