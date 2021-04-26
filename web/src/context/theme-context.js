import React, {createContext, useState} from 'react';

export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

export const ThemeContext = createContext(null);

function ThemeProvider({children}) {
  const [theme, setTheme] = useState(LIGHT_THEME);

  function toggleTheme() {
    setTheme((theme) => (theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));
    if (document.body.classList.contains(DARK_THEME)) {
      document.body.classList.remove(DARK_THEME);
    } else {
      document.body.classList.add(DARK_THEME);
    }
  }

  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>;
}

export {ThemeProvider};
