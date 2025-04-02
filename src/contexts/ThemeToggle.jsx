// components/ThemeToggle.jsx
import React, { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
    >
      {isDark ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}

export default ThemeToggle;