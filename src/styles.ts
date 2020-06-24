import styled from 'styled-components';

const breakpointMax = '768px';
const breakpointMin = '769px';

export const ShareContainer = styled.div`
  @media (max-width: ${breakpointMax}) {
    bottom: -120px;
    height: 70px;
    position: fixed;
    right: 15px;
    transition: bottom 0.25s ease-in;
    width: 70px;
    z-index: 3;

    &.-visible {
      bottom: 15px;
      transition: bottom 0.25s ease-in-out;
    }
  }
`;

export const ButtonShare = styled.button`
  @media (max-width: ${breakpointMax}) {
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    border: 0;
    border: none;
    box-shadow: 0 0 10px 1px #bbb;
    cursor: pointer;
    display: flex;
    height: inherit;
    justify-content: center;
    outline: 0;
    position: absolute;
    width: inherit;
    z-index: 4;

    .share {
      height: 32px;
      margin-bottom: 16px;
      width: 32px;
    }
  }

  @media (min-width: ${breakpointMin}) {
    display: none;
  }
`;

export const ShareTitle = styled.h2`
  @media (max-width: ${breakpointMax}) {
    display: none;
  }

  @media (min-width: ${breakpointMin}) {
    margin-bottom: 10px;
  }
`;

export const LabelShare = styled.div`
  bottom: -37px;
  font-size: 0.85rem;
  font-weight: bold;
  height: 80px;
  letter-spacing: 3px;
  position: absolute;
  text-transform: uppercase;
  width: 80px;

  svg {
    height: inherit;
    width: inherit;
  }
`;

export const ShareList = styled.ul`
  @media (max-width: ${breakpointMax}) {
    border-radius: 50%;
    height: 70px;
    left: 50%;
    margin: -35px;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: rotateZ(180deg);
    transition: opacity 0.25s, transform 0.25s ease-in;
    width: 70px;

    &.-opened {
      opacity: 1;
      transform: rotateZ(0deg);
      transition: opacity 0.1s, transform 0.25s ease-in-out;

      > .-facebook {
        left: 35px;
        top: -50px;
      }

      > .-twitter {
        left: -10px;
        top: -42px;
      }

      > .-linkedin {
        left: -44px;
        top: -9px;
      }

      > .-whatsapp {
        left: -49px;
        top: 35px;
      }
    }
  }
`;

export const ShareItem = styled.li`
  display: inline-block;

  @media (max-width: ${breakpointMax}) {
    height: 38px;
    left: 20px;
    position: absolute;
    top: 30px;
    transition: all 0.25s;
    width: 38px;
  }

  @media (min-width: ${breakpointMin}) {
    height: 52px;
    margin-left: 15px;
    width: 52px;
  }
`;

export const ShareLink = styled.a`
  height: inherit;
  width: inherit;

  > svg {
    height: inherit;
    width: inherit;
  }
`;

export const LabelItem = styled.span``;
