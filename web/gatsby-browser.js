import React from 'react';

import CustomLayout from './wrapPageElement';
import './src/styles/layout.css';
import {ThemeProvider} from './src/context/theme-context';

export const wrapRootElement = ({element}) => <ThemeProvider>{element}</ThemeProvider>;
export const wrapPageElement = CustomLayout;
