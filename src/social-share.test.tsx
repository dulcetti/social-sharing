import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SocialShare from './social-share';
import { PropsOptions } from './social-share.interface';

describe('Social Share Component', () => {
  const urlMock = 'https://google.com';
  const urlTitleMock = 'Google Site';
  const urlDescriptionMock = 'An URL of Google to mock a description';

  test('is truthy', () => {
    expect(SocialShare).toBeTruthy();
  });

  describe('Props', () => {
    test('render the title default', () => {
      render(<SocialShare url={urlMock} urlTitle={urlTitleMock} />);
      expect(screen.getByText(/Gostou\? Compartilhe esse artigo ;\)/i)).toBeInTheDocument();
      expect(screen.getByText(/share/i)).toBeInTheDocument();
    });

    test('render the description prop', () => {
      render(
        <SocialShare url={urlMock} urlTitle={urlTitleMock} urlDescription={urlDescriptionMock} />
      );
      expect(screen.getByLabelText(/Linkedin/i).closest('a')).toHaveAttribute(
        'href',
        `https://www.linkedin.com/shareArticle?mini=true&url=${urlMock}&title=${urlTitleMock}&summary=${urlTitleMock}&source=@&text=${urlDescriptionMock}`
      );
    });

    test('render the all options prop', () => {
      const mockOptions: PropsOptions = {
        author: 'dulcetti',
        label: 'Compartilhar',
        title: 'Title of component',
      };
      render(<SocialShare url={urlMock} urlTitle={urlTitleMock} options={mockOptions} />);
      expect(screen.getByText(/Title of component/i)).toBeInTheDocument();
      expect(screen.getByLabelText('Twitter').closest('a')).toHaveAttribute(
        'href',
        `https://twitter.com/share?url=${urlMock}&text=${urlTitleMock}&via=${mockOptions.author}`
      );
      expect(screen.getByText(/Compartilhar/i)).toBeInTheDocument();
    });

    test(`the value of the author's option must not have @`, () => {
      const mockOptions: PropsOptions = {
        author: '@dulcetti',
      };
      render(<SocialShare options={mockOptions} url={urlMock} urlTitle={urlTitleMock} />);
      expect(screen.getByLabelText('Twitter').closest('a')).toHaveAttribute(
        'href',
        `https://twitter.com/share?url=${urlMock}&text=${urlTitleMock}&via=dulcetti`
      );
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
