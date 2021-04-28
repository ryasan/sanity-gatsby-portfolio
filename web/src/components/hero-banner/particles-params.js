import ReactSVG from '../../static/images/react.svg';
import NodeSVG from '../../static/images/nodejs.svg';
import VSCodeSVG from '../../static/images/vscode.svg';

export const particlesParams = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      speed: 1,
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
      value: 30,
      random: false,
      anim: {
        enable: true,
        speed: 4,
        size_min: 10,
        sync: false,
      },
    },
  },
  retina_detect: false,
};
