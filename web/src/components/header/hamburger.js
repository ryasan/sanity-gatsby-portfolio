import React from 'react';

import {motion} from 'framer-motion';

const strokeTop = {
  open: {
    initial: {
      rotate: 45,
      y: '20%',
    },
    animate: {
      rotate: 0,
      y: 0,
    },
  },
  close: {
    initial: {
      rotate: 0,
    },

    animate: {
      rotate: 45,
      y: '20%',
    },
  },
};

const strokeMiddle = {
  open: {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
    },
  },
  close: {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
    },
  },
};

const strokeBottom = {
  open: {
    initial: {
      rotate: -45,
      y: '-20%',
    },
    animate: {
      rotate: 0,
      y: 0,
    },
  },
  close: {
    initial: {
      rotate: 0,
    },

    animate: {
      rotate: -45,
      y: '-20%',
    },
  },
};

const HamburgerIcon = ({showNav}) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
    <g data-name='Layer 2'>
      <g data-name='menu'>
        <rect width='24' height='24' opacity='0' transform='rotate(180 12 12)' />
        <motion.rect
          {...(showNav ? strokeTop.close : strokeTop.open)}
          width='18'
          height='2'
          x='3'
          y='6'
          rx='.95'
          ry='.95'
        />
        <motion.rect
          {...(showNav ? strokeMiddle.close : strokeMiddle.open)}
          transition={{duration: 0}}
          width='18'
          height='2'
          x='3'
          y='11'
          rx='.95'
          ry='.95'
        />
        <motion.rect
          {...(showNav ? strokeBottom.close : strokeBottom.open)}
          width='18'
          height='2'
          x='3'
          y='16'
          rx='.95'
          ry='.95'
        />
      </g>
    </g>
  </svg>
);

export default HamburgerIcon;
