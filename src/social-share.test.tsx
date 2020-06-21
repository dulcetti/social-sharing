import React from 'react';
import { render } from '@testing-library/react';
import SocialShare from './social-share';

test('renders learn react link', () => {
  const { getByText } = render(<SocialShare />);
  const linkElement = getByText(/Social Share/i);
  expect(linkElement).toBeInTheDocument();
});
