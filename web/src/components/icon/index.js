import React from 'react';
import PropTypes from 'prop-types';

import CodepenIcon from './codepen';
import GithubIcon from './github';
import HamburgerIcon from './hamburger';
import LinkedInIcon from './linked-in';
import MyInitialsIcon from './my-initials';
import MySignatureIcon from './my-signature';

function Icon(props) {
  switch (props.symbol) {
    case 'codepen':
      return <CodepenIcon {...props} />;
    case 'github':
      return <GithubIcon {...props} />;
    case 'hamburger':
      return <HamburgerIcon {...props} />;
    case 'linkedIn':
      return <LinkedInIcon {...props} />;
    case 'my-initials':
      return <MyInitialsIcon {...props} />;
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
