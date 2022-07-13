import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }
  useMemo(() => {}, [handleToggleTheme]);

  const themeState = useMemo(() => ({
    theme,
    onToggleTheme: handleToggleTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider
      value={themeState}
    >
      <div className={theme}>
        <div className="background">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
