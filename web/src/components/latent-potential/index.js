import React from 'react';

import * as styles from './latent-potential.module.css';
import {small} from '../typography.module.css';

const LatentPotential = () => {
  return (
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <blockquote className={styles.blockquote}>
          <div>
            &quot;When nothing seems to help, I go and look at a stonecutter hammering away at his
            rock, perhaps a hundred times without as much as a crack showing in it. Yet at the
            hundred and first blow it will split in two, and I know it was not that last blow that
            did it&#8212;but all that had gone before.&quot;
          </div>
          <div>-Social Reformer Jacob Riis</div>
        </blockquote>
        <p>
          It&apos;s normal to find stagnation when faced with difficult tasks. Maybe you&apos;ve
          been at a rubik&apos;s cube for a couple hours and just can&apos;t seem to get that last
          row right. Or you&apos;ve been going mono e mono with a jar of pickles but just can&apos;t
          the damn thing to pop. Don&apos;t quit! Progress isn&apos;t how we think it&apos;s suppose
          to be. Check it out...
        </p>
      </div>
      <figure className={styles.figure}>
        <img src='https://i.postimg.cc/DZpTXGxJ/potential-2.jpg' alt='plateau' />
        <figcaption className={small}>
          <b>Fig. 1</b> - We often expect progress to be linear. At the very least, we hope that it
          will come quickly. In reality, the results of our efforts are often delayed. It is not
          until months or years later that we realize the true value of the previous work we have
          done.
        </figcaption>
      </figure>
      <div className={styles.textContainer}>
        <p>
          The diagram above is called the &quot;Plateau of Latent Potential&quot; and it states that
          work is never wasted. It is simply being stored and that sometimes it won&apos;t be until
          much later that the full value of previous efforts is revealed.
        </p>
        <p>
          Anyways this is something I remind myself constantly now and it always eventually proves
          to be true. With the correct mind set, we are capable of things we would never expect from
          ourselves...believe Neo.
        </p>
      </div>
    </div>
  );
};

export default LatentPotential;
