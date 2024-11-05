import React from 'react';
import Link from 'next/link'; // Use Link from Next.js for client-side navigation
import '../styles/Header.scss';

const Header = () => {
  
  return (
   
        <header className="navbar">
            <div className="logo">EasyPortfolio</div>
            <nav className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#docs">Docs</a>
                <a href="#contact">Contact</a>
            </nav>
            
        </header>

  );
};

export default Header;















// const Header = () => {
//   return (
//     <header>
//       <nav>       
//        </nav>
//     </header>
//   );
// };
// export default Header;


