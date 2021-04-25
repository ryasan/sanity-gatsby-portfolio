import React from 'react';
import {cn} from '../lib/helpers';

import * as styles from './loader.module.css';

const Loader = ({className}) => <div className={cn(styles.root, className)}></div>;

export default Loader;
