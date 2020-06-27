import React, { useState } from 'react';
import { PropsSocialShare } from './social-share.interface';
import * as S from './styles';

export default function SocialShare({
  className = '',
  options = {
    label: 'share',
    social: {
      author: '',
      facebook: {
        bg: '#3B5998',
        color: '#fff',
      },
      linkedin: {
        bg: '#0E76A8',
        color: '#fff',
      },
      share: {
        circle: '#4c9ae8',
        polygon: '#4286c9',
      },
      twitter: {
        bg: '#26A6D1',
        color: '#fff',
      },
      whatsapp: {
        bg: '#6EBF3A',
        color: '#fff',
      },
    },
    text: '#333',
  },
  title = 'Gostou? Compartilhe esse artigo ;)',
  url,
  urlDescription,
  urlTitle,
}: PropsSocialShare) {
  const [showMenu, setMenu] = useState<Boolean>(false);
  const [showSubMenu, setSubMenu] = useState<Boolean>(false);

  const rotateMenu = () => setSubMenu(!showSubMenu);
  const watchScroll = () => {
    window.scrollY > 300 ? setMenu(true) : setMenu(false);
  };

  document.addEventListener('scroll', watchScroll, false);

  return (
    <S.ShareContainer
      data-testid='scroll-view'
      className={`${className} ${showMenu ? '-visible' : ''} social-share`}
    >
      <S.ShareTitle className='title'>{title}</S.ShareTitle>

      <S.ButtonShare onClick={rotateMenu} className='button'>
        <svg
          aria-hidden='true'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 0 24 24'
        >
          <g>
            <polygon
              fill={options?.social?.share?.polygon}
              points='17.98583084344864,21.063112258911133 2.8486934304237366,11.980565071105957 17.98583084344864,2.898017406463623 19.350132524967194,5.168323040008545 7.995955526828766,11.980565071105957 19.350132524967194,18.79280662536621 17.98583084344864,21.063112258911133 '
            />
            <circle
              fill={options?.social?.share?.circle}
              r='4.63598'
              cy='4.695453'
              cx='18.667982'
            />
            <circle
              fill={options?.social?.share?.circle}
              r='4.63598'
              cy='11.980565'
              cx='5.422325'
            />
            <circle
              fill={options?.social?.share?.circle}
              r='4.63598'
              cy='19.265676'
              cx='18.667982'
            />
          </g>
        </svg>
        <S.LabelShare>
          <svg
            aria-hidden='true'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 80 80'
          >
            <path id='semi-circle' d='M11,18 A26,15 0 0,0 70,20' fill='none' />
            <text fill={options?.text}>
              <textPath startOffset='50%' textAnchor='middle' xlinkHref='#semi-circle'>
                {options?.label}
              </textPath>
            </text>
          </svg>
        </S.LabelShare>
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
            <svg
              aria-hidden='true'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 32 32'
            >
              <path
                clipRule='evenodd'
                d='M15.999.002c8.837 0 16 7.164 16 16 0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.836 7.163-16 16-16z'
                fill={options?.social?.facebook?.bg}
                fillRule='evenodd'
              />
              <path
                d='M17.947 11.017h2.062v-3.046h-2.424v.011c-2.937.104-3.539 1.755-3.592 3.489h-.006v1.521h-2v2.983h2v7.996h3.014v-7.996h2.469l.477-2.983h-2.945v-.919c0-.586.39-1.056.945-1.056z'
                fill={options?.social?.facebook?.color}
              />
            </svg>
          </S.ShareLink>
        </S.ShareItem>
        <S.ShareItem className='item -twitter'>
          <S.ShareLink
            href={`https://twitter.com/share?url=${url}&text=${urlTitle}&via=${options?.social?.author}`}
            aria-label='Twitter'
            rel='noopener noreferrer'
            target='_blank'
          >
            <S.LabelItem>Twitter</S.LabelItem>
            <svg
              aria-hidden='true'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 32 32'
            >
              <path
                clipRule='evenodd'
                d='M15.999.002c8.837 0 16 7.164 16 16 0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.836 7.163-16 16-16z'
                fill={options?.social?.twitter?.bg}
                fillRule='evenodd'
              />
              <path
                d='M26.002 10.781c-.699.302-1.451.505-2.24.597.806-.469 1.424-1.21 1.715-2.095-.754.435-1.588.75-2.477.919-.711-.735-1.724-1.194-2.846-1.194-2.152 0-3.898 1.693-3.898 3.783 0 .297.034.586.101.863-3.24-.158-6.114-1.665-8.036-3.954-.336.559-.528 1.208-.528 1.902 0 1.312.688 2.472 1.734 3.149-.64-.02-1.24-.189-1.767-.474v.048c0 1.834 1.344 3.363 3.128 3.711-.327.086-.671.133-1.027.133-.251 0-.495-.023-.733-.068.496 1.504 1.936 2.598 3.643 2.628-1.335 1.016-3.016 1.62-4.843 1.62-.315 0-.625-.018-.931-.053 1.727 1.074 3.775 1.701 5.978 1.701 7.172 0 11.094-5.768 11.094-10.768l-.011-.49c.76-.532 1.421-1.198 1.944-1.958z'
                fill={options?.social?.twitter?.color}
              />
            </svg>
          </S.ShareLink>
        </S.ShareItem>
        <S.ShareItem className='item -linkedin'>
          <S.ShareLink
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${urlTitle}&summary=${urlTitle}&source=@${options?.social?.author}&text=${urlDescription}`}
            aria-label='Linkedin'
            rel='noopener noreferrer'
            target='_blank'
          >
            <S.LabelItem>Linkedin</S.LabelItem>
            <svg
              aria-hidden='true'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 32 32'
            >
              <path
                clipRule='evenodd'
                d='M15.999.002c8.837 0 16 7.164 16 16s-7.163 16-16 16-16-7.164-16-16 7.163-16 16-16z'
                fill={options?.social?.linkedin?.bg}
                fillRule='evenodd'
              />
              <path
                clipRule='evenodd'
                d='M9.015 21.986h2.996v-9.986h-2.996v9.986zm11.672-10.332c-1.454 0-2.755.531-3.678 1.703v-1.39h-3.007v10.019h3.007v-5.418c0-1.145 1.049-2.262 2.363-2.262s1.638 1.117 1.638 2.234v5.445h2.996v-5.668c0-3.937-1.864-4.663-3.319-4.663zm-10.188-.652c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z'
                fill={options?.social?.linkedin?.color}
                fillRule='evenodd'
              />
            </svg>
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
            <svg
              aria-hidden='true'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 32 32'
            >
              <g>
                <circle
                  r='15.687307'
                  fill={options?.social?.whatsapp?.bg}
                  cy='15.937338'
                  cx='15.937338'
                />
                <path
                  fill={options?.social?.whatsapp?.color}
                  d='m23.131252,8.715195c-1.757977,-1.759403 -4.095813,-2.728878 -6.586673,-2.729734c-5.132174,0 -9.309133,4.175391 -9.31113,9.307565c-0.000713,1.640465 0.428121,3.241853 1.242863,4.653426l-1.321014,4.823419l4.93594,-1.294345c1.359947,0.741582 2.891171,1.132338 4.449491,1.132909l0.003851,0c5.131603,0 9.308991,-4.175819 9.310987,-9.308135c0.001284,-2.487151 -0.966338,-4.825701 -2.724315,-6.585104l0,0zm-6.586387,14.321228l-0.003137,0c-1.388755,-0.00057 -2.750698,-0.373501 -3.93894,-1.078431l-0.282657,-0.167712l-2.929106,0.768108l0.781798,-2.854947l-0.184112,-0.292782c-0.774668,-1.231739 -1.183821,-2.655576 -1.183251,-4.117348c0.001711,-4.265664 3.473455,-7.736124 7.742257,-7.736124c2.067017,0.000856 4.010246,0.806613 5.471305,2.268955s2.26539,3.406142 2.264677,5.473302c-0.001569,4.266235 -3.473312,7.73698 -7.738834,7.73698l0,0zm4.244985,-5.794321c-0.232743,-0.116371 -1.37649,-0.679118 -1.589695,-0.756699c-0.213205,-0.077581 -0.368366,-0.116371 -0.523528,0.116371c-0.155019,0.232885 -0.600966,0.756699 -0.736733,0.91186c-0.135767,0.155162 -0.27139,0.1747 -0.50399,0.058186c-0.2326,-0.116371 -0.982311,-0.361949 -1.870925,-1.154301c-0.691525,-0.616654 -1.158579,-1.378344 -1.294203,-1.611229c-0.135767,-0.232885 -0.014404,-0.358669 0.101967,-0.474612c0.104677,-0.104249 0.2326,-0.271676 0.348971,-0.407442c0.116371,-0.135767 0.155162,-0.232885 0.2326,-0.388047c0.077581,-0.155162 0.03879,-0.291071 -0.019395,-0.407442c-0.058186,-0.116371 -0.523386,-1.26126 -0.717338,-1.726887c-0.188818,-0.453506 -0.380631,-0.392183 -0.523528,-0.399313c-0.135624,-0.006703 -0.290786,-0.008129 -0.445947,-0.008129c-0.155019,0 -0.407157,0.058186 -0.620362,0.291071c-0.213205,0.232885 -0.814314,0.795489 -0.814314,1.940235s0.833566,2.250701 0.949938,2.405863c0.116371,0.155162 1.640465,2.504407 3.974308,3.511818c0.555045,0.239588 0.988443,0.38277 1.326291,0.489872c0.557327,0.176981 1.064455,0.152024 1.46548,0.092127c0.446946,-0.066742 1.37649,-0.562604 1.570299,-1.105955c0.19381,-0.543351 0.19381,-1.008979 0.135767,-1.105955c-0.0579,-0.096691 -0.213062,-0.155019 -0.445662,-0.27139l0,0z'
                />
                <path
                  opacity='0.1'
                  fill='#231F20'
                  d='m4.844701,26.851719c2.838832,2.838832 6.760659,4.59467 11.092638,4.59467c8.663815,0 15.687307,-7.023493 15.687307,-15.687307c0,-4.331979 -1.755838,-8.253805 -4.59467,-11.092638l-22.185275,22.185275z'
                />
              </g>
            </svg>
          </S.ShareLink>
        </S.ShareItem>
      </S.ShareList>
    </S.ShareContainer>
  );
}
