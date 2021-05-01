import ReactSVG from '../../static/images/react.svg';
import NodeSVG from '../../static/images/nodejs.svg';
import VSCodeSVG from '../../static/images/vscode.svg';

export const particlesParams = {
  particles: {
    number: {
      value: 6,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      speed: 0.2,
      out_mode: 'out',
    },
    shape: {
      type: ['image'],
      image: [
        {
          src: ReactSVG,
          height: 20,
          width: 23,
        },
        {
          src: NodeSVG,
          height: 20,
          width: 20,
        },
        {
          src: VSCodeSVG,
          height: 20,
          width: 20,
        },
      ],
    },
    size: {
      value: 75,
      random: false,
      anim: {
        enable: true,
        speed: 4,
        size_min: 50,
        sync: true,
      },
    },
  },
  retina_detect: false,
};
