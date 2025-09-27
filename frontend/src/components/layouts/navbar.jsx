import React from 'react';
import { Link } from 'react-router-dom'; // added for navigation
import styles from './Navbar.module.css';
import Imglogo from "../../assets/logo.png"

const links = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },         // React Router path for about page
  { name: 'Features', to: '/featured#object-detection' },    // keep hash link as anchor
  { name: 'Contact Us', to: '/contact' },     // React Router path for contact page
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>

        {/* LEFT GROUP: Logo */}
        <div className={styles.leftGroup}>
          <div className={styles.navbarLogo}>
            <img src={Imglogo} className={styles.logo} alt="Logo" />
          </div>
        </div>

        {/* CENTER: Page links without icon hover effect */}
        <div className={styles.navbarLinks}>
          {links.map(({ name, to, href }) => {
            // If 'to' is defined, use React Router Link, else fallback to anchor (for hash links)
            if (to) {
              return (
                <Link
                  key={name}
                  to={to}
                  className={styles.navLink}
                >
                  <span className={styles.text}>
                    {name}
                  </span>
                </Link>
              );
            } else {
              return (
                <a
                  key={name}
                  href={href}
                  className={styles.navLink}
                >
                  <span className={styles.text}>
                    {name}
                  </span>
                </a>
              );
            }
          })}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;