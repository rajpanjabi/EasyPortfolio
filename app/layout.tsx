// app/layout.tsx
import React, { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/globals.scss'; // Import global styles

export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

// Define the props interface
interface RootLayoutProps {
  children: ReactNode; // This specifies that children can be any valid React node
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en"> {/* Ensure no extra whitespace here */}
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}