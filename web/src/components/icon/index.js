import React from 'react';
import PropTypes from 'prop-types';

import HamburgerIcon from './hamburger';
import MySignatureIcon from './my-signature';

function Icon(props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon {...props} />;
    case 'my-signature':
      return <MySignatureIcon {...props} />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

Icon.propTypes = {
  symbol: PropTypes.string,
};

export default Icon;
