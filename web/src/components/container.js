import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './container.module.css';
import {cn} from '../lib/helpers';

const Container = ({children, className}) => (
  <div className={cn(styles.root, className)}>{children}</div>
);

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
