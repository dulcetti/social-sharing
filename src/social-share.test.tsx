import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SocialShare from './social-share';

describe('Social Share Component', () => {
  const urlMock = 'https://google.com';
  const urlTitleMock = 'Google Site';
  const urlDescriptionMock = 'An URL of Google to mock a description';

  test('is truthy', () => {
    expect(SocialShare).toBeTruthy();
  });

  describe('Props', () => {
    test('render the title default', () => {
      const { getByText } = render(<SocialShare url={urlMock} urlTitle={urlTitleMock} />);
      expect(getByText(/Gostou\? Compartilhe esse artigo ;\)/i)).toBeInTheDocument();
    });

    test('render the title prop', () => {
      const mockOptions = {
        title: 'Title of component',
      };
      const { getByText } = render(
        <SocialShare url={urlMock} urlTitle={urlTitleMock} options={mockOptions} />
      );
      expect(getByText(/Title of component/i)).toBeInTheDocument();
    });

    test('render component with default className', () => {
      const { container } = render(<SocialShare url={urlMock} urlTitle={urlTitleMock} />);
      expect(container.querySelector('.social-share')).toBeTruthy();
    });

    test('render component with className on prop', () => {
      const { container } = render(
        <SocialShare url={urlMock} urlTitle={urlTitleMock} className='fodasse' />
      );
      expect(container.querySelector('.fodasse'));
    });
  });

  describe('Button interaction and Scroll', () => {
    test('method toggle visibility of menu', () => {
      const { container } = render(<SocialShare url={urlMock} urlTitle={urlTitleMock} />);

      expect(container.querySelector('.social-share.-visible')).toBeNull();
    });

    test('menu has to be showed after scroll', async () => {
      let scrolled = false;
      const { container, getByRole } = render(
        <SocialShare url={urlMock} urlTitle={urlTitleMock} />
      );

      window.addEventListener('scroll', () => (scrolled = true), false);

      fireEvent.scroll(window, { target: { scrollY: 310 } });
      await userEvent.click(getByRole('button'));
      expect(container.querySelector('.social-share.-visible')).not.toBeNull();
      expect(scrolled).toBeTruthy();

      fireEvent.scroll(window, { target: { scrollY: 0 } });
      await userEvent.click(getByRole('button'));
      expect(container.querySelector('.social-share.-visible')).toBeNull();
    });

    test('list of social media must be opened on click button', async () => {
      const { container, getByRole } = render(
        <SocialShare url={urlMock} urlTitle={urlTitleMock} />
      );

      await userEvent.click(getByRole('button'));
      expect(container.querySelector('.list.-opened')).not.toBeNull();

      await userEvent.click(getByRole('button'));
      expect(container.querySelector('.list.-opened')).toBeNull();
    });
  });

  describe('DOM content', () => {
    test('all social media has to be rendered', () => {
      const { container } = render(<SocialShare url={urlMock} urlTitle={urlTitleMock} />);
      expect(container.querySelectorAll('.list > .item').length).toBe(4);
    });
  });
});
