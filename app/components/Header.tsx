import React from 'react';
import Link from 'next/link'; // Use Link from Next.js for client-side navigation
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-logo">
          <Link href="/">
            {/* <a>MyApp</a> */}
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link href="/about">
             
            </Link>
          </li>
          <li>
            <Link href="/services">
              
            </Link>
          </li>
          <li>
            <Link href="/contact">
              
            </Link>
          </li>
        </ul>
        <div className="nav-auth">
          <Link href="/signup">
            {/* <a className="nav-button">Sign Up</a> */}
          </Link>
        </div>
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


