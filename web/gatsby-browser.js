import React from 'react';

import CustomLayout from './wrapPageElement';
import './src/styles/layout.css';
import {ThemeProvider} from './src/context/theme-context';
import {UIProvider} from './src/context/ui-context';

export const wrapRootElement = ({element}) => {
  return (
    <ThemeProvider>
      <UIProvider>{element}</UIProvider>
    </ThemeProvider>
  );
};
export const wrapPageElement = CustomLayout;
