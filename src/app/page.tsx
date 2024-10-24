'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import HouseImage from '../houseofprivilege.png';
import InstagramLogo from '../assets/instagram.svg';
import TwitterLogo from '../assets/x.svg';
import LinkedInLogo from '../assets/linkedin.svg';

const GridPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.gridContainer}>
      {[...Array(36)].map((_, index) => (
        <div key={index} className={styles.gridBox}>
          {index === 0 && (
            <img src={HouseImage.src} alt="House of Privilege" className={styles.centerImage} />
          )}
          {index === 5 && (
            <>
              <div className={styles.hamburger} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              {menuOpen && (
                <nav className={styles.navMenu}>
                  <ul>
                    <li><a href="#about">services</a></li>
                    <li><a href="#product">about</a></li>
                    <li><a href="#team">contact</a></li>
                    <li><a href="#updates">wait, What?</a></li>
                  </ul>
                </nav>
              )}
            </>
          )}
          {index === 6 && (
            <div className={styles.whiteBoxAlt}>
              <p>
                A new style of white box | @house of priviledge.xyz |
              </p>
              <div className={styles.socialMediaIconsAlt}>
                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                  <img src={TwitterLogo.src} alt="X" className={styles.iconAlt} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={LinkedInLogo.src} alt="LinkedIn" className={styles.iconAlt} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramLogo.src} alt="Instagram" className={styles.iconAlt} />
                </a>
              </div>
            </div>
          )}
          {index === 30 && (
            <div className={styles.whiteBox}>
              <p>
                house of priviledge.xyz | @house of priviledge.xyz all rights reserved |
              </p>
              <div className={styles.socialMediaIcons}>
                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                  <img src={TwitterLogo.src} alt="X" className={styles.icon} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={LinkedInLogo.src} alt="LinkedIn" className={styles.icon} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramLogo.src} alt="Instagram" className={styles.icon} />
                </a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GridPage;
