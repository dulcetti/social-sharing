import React, { useState } from 'react';
import { PropsSocialShare } from './social-share.interface';
import * as S from './styles';

export const SocialShare = ({
  author,
  className = '',
  textButton = 'Share',
  title = 'Gostou? Compartilhe esse artigo ;)',
  url,
  urlDescription,
  urlTitle,
}: PropsSocialShare) => {
  const [showMenu, setMenu] = useState<Boolean>(false);
  const [showSubMenu, setSubMenu] = useState<Boolean>(false);

  const rotateMenu = () => setSubMenu(!showSubMenu);
  const watchScroll = () => {
    window.scrollY > 300 ? setMenu(true) : setMenu(false);
  };

  document.addEventListener('scroll', watchScroll, false);

  return (
    <S.ShareContainer className={`${className} ${showMenu ? '-visible' : ''} social-share`}>
      <S.ShareTitle className='title'>{title}</S.ShareTitle>

      <S.ButtonShare onClick={rotateMenu} className='button'>
        {textButton}
      </S.ButtonShare>

      <S.ShareList className={`${showSubMenu && '-opened'} list`}>
        <S.ShareItem className='item -facebook'>
          <S.ShareLink
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}&text=${urlTitle}`}
            aria-label='Facebook'
            rel='noopener noreferrer'
            target='_blank'
          >
            <S.LabelItem>Facebook</S.LabelItem>
          </S.ShareLink>
        </S.ShareItem>
        <S.ShareItem className='item -twitter'>
          <S.ShareLink
            href={`https://twitter.com/share?url=${url}&text=${urlTitle}&via=${author}`}
            aria-label='Twitter'
            rel='noopener noreferrer'
            target='_blank'
          >
            <S.LabelItem>Twitter</S.LabelItem>
          </S.ShareLink>
        </S.ShareItem>
        <S.ShareItem className='item -linkedin'>
          <S.ShareLink
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${urlTitle}&summary=${urlTitle}&source=@${author}&text=${urlDescription}`}
            aria-label='Linkedin'
            rel='noopener noreferrer'
            target='_blank'
          >
            <S.LabelItem>Linkedin</S.LabelItem>
          </S.ShareLink>
        </S.ShareItem>
        <S.ShareItem className='item -whatsapp'>
          <S.ShareLink
            href={`https://api.whatsapp.com/send?text=${url}`}
            aria-label='Whatsapp'
            rel='noopener noreferrer'
            target='_blank'
          >
            <S.LabelItem>Whatsapp</S.LabelItem>
          </S.ShareLink>
        </S.ShareItem>
      </S.ShareList>
    </S.ShareContainer>
  );
};
