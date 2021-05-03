import React, {createContext, useState, useContext} from 'react';

const LIGHT = 'light';
const DARK = 'dark';

const ThemeContext = createContext({});

function ThemeProvider({children}) {
  const [theme, setTheme] = useState(LIGHT);

  function toggleTheme() {
    setTheme((theme) => (theme === LIGHT ? DARK : LIGHT));
    if (document.body.classList.contains(DARK)) {
      document.body.classList.remove(DARK);
    } else {
      document.body.classList.add(DARK);
    }
  }

  function changeTheme(theme) {
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

const withThemeInfo = (Component) => (props) => {
  const {theme} = useContext(ThemeContext);
  const ComplexComponent = <Component {...props} isDark={theme === DARK} />;

  return ComplexComponent;
};

export {ThemeProvider, withThemeInfo, ThemeContext, LIGHT, DARK};
