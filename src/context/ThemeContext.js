import { createContext, useMemo, useState } from 'react';

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
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
