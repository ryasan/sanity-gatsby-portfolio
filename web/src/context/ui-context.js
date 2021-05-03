import React, {createContext, useState} from 'react';

export const UIContext = createContext(null);

const UIProvider = ({children}) => {
  const [uiIsLoaded, setUiIsLoaded] = useState(false);
  return <UIContext.Provider value={{uiIsLoaded, setUiIsLoaded}}>{children}</UIContext.Provider>;
};

export {UIProvider};
