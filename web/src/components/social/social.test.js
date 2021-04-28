import React from 'react';
import {render} from '@testing-library/react';

import SocialList from './index';

describe('SocialList', () => {
  it('should have at least 3 icons', async () => {
    const {getByTestId} = render(<SocialList />);

    const socialList = getByTestId('social-list');

    expect(socialList).toBeTruthy();
    expect(socialList.children.length).toBeGreaterThanOrEqual(3);
  });

  it('should have icon text', async () => {
    const {getByText} = render(<SocialList />);
    const codepenText = getByText('Codepen');
    const githubText = getByText('Github');
    const linkedInText = getByText('LinkedIn');

    expect(codepenText).toBeTruthy();
    expect(githubText).toBeTruthy();
    expect(linkedInText).toBeTruthy();
  });
});
