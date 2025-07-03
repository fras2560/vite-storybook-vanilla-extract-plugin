import React, { useEffect, useState } from 'react';

import {
  moonIcon,
  sunIcon,
  switcher,
  switcherButton,
} from './themeSwitcher.css';

export const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return document.documentElement.classList.contains('dark-theme');
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div
      className={switcher}
      onClick={() => setIsDark((prev) => !prev)}
      role='button'
      tabIndex={0}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}>
      <div className={`${switcherButton} ${isDark ? 'active' : ''}`} />
      <span className={isDark ? moonIcon : sunIcon}>
        {isDark ? '🌙' : '☀️'}
      </span>
    </div>
  );
};
