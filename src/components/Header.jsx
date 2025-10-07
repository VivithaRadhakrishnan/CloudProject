import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styles } from '../styles';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header style={styles.header}>
      <h1 style={styles.headerTitle}>Job Recommendation System - Recruiter</h1>
      <nav style={styles.nav}>
        <Link to="/">
          <button
            style={{
              ...styles.navButton,
              ...(isActive('/') ? styles.navButtonActive : {}),
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.navButtonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            Dashboard
          </button>
        </Link>
        <Link to="/post-job">
          <button
            style={{
              ...styles.navButton,
              ...(isActive('/post-job') ? styles.navButtonActive : {}),
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.navButtonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            Post Job
          </button>
        </Link>
        <Link to="/applicants">
          <button
            style={{
              ...styles.navButton,
              ...(isActive('/applicants') ? styles.navButtonActive : {}),
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.navButtonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            Applicants
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;