import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SocialShare } from './social-share';

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
      const { getByText } = render(
        <SocialShare url={urlMock} urlTitle={urlTitleMock} title='Title of component' />
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
      const { container, getByRole } = render(
        <SocialShare url={urlMock} urlTitle={urlTitleMock} />
      );

      const scrollContainer = container.querySelector('.social-share');
      document?.addEventListener('scroll', () => {
        console.info('Scrolled');
      });

      fireEvent.scroll(document, { target: { scrollY: 310 } });
      console.info(scrollContainer);

      await userEvent.click(getByRole('button'));
      expect(container.querySelector('.social-share.-visible')).not.toBeNull();
    });

    test('list of social media to be opened on click button', async () => {
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
