import React from 'react';
import { render } from '@testing-library/react';
import { SocialShare } from './social-share';

test('render the title default', () => {
  const { getByText } = render(<SocialShare />);
  const titleDefault = getByText(/Gostou\? Compartilhe esse artigo ;\)/i);
  expect(titleDefault).toBeInTheDocument();
});

test('render the title prop', () => {
  const { getByText } = render(<SocialShare title="Fodasse" />);
  const textTitleProp = getByText(/Fodasse/i);
  expect(textTitleProp).toBeInTheDocument();
});
