import {useLayoutEffect, useState} from 'react';

export const useMediaQueries = () => {
  const [windowObj, setWindowObj] = useState(null);

  useLayoutEffect(() => {
    if (window) setWindowObj(windowObj);
  }, [window]);

  return (
    windowObj && {
      maxSmall: windowObj?.matchMedia('(max-width: 449px)'),
      minSmall: windowObj?.matchMedia('(min-width: 450px)'),
      maxMedium: windowObj?.matchMedia('(max-width: 674px)'),
      minMedium: windowObj?.matchMedia('(min-width: 675px)'),
      minLarge: windowObj?.matchMedia('(min-width: 900px)'),
    }
  );
};
